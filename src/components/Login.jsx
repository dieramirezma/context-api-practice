import { useContext, useState } from 'react'
import { Context } from '../context/Context'

export const Login = () => {
  const { setUser } = useContext(Context)
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const handleUsernameChange = e => {
    const value = e.target.value.replace(/\s+/g, '').toLowerCase()
    setUsername(value)
  }

  const handleNameChange = e => {
    const value = e.target.value
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ')
    setName(value)
  }

  const handlePhoneChange = e => {
    const value = e.target.value.replace(/[^0-9]/g, '')
    setPhone(value)
  }

  const saveData = (e) => {
    e.preventDefault()
    const identifiedUser = {
      username,
      name,
      phone
    }

    setUser(identifiedUser)
    console.log(identifiedUser)
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Login page</h1>
      <form className='login' onSubmit={saveData}>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type='text'
          name='phone'
          placeholder='3XX XXX XXXX'
          value={phone}
          onChange={handlePhoneChange}
          required
        />
        <button type='submit'>Send</button>
      </form>
    </div>
  )
}
