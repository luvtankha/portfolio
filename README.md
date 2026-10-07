# Luv Tankha portfolio

Live website: [luvtankha.github.io/portfolio](https://luvtankha.github.io/portfolio/).

Built with HTML, CSS and vanilla JavaScript. Open `dist/index.html` directly or serve `dist` with a static server. No installation or build step is required.

The portfolio includes a profile, real repository activity, a Smart India Hackathon timeline, horizontal project shelves, project detail dialogs, contact links, mobile navigation and a motion toggle. Experience and Certifications have empty states until real records are supplied.

Click any project card to open its details; source and live links retain their own destinations. Hackathons start collapsed and expand individually when clicked. View details buttons remain available for keyboard access, and shelf dragging does not open projects.

`dist/content.js` contains all portfolio information, including the profile, contact links, GitHub statistics and section entries. Add entries to its arrays; shelves and timelines update automatically, and card numbers follow their order. See [EDITING.md](EDITING.md) for copy-paste templates and the update workflow. Run `node scripts/check-content.mjs` before publishing to catch content mistakes.

`dist/script.js` contains interaction behavior, and `dist/styles.css` controls layout and animation. `dist/portrait.js` renders the supplied photo with the reference's ordered dither effect; the original JPEG is preserved in `dist/assets/portrait.jpg`. Manrope is served locally with its font license in `dist/assets`.

GitHub Pages hosts the static files in `dist`. The workflow in `.github/workflows/pages.yml` validates content and JavaScript, then publishes on every push to `main`. It needs no external hosting credentials. Edit `dist/content.js` on GitHub or locally, commit to `main`, and watch the workflow in the repository's Actions tab.

See `SOURCE_NOTES.md` for the content cross-check and deployment-link verification.
