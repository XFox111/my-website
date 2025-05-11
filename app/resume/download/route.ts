import resumeList, { Resume } from "@/_data/resumeList";
import { NextRequest } from "next/server";
import { PDFDocument, PDFPage } from "pdf-lib";

export async function GET(req: NextRequest): Promise<Response>
{
	const type: string | null = req.nextUrl.searchParams.get("type");
	const isAts: boolean = req.nextUrl.searchParams.get("ats") === "true";
	const resume: Resume | undefined = findResume(type);
	const url: string | undefined = isAts ? process.env.ATS_RESUME_URL : process.env.RESUME_URL;

	if (!resume)
		return error(400, "'type' parameter is invalid");

	const fileName: string = (isAts ? "(ATS) " + resume.fileName : resume.fileName).replaceAll("\"", "'");

	if (!url)
		return error(500, "Cannot find file location.");

	try
	{
		// Fetch the PDF file from the remote URL using the fetch API
		const response: Response = await fetch(url);

		if (!response.ok)
			return error(500, "Failed to fetch PDF file");

		// Load the PDF document
		const pdfData: ArrayBuffer = await response.arrayBuffer();
		const srcDoc: PDFDocument = await PDFDocument.load(pdfData);

		// Create a new PDF document with the specified page
		const newDoc: PDFDocument = await PDFDocument.create();
		const [page, refs]: PDFPage[] = await newDoc.copyPages(srcDoc, [resume.pageIndex, srcDoc.getPageCount() - 1]);
		newDoc.addPage(page);

		if (process.env.RESUME_HAS_REFS === "true" && isAts)
			newDoc.addPage(refs);

		// Serialize the new PDF document
		const pdfBytes: Uint8Array = await newDoc.save();

		// Send the PDF page as a response
		return new Response(
			Buffer.from(pdfBytes),
			{
				// Set response headers for PDF file
				headers: {
					"Content-Type": "application/pdf",
					"Content-Disposition": `inline; filename="${fileName}.pdf"`
				}
			}
		);
	}
	catch (ex)
	{
		console.error("Error processing PDF:", ex);
		return error(500, "Failed to process PDF file");
	}
}

const findResume = (type: string | null): Resume | undefined =>
	resumeList.find(i => i.key === type) ?? resumeList.find(i => i.default);

const error = (status: number, message: string): Response =>
	new Response(message, { status });
