import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class AddBook extends Component {

  constructor( props ) {
    super( props )
    this.state = {
      title: '',
      content: ''
    }
    this.handleChange = this.handleChange.bind( this )
    this.handleSubmit = this.handleSubmit.bind( this )   
  }

  handleChange( event ) {
    this.setState( { 
      [ event.target.name ]: event.target.value
    } )
  }

  handleSubmit( event ) {
    event.preventDefault()
    this.props.selectBook.push( this.state )
  }

  render() {
    return (
      <div>
        <h4>Add New Book</h4>
        <form onSubmit={ this.handleSubmit }>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Pook Title" 
            name="title"
            onChange={ this.handleChange }
            value={ this.state.title }/> 
            <br/>
          <textarea 
            className="form-control" 
            rows="3" 
            placeholder="Pook Content" 
            name="content"
            onChange={ this.handleChange }
            defaultValue={ this.state.content }>
            </textarea> 
            <br/>
          <input type="submit" value="Add Book" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}

function mapStateToProps( state ) {
  return {
    books: state.books
  }
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { selectBook: selectBook }, dispatch )
}

export default connect( mapStateToProps, mapDispatchToProps )( AddBook )