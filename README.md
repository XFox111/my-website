# xfox111.net website

[![Website status](https://img.shields.io/website?url=http%3A//xfox111.net/)](https://xfox111.net)
[![GitHub last commit](https://img.shields.io/github/last-commit/xfox111/my-website?label=Last+update)](https://github.com/XFox111/my-website/commits/main)
[![Docker Image Size](https://img.shields.io/docker/image-size/xfox111/my-website?logo=docker&logoColor=white)](https://hub.docker.com/r/xfox111/my-website/)

<picture>
	<source media="(prefers-color-scheme: dark)" srcset="https://cdn.xfox111.net/personal/website-dark.webp">
	<source media="(prefers-color-scheme: light)" srcset="https://cdn.xfox111.net/personal/website-light.webp">
	<img alt="xfox111.net website">
</picture>

This repository contains the source code for my personal website, built using Next.js. The website serves as a portfolio, showcasing my projects skills. Feel free to use this code as a base or a template for your own personal website.

## Features

- **Responsive Design:** Optimized for desktop and mobile devices.
- **Dark Mode:** Automatic light and dark themes based on your browser preferences.
- **Accessibility:** Full keyboard navigation and screen reader support.
- **Customizable:** You can use this website as a template for your own personal website.
- **Docker and Dev Containers:** Containerized development and deployment.

## Technologies

- [Next.js](https://nextjs.org/) framework for server-side rendering and static site generation.
- [React](https://reactjs.org/) library for building user interfaces.
- [SASS](https://sass-lang.com/) preprocessor.
- [TypeScript](https://www.typescriptlang.org/).

## Development

### Prerequisites

For development you can use [Dev Containers](https://devcontainers.io/) or [GitHub Codespaces](https://github.com/features/codespaces). Otherwise you will need to install following tools:
- [Node.js](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)


### Building and debugging

Here're some commonly used commands:
```bash
npm install			# Install dependencies
npm run dev			# Start the development server at http://localhost:3000
npm run lint		# Lint the project with ESLint
npm run build		# Build the project for production
```

To build a Docker image, run:

```bash
docker build -t <tag_name> .
```

> [!TIP]
> If you use VS Code, you can also use pre-defined tasks for building and debugging.

## Customization
You can customize the website by modifying its components and styles.

Here's a general checklist of things you need to change:

### Environment
- [ ] `package.json` (URLs and author information)
- [ ] `.env.*` (required for website to function)

### Assets
- [ ] `/app/favicon.ico`
- [ ] `/app/icon.svg`
- [ ] `/app/apple-icon.png`
- [ ] `/app/opengraph-image.png`
- [ ] `/app/opengraph-image.alt.txt`
- [ ] `/app/_assets`

### Content
- [ ] `app/_data` (text information and some page elements)
- [ ] (optional) `app/attribution/page.tsx` (license and attribution information)
- [ ] (optional) `app/theme.[light|dark].scss` (color schemes)
- [ ] (optional) Files marked with `[SPECIAL]` tag (these contain custom elements, which may be not suitable for your needs)

> [!IMPORTANT]
> Some of the files are copyrighted and should not be used without permission. See [COPYING](/COPYING).

## Contributing
Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

> [!NOTE]
> Please make sure to follow the [contributing guidelines](/CONTRIBUTING.md)

## License

This repository is partially licensed under [MIT license](/LICENSE).

> [!IMPORTANT]
> Some content of this repository is exempt from MIT license coverage and is subject to general copyright law. See [COPYING](/COPYING) for more information.

---

[![Bluesky](https://img.shields.io/badge/%40xfox111.net-BSky?logo=bluesky&logoColor=%230285FF&label=Bluesky&labelColor=white&color=%230285FF)](https://bsky.app/profile/xfox111.net)
[![GitHub](https://img.shields.io/badge/%40xfox111-GitHub?logo=github&logoColor=%23181717&label=GitHub&labelColor=white&color=%23181717)](https://github.com/xfox111)
[![Buy Me a Coffee](https://img.shields.io/badge/%40xfox111-BMC?logo=buymeacoffee&logoColor=black&label=Buy%20me%20a%20coffee&labelColor=white&color=%23FFDD00)](https://buymeacoffee.com/xfox111)

> ©2025 Eugene Fox. Some rights reserved
