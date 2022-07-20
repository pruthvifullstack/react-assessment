import { User } from "../../modal";
import ListGroup from "react-bootstrap/ListGroup";
import { useSnapshot } from "valtio";
import { SelectedUser, UserState } from "../../store";
import Loading from "../Loading";
import { useState } from "react";
import UserManager from "../../manager/UserManager";
import StateManager from "../../manager/StateManager";
interface UserItemProps {
  user: User;
}

function UserItem({ user }: UserItemProps) {
  const { UserIsLoading } = useSnapshot(UserState);

  const [selectedUser, setSelectedUser] = useState(0);

  const { id } = useSnapshot(SelectedUser);

  const handleClick = async (user: User) => {
    setSelectedUser(user.id);
    if (user) {
      await UserManager.getPostsByUser(user);
      StateManager.setSelectedUser(user);
    }
  };

  return (
    <div>
      {UserIsLoading ? (
        <Loading />
      ) : (
        <ListGroup as="ul">
          <ListGroup.Item
            as="li"
            action
            style={{
              margin: 7,
              cursor: "pointer",
            }}
            onClick={() => handleClick(user)}
            active={selectedUser === id && selectedUser !== 0 ? true : false}
          >
            {user.id}
            {". "}
            {user.name}
          </ListGroup.Item>
        </ListGroup>
      )}
    </div>
  );
}

export default UserItem;
