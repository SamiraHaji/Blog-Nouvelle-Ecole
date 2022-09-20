/*layout!;js*/
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children }) => {
  return (
  <div>
     <Head>
        <title>Blog - Nouvelle - Ecole </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<div>
  <div className="">
  <Header />
  </div>
    <main className='flex-grow'>
        {children}
    </main>
    <Footer/>
</div>
</div>
  )
}
export default Layout