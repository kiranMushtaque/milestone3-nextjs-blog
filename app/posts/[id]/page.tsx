"use client";
import { posts } from "../../data/posts";
import { useRouter } from "next/navigation";
import CommentSection from "../../components/CommentSection";
import Image from "next/image";

const PostPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const post = posts.find((post) => post.id === id);

  const router = useRouter();

  const currentIndex = posts.findIndex((post) => post.id === id);

  const previousPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost =
    currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;

  if (!post) {
    return <p> Post not Found!</p>;
  }
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-semibold underline">{post.title}</h1>

      <Image
        src={post.image}
        alt={post.title}
        className="w-full h-auto"
        width={500}
        height={300}
      />
      <p className="text-lg mt-4">{post.content}</p>
      {/* navigation button */}
      <div className="flex justify-between mt-4 flex-row-reverse">
        {nextPost && (
          <button
            onClick={() => router.push(`/posts/${nextPost.id}`)}
            className="text-blue-700 hover:text-blue-900 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md shadow-md transition-all"
          >
            Next Post:{nextPost.title}
          </button>
        )}
        {previousPost && (
          <button
            onClick={() => router.push(`/posts/${previousPost.id}`)}
            className="text-blue-700 hover:text-blue-900 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md shadow-md transition-all"
          >
            Previous Post:{previousPost.title}
          </button>
        )}
      </div>
      {/* CommentSection */}

      <CommentSection postId={id} />
    </div>
  );
};

export default PostPage;
