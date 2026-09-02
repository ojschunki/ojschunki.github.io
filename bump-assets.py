#!/usr/bin/env python3
"""Stamp index.html's CSS/JS links with a content hash, to defeat caching.

GitHub Pages serves everything with Cache-Control: max-age=600 and the
filenames never change, so a browser will happily reuse an old styles.css
against a new main.js. That renders worse than either version alone.

Run this before committing whenever styles.css or main.js changed:

    python bump-assets.py

The hash is derived from the file's own bytes, so re-running it when nothing
changed is a no-op and it can never go stale.
"""
import hashlib
import pathlib
import re
import sys

HERE = pathlib.Path(__file__).parent
INDEX = HERE / "index.html"
ASSETS = ["styles.css", "main.js"]


def short_hash(path: pathlib.Path) -> str:
    # Normalise line endings first. Git checks these files out with CRLF on
    # Windows and stores them with LF, so hashing raw bytes would give a
    # different stamp on a fresh clone and churn for no reason.
    data = path.read_bytes().replace(b"\r\n", b"\n")
    return hashlib.sha1(data).hexdigest()[:8]


def main() -> int:
    html = original = INDEX.read_text(encoding="utf8")

    for name in ASSETS:
        path = HERE / name
        if not path.exists():
            print(f"! {name} not found, skipping")
            continue
        digest = short_hash(path)
        # Only rewrite real href/src attribute values — an earlier version
        # matched the bare filename anywhere and stamped a version onto a
        # mention of main.js inside a comment.
        pattern = re.compile(
            r'((?:href|src)=")' + re.escape(name) + r'(?:\?v=[0-9a-f]+)?(")'
        )
        html, count = pattern.subn(rf"\g<1>{name}?v={digest}\g<2>", html)
        if not count:
            print(f"! no reference to {name} in index.html")
        else:
            print(f"  {name} -> ?v={digest}  ({count} reference{'s'[:count ^ 1]})")

    if html == original:
        print("index.html already up to date")
        return 0

    INDEX.write_text(html, encoding="utf8")
    print("index.html updated")
    return 0


if __name__ == "__main__":
    sys.exit(main())
