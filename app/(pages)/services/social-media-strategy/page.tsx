import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Media Strategy',
  description: 'Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping',
  keywords: [
    'technosys inc',
    'technosys inc social media strategy',
    'technosys inc social media strategy page',
    'technosys inc social media strategy page design',
  ],
  openGraph: {
    title: 'Social Media Strategy | Technosys Inc',
    description: 'Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping',
    images: [],
  },
  twitter: {
    title: 'Social Media Strategy | Technosys Inc',
    description: 'Technosys Inc is a creative agency that helps brands build insightful strategy, creating unique designs helping',
    images: [],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.technosysinc.com/services/social-media-strategy',
  },
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest',
  authors: [{ name: 'Technosys Inc', url: 'https://www.technosysinc.com' }],
  creator: 'Technosys Inc',
  publisher: 'Technosys Inc',
}

const SocialMediaStrategy = () => {
  return (
    <div className='w-full h-[500px] flex flex-col items-center justify-center'>
      <div className='container mx-auto'>  
        <h1 className='text-9xl font-bold text-center tracking-wider'>Social Media Strategy</h1>
        <p className='my-10 w-1/2 text-center mx-auto'>We help you build a strong online community, engage your audience, and increase your brand’s visibility across various social platforms.</p>
      </div>
    </div>
  )
}

export default SocialMediaStrategy
