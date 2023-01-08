import styled from "styled-components";
import { Products } from "../hooks/useFetchData";
interface TableComponentProps {
  tableData: Products | null;
  handleRowClick: (rowData: {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
  }) => void;
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

export const TableComponent = ({
  tableData,
  handleRowClick,
}: TableComponentProps) => {
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
          {tableData?.data.map((item) => (
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
