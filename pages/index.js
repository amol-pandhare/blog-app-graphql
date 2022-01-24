import Navigation from './navigation';
import { gql, useQuery } from "@apollo/client";
import BlogItem from '../components/Blog-Item';
import Footer from '../components/Footer';

export default function HomePage() {
    const QUERY = gql`
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
    `;

    const { data, loading, error } = useQuery(QUERY);

    if (loading) {
      return (
        <div style={{textAlign: 'center'}}>
          <h2>
            Loading...
          </h2>
        </div>
      );
    }
  
    if (error) {
      console.error(error);
      return <h1>Looks like the service is down. Refresh to retry.</h1>;
    }

    const posts = data.posts.data;

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