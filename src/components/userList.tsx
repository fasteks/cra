import React, { FC } from 'react'

import User from './user'

import { IUser } from '../types/types'

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) =>
        <User key={user.id} user={user} />
      )}
    </div>
  )
}

export default UserList