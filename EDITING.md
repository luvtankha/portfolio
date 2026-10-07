# Updating the portfolio

Edit **`dist/content.js`** for portfolio information. Projects, hackathons, experience, certifications, profile, contact links and GitHub activity all come from this file. The layout and interactions remain in `dist/index.html`, `dist/styles.css` and `dist/script.js`.

You can also provide new information in this chat and ask for it to be added to the existing portfolio. The same site can be updated and republished.

## Editing rules

- Entries appear in array order. Put recent timeline entries first if you want newest first.
- Use a unique lowercase `id`, such as `my-project` or `hackathon-2027`. Do not reuse `projects` or `certifications` as an ID.
- Keep commas between entries. Empty sections use `[]`.
- Card numbers are automatic. Do not add a `number` field.
- `updatedOn` and repository `updated` dates use `YYYY-MM-DD`. Other date labels, such as `period`, `issued` and `dates`, are readable text.
- Use verified HTTPS links. `null` or an empty string omits an optional source/live/credential link.
- GitHub statistics are saved values; update them and `updatedOn` when refreshed.
- Replace or add a photo under `dist/assets/`, then set `profile.portrait` to its relative path, such as `assets/new-photo.jpg`. Local images preserve the dither effect.
- Arrays can contain any number of entries. Shelves and timelines resize automatically.

## Add a project

Copy this object into `projects`. Fill in real information before publishing.

```javascript
{
  "id": "my-project",
  "title": "Project name",
  "category": "Web / Automation",
  "description": "A short description for the card.",
  "technologies": ["HTML", "CSS", "JavaScript"],
  "sourceUrl": null,
  "liveUrl": null,
  "liveLabel": "Live site ↗",
  "role": "Your role",
  "period": "Month Year",
  "cover": "cover-grid",
  "hackathonId": null,
  "status": "Current project status",
  "overview": "What it does and why you built it.",
  "development": "Your contribution and how it was built."
}
```

Supported `cover` values: `cover-grid`, `cover-orbits`, `cover-bars`, `cover-disc`, `cover-signal`, `cover-stack`. Omitting `cover` uses `cover-grid`. Omitting `technologies` uses an empty list.

All projects appear in Projects. To also show one inside a hackathon, set its `hackathonId` to that hackathon's exact `id`. One project entry is reused in both places; do not duplicate it. A project can currently belong to one hackathon.

## Add a hackathon

Copy into `hackathons`, then link the relevant project entries with `hackathonId`.

```javascript
{
  "id": "hackathon-2027",
  "year": "2027",
  "dateLabel": "Month / event abbreviation",
  "title": "Hackathon name",
  "subtitle": "Result or stage reached",
  "description": "Your participation, team and contribution."
}
```

Each hackathon starts collapsed. Clicking one expands only that event. Its linked project cards open details when clicked. An event without linked projects displays an empty state.

## Add experience

Copy into `experience`.

```javascript
{
  "id": "role-2027",
  "year": "2027",
  "dates": "January 2027 – Present",
  "title": "Role title",
  "organization": "Organization name",
  "description": "A short description of the role.",
  "contribution": "What you worked on.",
  "impact": "Results you can substantiate.",
  "technologies": ["Your tools"]
}
```

## Add a certification

Copy into `certifications`.

```javascript
{
  "id": "certificate-2027",
  "title": "Certificate title",
  "issuer": "Issuing organization",
  "issued": "Month Year",
  "credentialId": "Credential ID, or an empty string",
  "description": "What the certification covers.",
  "url": null
}
```

`url` is the credential verification link. Certifications use the existing scrolling shelf and detail dialog.

## Update repository activity

Edit `github` for totals and `repositories` for the displayed activity rows. A row has this shape:

```javascript
{
  "name": "Repository name",
  "url": "https://github.com/username/repository",
  "language": "JavaScript",
  "updated": "2027-01-15"
}
```

## Preview, check and publish

1. Save `dist/content.js` and any new local assets.
2. From the portfolio folder, run `node scripts/check-content.mjs`. It checks syntax, dates, links, IDs, hackathon references and the photo path. It does not verify the truth of claims or whether URLs are reachable.
3. Open `dist/index.html`, or serve `dist` with a static server, and check the added entries. No framework, dependencies or build step are required.
4. Commit and push to `main` in [luvtankha/portfolio](https://github.com/luvtankha/portfolio). GitHub Actions validates the content, then automatically republishes `dist` to [GitHub Pages](https://luvtankha.github.io/portfolio/). You can also edit `dist/content.js` using GitHub's file editor and commit to `main`.
5. Check the **Publish portfolio to GitHub Pages** workflow in the repository's Actions tab. Failed validation keeps the previous live version available; fix the reported content issue and commit again. Pages settings should keep **GitHub Actions** as the publishing source.

There is no editing form on the visitor page. Content changes are made in the source file or through a subsequent chat request, then committed. The editable source and history are retained in the public GitHub repository; the downloadable source ZIP can also be kept as a backup.
