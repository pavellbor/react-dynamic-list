import CustomTable from './CustomTable'
import CustomTiles from './CustomTiles'

export type CustomListType = 'list' | 'tiles'

export type CustomListProps = {
  data: Record<string, string>[]
  mode: CustomListType
}

function CustomList({ data, mode }: CustomListProps): JSX.Element {
  switch (mode) {
    case 'list':
      return <CustomTable data={data} />
    case 'tiles':
      return <CustomTiles data={data} />
  }
}

export default CustomList
