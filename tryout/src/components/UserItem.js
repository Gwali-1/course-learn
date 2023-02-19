import "./UserItem.css";

function UserItem(props) {
  return <li className="user-info">{props.children}</li>;
}

export default UserItem;
