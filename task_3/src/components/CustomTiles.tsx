type CustomTilesProps = {
  data: Record<string, string>[]
}

function CustomTiles({ data }: CustomTilesProps): JSX.Element {
  return (
    <div className="custom-tiles">
      {data.map((item) => (
        <div className="custom-tiles__item">
          <ul>
            {Object.entries(item).map(([key, value]) => (
              <li key={key}>{value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default CustomTiles
