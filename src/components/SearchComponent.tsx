import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUrlToDefault, setUrlToInput } from "../store/dataStore";

interface SearchComponentProps {
  fetchBasic: () => void;
  setInputId: (id: number | null) => void;
  inputId: number | null;
  handleSubmit: () => void;
}

const SearchComponent = () => {
  const [input, setInput] = useState<null | number>(null);
  const storeData = useSelector((state: any) => state.data.data);
  const dispatch = useDispatch();
  const submitId = () => {
    if (input !== 0 && input !== null) {
      dispatch(setUrlToInput(input));
      setInput(null);
    } else {
      dispatch(setUrlToDefault());
      setInput(null);
    }
  };
  return (
    <div className="flex flex-column sm:flex-row w-full gap-2 p-2 flex-wrap">
      <Button
        onClick={() => dispatch(setUrlToDefault())}
        label="Restore"
        className="p-button-danger"
      ></Button>
      <InputNumber
        onValueChange={(e) => setInput(e.value)}
        value={input}
      ></InputNumber>
      <Button
        onClick={submitId}
        label="Submit"
        className="p-button-help"
        disabled={input === null}
      ></Button>
    </div>
  );
};

export default SearchComponent;
