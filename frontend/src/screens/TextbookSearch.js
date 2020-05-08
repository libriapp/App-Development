import React, { useEffect, useState, useCallback, Component } from "react";
import debounce from "debounce";
import "../styles/styles.css";
import {searchBooks } from "../components/SearchHelper";
import FlatButton from "../components/FlatButton";

function clickHandler1 () {
    this.props.navigation.navigate('TextbookInfo');
}
function BooksPage({ query }) {
  const [isFetching, setFetching] = useState(false);
  const [myBooks, setBooks] = useState([]);

  useEffect(() => {
    (async function() {
      setFetching(true);
      setBooks(await searchBooks(query));
      setFetching(false);
    })();
  }, [query]);
  if (isFetching) {
    return <div>Searching Textbooks....</div>;
  }
  return <Books books={myBooks} />;
}

function App() {
  const [query, setQuery] = useState("");
  const setQueryValue = useCallback(
    debounce(query => setQuery(query), 500),
    []
  );
  return (
    <div className="App">
      <h2>Search Libri</h2>
      <input
        type="text"
        onChange={event => setQueryValue(event.target.value)}
        placeholder="Search Textbooks..."
      />
      <BooksPage query={query} />
    </div>
  );
}
 
function Books({books}) {
  
  if (books.length === 0) {
    return <div>No textbooks found.</div>;
  }
  return (
    <div className="books">
      {books.map(({ name }) => {
        const myStr = JSON.stringify(name)
        return (
          <div className="book" key={myStr}>
            <FlatButton
                text = {myStr}
                onPress = {clickHandler1}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App
