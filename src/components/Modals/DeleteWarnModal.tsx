import { Button } from "antd";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { AppAtom } from "~services/app";
import { Trans } from "~translation";
import ModalWrapper from "../ModalWrapper";

// ? Can become confirmation modal?
const DeleteWarnModal: FC = () => {
  const { t } = useTranslation();
  const data = useRecoilValue(AppAtom.deleteWarnModal);
  const closeModal = useResetRecoilState(AppAtom.deleteWarnModal);

  return (
    <ModalWrapper open={data.open} width={340} handleClose={closeModal}>
      <div className="modal flex flex-col items-center gap-5">
        <h1 className="modal-title">{data.title}</h1>
        <img src="/trash.svg" alt="Trash" />
        <p className="modal-message">{data.message}</p>
        <div className="w-full flex items-center justify-between">
          <Button type="text" onClick={closeModal}>
            {t(Trans.cancel)}
          </Button>
          <Button danger type="primary" onClick={data.onConfirm}>
            {t(Trans.delete)}
          </Button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteWarnModal;
