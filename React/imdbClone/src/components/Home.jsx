import React, { useState } from 'react'
import Banner from './Banner'
import Movies from './Movies'

function Home() {
    const [pageNo,setPageNo] = useState(1);
    const handlePrev = () => {
        if(pageNo==1) return;
        setPageNo(pageNo-1)
    }
    const handleNext = () => {
        setPageNo(pageNo+1)
    }
  return (
    <div>
      <Banner/>
      <Movies/>
      {/* pagination */}
      <div className="bg-gray-400 w-full mt-8 p-4 h-[50px] flex justify-center gap-8">
        <div onClick={handlePrev} >
        <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div>{pageNo}</div>
        <div onClick={handleNext}>
        <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  )
}

export default Home
