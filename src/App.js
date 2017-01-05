import React, { Component } from 'react'
import BookList from './components/book-list'
import BookDetail from './components/book-detail'
import AddBook from './components/add-book'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container App'>
        <div className='row'>

          <div className='col-sm-4'>
            <BookList/>
            <hr/>
            <AddBook/>
          </div>

          <div className='col-sm-8'>
            <BookDetail/>
          </div>

        </div>
      </div>
    )
  }
}

export default App