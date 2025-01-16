import Link from "next/link";
import { blogPost, blogPosts } from "@/data/blog";

export default async function BlogPage({ searchParams }: { searchParams: {category?: string}}) {

    const category = searchParams.category

    const filteredBlog = category
        ? blogPosts.filter(blog => blog.category.toLowerCase() === category.toLowerCase())
        : blogPosts

    return (
        <main className="container mx-auto">
            <div className="bg-black mx-auto  px-4 py-16 sm:py-5 lg:px-8 h-screen">
                <h1 className="text-4xl font-bold tracking-tight text-left text-white pb-10">Blog Posts</h1>

                <div className="mt-4 mb-6 flex justify-start space-x-4">
                    <Link href="/blog" className={`text-white hover:text-red-500 ${!category ? 'font-bold text-red-500' : ''}`}>All</Link>
                    <Link href="/blog?category=error" className={`text-white hover:text-red-500 ${category === 'error' ? 'font-bold text-red-500' : ''}`}>error</Link>
                    <Link href="/blog?category=fixed" className={`text-white hover:text-red-500 ${category === 'fixed' ? 'font-bold text-red-500' : ''}`}>fixed</Link>
                </div>

                <div className="grid gap-6">
                    {filteredBlog.map((post, index) => (
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