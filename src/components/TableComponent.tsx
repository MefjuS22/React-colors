import styled from "styled-components";

type dataType =
  | {
      page: number;
      per_page: number;
      total: number;
      total_pages: number;
      data: Array<{
        id: number;
        name: string;
        year: number;
        color: string;
        pantone_value: string;
      }>;
    }
  | {
      data: Array<{
        id: number;
        name: string;
        year: number;
        color: string;
        pantone_value: string;
      }>;
    };
interface TableComponentProps {
  data: dataType;
  handleRowClick: (rowData: object) => void;
}

const Table = styled.table`
  border-collapse: collapse;
  overflow-x: auto;
  border-radius: 5rem;
  > thead {
    > tr {
      > th {
        padding: 1rem;
        color: white;
        font-size: 1.25rem;
        text-align: left;
        border-right: 1px solid black;
      }
    }
  }
  > tbody {
    > tr {
      cursor: pointer;
      > td {
        padding: 1rem;
        color: white;
        font-size: 1.25rem;
        text-align: left;
        border-right: 1px solid black;
      }
    }
  }
`;

export const TableComponent = ({
  data,
  handleRowClick,
}: TableComponentProps) => {
  const isArray = Array.isArray(data?.data);
  const isObjectEmpty = Object.keys(data)?.length === 0;
  return (
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
          data?.data.map((item: any) => (
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
        ) : isObjectEmpty ? (
          <p>No Data</p>
        ) : (
          <tr
            style={{ backgroundColor: data?.data?.color }}
            onClick={() => handleRowClick(data.data)}
          >
            <td>{data?.data?.id}</td>
            <td>{data?.data?.name}</td>
            <td>{data?.data?.year}</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default TableComponent;
