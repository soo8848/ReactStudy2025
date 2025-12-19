export default function Book(props: { name : string; price : number; }) {
    return (<div>
        {props.name} {props.price}
    </div>);
}