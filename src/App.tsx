import { useState, useEffect } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { ModalComponent } from "./components/ModalComponent";
import { TableComponent } from "./components/TableComponent";
import { ProgressSpinner } from "primereact/progressspinner";

import { useFetchData } from "./hooks/useFetchData";

function App() {
  const perPage = 5;
  const baseUrl = `https://reqres.in/api/products/`;
  const baseUrlWithPage = `https://reqres.in/api/products/?per_page=${perPage}`;
  const [inputId, setInputId] = useState<null | number>(null);
  const [url, setUrl] = useState<string>(`${baseUrlWithPage}`);
  const [page, setPage] = useState<number>(1);
  const [pages, setPages] = useState<number[]>([]);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<null | any>(null);

  const { data, error, loading } = useFetchData(url);
  const handleSubmit = () => {
    if (inputId !== 0 && inputId !== null) {
      setUrl(`${baseUrl}${inputId}`);
      console.log(url);
      setInputId(null);
    } else {
      setUrl(`${baseUrlWithPage}`);
      setInputId(null);
    }
  };
  const fetchBasic = () => {
    setInputId(null);
    setUrl(`${baseUrlWithPage}`);
  };
  const handleNextPage = () => {
    setPage(page + 1);
    setUrl(`${baseUrlWithPage}&page=${page + 1}`);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
    setUrl(`${baseUrlWithPage}&page=${page - 1}`);
  };
  const goToPage = (num: number) => {
    setPage(num);
    setUrl(`${baseUrlWithPage}&page=${num}`);
  };

  const onHide = () => {
    setDisplayModal(false);
  };
  const handleRowClick = (rowData: any) => {
    setModalData(rowData);
    setDisplayModal(true);
  };
  const isPageActive = (num: number) => {
    return num === page;
  };
  const paginator = () => {
    const pageArr = [];
    for (let i = 1; i <= data?.total_pages; i++) {
      pageArr.push(i);
    }
    return pageArr;
  };
  useEffect(() => {
    setPages(paginator());
  }, [data]);

  return (
    <>
      <div className="flex min-h-screen flex-column align-items-center justify-content-center">
        <main className="body-container w-screen flex flex-column align-items-center justify-content-center flex-1">
          <div className="flex flex-column align-items-center gap-2 ">
            <div className="flex flex-column sm:flex-row w-full gap-2 p-2 flex-wrap">
              <Button
                onClick={fetchBasic}
                label="Restore"
                className="p-button-danger"
              ></Button>
              <InputNumber
                onValueChange={(e) => setInputId(e.value)}
                value={inputId}
              ></InputNumber>
              <Button
                onClick={handleSubmit}
                label="Submit"
                className="p-button-help "
              ></Button>
            </div>
          </div>
          <h1>Products</h1>
          {loading ? (
            <ProgressSpinner />
          ) : error ? (
            <div className="sm:w-4 h-10rem p-4 flex flex-column justify-content-center align-items-center text-3xl bg-indigo-900 border-round-lg gap-3">
              <div>Server responded with:</div>
              <div>{error}</div>
            </div>
          ) : (
            <div className="w-full flex flex-column align-items-center">
              <div className="w-9 mb-2 h-25rem overflow-x-auto">
                <TableComponent
                  tableData={data}
                  handleRowClick={handleRowClick}
                ></TableComponent>
              </div>
              <div className="w-9 flex justify-content-between">
                <Button
                  icon="pi pi-arrow-left"
                  className="p-button-help"
                  onClick={handlePrevPage}
                  disabled={page === 1}
                ></Button>
                <div className="flex flex-row gap-2">
                  {pages.length === 0 ? (
                    <div className="bg-indigo-900 font-bold border-round-md w-3rem h-3rem flex align-items-center justify-content-center text-3xl">
                      1
                    </div>
                  ) : (
                    pages.map((num) => (
                      <div
                        key={num}
                        className={`
                    ${isPageActive(num) ? "bg-indigo-900 font-bold" : ""}
                    border-round-md w-3rem h-3rem flex align-items-center justify-content-center text-3xl`}
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
                  disabled={page === data?.total_pages || pages.length === 0}
                ></Button>
              </div>
              <ModalComponent
                visible={displayModal}
                onHide={onHide}
                modalData={modalData}
              />
            </div>
          )}
        </main>
        <footer className="align-self-auto">
          <p>Created by: Mateusz Smyda</p>
        </footer>
      </div>
    </>
  );
}

export default App;
