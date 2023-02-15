import "./UserInfoList.css";

function UserInfoList(props) {
  return (
    <>
      <ul>
        {props.userInfo.map((info) => {
          return <li className="user-info">{info}</li>;
        })}
      </ul>
    </>
  );
}

export default UserInfoList;
