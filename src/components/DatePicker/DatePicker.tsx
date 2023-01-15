import classNames from "classnames";
import React from "react";
import dateFnsGenerateConfig from "rc-picker/lib/generate/dateFns";
import generatePicker from "antd/es/date-picker/generatePicker";
import { PickerProps as AntPickerProps } from "antd/es/date-picker/generatePicker";
import "antd/es/date-picker/style/index";
import "./DatePicker.scss";

type DatePickerProps = AntPickerProps<Date> & {
  label?: string;
  className?: string;
};

const AntDatePicker = generatePicker<Date>(dateFnsGenerateConfig);

const DatePicker = React.forwardRef<any, DatePickerProps>((props, ref) => {
  const { label, className, ...rest } = props;
  return (
    <div className="input-wrapper flex flex-col gap-[6px]">
      {label && <label className="input-label pl-2">{label}</label>}
      <AntDatePicker
        {...rest}
        className={classNames("input-container", className)}
        ref={ref}
      />
    </div>
  );
});

export default DatePicker;
