import React,  {useState,useEffect,useRef} from 'react'
import   './App.css'
const App = () => {
    const [result, setresult] = useState(" ")
    const inputRef = useRef(null);
   // const useEffect(() => inputRef.current.focus());
   // const useEffect(() => inputRef.current.focus());
    function handleClick(e) {
        setresult(result.concat(e.target.name));
    }
    
    function backspace() {
        setresult(result.slice(0, -1));
    }
    function clear() {
        setresult("");
    }
    
    function calculate() {
      try {
            setresult(eval(result).toString());
      } catch (error) {
          setresult("Error")
      }
    }
    return (
        <>
            <div className="Calculator-App">
                <form>
                    <input type="text" value={result} />
                </form>
                
                <div className="keywords">
                    <button id=" clear" onClick={clear}>clear</button>
                    <button id=" backspace" onClick={backspace}>c</button>
                    <button id=" result" onClick={calculate} >Result</button>
                    <button name="8" onClick={handleClick}>8</button>
                    <button name="9" onClick={handleClick}>9</button>
                    <button name="+" onClick={handleClick}>+</button>
                    <button name="4" onClick={handleClick}>4</button>
                    <button name="5" onClick={handleClick}>5</button>
                    <button name="*" onClick={handleClick}>*</button>
                    <button name="6" onClick={handleClick}>6</button>
                    <button name="3" onClick={handleClick}>3</button>
                    <button name="/" onClick={handleClick}>/</button>
                    <button name="1" onClick={handleClick}>1</button>
                    <button name="2" onClick={handleClick}>2</button>
                    <button name="-" onClick={handleClick}>-</button>
                    <button name="7" onClick={handleClick}>7</button>
                    <button name="0" onClick={handleClick}>0</button>
                    <button name="." onClick={handleClick}>.</button>
        
                
                    
                </div>
            </div>
            
        </>
  )
}

export default App





