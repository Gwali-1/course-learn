import "./UserInput.css";
import { useState, useRef } from "react";

///
function UserInput(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [userInputs, setUserInputs] = useState({
    name: "",
    age: "",
  });

  const addUserHandler = function (event) {
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    event.preventDefault();
    console.log("form submitted");

    if (isNaN(+enteredAge) || parseInt(enteredAge) < 0) {
      return props.addUser("Ivalid age input");
    }

    if (enteredName.length === 0 || enteredAge.length === 0) {
      return props.addUser("No Values provided");
    }

    props.addUser(userInputs);

    //

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
            ref={nameInputRef}
          ></input>
        </div>

        <div className="user-input-age">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            value={userInputs.age}
            onChange={ageInputHandler}
            id="age"
            ref={ageInputRef}
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
