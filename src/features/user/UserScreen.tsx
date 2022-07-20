import { useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserManager from "../../manager/UserManager";
import PostComponet from "../posts/PostComponet";
import UserList from "./UserList";
import Container from "@mui/material/Container";

function UserScreen() {
  const loadUserData = async () => {
    await UserManager.getAll();
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <Container sx={{ marginTop: 7 }}>
      <Row>
        <Col sm={4}>
          <UserList />
        </Col>
        <Col sm={8}>
          <PostComponet />
        </Col>
      </Row>
    </Container>
  );
}

export default UserScreen;
