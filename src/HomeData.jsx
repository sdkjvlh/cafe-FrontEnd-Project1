import React from 'react'

function HomeData() {
    const tea=[{
        img:"",
        title:"Tea",
        price:"15 rupees",
        button:"Add"
    },{
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },{
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },
    {
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },
    {
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },
    {
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },
    {
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },{
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },{
      img:"",
      title:"Tea",
      price:"15 rupees",
      button:"Add"
    },]
  return (
    <>
    <div>
      {tea.map((item,index)=>(
        <div key={index} ><Home img={item.img} title={item.title} price={item.price} button={button} /></div>
      ))}
    </div>
       </>
  )
}

export default HomeData
