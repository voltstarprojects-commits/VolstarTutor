# VolstarTutor

VolstarTutor is a lightweight English conversation practice website. Learners can practise everyday topics, receive simple grammar tips, and use browser speech recognition and text-to-speech where supported.

## Features
- Display-name sign-in (no account service required).
- Quick access shortcuts for the requested Chathura and Vonal profiles.
- Conversation topics: everyday chat, work, travel, hobbies, and interviews.
- Built-in demo coach with a small set of grammar corrections; no API key required.
- Optional Gemini API integration for more flexible conversations and grammar feedback.
- Browser speech input and read-aloud controls.
- Responsive single-file site suitable for GitHub Pages.

## Run locally
Open `index.html` in a modern browser. Speech recognition generally works best in Chrome or Edge and may require microphone permission and HTTPS/localhost.

## Optional AI
Select a Gemini API key from Google AI Studio, enter it in the API-key field, and click **Use key**. The key is kept in page memory only and is cleared on refresh. Requests are sent to Google's Gemini API. Availability, quotas, and pricing depend on the key/account and current provider terms; do not assume unlimited free use.

## Important security note
The access codes `chathura1234` and `vonal2011` are implemented as front-end convenience shortcuts only. Anyone can inspect a static website's source and discover them. They do **not** provide secure authentication or private creator permissions. Do not use these codes to protect private data or admin actions. For production, replace them with server-side authentication and keep privileged secrets on a backend. Never embed a private provider API key in a public website.

## Publish with GitHub Pages
In the repository, open **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save. GitHub will show the published URL once deployment finishes.
