import React from 'react'

import PropTypes from 'prop-types'

const Profile = (props) => {
  const { fullName, bio, profession, func, children } = props

  const handleClick = () => {
    alert(fullName)
  }
  const style_profile = {
    margin: '50px',
    display: 'flex',
    borderRadius: '15px',
    boxShadow:
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  }
  const style_txt = {
    margin: '15px 0px',
    padding: '30px auto',
  }
  const style_button = {
    float: 'right',
    margin: '20px 30px',
    padding: '10px',
  }

  return (
    <div className='Profile' style={style_profile}>
      {children}
      <div className='txt' style={style_txt}>
        <h3>Name: {fullName}</h3>
        <h3>Profession: {profession}</h3>
        <h3>Biography: </h3>
        <h5 style={{ padding: '15px 20px' }}>{bio}</h5>
        <button
          style={style_button}
          onClick={() => {
            func === undefined ? handleClick() : func(fullName)
          }}
        >
          Who I am ?
        </button>
      </div>
    </div>
  )
}

Profile.defaultProps = {
  fullName: 'Default name',
  bio: 'A biography is the non-fiction, written history or account of a person’s life. Biographies are intended to give an objective portrayal of a person, written in the third person. ',
  profession: 'What do you do for living ?',
  children: (
    <img
      style={{ width: '250px', height: '320px' }}
      src='profilePic.png'
      alt=''
    />
  ),
}

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
}

export default Profile
