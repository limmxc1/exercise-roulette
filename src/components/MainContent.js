import React from "react";
import Data from "./Data"
import Card from "./Card"

export default function MainContent() {

  let Cards = Data.map(item => 
      <Card 
        key={item.id}
        item={item}
      />
    )

  return (
    <div className="main-content">
      {Cards}
    </div>
  )
}