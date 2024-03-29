import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default class PageNout extends Component {
  render() {
    return (
      <div>
        <h1>Bunaqa sahifa mavjud emas</h1>
        <Link to='/' > Birinchi sahifaga otish</Link>
      </div>
    )
  }
}
