import "./App.css";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    isShow: true,
    name:"Omar Ben Massoud",
    work:"WebSite Dev",
    phoneNumber:"28 777 139",
    aboutMe:"Hello My Name Is Omar Ben Massoud I am 14 Years Old From Tunisia Iam Student In Prep School I Live In Sfax , I am Student In Gomycode Center Too "
  };

  handleClickShow = () => {
    this.setState({ isShow: !this.state.isShow });
  };
  componentDidMount() {
    console.log("componentDidMount");
    this.intervalID = setInterval(() => {
      this.setState((prevState) => ({ count: prevState.count + 0.5 }));
    }, 1000);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render")

    return ( <div>
      <button onClick={this.handleClickShow}>Show</button>
        <h2 className="time">{this.state.count}</h2>
        {this.state.isShow && (
          <div className="App">
            <div className="left-side">
              <h1>{this.state.name}</h1>
              <p>{this.state.work}</p>
              <img
                src="./omarpic.jpg"
              ></img>
              <div className="contact">
                <h3>Contact Me</h3>
                <div className="bth">
                  <p className="phonenumber">{this.state.phoneNumber}</p>
                </div>
                <div className="bth">
                    Facebook
                </div>
                <div className="bth">
                    Instagram
                </div>
                <div className="bth">
                    Discord
                </div>
              </div>
              <h2 className="">About Me</h2>
            <div className="bth">
                <p className="aboutomar">
                  {this.state.aboutMe}  
                </p>
              </div>
              <div className="bth">
                    <h2 className="skills">Skill List</h2>
                    <h3 className="htmll">HTML</h3><Rating name="size-large" defaultValue={5} size="large" readOnly  className="htmll"/>
                    <h3 className="htmll">CSS</h3><Rating name="size-large" defaultValue={4} size="large" readOnly  className="htmll"/>
                    <h3 className="htmll">JS</h3><Rating name="size-large" defaultValue={3} size="large" readOnly  className="htmll"/>
                    <h3 className="htmll">REACT</h3><Rating name="size-large" defaultValue={3.5} size="large" readOnly  className="htmll"/>
                    <h3 className="htmll">ES6</h3><Rating name="size-large" defaultValue={2.5} size="large" readOnly  className="htmll"/>
                    <h3 className="htmll">STATE</h3><Rating name="size-large" defaultValue={3.5} size="large" readOnly  className="htmll"/>
                </div>
              <div className="abt">
                </div>
                </div>
                </div>
        )}
      </div>
    );
  }
}


