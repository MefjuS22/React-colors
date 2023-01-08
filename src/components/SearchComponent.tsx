import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

interface SearchComponentProps {
  fetchBasic: () => void;
  setInputId: (id: number | null) => void;
  inputId: number | null;
  handleSubmit: () => void;
}

const SearchComponent = ({
  fetchBasic,
  setInputId,
  inputId,
  handleSubmit,
}: SearchComponentProps) => {
  return (
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
  );
};

export default SearchComponent;
