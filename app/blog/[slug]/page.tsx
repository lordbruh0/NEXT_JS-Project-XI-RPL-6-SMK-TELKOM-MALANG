import  { blogPosts } from '../../../data/blog';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

interface Params {
    slug: string
}

export default function BlogPostPage ({ params }: { params: Params }) {
    const post = blogPosts.find(post => post.slug === params.slug);

   if (!post) {
    return <div>Post not found</div>
   }

   return (
    <div className='bg-black container mx-auto'>
        <div className="'mx-auto max-w-2xl px-4 py-16 sm:px-10 sm:py-5 lg:max-w-7xl lg:px-8 min-h-screen h-auto">
            <Link href="/blog" className="text-lg font-bold tracking-tight text-left text-white pr-10">Back to Blog</Link>

            <h1 className="text-3xl font-bold mb-4 text-white">{post.title}</h1>

            <p className="text-white text-sm font-bold mb-4">{post.date}</p>

            <ReactMarkdown className="text-white">{post.content}</ReactMarkdown>
        </div>
    </div>
   )

}