import React from 'react'


interface IIconBox {
    icon:JSX.Element;
    title:string;
    text:string;
}

const IconBox = ({icon, title, text}:IIconBox) => {
  return (
    <div className='flex flex-col items-center  md:items-start gap-1 w-[300px] '>
        {icon}
        <h3 className='font-bold text-lg mb-1 md:text-left text-center'>{title}</h3>
        <p className='text-gray text-sm md:text-left text-center'>{text}</p>
    </div>
  )
}

export default IconBox