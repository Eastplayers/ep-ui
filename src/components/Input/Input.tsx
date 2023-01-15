import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

import "./Input.scss";

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size" | "prefix"
  > {
  label?: string;
  required?: boolean;
  size?: "small" | "medium" | "large";
  prefix?: ReactNode;
  suffix?: ReactNode;
  labelClassName?: string;
  inputClassName?: string;
  error?: string;
  errorClassName?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  className,
  labelClassName,
  inputClassName,
  size,
  prefix,
  suffix,
  error,
  errorClassName,
  disabled,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        "input-wrapper flex flex-col gap-[6px]",
        className,
        {
          ["disabled"]: disabled,
        }
      )}
    >
      {label && (
        <label className={classNames("pl-2", "input-label", labelClassName)}>
          {label}
        </label>
      )}
      <div className="input-container">
        {prefix}
        <input
          className={classNames("input", inputClassName)}
          disabled={disabled}
          {...rest}
        />
        {suffix}
      </div>
      {error && <p className="text-red mt-[6px]">{error}</p>}
    </div>
  );
};

export default Input;
