import { FC } from "react";
import "./Select.scss";
interface SelectOption {
    value: string | number;
    label: string;
}
interface SelectProps {
    placeholder?: string;
    options?: SelectOption[];
    defaultValue?: string;
    className?: string;
    disabled?: boolean;
    showSearch?: boolean;
    translation?: boolean;
    onChange?: (value: any) => void;
    mode?: "multiple" | "tags";
    maxTagCount?: number | "responsive";
    label?: string;
    error?: string;
    labelClassName?: string;
}
declare const Select: FC<SelectProps>;
export default Select;
