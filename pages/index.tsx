/*index.tsx*/
import Link from 'next/link';
import { sanityClient, urlFor } from '../sanity';
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  console.log(posts);

  return (
    <div className=" flex-auto justify-center it ems-center max-w-7xl mx-auto lg:py-0 relative overflow rounded-md cursor-pointer">
      <div className="m-6">
        <img
          className="sm:hidden md:inline-flex hidden lg:flex justify-center items-center space-y-5 cursor-pointer hover:scale-105 transition-transform duration-200 ease-in-out w-full h-96 rounded-lg "
          src="./index.png"
          alt=" "
        />
      </div>
      {/* Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 ">
        {posts &&
          posts
            .sort((a, b) => (a._createdAt < b._createdAt ? 1 : -1))
            .map((post) => (
              <Link key={post._id} href={`/post/${post.slug.current}`}>
                <div className="border rounded-lg group cursor-pointer overflow-hidden">
                  <img
                    className="sm:10 md:h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                    src={urlFor(post.mainImage).url()!}
                    alt=" "
                  />
                  <p className="text-lg  text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-400 font-bold cursor-pointer">
                    {post.title}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
    _id,
    title,
    slug,
    _createdAt,
    author -> {
    name,
    image
   
  },
    description,
    mainImage,
    slug
  
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
