import { FC } from "react";
import "./Badge.scss";
interface BadgeProps {
    color?: string;
    content?: string;
    className?: string;
}
declare const Badge: FC<BadgeProps>;
export default Badge;
