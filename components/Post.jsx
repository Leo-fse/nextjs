import Link from "next/link";

export function Post({ post }) {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
      <br />
      <span className="ml-8 line-clamp-1 text-gray-500">{post.body}</span>
    </div>
  );
}
