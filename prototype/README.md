# VeriVoice — Static concept prototype

A self-contained, in-browser exploration of the fuller VeriVoice interface vision.
It runs entirely client-side (no backend): EN / SW / SH (Sheng) UI, a screenshot OCR
tab (Tesseract.js), claim-extraction cards, and safety routing to real Kenyan
hotlines. Verdicts in this version are **pre-computed demo scenarios** standing in
for live reconciliation.

**Try it:** https://angelcoder87.github.io/Verivoice/

**Demo evidence base:** five curated scenarios — school-fee rumour (disputed),
county bursary claim (misleading), fake tender notice (disputed), the 2027
general-election date (supported, sourced to the Constitution of Kenya and the
IEBC), and a fake voter-registration SMS (disputed). Any unmatched claim returns
an honest *Unverified* instead of a guess. The production design replaces this
base with live AI reconciliation against named sources — see the
[main README](../README.md).
