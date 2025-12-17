import userStyle from './userApp.css';

const reactName='react';
const user = undefined
function UserApp() {
    return(
        <div>
            {reactName === 'react' ? (<h1>yes</h1>):(<h3>no</h3>)} App
        <br />
        {reactName === 'react' && <h1> && 연산자를 활용</h1>}  
        {user || ('user가 없을 때 표시')}
        <br/>
        <div style={userStyle} className="reactStyle">
            글상자
        </div>
        </div>
)
}
export default UserApp