# First Aid Pakistan — فرسٹ ایڈ پاکستان

A free, offline-first first-aid guide for Pakistan, in **English, Urdu (اردو) and Roman Urdu**. No install, no account, no ads, no tracking. Open it once and it keeps working without internet.

**Live demo (once GitHub Pages is enabled):** https://imuntazir.github.io/first-aid-pakistan/

> **In any emergency, call Rescue 1122 first.** This guide is a quick reference only — it is not a substitute for professional first-aid training or medical care.

## Who it helps

Anyone in Pakistan who may be the first person at the scene of an accident or medical emergency — a family member, a bystander on the road, a teacher, a shopkeeper — in the minutes before Rescue 1122 arrives. Bystander first aid in those minutes directly saves lives.

## Why it was built

The prayer-times / Qibla space is already well served by excellent free open-source PWAs (Salatuk, Simple Prayer, Taqwa, Falah.io — all offline, no ads), so building another would be a clone. Blood-donation checkers already exist, and child-vaccination (EPI) is covered by Palna and official apps. First aid was the gap: the existing Pakistan Urdu option is a closed native app (install barrier, Play Store only, not open source), and web alternatives are English-only single pages or paid training courses. This project fills that gap: an open-source, install-free, offline PWA in three languages, with Pakistan's emergency numbers built in.

## Features

- **17 emergency topics**, each a short numbered step-by-step guide (4–6 steps, plain language): CPR (adult, child & infant), choking (adult, baby & child), severe bleeding, burns, heatstroke, fracture, fainting, seizure, nosebleed, poisoning, snake bite, dog bite, electric shock, drowning, and the recovery position — plus a "Before you start" scene-safety checklist.
- **Three languages** — English / اردو (RTL, Nastaliq) / Roman Urdu — switchable in one tap, remembered on the device.
- **Emergency strip, always visible** — one-tap calling for Rescue **1122**, Edhi Ambulance **115**, Police **15**, Fire Brigade **16**.
- **Search** — find a topic fast in an emergency.
- **Offline-first** — a service worker caches the whole app on first visit; an offline banner shows when there is no connection. Installable as a PWA from the browser menu.
- **Every topic ends with a call to 1122** where relevant, and every topic detail has a big red "Call 1122 now" button.

## Emergency numbers (verified November 2026)

| Number | Service |
| ------ | ------- |
| **1122** | Rescue 1122 — ambulance, fire and rescue (Punjab, KP, Sindh) |
| **115** | Edhi Foundation ambulance |
| **15** | Police |
| **16** | Fire Brigade |

Sources: Punjab Police / Lahore Police emergency directory, Rescue 1122 (Punjab Emergency Service), Edhi Foundation listings, as summarised in [DailyLife.pk — Emergency Numbers in Pakistan](https://dailylife.pk/life-in-pakistan/emergency-numbers/).

## How to run locally

No build step, no dependencies. Serve the folder with any static server:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Or open `index.html` directly in a browser (the service worker needs `http://`/`https://`, so use the server for offline testing).

## Tech

Vanilla HTML / CSS / JavaScript, zero dependencies. Content lives in `app.js` as data (one object per topic, three languages each), rendered by a small UI layer. The service worker (`sw.js`) precaches all app files and runtime-caches the Google Font (Noto Nastaliq Urdu) so Urdu keeps rendering offline after the first visit.

## Sources

First-aid steps were written against recognised guidance, adapted for Pakistan (emergency number 1122 instead of 999/911):

- British Red Cross — first-aid guides: [Burns](https://www.redcross.org.uk/first-aid/learn-first-aid/burns), [Heatstroke](https://www.redcross.org.uk/first-aid/learn-first-aid/heatstroke), [Seizures](https://www.redcrossfirstaidtraining.co.uk/first-aiders-trained-to-respond/seizure/)
- St John Ambulance — [Choking](https://www.sja.org.uk/first-aid-advice/choking/)
- Resuscitation Council UK — adult CPR: compressions 5–6 cm deep, 100–120 per minute, 30 compressions to 2 breaths (via [Prepared Britain summary](https://www.preparedbritain.co.uk/guides/basic-first-aid-uk))
- WHO — [Snakebite envenoming](https://www.who.int/teams/control-of-neglected-tropical-diseases/snakebite-envenoming/treatment) and WHO SEARO Guidelines for the Management of Snakebites (2nd ed., 2016): keep the person still, no tourniquet, no cutting, no sucking out venom; antivenom in hospital is the only treatment.
- NHS / British Red Cross — burns: cool under cool running water for at least 20 minutes, never ice, butter or toothpaste.

## Content notes

- Guidance basis: the sources above. Where UK sources say "call 999", this guide says "call 1122".
- Key anchors: CPR compressions 5–6 cm deep at 100–120/minute; burns cooled under cool running water for at least 20 minutes, never ice; choking = 5 back blows then 5 abdominal thrusts (babies: back blows + chest thrusts, never abdominal thrusts).
- Content last reviewed: **16 November 2026**.
- This guide is maintained by volunteers and is not a medical service. If any step conflicts with advice from a trained first aider or a doctor on the scene, follow the person on the scene.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Corrections to medical content must cite a recognised source (Red Cross, St John Ambulance, WHO, NHS, Resuscitation Council UK, or Pakistan's Rescue 1122 / NIH guidance).

## Disclaimer

First Aid Pakistan is a free quick-reference guide. It does not replace professional first-aid training or medical care. In any emergency, call Rescue 1122 first. The authors accept no liability for actions taken using this guide.

## License

MIT — see [LICENSE](LICENSE).
