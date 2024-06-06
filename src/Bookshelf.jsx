import React, { useState } from 'react';


const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);

    const [currentBook, setCurrentBook] = React.useState({ title: '', author: '' })

function handleInputChange(e){
  const newCurrentBook = structuredClone(currentBook)
  newCurrentBook[e.target.name] = e.target.value
  setCurrentBook(newCurrentBook)
}

function handleSubmit(e) {
  e.preventDefault()
  const newBooks= structuredClone(books)
  newBooks.push(currentBook)
  setBooks(newBooks)
  setCurrentBook({ name: '', author: '' })
}
    
return (
  <div>
  <div>
    <h1>Book app</h1>
    <ul id="books">
      {books.map((book, index) => {
        return <li key={index}>
          <p>{book.name} - {book.author}</p>
        </li>
      })}
    </ul>
  </div>
<div className="bookshelfDiv">
  <div className="formDiv">
    <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
      <input
        placeholder="Enter your book name..."
        type="text"
        onChange={handleInputChange}
        name="name"
        value={currentBook.name}
      />
      <button>
        Add Book
      </button>
      </form>
  </div>
</div>
</div>
)
  
}

export default Bookshelf