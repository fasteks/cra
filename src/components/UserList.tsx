import React, { FC } from 'react'
import { useSelector } from 'react-redux'

const UserList: FC = () => {
  const state: any = useSelector(store => store)
  console.log(state)
  return (
    <div>
      userlist
    </div>
  )
}

export default UserList