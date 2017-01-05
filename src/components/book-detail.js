import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    if( ! this.props.book ) {
      return <h2>Select a book.</h2>
    }

    return (
      <div>
        <h2>{ this.props.book.title }</h2>
        <p>{ this.props.book.content }</p>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    book: state.activeBook
  }
}

export default connect( mapStateToProps )( BookDetail )