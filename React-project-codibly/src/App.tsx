import { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { TableComponent } from "./components/TableComponent";
import { useFetchData } from "./hooks/useFetchData";

function App() {
  const baseUrl = "https://reqres.in/api/products/";
  const perPage = 5;
  const [inputId, setInputId] = useState<null | number>(null);
  const [url, setUrl] = useState<string>(`${baseUrl}?per_page=${perPage}`);
  const [page, setPage] = useState<number>(1);
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

  return (
    <div className="w-full flex flex-column align-items-center">
      <div className="flex flex-column align-items-center gap-2 ">
        <div className="flex gap-2">
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
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="overflow-x-auto w-full flex flex-column align-items-center p-4">
          <div className="h-28rem w-9 border-round-lg">
            <TableComponent data={data}></TableComponent>
          </div>
          <div className="w-9 flex justify-content-between">
            <Button
              icon="pi pi-arrow-left"
              className="p-button-help"
              onClick={handlePrevPage}
              disabled={page === 1}
            ></Button>
            <Button
              icon="pi pi-arrow-right"
              className="p-button-info"
              onClick={handleNextPage}
              disabled={data?.data?.length < perPage}
            ></Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
