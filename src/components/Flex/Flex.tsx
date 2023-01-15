import classNames from "classnames";
import { FC, ReactNode } from "react";

interface FlexProps {
  children?: ReactNode;
  className?: string;
  col?: boolean;
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  gap?: number;
}

const Flex: FC<FlexProps> = ({ children, className, gap, ...rest }) => {
  const classes = classNames(
    "flex",
    `gap-${gap}`,
    rest.align ? `items-${rest.align}` : "",
    rest.justify ? `justify-${rest.justify}` : "",
    {
      "flex-col": rest.col,
    },
    className
  );

  return <div className={classes}>{children}</div>;
};

export default Flex;
