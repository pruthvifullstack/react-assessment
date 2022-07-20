import { Post, User } from "../modal";
import { SelectedUser, UserState } from "../store";

export default class StateManager {
  static setUsers = async (userList: User[]) => {
    UserState.userList = userList;
  };

  static setPosts = async (postList: Post[]) => {
    UserState.postList = postList;
  };

  static setSelectedUser = async (user: User) => {
    const { phone, email, name, id } = user;
    SelectedUser.name = name;
    SelectedUser.id = id;
    SelectedUser.email = email;
    SelectedUser.phone = phone;
  };
}
