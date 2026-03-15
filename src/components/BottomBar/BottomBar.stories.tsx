import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { BottomBar, type BottomBarTab } from "./BottomBar";

const meta: Meta<typeof BottomBar> = {
  title: "Components/BottomBar",
  component: BottomBar,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  description: `
A bottom navigation bar for switching between main app sections.

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| \`--color-brand-contrast\` | \`#f08e19\` | Active tab icon & label |
| \`--color-text-light\` | \`#b0b0b0\` | Inactive tab icon & label |
| \`--color-surface-base\` | \`#ffffff\` | Bar background |
| \`--space-4\` | \`4px\` | Gap between icon and label |
| \`--space-12\` | \`12px\` | Tab padding |
| \`--space-16\` | \`16px\` | Bar horizontal padding |

## Usage Guidelines

**Do:**
- Use at the bottom of a mobile layout
- Keep to 3–5 tabs maximum
- Ensure one tab is always active

**Don't:**
- Place inside scrollable content
- Use for secondary navigation
- Combine with a top tab bar for the same sections
`,
};

export default meta;
type Story = StoryObj<typeof BottomBar>;

export const Default: Story = {
  render: function Render() {
    const [active, setActive] = useState<BottomBarTab>("shoppa");
    return <BottomBar active={active} onSelect={setActive} />;
  },
};

export const ShoppaActive: Story = {
  args: {
    active: "shoppa",
  },
};

export const MyListsActive: Story = {
  args: {
    active: "my-lists",
  },
};

export const ProfileActive: Story = {
  args: {
    active: "profile",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <BottomBar active="shoppa" onSelect={() => {}} />
      <BottomBar active="my-lists" onSelect={() => {}} />
      <BottomBar active="profile" onSelect={() => {}} />
    </div>
  ),
};
