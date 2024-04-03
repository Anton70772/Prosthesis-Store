import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Store'
import './assets/reset.css'
// import Header from './Header'
// import Footer from './Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Header /> */}
    <App />
    {/* <Footer /> */}
  </React.StrictMode>,
)
