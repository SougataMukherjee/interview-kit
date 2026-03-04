import type{ IconType } from "react-icons";
import { FaUser, FaHome } from "react-icons/fa";

export type IconName =
  | "user"
  | "home"
  | "customSvg"
  | "customImage";

type IconConfig =
  | { type: "react-icon"; icon: IconType }
  | { type: "image"; src: string };

const iconMap: Record<IconName, IconConfig> = {
  user: {
    type: "react-icon",
    icon: FaUser,
  },
  home: {
    type: "react-icon",
    icon: FaHome,
  },
  customSvg: {
    type: "image",
    src: "/assets/icons/sample.svg",
  },
  customImage: {
    type: "image",
    src: "/assets/icons/sample.png",
  },
};

export const getIconConfig = (name: IconName): IconConfig => {
  return iconMap[name];
};