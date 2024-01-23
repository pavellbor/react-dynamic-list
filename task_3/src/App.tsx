import { useState } from 'react'
import CustomList, { CustomListType } from './components/CustomList'
import users from '../mocks/users.json'
import CustomToggler, { CustomTogglerData } from './components/CustomToggler'

const ListModes: CustomTogglerData<CustomListType> = [
  {
    label: 'List',
    value: 'list',
  },
  {
    label: 'Tiles',
    value: 'tiles',
  },
]

function App() {
  const [listMode, setListMode] = useState<CustomListType>('list')

  return (
    <div className='app'>
      <CustomToggler
        value={listMode}
        data={ListModes}
        onChange={setListMode}
      />
      <CustomList
        data={users}
        mode={listMode}
      />
    </div>
  )
}

export default App
