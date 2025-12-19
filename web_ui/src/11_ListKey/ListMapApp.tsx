const student = [
    {   stuNum:1,
        name:"Jeon",
    },
    {   stuNum:2,
        name:"Lee",
    },
    {   stuNum:3,
        name:"Kim",
    },
];

function ListMapApp(){
    return (
        <ul>
            {student.map((student) =>{
                return <li key={student.stuNum}>{student.name}</li> //이거 조심해야될게 key가 빠지면 안됨. --> 그래서 화면에 뿌리진 않고 숨겨둔다.
            })}
        </ul>
    );
}
export default ListMapApp;
