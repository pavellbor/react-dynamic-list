type CustomTableProps<T> = {
  data: T[]
}

function CustomTable<T extends Record<string, string>>({
  data,
}: CustomTableProps<T>): JSX.Element {
  const columns = Object.keys(data[0])

  return (
    <table className="custom-table">
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((col, colIndex) => (
              <td key={colIndex}>{item[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default CustomTable
