import "./UserInfoList.css";
import UserItem from "./UserItem";
function UserInfoList(props) {
  return (
    <ul>
      {props.userInfo.map((info) => {
        return <UserItem key={Math.random() * 100}>{info}</UserItem>;
      })}
    </ul>
  );
}

export default UserInfoList;
