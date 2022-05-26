import React from 'react'

export default function LargestNumber() {
    const x=60,y=150,z=130
    const findLrge=()=>{
        if(x>y){
            if(x>z){
                console.log(`${x} is largest number`);
            }else{
                console.log(`${z} is largest number`);
            }
        }else if(y>z){
            console.log(`${y} is largest number`);
        }else{
            console.log(`${z} is largest number`);
        }
    }
    findLrge()
    return (
        <div>
            
        </div>
    )
}
