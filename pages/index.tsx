/*index.tsx*/
import Link from 'next/link';
import { sanityClient, urlFor } from '../sanity'
import { Post } from '../typings'

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);
  return(

    <div className=" flex-auto justify-between items-center max-w-7xl mx-auto border-black lg:py-0 relative overflow rounded-md cursor-pointer">
 
       <img 
      className="flex items-center space-y-5 cursor-pointer  hover:scale-105 transition-transform duration-200 ease-in-out " src="https://st2.depositphotos.com/4431055/11854/i/950/depositphotos_118547982-stock-photo-aromatic-perfume-bottles.jpg"
      width={1500} height={768}
      alt=" "/>
  
         {/* Posts */}
         <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6">
       {posts.map((post) => (
         <Link key={post._id} href={`/post/${post.slug.current}`}>
           <div className="border rounded-lg group cursor-pointer overflow-hidden">
             <img 
             className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out" 
             src={urlFor(post.mainImage).url()!} 
              alt=" "/>
              <p className="text-lg  text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 font-bold cursor-pointer">{post.title}</p>
           </div>
         </Link>

       ))} 
     </div>
  </div>
)
  }
export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug
  
  }`
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  }
}