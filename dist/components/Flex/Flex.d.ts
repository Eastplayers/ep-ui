import { FC, ReactNode } from "react";
interface FlexProps {
    children?: ReactNode;
    className?: string;
    col?: boolean;
    align?: "start" | "center" | "end";
    justify?: "start" | "center" | "end" | "between";
    gap?: number;
}
declare const Flex: FC<FlexProps>;
export default Flex;
