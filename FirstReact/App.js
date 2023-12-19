import Icardobj from "./Icardobj";
import Welcome, { Greetings } from "./welcome"
import AdditionFunction from "./total.js"
import Math from "./math.js";

function App() {

  let arr=[4,5]
  let crr=[65,1]
  let obj1 = { name: "Sanyog", email: "Sanyog@gmail.com", gender: "Male" }
  return (
    <>
      <Greetings></Greetings>
      <Welcome></Welcome>
      <AdditionFunction arr={arr} crr={crr}></AdditionFunction>
      <Icardobj obj={obj1}></Icardobj>
      <Math num1={20} num2={6} op={"-"}></Math>
      <Math num1={20} num2={6} op={"+"}></Math>
      <Math num1={20} num2={6} op={"/"}></Math>
      <Math num1={20} num2={6} op={"*"}></Math>


      


    </>
  )
}
export default App;
