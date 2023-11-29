"use client"; // This is a client component 👈🏽
import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })
import react,{useEffect} from 'react'
import { usePathname, useSearchParams } from 'next/navigation';

export default function RootLayout({ children }) {

  const pathname = usePathname()
  let locationName = pathname.replace("/","");
  let locationName2 = locationName.replace("-"," ");
  let locationName3 = locationName2.replace("-"," ");

  let quotes_data = "";
  let completeURL = "";
  
  if(locationName3 != ""){
    
    if (typeof window !== 'undefined') {
      quotes_data = ((window.location.search).replace("?query=","")).replace(/-/g," ");
      completeURL = window.location.href;
    }

    
  }
  
  
  return (
    <html lang="en">
  
        <head>

        {locationName3 == "" && <>
          <title>{"TheCodeCups is the power of custom software on rental basis at an incredible price of 4999 "}</title>
          <meta name="description" content={" | TheCodeCups is the power of custom software on rental basis at an incredible price of 4999. Elevate your business with innovative solutions designed for your unique needs."} />
          </>}


        {locationName3 == "quotes" && quotes_data != null && <>
          <title>{quotes_data +  "| TheCodeCups is the power of custom software on rental basis at an incredible price of 4999 "}</title>
          <meta name="description" content={quotes_data +" | TheCodeCups is the power of custom software on rental basis at an incredible price of 4999. Elevate your business with innovative solutions designed for your unique needs."} />
          
        </>}
  
        <link rel="canonical" href={completeURL} />

        <link rel="stylesheet" href="/css/base.css" />
        <link rel="stylesheet" href="/css/vendor.css" />
        <link rel="stylesheet" href="/css/main.css"/>
        

        <meta name="google-site-verification" content="YvExHYu4SPCjcQfyPJHrBcnuvxcfqULmjrW33LUiQgY" />
        <meta name="google-site-verification" content="uhX4boUYMl5Rj1IQgbcdGLEBDMmn8XDOc6C9LQ_YbTw"/>
        
        
        <Script src="js/modernizr.js" />
        <Script src="js/pace.min.js" />
        <Script src="js/jquery-3.2.1.min.js" />
        <Script src="js/plugins.js" />
    
      </head>
      <body className={inter.className}>
      {children}
      </body>
    </html>
  )
}