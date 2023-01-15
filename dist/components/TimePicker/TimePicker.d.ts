import React from "react";
import { PickerTimeProps as AntTimePickerProps } from "antd/es/date-picker/generatePicker";
import "antd/es/date-picker/style/index";
import "./TimePicker.scss";
interface TimePickerProps extends Omit<AntTimePickerProps<Date>, "picker"> {
    label?: string;
    className?: string;
    inputClassName?: string;
}
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<any>>;
export default TimePicker;
