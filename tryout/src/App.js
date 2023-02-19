import "./App.css";
import UserInfoList from "./components/UserInfoList";
import UserInput from "./components/UserInput";
import ModalWarn from "./components/ModalWarn";
import Wrapper from "./components/helpers/Wrapper";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([
    "frank(6 years old)",
    "ben(9 years old)",
  ]);
  const [error, setError] = useState("");
  const [modalView, setModalView] = useState(false);

  const addNewUser = function (userInfo) {
    if (typeof userInfo !== "object") {
      setError(userInfo);
      setModalView(true);
      return;
    }
    const entry = `${userInfo.name} (${parseInt(userInfo.age)}  years old)`;
    setUserList((oldList) => {
      setError("");
      setModalView(false);
      return [...oldList, entry];
    });
  };

  const toggleModal = function () {
    setModalView(!modalView);
  };

  let content = <UserInfoList userInfo={userList} />;
  if (modalView) {
    content = <ModalWarn modalTogle={toggleModal}>{error}</ModalWarn>;
  }
  return (
    <Wrapper>
      <UserInput addUser={addNewUser} />
      {content}
    </Wrapper>
  );
}

export default App;
