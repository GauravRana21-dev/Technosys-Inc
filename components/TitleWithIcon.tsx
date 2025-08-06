import React from 'react'
import ButtonCTA from './ButtonCTA'
import Image from 'next/image'


interface TitleWithIconProps {
    title : string,
    description : string,
    image : string[],
    buttonTitle : string,
    buttonLink : string,
}

const TitleWithIcon = ({title, description, image, buttonTitle, buttonLink} : TitleWithIconProps) => {
  return (
    <div className="w-full md:h-[500px] flex flex-col items-center justify-center relative">
    <div className="container mx-auto">
      <h1 className="mt-10 md:mt-0 text-4xl md:text-9xl font-bold text-center tracking-wider">
        {title}
      </h1>
      <p className="my-10 md:w-1/2 text-center mx-auto">
        {description}
      </p>
      <ButtonCTA className='mx-auto' text={buttonTitle} href={buttonLink} />
    </div>
    
    <div className="absolute inset-0 pointer-events-none">
  <Image 
    className='absolute top-8 right-4 md:top-12 md:right-20 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain animate-bounce' 
    src={image[0]} 
    alt="image" 
    width={100} 
    height={50} 
    style={{ animationDelay: '0.3s', animationDuration: '2.8s' }}
  />
  <Image 
    className='absolute top-24 left-2 md:top-32 md:left-8 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain animate-bounce' 
    src={image[1]} 
    alt="image" 
    width={100} 
    height={50} 
    style={{ animationDelay: '1.2s', animationDuration: '3.4s' }}
  />
  <Image 
    className='absolute bottom-20 right-3 md:bottom-24 md:right-12 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain animate-bounce' 
    src={image[2]} 
    alt="image" 
    width={100} 
    height={50} 
    style={{ animationDelay: '0.7s', animationDuration: '2.6s' }}
  />
  <Image 
    className='absolute bottom-32 left-6 md:bottom-40 md:left-24 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain animate-bounce' 
    src={image[3]} 
    alt="image" 
    width={100} 
    height={50} 
    style={{ animationDelay: '1.8s', animationDuration: '3.1s' }}
  />
</div>
  </div>
  )
}

export default TitleWithIcon
