import Image from 'next/image';
import React from 'react'

function Logo(props:any) {
  const {renderDefault, title} = props;



  return (
    <div className='flex items-center space-x-2'>
<Image className="rounded-full obj-cover " 
height={50}
width={50}
src="http://www.28006681.com/skins/342985/images/logo.jpg"
alt="logo" />

<>{renderDefault(props)}</>
    </div>
  )
}

export default Logo
