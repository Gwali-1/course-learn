import "./UserInput.css";
import { useState } from "react";

///
function UserInput(props) {
  const [userInputs, setUserInputs] = useState({
    name: "",
    age: "",
  });

  const addUserHandler = function (event) {
    event.preventDefault();
    console.log("form submitted");

    if (isNaN(+userInputs.age) || parseInt(userInputs.age) < 0) {
      return props.addUser("Ivalid age input");
    }

    if (userInputs.name.length === 0 || userInputs.age.length === 0) {
      return props.addUser("No Values provided");
    }

    props.addUser(userInputs);
    setUserInputs({
      name: "",
      age: "",
    });
    return;
  };

  const nameInputHandler = function (event) {
    const userName = event.target.value;
    setUserInputs((val) => {
      return { ...val, name: userName };
    });
  };

  const ageInputHandler = function (event) {
    const userAge = event.target.value;
    setUserInputs((val) => {
      return { ...val, age: userAge };
    });
  };

  return (
    <div className="input-cont">
      <form onSubmit={addUserHandler}>
        <div className="user-input-name">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={userInputs.name}
            onChange={nameInputHandler}
            id="name"
          ></input>
        </div>

        <div className="user-input-age">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            value={userInputs.age}
            onChange={ageInputHandler}
            id="age"
          ></input>
        </div>
        <div className="user-input-button">
          <button>Add User</button>
        </div>
      </form>
    </div>
  );
}

export default UserInput;
