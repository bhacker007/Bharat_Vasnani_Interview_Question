import React from 'react'

function Question1() {
   
    var obj = {
        "id" : 4, "name" : "abc",
        "id" : 10, "name" : "ab2",
        "id" : 5, "name" : "abc3",
        "id" : 6, "name" : "abc5"
       }

    let IDSaperate=obj["id"]

    return (
        <div>
            <h1>Solution 5</h1>
            <h3>Value of ID {IDSaperate}</h3>
        </div>
    )
}

export default Question1
