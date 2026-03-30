import React, {useState, useEffect, useRef} from "react"
function MyComponent(){
    const inputRef = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    useEffect(() => {
        console.log("COMPONENT RENDERED!")
    });
    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""

    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "yellow"
        inputRef.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "yellow"
        inputRef.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
    }
    return(<>
        <button onClick={handleClick}>Click Me!</button>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick2}>Click Me 2!</button>
        <input type="text" ref={inputRef2}/>
        <button onClick={handleClick3}>Click Me 3!</button>
        <input type="text" ref={inputRef3}/>
    </>)
}
export default MyComponent
