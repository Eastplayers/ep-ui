interface DeleteWarnModalState {
    title?: string;
    message?: string;
    open: boolean;
    onConfirm?: () => void;
}
declare const _default: {
    deleteWarnModal: import("recoil").RecoilState<DeleteWarnModalState>;
};
export default _default;
