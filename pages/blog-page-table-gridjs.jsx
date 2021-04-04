import { useEffect, useRef } from "react";
import { Grid } from "gridjs";
import "gridjs/dist/theme/mermaid.css";
import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Post({ post }) {
  const wrapperRef = useRef(null);

  const grid = new Grid({
    columns: ["No.", "TITLE", "BODY"],
    server: {
      url: "https://jsonplaceholder.typicode.com/posts/",
      then: (data) => {
        return data.map((d) => {
          return [d.id, d.title, d.body];
        });
      },
    },
    sort: true,
    fixedHeader: true,
    height: "600px",
    pagination: { limit: 20 },
    search: true,
    language: {
      search: {
        placeholder: "🔍 Search...",
      },
      pagination: {
        previous: "⬅️",
        next: "➡️",
        showing: "😃 Displaying",
        results: () => "Records",
      },
    },
  });

  useEffect(() => {
    grid.render(wrapperRef.current);
  });

  return (
    <Layout>
      <div ref={wrapperRef}>
        {/* <span>{post.id}</span>
      {" : "}
      <Link href={`/posts/${post.id}`}>
        <span className="cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200">
          {post.title}
        </span>
      </Link>
      <br />
      <span className="ml-8 line-clamp-1 text-gray-500">{post.body}</span> */}
      </div>
    </Layout>
  );
}
