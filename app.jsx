import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class HaloDunia extends React.Component{
	render(){
		return <HelloMessage name="Imam" />;
	}
}

class HelloMessage extends React.Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		age: 22,
      clicks: 0,
      name: ''
  	}
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log('di componentDidMount!')
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => {
        console.log(res)
        this.setState({
          name: res.data.title
        })
      })
  }

  handleChange(event) {
    this.setState({age: event.target.value})
  }

  render() {
    return <div>
      Hello {this.state.name}. Umur anda {this.state.age}.
      <form>
        <input 
          type="text" 
          placeholder="Umur Anda" 
          value={this.state.age} 
          onChange={this.handleChange}
         />
      </form>
   </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<HaloDunia />, mountNode);