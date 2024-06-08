import { useContext } from 'react'
import { Context } from '../context/Context'

export const Home = () => {
  const { user } = useContext(Context)

  return (
    <div>
      <h1 className='text-3xl font-bold'>Home page</h1>
      <p>Welcome <strong>{user.username}</strong> to my web page</p>
    </div>
  )
}
