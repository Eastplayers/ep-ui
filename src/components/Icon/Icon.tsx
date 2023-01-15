import IcomoonReact from "icomoon-react";
import React from "react";

import iconSet from "./selection.json";

export interface IconProps {
  color?: string;
  size?: number | string;
  icon: string;
  className?: string;
  stroke?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  width?: string | number;
  height?: string | number;
}

const Icon: React.FC<IconProps> = (props) => {
  const { size = 20, icon, className = "", ...rest } = props;

  return (
    <IcomoonReact
      className={className}
      size={size}
      icon={icon}
      iconSet={iconSet}
      {...rest}
    />
  );
};

export default Icon;
