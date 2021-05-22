import React from 'react'

function Question1() {
    var findMaxConsecutiveOnes = function(nums) {
        let largest = 0;
        let current = 0;
        for (let i = 0; i<nums.length; i++) {
            nums[i] === 0 ? current = 0 : current++;
            if (current > largest) largest = current;
        };
        return largest;
    };

    let array1=[0,0,1,1,0,0,0,1,0,0,1,1,1,0]
    let arrayout1=findMaxConsecutiveOnes(array1)

    let array2=[1,0,0,0,0,1,0,0,0,1]
    let arrayout2=findMaxConsecutiveOnes(array2)


    return (
        <div>
            <h1>Solution 2</h1>
            <h3>{arrayout1}</h3>
            <h3>{arrayout2}</h3>
        </div>
    )
}

export default Question1
