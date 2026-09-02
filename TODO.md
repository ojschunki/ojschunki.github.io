# TODO

## 1. Résumé download

Two `résumé.pdf ↓` links were removed (timeline section + footer) because they
pointed at nothing. Blocked on the PDF itself: `Jorge Nunez_ (1).pdf` carries a
phone number and home address, which shouldn't go on a public page.

To finish: export a web copy with the phone number stripped, drop it in as
`resume.pdf`, and restore the two links. The markup and the `.linkrow--top`
style are still in place — search `TODO` in `index.html` for both spots.

## 2. Project images from repo READMEs

Nine of the ten cells still show striped placeholders when expanded (`demo.gif`,
`sales over time`, `feature importance`, …). Only Queens has a real image.

Pulling them from the repos works for **4 of 10** — these already have images
committed:

| Project | Images in repo | Best candidate |
|---|---|---|
| Queens | 3 | already used |
| Predicting-All-NBA | 9 (`charts/`) | `charts/rf_features.png` |
| Credit-Card-Default-Classification | 11 (`images/`) | `images/02_roc_curves.png` or `07_performance_comparison.png` |
| Animated-Play-By-Play | 1 | `demo.gif` — the strongest asset on the whole account |

No images committed: `F1-Race-Analytics`, `Cafe-Sales-EDA`,
`Charts-and-Diagrams-using-Gemini`, `Snake-RL`, `grad-countdown`. Those need a
screenshot taken by hand, or the cells keep their placeholders.

Two decisions when picking this up:

- **Copy the files in, don't hotlink.** `raw.githubusercontent.com` isn't a CDN
  and the images would break if a repo is renamed or made private. The Queens
  pair was copied into `images/`; do the same for the rest.
- **`demo.gif` may be large.** Check its size before committing it; if it's
  heavy, a still frame or a smaller re-encode is kinder to mobile visitors.

How the wiring works: add `img: { src, alt }` to a project in `main.js` and the
cell renders it instead of the placeholder. See the `Queens` entry.

## 3. Smaller things

- The page calls the series two names: pills say "2026 Monthly Series", but the
  kernel panel says `the 2026 tape` and the about copy says "tagged into the
  tape". Pick one.
- `<title>` is `jn.py`, so search engines show that rather than a name.
- The about section still has one `drop the illustration` placeholder (fig 2.).

## Deploying

`styles.css` and `main.js` are stamped with a content hash (`?v=698c671f`) so a
browser can't pair a cached stylesheet with a fresh script. **Run this whenever
either file changed, before committing:**

```
python bump-assets.py
```

It rewrites the two `href`/`src` stamps in `index.html` from the files' own
bytes, so running it when nothing changed is a no-op. Then commit and push;
GitHub Pages rebuilds in about a minute.
