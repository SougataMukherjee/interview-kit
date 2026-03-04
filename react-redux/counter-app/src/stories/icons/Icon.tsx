import React from "react";
import { getIconConfig,type IconName } from "./iconUtils";

export interface IconProps {
  name: IconName;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "inherit",
}) => {
  const config = getIconConfig(name);

  if (config.type === "react-icon") {
    const SelectedIcon = config.icon;
    return <SelectedIcon size={size} color={color} />;
  }

  return (
    <img
      src={config.src}
      alt={name}
      width={size}
      height={size}
      style={{ objectFit: "contain" }}
    />
  );
};