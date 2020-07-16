import React, { useState, useEffect } from 'react';
import http from '../../lib/http.js'
import './index.css'
function Noteitem(props) {
  const notes = props.list
  const noteitems = notes.map((item, index) => {
    return (<div key={item.id}>
      <img className="headimg"
        src={item.avatarUrl} width="200px" />
      <p>{item.nickName}---{props.children}</p>
    </div>)
  })
  return noteitems
}
export default Noteitem