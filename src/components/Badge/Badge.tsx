import classNames from "classnames";
import { FC } from "react";
import "./Badge.scss";

interface BadgeProps {
  color?: string;
  content?: string;
  className?: string;
}

const Badge: FC<BadgeProps> = ({ color, content, className }) => {
  return (
    <div
      className={classNames("badge", className)}
      style={{ backgroundColor: color }}
    >
      {content}
    </div>
  );
};

export default Badge;
