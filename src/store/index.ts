import { proxy } from "valtio";
import { Post, User } from "../modal";

interface UserState {
  userList: User[];
  postList: Post[];
  selectedId: number;
  selectedName: string;
  UserIsLoading: Boolean;
  postIsLoading: Boolean;
}

interface SelectedUserResponse {
  id: number;
  name: string;
  email: string;
  phone: string;
}
export const UserState = proxy<UserState>({
  userList: [],
  postList: [],
  selectedId: 0,
  selectedName: "",
  UserIsLoading: false,
  postIsLoading: false,
});

export const SelectedUser = proxy<SelectedUserResponse>({
  id: 0,
  name: "",
  email: "",
  phone: "",
});
