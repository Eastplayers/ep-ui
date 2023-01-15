/// <reference types="react" />
import { TextAreaProps as AntTextAreaProps } from "antd/es/input";
interface TextAreaProps extends Partial<AntTextAreaProps> {
    label?: string;
    rows?: number;
}
declare const TextArea: React.FC<TextAreaProps>;
export default TextArea;
