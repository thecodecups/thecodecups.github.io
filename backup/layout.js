import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Exclusive Custom Software on Rental at Just $4999 - Get Yours Now! TheCodeCups',
  description: 'Discover the power of custom software on rental at an incredible price of 4999. Elevate your business with innovative solutions designed for your unique needs. Streamline operations, boost productivity, and enhance user experiences. Get started today!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="/css/base.css" />
    <link rel="stylesheet" href="/css/vendor.css" />
    <link rel="stylesheet" href="/css/main.css"/>

    <Script src="js/modernizr.js" />
    <Script src="js/pace.min.js" />
    <Script src="js/jquery-3.2.1.min.js" />
    <link rel="canonical" href="https://thecodecups.web.app" />
    <Script src="js/plugins.js" />
    <meta name="google-site-verification" content="uhX4boUYMl5Rj1IQgbcdGLEBDMmn8XDOc6C9LQ_YbTw" />
    {/* <Script src="js/package.js" /> */}

  
      </head>
      <body className={inter.className}>{children}
    
      
    
    <Script src="js/main.js" />

    </body>
    </html>
  )
}
