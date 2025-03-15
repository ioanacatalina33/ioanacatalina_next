import { PostCard } from "components/UI/PhotoContainers/PostCard";
import { BlogPostCard } from "types";

export default function BlogWall({ posts }: { posts: BlogPostCard[] }) {
  return (
    <div className="photo-wall row" style={{ minWidth: "vh" }}>
      {posts.map((post, i) => (
        <PostCard key={i} post={post} />
      ))}
    </div>
  );
}
