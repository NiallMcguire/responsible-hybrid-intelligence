# Responsible Hybrid Intelligence

A React/Vite prototype for the Leverhulme Doctoral Programme at Strathclyde and Glasgow. Structure is inspired by NIA Leverhulme; visual direction and project filtering are inspired by AQT. Reference-site copy and custom artwork have not been reproduced.

## Run locally

Requires Node.js 22.12+ (or a supported newer release).

```sh
npm install
npm run dev
```

Vite prints the preview URL, normally http://localhost:5173.

```sh
npm run lint
npm run build
npm run preview
```

## Editing

Pages: Home, About, Students (cohorts 1-3), PhD Programme, PhD Projects, How to Apply, and Contact. Projects support keyword search, combined theme/university filters, expandable details, and empty results. Cohort tabs support arrow keys, Home, and End.

Content and project data are in `src/App.jsx`. Global styles are in `src/index.css`; layouts are in `src/App.css`. Images and logos are hosted locally in `public/images`.

## Before publication

- Replace the 11 placeholder projects and Lorem ipsum descriptions with approved briefs, supervisors, themes, and university allocations. The draft's alternating 6/5 host allocations are placeholders, not a promised recruitment split. The supplied 50/50 figure describes the overall partnership.
- Confirm application dates, eligibility, duration, stipend, home/international fee coverage, visa/language requirements, and official application links.
- Confirm the Master’s Plus PhD pathway and cohort dates. Student profiles have not been invented.
- Add the approved programme email, accessibility/privacy statements, and institutional branding approvals. The privacy link currently points to Strathclyde's notice, not a bespoke website policy.
- Confirm usage rights for the supplied RHI artwork. Review institutional logo and Trust acknowledgement requirements before launch.
- Funding headlines use the £5 million Leverhulme Trust award. The pasted programme announcement separately identifies £4.1 million of university investment; do not describe the combined figure as studentship funding.

There is no backend, application submission, analytics, or email collection. Applications are not claimed to be open. Google Fonts makes third-party requests; self-host fonts if institutional policy requires it.

## Deployment

### GitHub Pages

1. Sign in to https://github.com/new and create a public repository, for example `responsible-hybrid-intelligence`. Leave README, licence, and gitignore options unchecked because this folder already has its own files. Free GitHub Pages hosting requires a public repository; supported paid plans can publish from private repositories.
2. Upload this project to the repository's `main` branch. Include `src`, `public`, `.github/workflows/deploy-pages.yml`, and the root configuration files. Do not upload `node_modules` or `dist`; both are gitignored. Review all content and image usage rights before publishing.
3. In the repository, select **Settings > Pages > Build and deployment > Source > GitHub Actions**.
4. Open **Actions > Deploy website to GitHub Pages** and run the workflow on `main`, or push another change to `main`.
5. Once deployment succeeds, Pages settings will show `https://USERNAME.github.io/REPOSITORY/`. Future pushes to `main` automatically rebuild and deploy the site.

The workflow installs locked dependencies, runs lint, builds with `npm run build:pages`, and uploads `dist`. Vite derives the repository base path from GitHub's `GITHUB_REPOSITORY` environment variable. A repository named `USERNAME.github.io` uses the domain root instead. The Pages build uses hash routing, so direct links such as `/REPOSITORY/#/projects` survive refresh without server rewrites. The normal local development server retains clean URLs.

To test a Pages-style build locally in PowerShell:

```powershell
$env:GITHUB_REPOSITORY = 'USERNAME/REPOSITORY'
npm run build:pages
Remove-Item Env:GITHUB_REPOSITORY
npm run preview -- --base /REPOSITORY/
```

### Other hosting

For hosting outside GitHub Pages, run `npm run build` and deploy `dist`. The normal build uses clean URLs and assumes domain-root hosting. Configure an `index.html` history fallback for unmatched paths, otherwise direct links such as `/projects` will return 404. Custom-domain and subdirectory hosting may require separate base-path configuration.

## Assets

- RHI artwork: user-supplied WebP assets. The homepage uses `logo-banner-3.webp`, capped at its 1024px native width rather than enlarged to fill the hero; a higher-resolution source is needed for a full-bleed photograph-quality background. Inner-page headings use `logo-banner-4.webp`. Header and footer marks use `Logo-Circle-2.webp` and `logo-circle.webp`. Confirm attribution and usage rights with the programme before publication.
- Unused research photo retained in the image folder: National Cancer Institute, Unsplash, image ID `1579154204601-01588f351e67`, under the Unsplash licence. It is no longer displayed on the website.
- Campus photo: LornaMCampbell, [Cloisters, University Of Glasgow](https://commons.wikimedia.org/wiki/File:Cloisters,_University_Of_Glasgow.jpg), [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). A 960px version is displayed with CSS cropping. Attribution is linked in the footer; distributed adaptations remain subject to the licence.
- Trust logo: official asset at `https://www.leverhulme.ac.uk/sites/default/files/Leverhulme_Trust_RGB_blue_0_0.png`.
- University logos: institutional marks served by AQT at `https://www.aqt.ac.uk/wp-content/uploads/2024/10/logo-uos.png` and `https://www.aqt.ac.uk/wp-content/uploads/2024/10/logo-uog.svg`. Marks remain the property of their institutions.
