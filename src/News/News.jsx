import React, { useState } from 'react'
import Newsd from './Newsd'
import NewsData from "./NewsData.jsx"
const News = () => {
const { newa, setNewa } = NewsData();
  return (
    <div className=''>
    <Newsd news={newa}/>
    </ div>
  )
}

export default News
