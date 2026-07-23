# Example Project

A portable, high-fidelity speaker system built from the ground up — enclosure,
amplifier, and DSP crossover. This first page introduces the project and its
goals. (This is a reference template — it is **not** linked from the Eng grid.
Copy this folder to start a new project.)

## Overview

Boombox started as an exercise in acoustic design: how loud, how clean, and how
portable can a battery-powered speaker be before the physics fight back? The
answer involved a sealed enclosure, a class-D amplifier, and a software
crossover running on a small microcontroller.

- Sealed enclosure tuned for a flat, controlled response
- Class-D amplifier for efficiency on battery
- Software crossover running on a microcontroller

> The goal was never maximum volume — it was flat response in a package you
> could carry with one hand.

## Enclosure & Acoustics

The enclosure was modeled as a sealed box tuned for a Q of `0.707`, trading a
bit of low-end extension for tight, controlled bass that survives being bumped
around outdoors.

### What worked

1. Bracing the side panels killed a nasty 400 Hz resonance.
2. Stuffing density mattered more than stuffing volume.
3. A recessed grille protected the tweeters without coloring the top end.

### What I'd change

The next revision moves to a ported design with a flared slot port, plus a
gasketed battery door — the current one rattles at high SPL.

You can also embed images inline in markdown, e.g.
`![caption](/projects/example/example1.jpg)`, or just drop numbered image files
into `public/projects/example/` to have them stack automatically.
