import "./App.css";
import Profile from "./profile/Profile";

function App() {
  const handleName = (name) => {
    alert(name);
  };

  return (
    <div className="App" style={{ margin: "0px 30px", display: "flex" }}>
      <Profile
        fullName={"Sherlock HOLMES"}
        bio={
          "Sherlock HOLMES is the fictional but brilliant detective created by Arthur Conan Doyle in 1887, created for the novel A Study In Scarlet, published in Beeton's Christmas Annual. Sherlock Holmes has essentially an obsessive personality. He works compulsively on all his cases and his deductive powers are phenomenal"
        }
        profession={"Detective"}
        func={handleName}
      >
        sherlock.jpg
      </Profile>
    </div>
  );
}

export default App;
