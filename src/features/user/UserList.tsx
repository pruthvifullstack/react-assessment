import { useSnapshot } from "valtio";
import { UserState } from "../../store";
import UserItem from "./UserItem";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";
export default function UserList() {
  const { userList } = useSnapshot(UserState);

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        List of Users ({userList.length})
      </Typography>
      {userList.map((e) => (
        <UserItem key={e ? e.id : null} user={e} />
      ))}
    </Container>
  );
}
