import { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import { ModalComponent } from "./components/ModalComponent";
import { TableComponent } from "./components/TableComponent";
import { ProgressSpinner } from "primereact/progressspinner";

import { useFetchData } from "./hooks/useFetchData";

function App() {
  const baseUrl = "https://reqres.in/api/products/";
  const perPage = 5;
  const [inputId, setInputId] = useState<null | number>(null);
  const [url, setUrl] = useState<string>(`${baseUrl}?per_page=${perPage}`);
  const [page, setPage] = useState<number>(1);
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<null | any>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(e.target.value === "" ? null : Number(e.target.value));
  };
  const handleSubmit = () => {
    if (inputId !== 0) {
      setUrl(`${baseUrl}${inputId}`);
    } else {
      setUrl(baseUrl);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
    setUrl(`${baseUrl}?page=${page + 1}&per_page=${perPage}`);
  };
  const handlePrevPage = () => {
    setPage(page - 1);
    setUrl(`${baseUrl}?page=${page - 1}&per_page=${perPage}`);
  };
  const { data, error, loading } = useFetchData(url);
  const onHide = () => {
    setDisplayModal(false);
  };
  const handleRowClick = (rowData: any) => {
    setModalData(rowData);
    setDisplayModal(true);
  };

  return (
    <>
      <div className="body-container w-screen h-screen flex flex-column align-items-center justify-content-center">
        <div className="flex flex-column align-items-center gap-2 ">
          <div className="flex gap-2 p-2">
            <InputNumber
              onValueChange={handleChange}
              value={inputId}
            ></InputNumber>
            <Button
              onClick={handleSubmit}
              label="Submit"
              className="p-button-help"
            ></Button>
          </div>
        </div>
        <h1>Products</h1>
        {loading ? (
          <ProgressSpinner />
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="w-full flex flex-column align-items-center">
            <div className="w-9 border-round-lg mb-2 h-25rem overflow-x-auto">
              <TableComponent
                data={data}
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
              <div className="bg-indigo-900 border-round-md w-3rem h-3rem flex align-items-center justify-content-center text-3xl">
                {page}
              </div>
              <Button
                icon="pi pi-arrow-right"
                className="p-button-info"
                onClick={handleNextPage}
                disabled={data?.data?.length < perPage}
              ></Button>
            </div>
            <ModalComponent
              visible={displayModal}
              onHide={onHide}
              modalData={modalData}
            />
          </div>
        )}
        <footer className="absolute bottom-0">
          <p>Created by: Mateusz Smyda</p>
        </footer>
      </div>
    </>
  );
}

export default App;
