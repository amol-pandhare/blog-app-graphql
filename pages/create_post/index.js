import React from "react";
import { gql, useMutation } from "@apollo/client";
import Footer from "../../components/Footer";
import Navigation from "../navigation";
import { useRouter } from 'next/router';
import toast from "../../components/Toast";

export default function CreatePage() {
    const history = useRouter();
    const ADD_BLOG = gql`
      mutation (
        $input: CreatePostInput!
      ) {
        createPost(input: $input) {
          id
          title
          body
        }
      }
    `

    const [addNew, { data, loading, error }] = useMutation(ADD_BLOG);

    // if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    if(data && data.createPost) {
        // console.log(data, 'show toast and push user to homepage')
        alert("New post created.");
        // toast({type:'success', message:'Success'});
        history.push('/');
    }
    

    const createPost = () => {
        addNew({ variables: {
            "input": {
            "title": "A Very new Captivating Post Title",
            "body": "Some interesting content theat is long enough."
            }
        } });
    }

//   const notify = React.useCallback((type, message) => {
//     toast({ type, message });
//   }, []);

//   const dismiss = React.useCallback(() => {
//     toast.dismiss();
//   }, []);
const submitContact = async (event) => {
    event.preventDefault();
    // alert(`So your name is ${event.target.desc.value}?`);
    addNew({ variables: {
        "input": {
        "title": event.target.title.value,
        "body": event.target.desc.value
        }
    } });
  };

    return (
        <div className="py-8 px-8">
            <Navigation />

            <div className="max-w-full my-2 overflow-hidden rounded shadow-lg">
                <div className="px-6 py-4">
                    <div className="mb-2 text-xl font-bold">Create a Post</div>
                    <form className="flex flex-col" onSubmit={submitContact}>
                    <label htmlFor="title" className="mb-2 italic">Title</label>
                    <input
                        className="mb-4 border-b-2"
                        id="title"
                        name="title"
                        type="text"
                        // autocomplete="name"
                        required
                    />
                    <label htmlFor="desc" className="mb-2 italic">Description</label>
                    <textarea
                        className="mb-4 border-b-2"
                        id="desc"
                        name="desc"
                        type="text"
                        // autocomplete="name"
                        required
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                    >
                        Submit
                    </button>
                    </form>
                </div>
            </div>
 
            {/* <button onClick={createPost} >Post</button> */}
            <Footer/>
        </div>
    )
}