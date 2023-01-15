import { Select as AntSelect } from "antd";
import classNames from "classnames";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import colors from "~constants/colors";
import Icon from "../Icon";
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

const Select: FC<SelectProps> = ({
  className,
  disabled,
  translation = false,
  options,
  label,
  error,
  labelClassName,
  ...rest
}) => {
  const { t } = useTranslation();
  const op = useMemo(
    () =>
      translation
        ? options?.map((item) => ({ ...item, label: t(item.label) }))
        : options,
    [t, options]
  );

  return (
    <div
      className={classNames("w-full flex flex-col gap-[6px]", className, {
        ["disabled"]: disabled,
      })}
    >
      {label && (
        <label className={classNames("pl-2", "input-label", labelClassName)}>
          {label}
        </label>
      )}
      <div className="input-container">
        <AntSelect
          disabled={disabled}
          className={classNames("w-full", className, { disabled })}
          suffixIcon={<Icon icon="down-small" color={colors.GRAY_100} />}
          options={op}
          {...rest}
        />
      </div>
      {error && <p className="text-red mt-[6px]">{error}</p>}
    </div>
  );
};

export default Select;
