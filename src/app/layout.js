"use client"; // This is a client component 👈🏽
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import react,{useEffect} from 'react'
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {

  const pathname = usePathname()
  let locationName = pathname.replace("/","");
  let locationName2 = locationName.replace("-"," ");
  let locationName3 = locationName2.replace("-"," ");

  useEffect(()=>{
    console.log(locationName3);
  },[]);

  return (
    <html lang="en">
         <head>
        <title>{locationName3 != "" ? locationName3  + " | TheCodeCups is the power of custom software on rental basis at an incredible price of 4999 ":"TheCodeCups is the power of custom software on rental basis at an incredible price of 4999"}</title>
        <meta name="description" content={locationName3 != "" ? locationName3 +" | TheCodeCups is the power of custom software on rental basis at an incredible price of 4999. Elevate your business with innovative solutions designed for your unique needs.": "TheCodeCups is the power of custom software on rental basis at an incredible price of 4999. Elevate your business with innovative solutions designed for your unique needs."} />
        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css"/>
        
        <Script src="js/modernizr.js" />
        <Script src="js/pace.min.js" />
        <Script src="js/jquery-3.2.1.min.js" />
        <Script src="js/plugins.js" />

        <meta name="google-site-verification" content="uhX4boUYMl5Rj1IQgbcdGLEBDMmn8XDOc6C9LQ_YbTw"/>
        { locationName3 == "" && <link rel="canonical" href="https://thecodecups.web.app"/> }
    {/* <Script src="js/package.js" /> */}

  
      </head>
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}
