import { useEffect } from "react";
import "./App.css";
import SearchComponent from "./components/SearchComponent";
import PaginatorComponent from "./components/PaginatorComponent";
import { ModalComponent } from "./components/ModalComponent";
import { TableComponent } from "./components/TableComponent";
import { ProgressSpinner } from "primereact/progressspinner";
import { useFetchData } from "./hooks/useFetchData";
import { changeData } from "./store/dataStore";
import { useAppDispatch, useAppSelector } from "./store/store";
function App() {
  const storeUrl = useAppSelector((state) => state.data.url);
  const dispatch = useAppDispatch();
  const { data, error, loading } = useFetchData(storeUrl as string);

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
