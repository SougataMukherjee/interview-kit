import type { IconType } from "react-icons";
import { FaUser, FaHome } from "react-icons/fa";
import Img from '../assets/share.png'
import Github from '../assets/github.svg'

export type IconName = "user" | "home" | "customSvg" | "customImage";

type IconConfig =
  | { type: "react-icon"; icon: IconType }
  | { type: "image"; src: string };

export const iconMap: Record<IconName, IconConfig> = {
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
    src: Github,
  },
  customImage: {
    type: "image",
    src: Img,
  },
};

export const iconNames: IconName[] = Object.keys(iconMap) as IconName[];

export const getIconConfig = (name: IconName): IconConfig => {
  return iconMap[name];
};