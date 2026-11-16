# Contributing to First Aid Pakistan

Thank you for helping keep this guide accurate and useful. It is a volunteer project; every contribution should make the guide safer or easier to use in a real emergency.

## What is welcome

- **Corrections to first-aid steps** — the most valuable contribution. A correction must cite a recognised source: British Red Cross, St John Ambulance, WHO, NHS, Resuscitation Council UK, or Pakistan's Rescue 1122 / National Institute of Health guidance. Link the source in your pull request.
- **Translations** — fixes to the Urdu or Roman Urdu wording, or a new language (for example Sindhi, Pashto or Punjabi). Keep the wording plain and short; a scared bystander must understand it at a glance.
- **New topics** — only with a cited source, and only if the topic fits the same short step-by-step format (4–8 steps, plain language, ends with a call to 1122 where relevant).
- **Accessibility and usability fixes** — bigger tap targets, clearer wording, better contrast, screen-reader improvements.
- **Bug fixes** — broken links, offline-caching issues, layout problems on small phones.

## What is not welcome

- Medical advice from un-cited sources, social media, or personal anecdote.
- Home remedies (for example toothpaste or butter on burns, tourniquets for snake bite, making a poisoning victim vomit). These are actively harmful and will be rejected.
- Analytics, tracking, ads, or any third-party service that phones home.
- Dependencies or a build step — the app must stay vanilla HTML/CSS/JS that GitHub Pages serves directly.

## How to contribute

1. Fork the repo and create a branch for your change.
2. Make the change. If you edit content, edit all three languages for that topic (English, Urdu, Roman Urdu) — or say clearly in the pull request which translations still need help.
3. Test locally: `python3 -m http.server 8000`, open http://localhost:8000, check all three languages render, search works, and the topic you changed opens correctly. Run `node --check app.js sw.js` to validate the JavaScript.
4. Open a pull request describing what changed and, for content changes, the source you used.

## Code of conduct

Be kind and factual. This guide is used in emergencies; accuracy and clarity come before everything else.
