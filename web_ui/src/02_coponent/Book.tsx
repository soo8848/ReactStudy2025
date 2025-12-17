export default function Book(pp: {name: string; price: number}) { // 110p를 보면 알 수 있지만, 이건 옛날방식이라 요즘은 이렇게 안쓴다.
    return (<div>
        {pp.name} {pp.price}
    </div>);
}