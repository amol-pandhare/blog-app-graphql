import { useRouter } from 'next/router'
import Footer from '../../components/Footer';
import Navigation from '../navigation';

export default function BlogPage(props) {
    const hist = useRouter();
    const post = hist.query;
    // const post = {
    //     id: 1,
    //     title: "Blog title",
    //     body: "This is the blog content "
    // };

    return (
        
        <div className="py-8 px-8">
            <Navigation />

            <div className='py-8 px-8 max-w-full mx-auto my-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
                <div className="space-y-2 sm:text-left space-y-0.5">
                    <h1 className="text-blue-500 text-2xl underline">Blog details page </h1>
                    <br/>
                    <p className="text-lg text-black font-semibold">{post.title}</p>
                    <p className="text-slate-500 font-medium">{post.body}</p>

                    <button 
                        className="content-end px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                        onClick={hist.back}>Back</button>
                </div>
            </div>

            <Footer />
        </div>
    )
}