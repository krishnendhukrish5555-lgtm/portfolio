# Krishnendhu KU: Cybersecurity Portfolio

A static portfolio for a cybersecurity learner pursuing SOC analyst opportunities. Built with HTML, CSS and vanilla JavaScript. No framework, build step, backend or paid hosting.

## Features and design choices
Dark navy and emerald design tokens (CSS variables), responsive layout, accessible mobile menu, skip link, visible focus, reduced-motion support, skills grouped without fake percentages, a project list that grows with your work, honest empty states for certifications and experience, email and social links (no contact form, because GitHub Pages has no backend), a "View Resume" button that only appears once you add a PDF.

## Structure
```
index.html          page structure
404.html            not-found page
.nojekyll           tells GitHub Pages to serve files as-is
assets/css/style.css
assets/js/script.js   <- ALL content lives in the CONFIG object at the top
assets/images/favicon.svg
assets/documents/README.txt
```

## Editing (all in `assets/js/script.js`)
- **Name and headline:** these appear in `index.html` (hero, `<title>`, Open Graph tags, footer). Search for "Krishnendhu" and "Aspiring SOC Analyst" and edit.
- **Biography / objective:** edit `about` and `objective`.
- **Skills:** edit `skills`. Add `{ name: "Wireshark" }` to a group only when you have actually used it. An optional `level: "Learning"` shows next to the name; use it only if accurate.
- **Add a project:** copy the object in `projects`, fill in the fields. `status` is "Completed", "In progress" or "Planned". Leave `repo`, `docs`, `demo` as `""` until the links exist; empty links are not shown. To remove the CloudShield card or any project, delete its object. With no projects the empty-state message appears. Category filters show automatically once you have 4+ projects and fill `categories`.
- **Add a certification:** add `{ title, issuer, date, url }` to `certifications`. Only earned, verifiable ones.
- **Add training or experience:** add `{ org, role, type, dates, details, tech }` to `experience`.
- **Education dates:** replace the bracketed placeholders in `education`.
- **Resume:** save the PDF as `assets/documents/resume.pdf`, then set `resume: "assets/documents/resume.pdf"`.
- **GitHub / LinkedIn:** edit `links`. Open the LinkedIn address in a browser to confirm it works. Only `http(s)` links render.
- **Location / email:** edit `location` and `email`.

## Preview locally
Double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Publish with GitHub Pages
**Option A: personal site.** Create a repository named exactly `USERNAME.github.io`; the URL will be `https://USERNAME.github.io/`.
**Option B: project site.** Create an ordinary repository such as `cybersecurity-portfolio`; the URL will be `https://USERNAME.github.io/cybersecurity-portfolio/`.
Replace USERNAME with your GitHub username (yours is `krishnendhukrish5555-lgtm`).

1. Create the repository on GitHub (public).
2. Upload all files to the repository root (Add file > Upload files; keep the `assets` folders), or use `git add .`, `git commit -m "Add portfolio"`, `git push`.
3. Confirm `index.html` is in the root.
4. Open Settings > Pages.
5. Under Build and deployment choose "Deploy from a branch".
6. Pick branch `main` and folder `/ (root)`, then Save.
7. Wait for the deployment to finish (Actions tab shows progress).
8. Open the URL shown in Pages settings.
9. Test on desktop and phone: navigation, GitHub, LinkedIn, email.

## Troubleshooting
- **Unstyled or empty sections:** the `assets` folder did not upload with its subfolders, or a file name differs in case.
- **404 on the site:** wrong branch or folder in Pages settings, or `index.html` is inside a subfolder.
- **Changes not showing:** wait a minute and hard refresh (Ctrl+Shift+R).
- **A link is missing:** invalid or empty URLs are intentionally hidden; check the value in CONFIG.

## Update later
Edit `script.js` (on GitHub with the pencil icon, or locally), commit and push to `main`. Pages redeploys automatically.
