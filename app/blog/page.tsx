import Link from "next/link";
import { blogPost, blogPosts } from "@/data/blog";

export default function BlogPage() {
    return (
        <main className="container mx-auto">
            <div className="bg-black mx-auto max-w-2xl px-4 py-16 sm:px-10 sm:py-5 lg:max-w-7xl lg:px-8 h-screen">
                <h1 className="text-4xl font-bold tracking-tight text-left text-white pb-10">Blog Posts</h1>
                <div className="grid gap-6">
                    {blogPosts.map((post) => (
                        <Link href={`/blog/${post.slug}`}>
                       <div key={post.id} className="bg-white/30 backdrop-blur-sm  p-4 rounded-lg hover:border-2 hover:border-white/65">
                        <h2 className="text-xl font-semibold mb-2 text-white ">
                            {post.title}
                        </h2>
                        <p className="text-white text-sm font-semibold mb-2">{post.date}</p>
                        <p className="text-w">{post.exceprt}</p>
                       </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}