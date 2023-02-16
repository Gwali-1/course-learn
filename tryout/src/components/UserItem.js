import "./UserItem.css";

function UserItem(props) {
  return (
    <li key={props.key} className="user-info">
      {props.children}
    </li>
  );
}

export default UserItem;
