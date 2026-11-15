# Shadow Foundry

A tactile workbench for shaping depth with CSS, one shadow layer at a time.

![Animated paper layers](assets/hero.svg)

## Features
- Adjust horizontal/vertical offset, blur and spread.
- Choose a shadow color, opacity and inset mode.
- Preview the result on a real surface.
- Export a `box-shadow` declaration.

## Run & test
Open `index.html` locally. Node.js 18+ runs the pure-function suite:

```bash
node --test tests.mjs
```

## Scope
This version creates one shadow layer with a six-digit hex color. CSS supports richer color syntaxes and multiple comma-separated layers; those can be added without changing the preview model.

## Design
A warm print-shop palette and a floating paper specimen keep the focus on depth. Hero motion is decorative and reduced-motion aware.

## License
MIT.
