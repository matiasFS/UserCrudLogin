import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import userService from '../services/UserService'; // Ajusta la ruta según corresponda

export default function useUpdateUser() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    country: '',
    role: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const saveOrUpdateUser = (e) => {
    e.preventDefault();

    if (id) {
        userService.updateUser(id, user)
        .then((res) => {
          alert('Usuario actualizado correctamente');
          navigate('/users');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (id) {
        userService.getUserById(id)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  return {
    user,
    setUser,
    saveOrUpdateUser,
  };
}
