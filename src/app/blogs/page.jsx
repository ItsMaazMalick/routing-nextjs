import Link from "next/link";

export default function Blogs() {
  return (
    <div className="flex gap-4">
      <Link href="/blogs/1" className="bg-green-600 text-white">
        <h1>Blog Title</h1>
        <p>This is 1 blog</p>
      </Link>
      <Link href="/blogs/2" className="bg-green-600 text-white">
        <h1>Blog Title</h1>
        <p>This is 2 blog</p>
      </Link>
      <Link href="/blogs/3" className="bg-green-600 text-white">
        <h1>Blog Title</h1>
        <p>This is 3 blog</p>
      </Link>
    </div>
  );
}
