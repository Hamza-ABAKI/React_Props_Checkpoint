import React from 'react'

import PropTypes from 'prop-types'

const Profile = ({ fullName, bio, profession, children }) => {
  const handleName = (name) => {
    alert(name)
  }
  const style_profile = {
    margin: '50px',
    display: 'flex',
    backgroundColor: 'ivory',
    borderRadius: '15px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }
  const style_txt = {
    margin: '50px 0px',
    padding: '30px auto',
    backgroundColor: 'ivory',
    maxWidth: '100%',
  }

  return (
    <div className='Profile' style={style_profile}>
      <img
        style={{ backgroundColor: 'ivory', width: '350px' }}
        src={children}
        alt=''
      />
      <div className='txt' style={style_txt}>
        <h1 style={{ backgroundColor: 'ivory' }}>Name: {fullName}</h1>
        <h2 style={{ backgroundColor: 'ivory' }}>Profession: {profession}</h2>
        <h3 style={{ backgroundColor: 'ivory' }}>Biography: </h3>
        <h5
          style={{
            backgroundColor: 'ivory',
            padding: '15px 20px',
          }}
        >
          {bio}
        </h5>

        <button
          style={{
            backgroundColor: 'ivory',
            float: 'right',
            margin: '20px 30px',
            padding: '10px',
          }}
          onClick={() => handleName(fullName)}
        >
          Who I am ?
        </button>
      </div>
    </div>
  )
}

Profile.defaultProps = {
  fullName: 'Your name',
  bio: 'Describe yourself',
  profession: 'What do you do for living ?',
  children: 'profilePic.png',
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
}

export default Profile
