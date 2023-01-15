import { atom } from "recoil";

interface DeleteWarnModalState {
  title?: string;
  message?: string;
  open: boolean;
  onConfirm?: () => void;
}

const deleteWarnModal = atom<DeleteWarnModalState>({
  key: "delete-warn-modal",
  default: {
    title: "Delete",
    message: "This action cannot be undone",
    open: false,
    onConfirm: () => {},
  },
});

export default {
  deleteWarnModal,
};
