import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userService from '../services/UserService' // Ajusta la ruta según corresponda

export default function useUpdateUser() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    country: '',
  })

  const navigate = useNavigate()

  const saveUser = (e) => {
    e.preventDefault()

    if (user) {
      userService
        .addUser(user)
        .then((res) => {
          alert('Usuario agregado correctamente')
          navigate('/users')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return {
    user,
    setUser,
    saveUser
  }
}
