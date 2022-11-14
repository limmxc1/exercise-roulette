import React from "react";

export default function Card(props) {
  let cappedName = 
    props.item.name.charAt(0).toUpperCase() + props.item.name.slice(1);

    return (
      <div className="card">
        <img className="card-image" src={props.item.img}/>
        <div className="card-descriptor">
          <div className="card-name">{cappedName}</div>
          <div className="card-muscles">{props.item.muscles.map(muscle => <div className="muscle">{muscle}</div>)}</div>
        </div>
      </div>
    )
  }

