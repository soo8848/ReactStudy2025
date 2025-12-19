import  { useState, type ChangeEvent} from "react";
function FormUIApp(){
    const [name, setName] = useState(""); // state는 boolean, string, number 다 가능
    const [ gender, setGender] = useState("남자"); //
    const handleChangeName = (event :ChangeEvent<HTMLInputElement>) =>{ //input태그에 변화가 일어났을 때
        setName(event.target.value);
    };
    const handleChangeGender = (event :ChangeEvent<HTMLSelectElement>) =>{ //select태그에 변화가 일어났을 때
        setGender(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{ // form태그가 제출되었을 때
        alert(` name : ${name},  gender :${gender}`);  //
        event.preventDefault();  //기본 동작 방지
    };
    return(
        <form onSubmit={handleSubmit}>
            name<input type="text" value={name} onChange={handleChangeName} />
            <br />
            gender :
            <select value={gender} onChange={handleChangeGender}>            //
                <option value="M">남자</option>
                <option value="F">여자</option>
            </select>
            <br />
            <button type="submit">제출</button>            
        </form> // 쓸거면 onSubmit 꼭 써줘야됨. summit이 기본동작임.
    );
}
export default FormUIApp;