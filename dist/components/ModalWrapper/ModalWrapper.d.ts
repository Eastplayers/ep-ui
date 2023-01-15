import { FC, ReactNode } from "react";
import "./ModalWrapper.scss";
interface ModalWrapperProps {
    open?: boolean;
    handleClose?: () => void;
    title?: string;
    children?: ReactNode;
    width?: string | number;
    closable?: boolean;
}
declare const ModalWrapper: FC<ModalWrapperProps>;
export default ModalWrapper;
