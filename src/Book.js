import React from 'react'
import PropTypes from 'prop-types'

class Book extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      shelf: props.book.shelf || 'none'
    }
  }

  handleChange = (event) => {
    this.setState({shelf: event.target.value})
    this.props.handleChange(this.props.book, event.target.value)
  }

  render() {
    const { book } = this.props
    
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.shelf} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors &&
          <div className="book-authors">{book.authors.join(', ')}</div>
        }
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.shape({
    authors: PropTypes.array,
    imageLinks: PropTypes.shape({
      thumbnail: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired
}

export default Book
