interface TableComponentProps {
  data: any;
}

export const TableComponent = ({ data }: TableComponentProps) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="bg-blue-800">
            <th className="p-4">ID</th>
            <th className="p-4">Name</th>
            <th className="p-4">Year</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data?.data) ? (
            data?.data.map((item: any) => (
              <tr key={item.id} style={{ backgroundColor: item.color }}>
                <td className="p-4 ">{item.id}</td>
                <td className="p-4 ">{item.name}</td>
                <td className="p-4">{item.year}</td>
              </tr>
            ))
          ) : (
            <tr style={{ backgroundColor: data?.data?.color }}>
              <td className="p-4 ">{data?.data?.id}</td>
              <td className="p-4 ">{data?.data?.name}</td>
              <td className="p-4">{data?.data?.year}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableComponent;
