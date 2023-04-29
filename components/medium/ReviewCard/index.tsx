import ReviewStars from '@/components/small/ReviewStars';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface IReviewCardProps {
    image:StaticImageData;
    text:string;
    name:string;
}

const ReviewCard = ({image, text, name}: IReviewCardProps) => {
  return (
    <div className='p-6 rounded-xl bg-white shadow-xl w-[300px]'>
        <div className='flex items-center gap-3'>
            <Image className='rounded-lg h-[56px] w-[56px] object-cover' alt='avatar' src={image} />
            <div>
                <span className='font-medium ml-1'>{name}</span>
                <ReviewStars/>
            </div>
        </div>
        <p className='my-2 text-sm'>{text}</p>
        <span className='font-medium text-xs text-gray'>15:05 PM. Apr 12. 2022</span>
    </div>
  )
}

export default ReviewCard