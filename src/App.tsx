import React from 'react'

import Card, { CardVariant } from './components/card'
import UserList from './components/userList'
import { IUser } from './types/types'

const App = () => {
  const users: IUser[] = [{
    "id": 1,
    "name": "Leanne Graham",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Backer",
      "city": "Gwenborough",
      "zipcode": "92998-3874"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771"
    }
  }]
  return (
    <div>
      <Card height='200px' width='200px' variant={CardVariant.outlined} >
        <p>Hello there</p>
        <button type="button">Click</button>
      </Card>
      <UserList users={users} />
    </div>
  )
}

export default App
