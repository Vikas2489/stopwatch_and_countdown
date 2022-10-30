import React from 'react';
export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isStopwatchStarted: false,
      timerStart: 0,
      timerTime: 0,
    };
  }

  startTimer = () => {
    this.setState({
      isStopwatchStarted: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime,
    });

    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart,
      });
    }, 10);

    // // on every one milisecond
    // setInterval(() => {
    //   if (this.state.miliSeconds < 99) {
    //     return this.setState({
    //       miliSeconds: Number(this.state.miliSeconds) + 1,
    //     });
    //   } else if (this.state.miliSeconds == 99) {
    //     return this.setState({
    //       miliSeconds: 0,
    //     });
    //   }
    // }, 10);

    // // every second
    // setInterval(() => {
    //   if (this.state.seconds != 59) {
    //     return this.setState({
    //       seconds: Number(this.state.seconds) + 1,
    //     });
    //   } else {
    //     return this.setState({
    //       seconds: 0,
    //     });
    //   }
    // }, 1000);

    // // every minute
    // setInterval(() => {
    //   if (this.state.minutes != 59) {
    //     return this.setState({
    //       minutes: Number(this.state.minutes) + 1,
    //     });
    //   } else {
    //     return this.setState({
    //       minutes: 0,
    //     });
    //   }
    // }, 60000);

    // // every hour
    // setInterval(() => {
    //   if (this.state.hours != 59) {
    //     return this.setState({
    //       hours: Number(this.state.hours) + 1,
    //     });
    //   } else {
    //     return this.setState({
    //       hours: 0,
    //     });
    //   }
    // }, 3600000);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  stopTimer = () => {
    this.setState({
      isStopwatchStarted: false,
    });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      isStopwatchStarted: false,
      timerStart: 0,
      timerTime: 0,
    });
  };

  render() {
    const { timerTime } = this.state;
    let miliseconds = ('0' + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ('0' + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ('0' + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ('0' + Math.floor(timerTime / 3600000)).slice(-2);
    return (
      <div className="bg-[#161B1F] w-[400px] m-auto flex flex-col items-center border-[#818081] border-2 border-solid ">
        <div className="w-full flex justify-center ">
          <h1 className="font-bold  text-2xl mr-16 text-white">Stopwatch</h1>
          <button
            onClick={() => this.props.handleClickOnClose('stopwatch')}
            className="bg-black text-xs font-thin text-white justify-self-end px-3 py-1 rounded hover:bg-white hover:text-black"
          >
            close
          </button>
        </div>

        <div className="font-bold text-5xl text-center my-7 text-white w-full">
          {hours}:{minutes}:{seconds}:{miliseconds}
        </div>

        {!this.state.isStopwatchStarted && this.state.timerTime == 0 && (
          <button
            onClick={this.startTimer}
            className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
          >
            Start
          </button>
        )}

        {this.state.isStopwatchStarted && this.state.timerTime > 0 && (
          <button
            onClick={this.stopTimer}
            className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
          >
            Stop
          </button>
        )}

        {!this.state.isStopwatchStarted && this.state.timerTime > 0 && (
          <div>
            <button
              onClick={this.startTimer}
              className="bg-[#212A33] mr-4 text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
            >
              Resume
            </button>
            <button
              onClick={this.resetTimer}
              className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
            >
              Reset
            </button>
          </div>
        )}
      </div>
    );
  }
}
