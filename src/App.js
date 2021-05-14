import './App.css'
import Profile from './profile/Profile'

function App() {
  const handleName = (name) => {
    alert(name)
  }
  return (
    <div
      className='App'
      style={{ margin: '0px 30px', display: 'flex', flexDirection: 'column' }}
    >
      <Profile />

      <Profile
        fullName={'Sherlock HOLMES'}
        profession={'Detective'}
        bio={
          "Sherlock HOLMES is the fictional but brilliant detective created by Arthur Conan Doyle in 1887, created for the novel A Study In Scarlet, published in Beeton's Christmas Annual. Sherlock Holmes has essentially an obsessive personality. He works compulsively on all his cases and his deductive powers are phenomenal"
        }
        func={handleName}
      >
        <img
          style={{ width: '250px', height: '320px' }}
          src='sherlock.jpg'
          alt=''
        />
      </Profile>

      <Profile
        fullName={'John H. WATSON'}
        profession={'Doctor'}
        bio={
          'Dr. John H. ... Watson, born in 1852, has served as an army surgeon in India, where he was wounded during the second Afghan War, and has returned to England in impaired health. He and Holmes meet in London; they share rooms at 221B Baker Street.'
        }
        func={handleName}
      >
        <img
          style={{ width: '250px', height: '320px' }}
          src='drWatson.jpg'
          alt=''
        />
      </Profile>
    </div>
  )
}

export default App
