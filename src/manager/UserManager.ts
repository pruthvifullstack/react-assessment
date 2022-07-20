import { User } from "../modal";
import { UserService } from "../service/UserService";
import StateManager from "./StateManager";

export default class UserManager {
  static getAll = async () => {
    const userResponse = await UserService.getAllUsers();
    StateManager.setUsers(userResponse || []);
  };

  static getAllPosts = async () => {
    const postResponse = await UserService.getAllPosts();
    StateManager.setPosts(postResponse || []);
  };

  static getPostsByUser = async (user: User) => {
    const postResponse = await UserService.getPostsByUser(user);
    StateManager.setPosts(postResponse || []);
  };
}
