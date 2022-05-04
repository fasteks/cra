import React, { FC } from 'react'

import { IUser } from '../types/types'

interface UserProps {
  user: IUser
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <div>
      {user.name} lives in {user.address.city} at {user.address.street} street
    </div>
  )
}

export default User