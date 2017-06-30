import React from 'react'
import { Link, Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import Search from './Search'
import './App.css'

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
          <Search />
      )} />
      </div>
    )
  }
}

export default BooksApp
