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

  updateBookshelves = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  shelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf)
    this.updateBookshelves()
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Main
            books={this.state.books}
            shelfChange={this.shelfChange}
          />
        )} />

        <Route path="/search" render={() => (
          <Search
            shelfChange={this.shelfChange}
          />
      )} />
      </div>
    )
  }
}

export default BooksApp
