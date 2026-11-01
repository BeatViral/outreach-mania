# Outreach Mania website

Static marketing website imported from the supplied public website ZIP. No package installation or compilation is required.

## Cloudflare Pages

Connect `BeatViral/outreach-mania` with these settings:

- Production branch: `main`
- Framework preset: None
- Build command: `exit 0`
- Build output directory: `.` (repository root)
- Root directory: leave blank

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Public configuration

Edit `config.js` to set the checkout URL and public support email. Checkout remains in its coming-soon state while the URL is empty. Installer URL settings are placeholders; the supplied page does not render download buttons.

All browser configuration is public. Do not add API keys, credentials, private documents, or installers to this repository.

## Files

`index.html`, `styles.css`, `script.js`, `config.js`, and `assets/` contain the supplied website. The supplied design and content are preserved.
