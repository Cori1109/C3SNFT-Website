import React, { useState} from 'react'

export default function BreakdownItem(props) {
  const [title, setTitle] = useState(props.title);
  const [detail, setDetail] = useState(props.detail);
  const [cls, setCls] = useState(props.cls);
  return (
    <div className="item">
      
      <img src="breakdownback1-withoutcircle.png" style={{width: '100%'}} />
      <div className="posImage-outer">
      <img src="circleImage.png" className="posImage"  />
      <span className={"breakdown-title " + cls}>
        {title}
      </span>
      </div>
      <span className="breakdown-detail font-lg">
        {detail}
      </span>
    </div>
  )
}
