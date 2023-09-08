import React from "react";
import "./searchcss.css"
import { useRef } from "react";
const SearchTab=(props)=>{
    const inputref=useRef();
    const onsubmithandler=(e)=>{
        e.preventDefault()
        props.inputsearchFunction(inputref.current.value)
        inputref.current.value=""
    }
    const onchangehandler=()=>{
        // console.log(inputref.current.value)
        props.inputsearchFunction(inputref.current.value)
    }
    return <form onSubmit={onsubmithandler} className="input">
        <input ref={inputref} onChange={onchangehandler} type="text" placeholder="Beer Name"/>
        <button >submit</button>
    </form>
}
export default SearchTab;