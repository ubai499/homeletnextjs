import Heads from "components/Head";
import Head from "components/Head"
import Scripts from "components/Scripts"
import $ from "jquery"
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react'
import '../styles/globals.css'
function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(false);
      const handleComplete = (url) => (url !== router.asPath) && setTimeout(() =>{setLoading(true)},1000);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (<div className='spinner-wrapper'>
    <div className="spinner"></div></div>)
}
export default function App({ Component, pageProps }) {
  return(
    <>
    {/* <Head/> */}
    <Heads/>
    {/* <Loading/> */}
    <Component {...pageProps} />
    {/* <Scripts/> */}
    </>
  ) 
}
