import React from 'react'
import Child from './Child'

export default function TestrParent({item}) {
    return (
        <>
            {/* <Child score={"2-3"} home={"spur"} away={"arsenal"}></Child> */}
            {item.map((v,i) => (resultData(v,i)))}
        </>
    )
}

function resultData(v,i){
    return(
        <div key={i}>
            {i}: {v}
        </div>
    )
}