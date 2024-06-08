import { useContext } from 'react'
import { Context } from '../context/Context'

export const Contact = () => {
  const { user } = useContext(Context)

  return (
    <div>
      <h1 className='text-3xl font-bold'>Contact page</h1>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Phone: {user.phone}</p>
    </div>
  )
}
