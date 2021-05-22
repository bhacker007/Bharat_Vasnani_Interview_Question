import React from 'react'

function Question1() {

        const Random_array=[2,3,4,5,6,7,8,9,22,11,23,34];
        let sorted_Even=Random_array.filter(number=>number % 2=== 0) //
        const array= (`Even Number ${sorted_Even}`)
        // setsorted(array)

    return (
        <div>
            <h1>Solution 1</h1>
            <h3>{array}</h3>
        </div>
    )
}

export default Question1
