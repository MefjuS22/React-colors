import { useEffect } from "react";
import "./App.css";
import { Products } from "./hooks/useFetchData";

import { ModalComponent } from "./components/ModalComponent";
import { TableComponent } from "./components/TableComponent";
import PaginatorComponent from "./components/PaginatorComponent";
import { ProgressSpinner } from "primereact/progressspinner";
import SearchComponent from "./components/SearchComponent";
import { useFetchData } from "./hooks/useFetchData";
import { useSelector, useDispatch } from "react-redux";
import { changeData } from "./store/dataStore";
function App() {
  const storeData = useSelector((state) => state.data.data as Products['data']);
  const storeUrl = useSelector((state) => state.data.url);
  const dispatch = useDispatch();
  const { data, error, loading } = useFetchData(storeUrl);

  useEffect(() => {
    dispatch(changeData(data));
  }, [data]);

  return (
    <div className="flex min-h-screen flex-column align-items-center justify-content-center">
      <main className="body-container w-screen flex flex-column align-items-center justify-content-center flex-1">
        <div className="flex flex-column align-items-center gap-2 ">
          <SearchComponent />
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
              <TableComponent></TableComponent>
            </div>
            <PaginatorComponent></PaginatorComponent>
            <ModalComponent />
          </div>
        )}
      </main>
      <footer className="align-self-auto">
        <p>Created by: Mateusz Smyda</p>
      </footer>
    </div>
  );
}

export default App;
