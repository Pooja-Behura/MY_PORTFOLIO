# Pooja Behura — Portfolio

A dark-themed, "control room" styled portfolio built with React, Vite and plain CSS.
Fonts: Sora (display), Inter (body), IBM Plex Mono (labels/data).

## Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This outputs a static site into the `dist/` folder, which you can deploy to
Vercel, Netlify, GitHub Pages, or any static host.

## Connect the contact form to your email (EmailJS)

The contact form is wired to send messages straight to your inbox using
[EmailJS](https://www.emailjs.com/) — no backend server required.

1. Create a free account at https://www.emailjs.com/
2. **Add an Email Service** (Email Services → Add New Service → e.g. Gmail).
   Copy the **Service ID**.
3. **Create a Template** (Email Templates → Create New Template). In the
   template body, use these variables so the data maps correctly:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{subject}}`
   - `{{message}}`

   Copy the **Template ID**.
4. Go to **Account → General** and copy your **Public Key**.
5. Open `src/services/emailService.js` and replace the three placeholder
   values:

   ```js
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'service_xxxxxxx',
     TEMPLATE_ID: 'template_xxxxxxx',
     PUBLIC_KEY: 'xxxxxxxxxxxxxxxx',
   }
   ```

6. Save, restart `npm run dev`, and submit the form — the message will land
   at **behurapooja29@gmail.com** (already set as the recipient in the code).

That's it — no `.env` file or server needed since EmailJS is designed to be
called safely from the browser.

## Project structure

```
src/
  components/     # Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer
  hooks/          # useReveal — scroll-triggered animation hook
  services/       # emailService.js — EmailJS wrapper
  index.css       # design tokens + global styles
  App.jsx
  main.jsx
```

## Customizing

- **Colors / fonts**: edit the CSS variables at the top of `src/index.css`.
- **Content**: each section's copy lives directly in its component file
  (`src/components/*.jsx`) — no CMS or data file needed.
- **Projects / certifications**: edit the arrays at the top of
  `Projects.jsx` and `Certifications.jsx`.
