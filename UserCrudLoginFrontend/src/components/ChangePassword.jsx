import { Link } from 'react-router-dom'
import useChangePassword from '../hooks/useChangePassword.js' // Importa el hook
import '../components/changepassword.css'
export default function ChangePassword() {
  const {
    oldPassword,
    newPassword,
    setPassword,
    changePassword
  } = useChangePassword()

  return (
    <div className='form-container'>
      <div className='form-login'>
        <div className='form-title'>
          <h2>Change password: </h2>
        </div>

        <form onSubmit={changePassword}>
          <div className='form-group'>
            <label className='label'>Old password</label>
            <input
              type='password'
              className='form-input'
              placeholder='Type old password'
              value={oldPassword}
              onChange={(e) =>
                setPassword({ oldPassword: e.target.value, newPassword })
              }
            />
          </div>
          <div className='form-group'>
            <label className='label'>New Password</label>
            <input
              type='password'
              className='form-input'
              placeholder='Type new password'
              value={newPassword}
              onChange={(e) =>
                setPassword({ oldPassword, newPassword: e.target.value })
              }
            />
          </div>
          <div className='button-cell-1'>
            <button className='button' onClick={(e) => changePassword(e)}>
              Save changes
            </button>
            <Link to='/home' className='button'>
              Go back
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
