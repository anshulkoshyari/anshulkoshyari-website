# Anshul Koshyari - Personal Website

A minimal personal website built with Next.js, Tailwind CSS, and deployed via GitHub Pages.

## Features

- Minimal, clean design inspired by [Aman Sanger's website](https://www.amansanger.com/)
- Dark mode toggle with persistent preference
- Books page with reading list
- Responsive design
- GitHub Pages deployment ready

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Deployment

The site is configured to deploy to GitHub Pages automatically via GitHub Actions when pushing to the `main` branch.

Make sure to:
1. Enable GitHub Pages in your repository settings
2. Set the source to "GitHub Actions"
3. Update the `basePath` and `assetPrefix` in `next.config.js` if your repository name differs from `anshulkoshyari-website`

## Adding Books

Edit `src/app/books/page.tsx` and add new book objects to the `books` array. Each book should have:
- `title`: string
- `author`: string
- `review`: optional string
- `rating`: number (0-5)
- `dateRead`: string in format "MM-YYYY"

