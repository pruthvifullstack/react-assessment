import { useSnapshot } from "valtio";
import { UserState } from "../../store";
import PostItem from "./PostItem";
export default function PostList() {
  const { postList } = useSnapshot(UserState);

  return (
    <div>
      {postList.map((e) => (
        <PostItem post={e} />
      ))}
    </div>
  );
}
