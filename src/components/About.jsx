import { useContext } from 'react'
import { Context } from '../context/Context'

export const About = () => {
  const objectContext = useContext(Context)

  return (
    <div>
      <h1 className='text-3xl font-bold'>About us page</h1>
      <p>About customer:</p>
      <pre>{JSON.stringify(objectContext.user)}</pre>
    </div>
  )
}
