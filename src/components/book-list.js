import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {

  renderList () {
    return this.props.books.map( ( book ) => {
      return (
        <li onClick={ () => this.props.selectBook( book ) } key={ book.title } className='list-group-item'>
          { book.title }
        </li>
      )
    } )
  }

  render () {
    return (
      <div>
        <h4>List of Books</h4>
        <ul className='list-group'>
          { this.renderList() }
        </ul>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    books: state.books
  }
}

function mapDispatchToProps( dispath ) {
  return bindActionCreators( { selectBook: selectBook }, dispath )
}

export default connect( mapStateToProps, mapDispatchToProps )( BookList )