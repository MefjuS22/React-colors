import styled from "styled-components";
import { Products } from "../hooks/useFetchData";
import { useSelector, useDispatch } from "react-redux";
import { setModalData, toggleModal } from "../store/modalStore";
interface TableComponentTypes {
  tableData: Products | null;
  rowData: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  };
}

const Table = styled.table`
  border-collapse: collapse;
  overflow-x: auto;

  > thead {
    > tr {
      > th {
        padding: 1rem;
        color: white;
        font-size: 1.25rem;
        text-align: left;
        border-right: 1px solid black;
        &:first-child {
          border-radius: 0.5rem 0 0 0;
        }
        &:last-child {
          border-radius: 0 0.5rem 0 0;
        }
      }
    }
  }
  > tbody {
    > tr {
      cursor: pointer;
      border-radius: 2rem;
      > td {
        padding: 1rem;
        color: white;
        font-size: 1.25rem;
        text-align: left;
        border-right: 1px solid black;
      }
      &:last-child {
        > td {
          padding: 1rem;
          color: white;
          font-size: 1.25rem;
          text-align: left;
          border-right: 1px solid black;
          &:first-child {
            border-radius: 0 0 0 0.5rem;
          }
          &:last-child {
            border-radius: 0 0 0.5rem 0;
          }
        }
      }
    }
  }
`;

export const TableComponent = () => {
  const storeData = useSelector((state: any) => state.data.data);
  const dispatch = useDispatch();
  const handleRowClick = (item: TableComponentTypes["rowData"]) => {
    dispatch(setModalData(item));
    dispatch(toggleModal());
  };
  return (
    <>
      <Table className="w-full ">
        <thead>
          <tr className="bg-blue-800">
            <th>ID</th>
            <th>Name</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {storeData?.data.map((item: TableComponentTypes['rowData']) => (
            <tr
              key={item.id}
              style={{ backgroundColor: item.color }}
              onClick={() => handleRowClick(item)}
            >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
