import React from 'react';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countdownStarted: false,
      hours: 0,
      minutes: 00,
      seconds: 0,
    };
  }

  render() {
    let { hours, minutes, seconds } = this.state;
    return (
      <div className="bg-[#161B1F] w-[400px] m-auto flex flex-col items-center border-[#818081] border-2 border-solid ">
        <div className="w-full flex justify-center">
          <h1 className="font-bold text-center text-2xl  mr-10 text-white">
            Countdown
          </h1>
          <button
            onClick={() => this.props.handleClickOnClose('countdown')}
            className="bg-black text-xs font-thin text-white  px-3 py-1 rounded hover:bg-white hover:text-black"
          >
            close
          </button>
        </div>

        <div className="font-bold text-[18px] text-center my-7 text-white w-full">
          hours:minutes:seconds
        </div>
        <div class="countdown-display">
          <button
            // onClick={() => this.handleClickOnIncre('hours')}
            className="upbtn"
          >
            ⬆
          </button>
          <button
            // onClick={() => this.handleClickOnIncre('minutes')}
            className="upbtn"
          >
            ⬆
          </button>
          <button
            // onClick={() => this.handleClickOnIncre('seconds')}
            className="upbtn"
          >
            ⬆
          </button>
          <div className="countdown-time text-white">
            {' '}
            {hours} : {minutes} : {seconds}
          </div>
          <button className="upbtn">⬇</button>
          <button className="upbtn">⬇</button>
          <button className="upbtn">⬇</button>
        </div>

        {/* {!this.state.isStopwatchStarted && this.state.timerTime == 0 && (
      <button
        onClick={this.startTimer}
        className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
      >
        Start
      </button>
    )} */}

        {/* {this.state.isStopwatchStarted && this.state.timerTime > 0 && (
      <button
        onClick={this.stopTimer}
        className="bg-[#212A33] text-white px-5 py-2 mb-4 rounded hover:bg-white hover:text-black"
      >
        Stop
      </button>
    )} */}

        {/* {!this.state.isStopwatchStarted && this.state.timerTime > 0 && (
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
    )} */}
      </div>
    );
  }
}
