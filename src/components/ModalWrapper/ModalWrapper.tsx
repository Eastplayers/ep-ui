import { Modal } from "antd";
import { FC, ReactNode } from "react";
import colors from "~constants/colors";
import Icon from "../Icon";
import "./ModalWrapper.scss";

interface ModalWrapperProps {
  open?: boolean;
  handleClose?: () => void;
  title?: string;
  children?: ReactNode;
  width?: string | number;
  closable?: boolean;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  handleClose,
  ...rest
}) => {
  return (
    <Modal
      destroyOnClose
      centered
      footer={null}
      closeIcon={<Icon icon="close" size={24} color={colors.GRAY_60} />}
      onCancel={handleClose}
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default ModalWrapper;
