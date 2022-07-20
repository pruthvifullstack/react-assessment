import { Post, User } from "../modal";
import { UserState } from "../store";
import api from "./ApiService";

export class UserService {
  static getAllUsers = async () => {
    UserState.UserIsLoading = true;
    try {
      const response = await api.get<User[]>("/users");
      if (response) {
        UserState.UserIsLoading = false;
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static getAllPosts = async () => {
    UserState.postIsLoading = true;
    try {
      const response = await api.get<Post[]>("/posts");
      if (response) {
        UserState.postIsLoading = false;
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  static getPostsByUser = async (user: User) => {
    UserState.postIsLoading = true;
    try {
      const response = await api.get<Post[]>(`/posts?userId=${user.id}`);
      if (response) {
        UserState.postIsLoading = false;
        return response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
}
