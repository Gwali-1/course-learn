import "./App.css";
import UserInfoList from "./components/UserInfoList";
import UserInput from "./components/UserInput";
import ModalWarn from "./components/ModalWarn";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([
    "frank(6 years old)",
    "ben(9 years old)",
  ]);
  const [error, setError] = useState("");

  const addNewUser = function (userInfo) {
    if (typeof userInfo !== "object") {
      return setError(userInfo);
    }
    const entry = `${userInfo.name} (${parseInt(userInfo.age)}  years old)`;
    setUserList((oldList) => {
      setError("");
      return [...oldList, entry];
    });
  };

  let content = <UserInfoList userInfo={userList} />;
  if (error) {
    content = <ModalWarn>{error}</ModalWarn>;
  }
  return (
    <div>
      <UserInput addUser={addNewUser} />
      {content}
    </div>
  );
}

export default App;
