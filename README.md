# The Highbrooks Cafe — website package

A responsive static website starter for The Highbrooks Cafe in Jabalpur. Built with HTML, CSS and JavaScript; no build step or dependency installation is needed. GSAP and ScrollTrigger load from a CDN, so an internet connection is needed for the animations. The site remains usable if the animation scripts fail to load.

## Run and deploy

Open `index.html` in a browser or serve this folder with any static web server. The included `vercel.json` supports static deployment to Vercel.

## Included

- Responsive brand site, mobile navigation and sticky mobile action bar
- Searchable and filterable sample menu
- Two outlet cards connected to the Google Maps listings supplied in the request
- Table enquiry form with client-side confirmation state
- Search metadata, local business structured data, and Vercel routing config
- Green brand palette, GSAP scroll reveals, scroll progress, button magnetism and menu spotlight
- Gallery hover cursor and accessible photo lightbox
- Sample cart and order flow with dine-in/takeaway choices and a clearly labeled simulated payment

## Before publishing

1. Replace the illustrative photography with images supplied by Highbrooks. The Google Maps links are wired in for directions; listing photos could not be retrieved through this package workflow. Use owner-provided/licensed photo files rather than hotlinking Google Maps user photos.
2. Replace `Outlet 01` / `Outlet 02` with confirmed outlet names, addresses, hours and phone numbers in `app.js`.
3. Verify the Instagram URL and email address in `index.html`.
4. Replace illustrative menu entries in `app.js` with owner-approved names, descriptions, categories, prices and photos.
5. The booking form currently displays a local confirmation only. Connect it to a booking or enquiry service to receive submissions.
6. The order flow is a front-end demo. It uses example prices, does not charge or collect payment details, and does not send orders to the cafe. Replace the sample catalog/prices in `app.js`, then connect an order API and a payment provider before accepting real orders.
7. Add real reviews, offers and contact details once confirmed. None are fabricated in this package.

## Files

- `index.html` — page content, SEO metadata and structured data
- `styles.css` — visual system and responsive layout
- `enhancements.css` — requested green palette and interaction styling
- `app.js` — menu/outlet data and interactions
- `vercel.json` — static deployment config
