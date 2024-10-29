import React from 'react'
import Navbar from '../_components/storefront/Navbar'
import Footer from '../_components/storefront/Footer';

export default async function StoreFrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
    <main className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      {children}
      </main>
      <Footer/>
    </>
  )
}
