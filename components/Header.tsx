import Link from 'next/link'
import { useTheme } from 'next-themes'
import Button from './Button'
import {useState,} from 'react';
import { useRouter } from 'next/router'
import {  MenuIcon, SearchIcon, XIcon } from '@heroicons/react/outline';








function  Header() {
  const router = useRouter()
const [IsOpenSearch, setIsOpenSearch] = useState(false)
const [IsOpenMenu, setIsOpenMenu] = useState(false)


const {systemTheme, theme, setTheme} = useTheme() 
 const renderThemeChanger = () => {

  const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return(
      <Button className="w-6 h-6 hidden md:inline-flex text-black dark:text-white cursor-pointer"
      onClick={()=>setTheme('light')} >
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
</svg>
      </Button>
    )
  } else{
    return (
      <Button 
      className=""
      onClick={()=>setTheme('dark')} 
       >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
      </Button>
    )}}
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
      <Link href="/">
      <img 
      className='w-44 object-contain cursor-pointer hover:scale-125' 
      src="https://media-exp1.licdn.com/dms/image/C4D0BAQEDk3lMpmKiYw/company-logo_200_200/0/1600420727631?e=1666828800&v=beta&t=-B8vo1msqd2YIkJRaAqQfQ3WXT7iQvPfo1Y9p1vAuUQ"
      alt="logo"/>
      </Link>

    </div>
      <div className="flex items-center space-x-5">
      <div className='flex gap-5'>
  {renderThemeChanger()}
            <SearchIcon   className='w-6 h-6 md:inline-flex text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-500 cursor-pointer'
            onClick={()=> setIsOpenSearch(true)}/>
            <MenuIcon  className='w-6 h-6 md:inline-flex text-black dark:text-white hover:text-gray-400 dark:hover:text-gray-500 cursor-pointer'
            onClick={()=> setIsOpenMenu(true)}/> 
        </div>
    </div>
         {/* search modal start */}
        {/* says show modal if not present.*/}
        {IsOpenSearch ? ( 
          <div className='flex items-center bg-white justify-center max-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal md:h-full'>

        <div className="relative p-4 w-full max-w-7xl h-full md:h-auto items-end justify-end ">
        <button type="button" 
     className="text-black flex items-end justify-end" data-modal-toggle="extralarge-modal"
     onClick={()=> setIsOpenSearch(false)}>
    <XIcon className="my-5 w-auto px-8 h-10 text-black hover:text-gray-400 cursor-pointer"/>
    </button> 
        <h1 className='mt-2 mx-4 h-16 text-gray-400 font-semibold text-center text-3xl'>Recheche</h1>
        <div className="flex w-full h-auto shadow-lg hover:shadow-lg focus-within:shadow-lg 
   max-w-md rounded-full border border-gray-200 px-5 py-3 items-center justify-center
  sm:max-w-xl lg:max-w-2xl">
   <input type="text" className='flex-grow focus:outline-none items-center justify-center'/>
   </div>
   </div>
</div>

) : null}


{/* menu modal start */}


{IsOpenMenu ? ( 
          <div className='flex items-center justify-center bg-black max-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full h-full md:inset-0 h-modal md:h-full dark:text-white'>

        <div className="relative p-4 w-full max-w-7xl h-full md:h-auto items-end justify-end ">
        <button type="button" 
     className="text-black flex items-end justify-end" data-modal-toggle="extralarge-modal"
     onClick={()=> setIsOpenMenu(false)}>
    <XIcon className="my-5 w-auto px-8 h-10 text-black hover:text-gray-400 dark:text-white cursor-pointer"/>
    </button> 
        <h1 className='mt-2 mx-4 h-16 text-gray-400 font-semibold text-center text-3xl'>Recheche</h1>
        <div className="flex w-full h-auto shadow-lg hover:shadow-lg focus-within:shadow-lg 
   max-w-md rounded-full border border-gray-200 px-5 py-3 items-center justify-center
  sm:max-w-xl lg:max-w-2xl">
   <input type="text" className='flex-grow focus:outline-none cursor-pointer items-center justify-center'/>
   <SearchIcon className='h-5 mr-3 text-gray-500'/>
   </div>
   <div className="flex items-center justify-center">
      <ul className="flex space-x-4">           
        <li>
<button className="w-6 h-6 font-semibold text-black hover:text-gray-400 dark:text-white  inline-flex items-center space-x-2 rounded cursor-pointer">
          <Link href="https://www.linkedin.com/in/rafik-bouttaba-69664359/?originalSubdomain=fr">
          <svg className="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
            <g><path d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055"></path></g>
          </svg>
          </Link>
        </button>
</li>
<li>
<button className="w-6 h-6 font-semibold text-black hover:text-gray-400 dark:text-white inline-flex items-center space-x-2 rounded">
          <Link href="https://twitter.com/rafikatba">
          <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </Link>
        </button>
</li>
<li>
  <div className="w-6 h-6 text-black hover:text-gray-400 dark:text-white inline-flex items-center space-x-2 rounded cursor-pointer" >
    <img
    src="data:image/jpeg;base64,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"
    onClick={() =>router.push("/")}
   alt=" "/>
  </div>
</li>
<li>  
  <button className="w-6 h-6 text-black  hover:text-gray-400 dark:text-white  cursor-pointer">
    <Link href="https://youtu.be/yxdMxe9zlCs">
  <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" /></svg>
  </Link>
  </button>
  </li>
  </ul>
  </div>
  </div>
  </div>
) : null}
</header>
  )
}
export default Header