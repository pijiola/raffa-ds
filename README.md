# Design System Template

A ready-to-use template for creating design system component libraries.

## Setup

1. Clone this template
2. Update `name` in `package.json` with your DS name (e.g. `@pijiola/my-ds`)
3. Create a GitHub repo and push
4. Run `/new-component` with a Figma link to add your first component

## Available skills

| Skill | Description |
|-------|-------------|
| `/new-component <figma-url>` | Create a new component from a Figma design |
| `/update-component <figma-url>` | Update an existing component from Figma |

## How it works

- Design tokens live in `src/tokens/tokens.css`
- Components live in `src/components/`
- Storybook auto-deploys to GitHub Pages on push
- Package auto-publishes to GitHub Packages on push
