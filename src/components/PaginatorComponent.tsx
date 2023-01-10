import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { setUrlPage } from "../store/dataStore";

const PaginatorComponent = () => {
  const storeData = useSelector((state: any) => state.data.data);
  const dispatch = useDispatch();
  const [pages, setPages] = useState<number[]>([]);
  const handleNextPage = () => {
    dispatch(setUrlPage(storeData?.page + 1));
  };
  const handlePrevPage = () => {
    dispatch(setUrlPage(storeData?.page - 1));
  };
  const goToPage = (num: number) => {
    dispatch(setUrlPage(num));
  };
  const isPageActive = (num: number) => {
    return num === storeData?.page;
  };
  const isLastPageActive = () => {
    return storeData?.page === storeData?.total_pages;
  };
  const paginator = () => {
    const pageArr = [];
    if (storeData?.total_pages !== undefined) {
      for (let i = 1; i <= storeData?.total_pages; i++) {
        pageArr.push(i);
      }
    }
    return pageArr;
  };
  useEffect(() => {
    setPages(paginator());
  }, [storeData]);

  return (
    <div className="w-9 flex justify-content-between">
      <Button
        icon="pi pi-arrow-left"
        className="p-button-help"
        onClick={handlePrevPage}
        disabled={storeData?.page === 1 || pages.length === 0}
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
