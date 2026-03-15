---
name: init-ds
description: Initialize a new design system from the ds-template — clone, rename, create GitHub repo, and push
disable-model-invocation: true
argument-hint: <ds-name>
---

# Initialize a New Design System

You are creating a new design system repo from the template. The name is provided in `$ARGUMENTS` (e.g. `flipp-ds`).

## Step 1 — Clone the template

```bash
cd ~/Dev/Design\ Systems
git clone https://github.com/pijiola/ds-template.git <ds-name>
cd <ds-name>
```

## Step 2 — Reset git history

```bash
rm -rf .git
git init
```

## Step 3 — Update the package name

In `package.json`, replace `@pijiola/REPLACE-ME` with `@pijiola/<ds-name>`.

## Step 4 — Install dependencies

```bash
npm install
```

## Step 5 — Create the GitHub repo and push

```bash
git add -A
git commit -m "Initial commit: <ds-name> design system"
gh repo create pijiola/<ds-name> --public --source=. --push
```

## Step 6 — Enable GitHub Pages

Tell the user to enable GitHub Pages in the repo settings:
1. Go to https://github.com/pijiola/<ds-name>/settings/pages
2. Set Source to "GitHub Actions"

## Done

Tell the user:
- Repo: https://github.com/pijiola/<ds-name>
- Storybook will deploy to: https://pijiola.github.io/<ds-name>/
- Package will publish as: @pijiola/<ds-name>
- Run `/new-component <figma-url>` to add your first component
