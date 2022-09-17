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
      className="flex items-center space-y-5 cursor-pointer  hover:scale-105 transition-transform duration-200 ease-in-out " src="https://cdn-s-www.leprogres.fr/images/5F9E541C-B615-4DC2-AF4A-15813F3A2F74/NW_raw/pascaline-bidoung-(professeure-de-lettres-presidente-d-association)-maitre-aminata-sonko-(avocate-au-barreau-de-lyon)-hanta-le-gras-rakotomavo-(formatrice-aupres-des-publics-en-difficulte)-jean-eric-sende-(consultant-en-sport-pour-le-developpement)-robert-tiam-(directeur-a-l-afpa-anissa-khedher-(deputee-du-rhone)-anne-sophie-thomas-(co-fondatrice-et-ceo-gestia-solidaire)-rafik-atba-(delegue-regional-les-determines)-table-ronde-diasporas-diversite-binationaux-une-force-pour-la-france-mardi-19-avril-2022-villeurbanne-restaurant-le-sapristi-photo-progres-ilham-seghrouchni-1650497819.jpg"
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
              <p className="text-lg font-bold cursor-pointer">{post.title}</p>
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