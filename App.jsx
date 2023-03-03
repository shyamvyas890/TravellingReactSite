import React from "react"
import Navbar from "/Components/navbar"
import Card from "/Components/Card"
import data from "/data"



export default function App() {
    const cards=data.map(item=> {
      return (
        <Card 
            key={item.id}
            item={item} 
        />
      )

    })
    
  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )
}

