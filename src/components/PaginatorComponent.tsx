import { Button } from "primereact/button";

interface PaginatorComponentProps {
  page: number;
  pages: number[];
  handleNextPage: () => void;
  handlePrevPage: () => void;
  goToPage: (num: number) => void;
  isPageActive: (num: number) => boolean;
  isLastPageActive: () => boolean;
}

const PaginatorComponent = ({
  page,
  pages,
  handleNextPage,
  handlePrevPage,
  goToPage,
  isPageActive,
  isLastPageActive,
}: PaginatorComponentProps) => {
  return (
    <div className="w-9 flex justify-content-between">
      <Button
        icon="pi pi-arrow-left"
        className="p-button-help"
        onClick={handlePrevPage}
        disabled={page === 1 || pages.length === 0}
      ></Button>
      <div className="flex flex-row gap-2">
        {pages.length === 0 ? (
          <div className="bg-indigo-900 font-semibold border-round-md w-3rem h-3rem flex align-items-center justify-content-center text-3xl">
            1
          </div>
        ) : (
          pages.map((num) => (
            <div
              key={num}
              className={`
        ${isPageActive(num) ? "bg-indigo-900 font-semibold" : ""}
        border-round-md w-3rem h-3rem flex align-items-center justify-content-center text-3xl cursor-pointer`}
              onClick={() => goToPage(num)}
            >
              {num}
            </div>
          ))
        )}
      </div>

      <Button
        icon="pi pi-arrow-right"
        className="p-button-info"
        onClick={handleNextPage}
        disabled={isLastPageActive() || pages.length === 0}
      ></Button>
    </div>
  );
};

export default PaginatorComponent;
