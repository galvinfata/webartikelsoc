# SOC Topology Site

## Overview
The SOC Topology Site is a static website designed to display Security Operations Center (SOC) topology and related articles. The site features a cyber military theme, providing a visually engaging experience for users interested in cybersecurity topics.

## Project Structure
```
soc-topology-site
├── src
│   ├── scripts
│   │   ├── article-loader.js       # Dynamically loads articles into the webpage
│   │   ├── navigation.js            # Manages the navigation menu
│   │   └── theme-toggle.js          # Implements theme toggling functionality
│   ├── styles
│   │   ├── base.css                 # Base styles for typography and layout
│   │   ├── layout.css               # Layout styles for responsive design
│   │   └── themes
│   │       └── cyber-military.css   # Styles specific to the cyber military theme
│   └── templates
│       ├── index.html               # Main HTML file for the homepage
│       ├── articles
│       │   ├── incident-response.html # HTML structure for the incident response article
│       │   └── soc-topology.html     # HTML structure for the SOC topology article
│       └── partials
│           ├── footer.html           # Footer structure with copyright and social links
│           └── header.html           # Header structure with site title and navigation
├── public
│   └── static.json                   # Static data for articles
└── README.md                         # Documentation for the project
```

## Features
- **Dynamic Article Loading**: Articles are loaded dynamically using JavaScript, allowing for easy updates and management.
- **Responsive Design**: The site is designed to be responsive, ensuring a good user experience on various devices.
- **Theme Toggle**: Users can switch between light and dark themes for better accessibility and personalization.
- **Cyber Military Theme**: The design reflects a cyber military aesthetic, enhancing the thematic relevance of the content.

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Open `src/templates/index.html` in a web browser to view the homepage.
4. Use a local server for best results, as some features may require it (e.g., dynamic loading of articles).

## Deploying to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages. To enable deployment:

1. Go to your repository **Settings** > **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push changes to the `main` branch, and the site will be automatically deployed.
4. Your site will be available at `https://<username>.github.io/<repository-name>/`.

You can also manually trigger a deployment from the **Actions** tab by selecting the "Deploy static content to Pages" workflow and clicking "Run workflow".

## How to Contribute
- Fork the repository and create a new branch for your feature or bug fix.
- Make your changes and ensure that they are well-documented.
- Submit a pull request for review.

## License
This project is licensed under the MIT License. See the LICENSE file for details.