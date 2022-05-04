import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Card, { CardVariant } from './components/card'
import { IUser } from './types/types'
import List from './components/list'
import User from './components/user'

const App = () => {
  const [users, setUsers] = useState<IUser[]>([])

  const fetchUsers = async () => {
    try {
      const { data: response } = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <Card height='200px' width='200px' variant={CardVariant.outlined} >
        <p>Hello there</p>
        <button type="button">Click</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <User key={user.id} user={user} /> } />
    </div>
  )
}

export default App
