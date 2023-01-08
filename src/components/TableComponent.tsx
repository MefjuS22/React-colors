import styled from "styled-components";

type Product = {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
};

type ProductsResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Product[];
};

interface TableComponentProps {
  tableData: any;
  handleRowClick: (rowData: object) => void;
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
  const isArray = Array.isArray(tableData?.data);

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
          {isArray ? (
            tableData?.data.map((item: any) => (
              <tr
                key={item.id}
                style={{ backgroundColor: item.color }}
                onClick={() => handleRowClick(item)}
              >
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.year}</td>
              </tr>
            ))
          ) : (
            <tr
              style={{ backgroundColor: tableData?.data?.color }}
              onClick={() => handleRowClick(tableData.data)}
            >
              <td>{tableData?.data?.id}</td>
              <td>{tableData?.data?.name}</td>
              <td>{tableData?.data?.year}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableComponent;
