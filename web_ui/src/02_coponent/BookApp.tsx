import UserHeader from "./UserHeader.tsx";
import UserFooter from "./UserFooter.tsx";
import Book from "./Book.tsx";

function BookContents() { //<-- 외부에 노출할 필요가 없음
    return (
        <>
            <UserHeader />
                <div>책이름 책가격</div>
                <Book name="React 입문" price={30000} />
                <Book name="TypeScript 입문" price={35000} />
                <Book name="Vue 입문" price={25000} />
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