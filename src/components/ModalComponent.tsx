import { Dialog } from "primereact/dialog";

interface ModalComponentProps {
  visible: boolean;
  onHide: () => void;
  modalData: any;
}

export const ModalComponent = ({
  visible,
  onHide,
  modalData,
}: ModalComponentProps) => {
  const header = () => {
    return modalData?.name[0].toUpperCase() + modalData?.name.slice(1);
  };

  return (
    <Dialog
      header={header}
      onHide={onHide}
      visible={visible}
      breakpoints={{ "960px": "75vw", "640px": "100vw" }}
      style={{ width: "50vw" }}
      dismissableMask
    >
      <div className="flex flex-column gap-3 align-items-center">
        <div
          className="p-2 bg-gray-900 w-3 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          {modalData?.name}
        </div>
        <div
          className="p-2 bg-gray-900 w-3 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          {modalData?.year}
        </div>
        <div
          className="p-2 bg-gray-900 w-3 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          {modalData?.color}
        </div>
        <div
          className="p-2 bg-gray-900 w-3 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          {modalData?.pantone_value}
        </div>
      </div>
    </Dialog>
  );
};

export default ModalComponent;
