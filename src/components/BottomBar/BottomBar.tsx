import { ShoppaIcon } from "../Icons/ShoppaIcon";
import { ShoppingCartIcon } from "../Icons/ShoppingCartIcon";
import { ProfileIcon } from "../Icons/ProfileIcon";
import "./BottomBar.css";

export type BottomBarTab = "shoppa" | "my-lists" | "profile";

export interface BottomBarProps {
  active: BottomBarTab;
  onSelect: (tab: BottomBarTab) => void;
}

const tabs: { id: BottomBarTab; label: string; icon: typeof ShoppaIcon }[] = [
  { id: "shoppa", label: "ShoppaAI", icon: ShoppaIcon },
  { id: "my-lists", label: "My Lists", icon: ShoppingCartIcon },
  { id: "profile", label: "Profile", icon: ProfileIcon },
];

export function BottomBar({ active, onSelect }: BottomBarProps) {
  return (
    <nav className="bottom-bar" aria-label="Main navigation">
      {tabs.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            className={`bottom-bar__tab ${isActive ? "bottom-bar__tab--active" : ""}`}
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelect(id)}
          >
            <Icon size={24} />
            <span className="bottom-bar__label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
