
import Link from "next/link";
import { posts } from "./data/posts";

const BlogList = () => {
  return (
    <div className="space-y-6">
     
      <h2 className="text-4xl font-semibold text-center text-gray-800">
        TypeScript Blog
      </h2>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="p-4 border rounded-md shadow-sm bg-sky-900 hover:bg-blue-400"
          >
            <Link
              href={`/posts/${post.id}`}
              className="text-xl font-bold text-white hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  
  );
};

export default BlogList;
