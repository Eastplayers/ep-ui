import React from "react";
import { Input } from "antd";
import { TextAreaProps as AntTextAreaProps } from "antd/es/input";

interface TextAreaProps extends Partial<AntTextAreaProps> {
  label?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = (props) => {
  const { label, rows = 4, ...rest } = props;
  return (
    <div className='input-wrapper flex flex-col gap-[6px]'>
      {label && <label className='input-label pl-2'>{label}</label>}
      <Input.TextArea rows={rows} {...rest}></Input.TextArea>
    </div>
  );
};

export default TextArea;
