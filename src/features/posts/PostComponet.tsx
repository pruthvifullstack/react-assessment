import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { SelectedUser, UserState } from "../../store";
import UserManager from "../../manager/UserManager";
import PostList from "./PostList";
import Loading from "../Loading";
import { Typography, Container, Divider } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";

function PostComponet() {
  const { phone, name, email } = useSnapshot(SelectedUser);
  const { postIsLoading, userList } = useSnapshot(UserState);
  const loadData = async () => {
    await UserManager.getAllPosts();
  };
  const firstLetter = name.charAt(0);

  useEffect(() => {
    loadData();
  }, [userList]);

  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom>
        All Posts
      </Typography>
      {postIsLoading ? (
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Loading />
        </Container>
      ) : (
        <>
          {name && phone && email && (
            <>
              <Container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 1,
                }}
              >
                <Card sx={{ display: "flex", maxWidth: 400 }}>
                  <Avatar
                    sx={{
                      bgcolor: deepOrange[500],
                      alignSelf: "center",
                      marginLeft: 5,
                      height: 50,
                      width: 50,
                    }}
                  >
                    {firstLetter}
                  </Avatar>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        color="text.secondary"
                        variant="h6"
                      >
                        {name}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {phone}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        component="div"
                      >
                        {email}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
              </Container>
              <Divider />
            </>
          )}
          <PostList />
        </>
      )}
    </Container>
  );
}

export default PostComponet;
