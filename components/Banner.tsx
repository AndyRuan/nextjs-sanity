import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-10'>
      <div>
      <h1 className='text-7xl '>Rhd&lsquo;s Daily Blog </h1>
      <h2 className='mt-5 md:mt-0 '>
        这个空间将记录一些 {" "}
        <span className="underline decoration-4 decoration-[#f7ab0a]">莫名其妙</span>
        {" "}
        的灵感、Debug、新知识
      </h2>

      </div>
   
   
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
    学习路径 Three.js | Shader/Glsl/Graph Node | React | GraphQL | Pixel Art  | Unity 

      </p>
    </div>
  )
}

export default Banner
