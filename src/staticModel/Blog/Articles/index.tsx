import { Post1 } from "./Post1";
import { Post2 } from "./Post2";
import { Post3 } from "./Post3";

export function getContent(postId: string) {
  switch (postId) {
    case "Post1":
      return <Post1 />;
    case "Post2":
      return <Post2 />;
    case "Post3":
      return <Post3 />;
    default:
      return <></>;
  }
}
