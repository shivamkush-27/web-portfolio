import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="clock w-32 h-32 relative -translate-x-2/4 rounded-[50%] border-4 border-solid border-[#222c43] left-2/4 top-2/4 after:content-[''] after:w-3 after:h-3 after:absolute after:z-[2] after:-translate-x-2/4 after:-translate-y-2/4 after:rounded-[50%] after:border-2 after:border-solid after:border-white after:left-2/4 after:top-2/4 after:bg-[#888888] shadow-[inset_4px_4px_10px_#0e0e0e,-4px_-4px_10px_#202735,4px_4px_10px_#0e0e0e,inset_-4px_-4px_10px_#202735]">
        <div
          className="hour_hand absolute w-1.5 h-[50px] origin-bottom rounded-[50px] left-[48%] top-[10%] bg-[#276fc2]"
          style={{
            transform: `rotateZ(${this.state.time.getHours() * 30}deg)`
          }}
        />
        <div
          className="min_hand absolute w-1 h-[50px] origin-bottom rounded-[50px] left-2/4 top-[8%] bg-[#717171]"
          style={{
            transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className="sec_hand absolute w-0.5 h-[50px] origin-bottom rounded-[50px] left-2/4 top-[10%] bg-[#c3c3c3]"
          style={{
            transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`
          }}
        />
      </div>
    );
  }
}
