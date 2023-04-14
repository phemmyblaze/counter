import { Component } from "react";

class CounterApp extends Component {

    state= {count:0}

    onDecrease =() => {
        this.setState((prevstate=>({count:prevstate.count -1 })))
    }

    onIncrease=()=>{
        this.setState((prevstate=>({count:prevstate.count + 1})))
    }
    render() {
        const {count}=this.state
        return <>
            <div className="container">
                <div className="counter-details">
                    <h1 className="heading">Counter</h1>
                    <p className="counter">{count}</p>

                    <div className="counter-btn">
                        <button type="button" className="btn btn-decrease" onClick={this.onDecrease}>Decrease</button>
                        <button type="button" className="btn btn-increase" onClick={this.onIncrease}>Increase</button>
                    </div>
                </div>
            </div>
        </>
    }
}

export default CounterApp;