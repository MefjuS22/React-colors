import { Dialog } from "primereact/dialog";
import { toggleModal } from "../store/modalStore";
import { useAppDispatch, useAppSelector } from "../store/store";

export const ModalComponent = () => {
  const dispatch = useAppDispatch();
  const modalData = useAppSelector((state) => state.modal.data);
  const isOpen = useAppSelector((state) => state.modal.isOpen);
  const header = () => {
    if (modalData?.name) {
      return modalData?.name[0].toUpperCase() + modalData?.name.slice(1);
    } else {
      return "Error";
    }
  };
  const onHide = () => {
    dispatch(toggleModal());
  };

  return (
    <Dialog
      header={header}
      onHide={onHide}
      visible={isOpen}
      className="w-10 md:w-8 lg:w-7 xl:w-5 dialog"
      dismissableMask
    >
      <div className="flex flex-column gap-3 align-items-center">
        <div
          className="flex-grow-1 p-2 bg-gray-900 w-full xl:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Name: {modalData?.name}
        </div>
        <div
          className="flex-grow-1 p-2 bg-gray-900 w-full xl:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Year: {modalData?.year}
        </div>
        <div
          className="flex-grow-1 p-2 bg-gray-900 w-full xl:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Color: {modalData?.color}
        </div>
        <div
          className="flex-grow-1 p-2 bg-gray-900 w-full xl:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Pantone value: {modalData?.pantone_value}
        </div>
      </div>
    </Dialog>
  );
};
