import { useRef, useState } from "react";

function Calculator() {
    const inputRef = useRef(null);
    const resultRef = useRef(null);
    const [result, setResult] = useState(0);

    const plus = (e) => {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
    }

    const minus = (e) => {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }

    const times = (e) => {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }

    const devide = (e) => {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    }

    const resetInput = (e) => {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    const resetResult = (e) => {
        e.preventDefault();
        setResult(() => 0);
    }
 
    return (
        <div className="Calculator">
            <h2>Calculator</h2>
            <form>
                <p ref={resultRef}>
                    Result: {result}
                </p>
                <input pattern="[0-9]" ref={inputRef} type="number" placeholder="Type a number"/>
                <button  onClick={plus}>+ Add</button>
                <button  onClick={minus}>- Subtract</button>
                <button  onClick={times}>* Multiply</button>
                <button  onClick={devide}>/ Devide</button>
                <button  onClick={resetInput}>Reset Input</button>
                <button  onClick={resetResult}>Reset Result</button>
            </form>
        </div>
    );
}

export default Calculator;
