// import { useEffect, useState } from "react";
// import React from "react";

// ========================================================================================
// const Text = () => {
//   const [color, setColor] = useState("red")

//   return(
//     <>
//     <h1>My favorite color is {color}!!</h1>
//     <button type="btn btn-primary" onClick={()=> setColor("blue")}>Change color</button>
//     </>
//   );
// };

// export default Text;

// =====================================multiple states======================================

// const Car = () => {
//   const [brand, setBrand] = useState("Ford")
//   const [model, setModel] = useState("Mustang")
//   const [year, setYear] = useState("1964")
//   const[color, setColor] = useState("red")

//   return(
//     <>
//     <h1>My {brand}</h1>
//     <h3>
//       It is a {color} {model} from { year }.
//     </h3>
//     </>
//   )
// }

// export default Car;

// ===========================================================================================

// const Car = () => {
//   const [car, setCar] = useState({
//     brand: "Ford",
//     model: "Mustang",
//     year : "1964",
//     color : "red"
//   })

//   const updateCar =()=>{
//     setCar({
//       brand: "Honda",
//     model: "Mustang",
//     year : "2023",
//     color : "blue"
//     })
//   }

//   return(
//     <>
//     <h1>My {car.brand}</h1>
//     <h3>
//       It is a {car.color} {car.model} from { car.year }.
//     </h3>
//     <button onClick={updateCar}>Updated car</button>
//     </>
//   )
// }

// export default Car;

// ===================================USEEFFECT==========================================

// const Timer = () => {
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     setTimeout(()=>{
//       setCount((count) => count + 1);
//     }, 1000);
//   });
//   return(
//     <>
//     <h1>i have rendered {count} times.</h1>
//     </>
//   );
// };

// export default Timer;

// ==================================================================================

// The useEffect Hook allows you to perform side effects in your components.

// some examples of side effects are : fetching data, directly updating the DOM, and Timers.

// useEffect accepts two arguments. the second argument is optional.

// useEffect ( <function>, <dependency>)

// =========================================================================================

// function Counter(){
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(()=>{
//     setCalculation(() => count * 2);
//   }, [count]);
//   return(
//     <>
//     <p>Count : {count}</p>

//     <button onClick={()=> setCount((c) => c + 1)}>+</button>

//     <p>Calculation : {calculation}</p>
//     </>
//   );
// }
// export default Counter;

// ===============================React Context Problem==================================

// React Context
// React Context is a way to manage state globally.

// It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.

// The Problem
// State should be held by the highest parent component in the stack that requires access to the state.

// To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.

// To do this without Context, we will need to pass the state as "props" through each nested Component. This is called "prop drilling".

// Passing "props" through nested components:

// =====================================================================================

// function Component1(){
//     const [user, setUser] = useState("CADD MASTER");
//     return(
//         <>
//         <h1>{`Hello ${user}!`}</h1>
//         <Component2 user={user}/>
//         </>
//     );
// }
// function Component2({user}){
//     return(
//         <>
//         <h1>Component2</h1>
//         <Component3 user={user}/>
//         </>
//     );
// }
// function Component3({user}){
//     return(
//         <>
//         <h1>Component3</h1>
//         <Component4 user={user}/>
//         </>
//     );
// }
// function Component4({user}){
//     return(
//         <>
//         <h1>Component4</h1>
//         <Component5 user={user}/>
//         </>
//     );
// }
// function Component5({user}){
//     return(
//         <>
//         <h1>Component5</h1>
//         <h1>{`Hello ${user} !!`}</h1>
//         </>
//     );
// }

// export default Component1;

// =================================================================================

// import { useState, createContext, useContext } from "react";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("CADD MASTER");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }
// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }
// function Component3() {
//     return (
//       <>
//         <h1>Component 3</h1>
//         <Component4 />
//       </>
//     );
//   }
//   function Component4() {
//     const user = useContext(UserContext);
//     return (
//       <>
//         <h1>Component 4</h1>
//         <h2>{`Hello ${user} again!!`}</h2>
//         <Component5/>
//       </>
//     );
//   }
//   function Component5() {
//     const user = useContext(UserContext);
//     return (
//       <>
//         <h1>Component 5</h1>
//         <h2>{`Hello ${user} again 2!!`}</h2>
//       </>
//     );
//   }
//   export default Component1;

//   ==================================== React UseRef===================================

// 1. The useRef Hook allows you to persist values between renders.

// 2. It can be used to store a mutable value that does not cause a re-render when updated.

// 3. It can be used to access a DOM element directly.

// =====================================================================================

// import { useState, useEffect, useRef } from "react";

// function App(){
//   const [inputValue, setInputValue] = useState("")
//   const count = useRef(0);
//   // important
//   console.log(count)

//   useEffect(()=>{
//     count.current = count.current + 1;
//   });

//   return(
//     <>
//     <input type="text" value={inputValue} onChange={(e)=> setInputValue(e.target.value)} />
//     <h1>Render Count : {count.current}</h1>
//     </>
//   );
// }

// export default App;

// ============================= React UseRef focus ====================================

// Accessing DOM elements

// 1. In general, we want to let React handle all DOM manipulation.

// 2. But there are some instances where useRef can be used without causing issues.

// 3. In React, we can add a ref attribute to an elements to access it directly in the DOM.


// import { useRef } from "react";

// function App(){
//   const inputElement = useRef();

//   console.log(inputElement)

//   const focusInput = () => {
//     inputElement.current.focus();
//     console.log(inputElement.current.value)
//   };
//   return(
//     <>
//     <input type="text" ref={inputElement} />
//     <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }
// export default App;

// =========================== React UseRef Tracking State Changes ======================

// The useRef Hook can also be used to keep track of previous state values.

// This is because we are able to persist useRef values between renders.


import {useState, useEffect, useRef } from "react";

function App(){
  const [inputValue, setInputValue] = useState("");
  const previousInputValue = useRef("");
  console.log(previousInputValue)

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  return(
    <>
    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />

    <h2>Current Value : {inputValue}</h2>
    <h2>Previous Value : {previousInputValue.current}</h2>
    </>
  );
}
export default App;