import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { useState } from "react";
import { setUrlToDefault, setUrlToInput } from "../store/dataStore";
import { useAppDispatch } from "../store/store";

const SearchComponent = () => {
  const [input, setInput] = useState<null | number>(null);
  const dispatch = useAppDispatch();
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
