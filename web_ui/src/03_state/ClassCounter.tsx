import { Component, type ReactNode } from "react";

class classCounter extends Component {
    state = {num1:0, num2:100};
    render(): ReactNode {// 이 메서드 앞에 
        const {num1, num2} = this.state; // 양쪽에서 레퍼런스 하고 있음. --> 주소를 연결해서 값을 바뀌는게 하는거.  // 상황설명) 내가 사용할 데이터를 임시 변수로 선언해서 state = {num1:0, num2:100};를 몽땅 넣어주는거임. 이 state라는 공간에 있으면 알아서 바뀐 내용을 적용할 수 있다.
        return (
            <>
                <h1>Class state - {this.state.num1} or {num1}</h1> // 둘다 사용해야지 변수에 오류안남...
                <h1>Class state - {this.state.num2} or {num2}</h1>
                <button onClick={()=>{
                    this.setState({ // 버추얼 돔을 이용해서 바뀌는 값만 내가 바꿔주는거임. --> 효율적으로 디자인 요소 사용하기위해 React.state가 만들어진 것. // 이 setState라는 메서드를 이용해서 state의 값을 바꿔주는거임. 
                        // 양쪽에서 레퍼런스 하고 있음. --> 주소를 연결해서 값을 바뀌는게 하는거. // 멤버 데이터와 지역변수가 값이 넘어가는게 아니라 레퍼런스가 넘어가고 있는 것이다. 헷갈릴 수도 있으니 주의.
                        num2: num1 - 1, 
                    }); 
                }}>Class state change</button>
                    {/* 컴포넌트가 상태를 가지고 있으니까 그것만 변경해주면 된다는거네 */}
                    {/* JS는 기본적으로 객체 구조가 복잡하고 객체의 구조와 구조의 사이를 찾아보기 힘듬. 분명히 매개인자 여러개 넣는게 가능했는데 리액트에서는 불가능. this메소드도 위치를 제한적으로 제공한다.  */}
            </>
        )
    }

}
export default classCounter;