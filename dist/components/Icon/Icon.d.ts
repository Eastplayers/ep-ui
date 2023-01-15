import React from "react";
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
declare const Icon: React.FC<IconProps>;
export default Icon;
