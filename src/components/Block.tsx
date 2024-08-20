import React from 'react'
import "./Block.css"

interface BlockProps {
    value:string | null
    onClick:() => void
}
const Block:React.FC<BlockProps> = (props) => {
  return (
    <div id='block' onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default Block
