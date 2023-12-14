'use client'
import Header from '../../components/Header'
import '../../styles/globals.css'
import { ThemeProvider } from "next-themes"
import Footer from '../../components/Footer'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Analytics />


      <body lang='' className='mx-auto dark:text-[#e1e6eb] text-[#1f1f20]'>
        <ThemeProvider defaultTheme="dark" attribute="class">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>

      </body>


    </html>
  )
}
