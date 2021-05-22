import React from 'react'

function Question1() {
   
    const arr=[1,2,3,4,5,5,5,6,7,7,7,8,9,10,10,11]

    const unique_filter=arr.filter((value,index)=>{
        // console.log(value,index); 
        return arr.indexOf(value)===index
    })

    let sortedValue=unique_filter

    return (
        <div>
            <h1>Solution 3</h1>
            <h3>{sortedValue}</h3>
        </div>
    )
}

export default Question1
