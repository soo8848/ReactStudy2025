import { useState } from "react";

export default function FunctionState() {
    //setStae위치에 ==> buttonState로 대체하여 조작은 이 함수를 통해서만 조작 할 수 있다.
    const [isButtonFlag, buttonState] = useState<boolean>(false); // 지역변수! 함수안에 함수!

    const buttonHandling = () => {
        buttonState(!isButtonFlag);
        console.log(isButtonFlag);
    }
    return (
        <button onClick={buttonHandling}>
            {isButtonFlag ? 'ON' : 'OFF'}
        </button>
    );

}