import { Dialog } from "primereact/dialog";

interface ModalComponentProps {
  visible: boolean;
  onHide: () => void;
  modalData: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
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
      className="w-10 md:w-8 lg:w-6 xl:w-3"
      dismissableMask
    >
      <div className="flex flex-column gap-3 align-items-center">
        <div
          className="p-2 bg-gray-900 w-full sm:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Nake: {modalData?.name}
        </div>
        <div
          className="p-2 bg-gray-900 w-full sm:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Year: {modalData?.year}
        </div>
        <div
          className="p-2 bg-gray-900 w-full sm:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Color: {modalData?.color}
        </div>
        <div
          className="p-2 bg-gray-900 w-full sm:w-6 text-lg flex justify-content-center align-items-center h-3rem border-round-lg shadow-1 border-top-3"
          style={{ borderColor: `${modalData?.color}` }}
        >
          Pantone value: {modalData?.pantone_value}
        </div>
      </div>
    </Dialog>
  );
};
