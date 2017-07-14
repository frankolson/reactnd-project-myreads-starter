import React from 'react'
import { Route } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import Main from './Main'
import Search from './Search'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.updateBookshelves()
  }

  getBookshelf = (id) => {
    for (const book of this.state.books) {
      if (book.id === id) {
        return book.shelf
      }
    }
    return 'none'
  }

  updateBookshelves = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.updateBookshelves()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Main
            books={this.state.books}
            getBookshelf={this.getBookshelf}
            shelfChange={this.shelfChange}
          />
        )} />

        <Route path="/search" render={() => (
          <Search
            books={this.state.books}
            getBookshelf={this.getBookshelf}
            shelfChange={this.shelfChange}
          />
      )} />
      </div>
    )
  }
}

export default BooksApp
