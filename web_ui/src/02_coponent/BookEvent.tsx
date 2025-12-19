function BookEvent({
  bookObject,
  clickHandling,
}: {
  bookObject: { name: string; price: number };
  clickHandling: () => void;
}) {
  return (
    <div>
      <h1>
        책 {bookObject.name} 가격 {bookObject.price}
      </h1>
      <button onClick={clickHandling}>책구매이벤트</button>
    </div>
  );
}

export default BookEvent;
