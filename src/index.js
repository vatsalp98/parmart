import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Doc extends React.Component{
  componentDidMount(){
    document.title = "Ste Parmart"
    document.headers = {
      link:"icon-document",  
    }
  }
  render(){
    return(
      <b>test</b>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Doc />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);