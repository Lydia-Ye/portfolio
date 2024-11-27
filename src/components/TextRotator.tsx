import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700">
    I am a Student &
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide"
        >
          <li className="text-[#EA9999]">Software Developer</li>
          <li className="text-[#EA9999]">Research Assistant</li>
          <li className="text-[#EA9999]">Dancer</li>
          <li className="text-[#EA9999]">Photographer</li>
          <li className="text-[#EA9999]">Sunset Enthusiast</li>
          <li className="text-[#EA9999]">Tiramisu Lover</li>
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator