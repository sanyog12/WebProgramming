export default function AdditionFunction(X){
    
let num = X.arr;
let num1= X.crr;

let sum=0;
let sub=0;

for(let i = 0; i < num.length; i++){
    sum+=num1[i];
}

for(let i=0;i<num.length;i++){
    sub-=num1[i];
}
let arr3=num.map((x,i)=>{
return x+num1[i]}
)
return(
<>
<p>The sum is {arr3}</p>
<p>The sub is {sub}</p>
<hr></hr>
</>
)
}