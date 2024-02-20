import { useRef } from "react";

function Focus(props) {
    const formInputRef = useRef(null);
    const focusInput = () => {
        formInputRef.current.focus();
    }
    return (
        <div className="Focus">
            <p>Focus</p>
            <input ref={formInputRef} type="text" />
            <button onClick={()=>{focusInput()}} >Focus Input</button>
        </div>
    );
}

export default Focus;
