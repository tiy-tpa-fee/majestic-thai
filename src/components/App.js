import React, { Component } from 'react'
import { Link } from 'react-router'

class App extends Component {

  render () {
    return <div>
      <h1>Majestic Thai</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/menu'>Menu</Link></li>
          <li>History</li>
          <li>Contact</li>
        </ul>
      </nav>
      <main>
        before
        {this.props.children}
        after
      </main>
    </div>
  }
}

export default App
