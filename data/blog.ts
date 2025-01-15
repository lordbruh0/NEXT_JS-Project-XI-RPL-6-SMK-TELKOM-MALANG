export interface blogPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    exceprt: string;
    content: string;
    category: string;
}

export const blogPosts: blogPost[] = [
    {
        id: 1,
        title: "BSOD day 1",
        slug: "blog-post-1",
        date: "2022-01-01",
        exceprt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Mauris feugiat, libero in ultr",
        category: "error"
    },
    {
        id: 2,
        title: "BSOD day 2",
        slug: "blog-post-1",
        date: "2022-01-01",
        exceprt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Mauris feugiat, libero in ultr",
        category: "fixed"
    }
];