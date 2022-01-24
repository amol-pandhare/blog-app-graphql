import { useEffect } from 'react';
import Navigation from '../navigation';
import { gql } from "@apollo/client";
import client from "../api/apollo_client";
import BlogItem from '../../components/Blog-Item';
import Footer from '../../components/Footer';

export default function HomePage({posts}) {
    useEffect(() => {
        console.log("In use effect");
        // getStaticProps();
    }, [])

    

    return (
        <div className="py-8 px-8">
            <Navigation />
            
            {
                posts && posts.map(post => {
                    return <BlogItem post={post} key={post.id}/>;
                })
            }
            <Footer/>
        </div>
    )
}
export async function getStaticProps() {
    console.log("I come here");
    const { data } = await client.query({
      query: gql`
        query (
            $options: PageQueryOptions
        ) {
            posts(options: $options) {
            data {
                id
                title
                body
                user {
                name
                username
                email
                }
            }
            meta {
                totalCount
            }
          }
        }
      `,
    });

    
    return {
      props: {
        posts: data.posts.data,
      },
   };
}