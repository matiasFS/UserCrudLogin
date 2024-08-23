import { Link } from "react-router-dom";
import useUpdateUser from "../hooks/useCreateUser.js"; // Importa el hook
import "../components/updateuser.css";

export default function UpdateUser() {
  const { user, setUser, saveUser } = useUpdateUser();
  const { firstName, lastName, username, email, country, password } = user;

  return (
    <div className='form-container'>
      <div className='form-login'>
        <div className='form-title'>
          <h2>Create user</h2>
        </div>
        <form onSubmit={saveUser}>
          <div className='form-group'>
            <label className='label'>Name</label>
            <input
              type='text'
              className='form-input'
              value={firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label className='label'>Lastname</label>
            <input
              type='text'
              className='form-input'
              value={lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label className='label'>Username</label>
            <input
              type='text'
              className='form-input'
              value={username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label className='label'>Email</label>
            <input
              type='text'
              className='form-input'
              value={email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label className='label'>Password</label>
            <input
              type='password'
              className='form-input'
              value={password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>
          <div className='form-group'>
            <label className='label'>Country</label>
            <input
              type='text'
              className='form-input'
              value={country}
              onChange={(e) => setUser({ ...user, country: e.target.value })}
            />
          </div>
          
          <td className='button-cell'>
            <button className='button' onClick={(e) => saveUser(e)}>
              Create
            </button>
            <Link to='/users' className='button'>
              Go back
            </Link>
          </td>
        </form>
      </div>
    </div>
  );
}
