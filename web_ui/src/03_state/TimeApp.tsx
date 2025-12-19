
export default function TimeApp() {
    return (
        <>
            <h1>현재 시간</h1>
            <h2>{new Date().toLocaleTimeString()}</h2> // 요자리가 상태정보가 바뀌는 부분
        </>
    );

}