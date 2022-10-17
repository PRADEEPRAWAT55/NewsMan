import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import MainNews from './Component/MainNews'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import AboutUs from './Component/AboutUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  MyAPI = process.env.REACT_APP_MyAPI;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>

            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/" element={<MainNews api={this.MyAPI} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<MainNews api={this.MyAPI} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<MainNews api={this.MyAPI} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/general" element={<MainNews api={this.MyAPI} key="general" country="in" category="general" />} />
            <Route exact path="/health" element={<MainNews api={this.MyAPI} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<MainNews api={this.MyAPI} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<MainNews api={this.MyAPI} key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<MainNews api={this.MyAPI} key="technology" country="in" category="technology" />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}
