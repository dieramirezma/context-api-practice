import { useContext } from 'react'
import { Context } from '../context/Context'

export const Articles = () => {
  const { user } = useContext(Context)

  return (
    <div>
      <h1 className='text-3xl font-bold'>Article page</h1>
      <p>Customer: {user.name}</p>
    </div>
  )
}
