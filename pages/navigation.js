import Link from 'next/link'

export default function Navigation() {
    return (
      <div>
        {/* <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1> */}
        
          <div className="hero-image">
            <div className="hero-text">
              <h1 className='text-3xl font-bold'>I am John Wick</h1>
              <p>And I'm a Developer</p>
            </div>
          </div>

          {/* <img src='https://www.w3schools.com/howto/photographer.jpg' */}
          <br/><br/><br/>

          <p>
            <Link href="/" >
              <a className="py-8 px-8 underline">Home</a>
            </Link>
          
            <Link href="/create_post">
              <a className="py-8 px-8 underline">Create a Post</a>
            </Link>
          </p>
        </div>
      )
}  