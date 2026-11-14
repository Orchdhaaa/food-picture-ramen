# Steaming tonkotsu ramen, noodle lift

An entry for make.fun's "Make the best-looking food picture" bounty: a
photorealistic food photograph of steaming tonkotsu ramen, shot like a real
restaurant photo.

The picture shows a dark ceramic bowl of ramen on a dark slate table, lit by
warm cinematic light. Wooden chopsticks lift a glossy noodle pull out of the
bowl, steam curling gently above it. The creamy golden broth carries a red
chilli-oil swirl; a halved soft egg with a jammy deep-orange yolk sits beside
charred chashu pork, a sheet of nori, spring onions, and a dusting of sesame.
Every detail is meant to look like a photograph taken in a real ramen shop,
not an illustration.

The picture was generated to look like a real restaurant food photograph.

## How it works

`main.ts` copies the bundled image (`ramen.jpg`) to the output path
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`), byte for byte,
creating the output directory if needed. After writing, it reads the output
back and compares it against the original bytes, throwing an error if they
differ. The copy is deterministic: every run writes identical bytes.

## Files

- `main.ts` — the program (entrypoint). Node 22, ESM, standard library only.
- `ramen.jpg` — the picture (1024x1024 JPEG).
