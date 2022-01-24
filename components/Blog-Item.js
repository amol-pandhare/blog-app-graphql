import { useRouter } from 'next/router'

export default function BlogItem({post}) {
    const history = useRouter();
    const onMoreClick = (event) => {
        console.log(post, event);
        history.push({pathname: '/blog_page', query: post});
    }

    return (
        <div className="py-8 px-8 max-w-full mx-auto my-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <div className="space-y-2 sm:text-left space-y-0.5">
                <p className="text-lg text-black font-semibold">
                    {post.title}
                </p>
                <p className="text-slate-500 font-medium">
                    {post.body}
                </p>
                <p className="underline  hover:decoration-double font-medium">
                {post.user.name} - {post.user.email}
                </p>
            </div>
            <button 
                onClick={onMoreClick}
                className="content-end px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                more...
            </button>
        </div>
    )
}