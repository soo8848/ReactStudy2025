import ClassCounter from "./ClassCounter";
import FunctionState from "./FunctionState";

export default function StateApp() {
    let fName = "stateApp()";
  
    const buttonHandling = () => {
        console.log("buttonHandling() called");
        fName = 'new Message';
        console.log(fName);
    }

    return (
        <div>
            {fName} 컴포넌트
            <button onClick={buttonHandling}>function state change</button>

            <ClassCounter/>
            <br/>
            <FunctionState/>
        </div>
    ); 
}