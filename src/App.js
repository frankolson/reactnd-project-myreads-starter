import React from 'react'
import { Link, Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    const currentlyReading = this.state.books.filter((b) => b.shelf === 'currentlyReading')
    const read = this.state.books.filter((b) => b.shelf === 'read')
    const wantToRead = this.state.books.filter((b) => b.shelf === 'wantToRead')
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf
                  title="Currently Reading"
                  books={currentlyReading}
                />
                <Bookshelf
                  title="Read"
                  books={read}
                />
                <Bookshelf
                  title="Want to Read"
                  books={wantToRead}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>
          </div>
        )} />

        <Route path="/search" render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      )} />
      </div>
    )
  }
}

export default BooksApp
