export default function Math(props){
    const num1 = props.num1
    const num2 = props.num2
    let op = props.op
    let result = 0
    switch(op){

        case "+": result = num1+num2; break;
        case "-": result = num1-num2; break;
        case "/": result = num1/num2; break;
        case "*": result = num1*num2; break;
        default: result = NaN
        
    }
    return(
        
        
        <>
        
        <p>{num1} {op} {num2} = {result}</p>
        <hr></hr>
        </>
    )
}