import UserHeader from "./UserHeader.tsx";
import UserFooter from "./UserFooter.tsx";
import Book from "./Book.tsx";
import BookEvent from "./BookEvent.tsx";

function BookContents() { //<-- 외부에 노출할 필요가 없음
    const bookData = {name: "server book", price: 150};
    const bookEventHandling = () =>{
        //통신
        alert("서버랑 통신해서 책구매완료");
    }
    return (
        <>
            <UserHeader />
                <div>책이름 책가격</div>
                <Book name="React 입문" price={30000} />
                <Book name="TypeScript 입문" price={35000} />
                <Book name="Vue 입문" price={25000} />
                <br/>
                <BookEvent bookObject={{name: "kim book", price: 50}} 
                clickHandling={()=> {alert("책구매완료")}}
                />
                <BookEvent bookObject={bookData} 
                clickHandling={bookEventHandling}
                />
            <UserFooter />
        </>
    );
}

function BookApp() {
    return (
        <>
            <BookContents />
        </>
    );
}
export default BookApp;