import React from "react";
import { PickerTimeProps as AntTimePickerProps } from "antd/es/date-picker/generatePicker";
import "antd/es/date-picker/style/index";
import classNames from "classnames";

import { DatePicker } from "~components";
import "./TimePicker.scss";

interface TimePickerProps extends Omit<AntTimePickerProps<Date>, "picker"> {
  label?: string;
  className?: string;
  inputClassName?: string;
}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  const { label, className, inputClassName, ...rest } = props;
  return (
    <div
      className={classNames("input-wrapper flex flex-col gap-[6px]", className)}
    >
      {label && <label className="input-label pl-2">{label}</label>}
      <DatePicker
        {...rest}
        className={inputClassName}
        picker="time"
        mode={undefined}
        ref={ref}
      />
    </div>
  );
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
