import { Component } from "react";
import './dice.css'

class DiceApp extends Component {

    state = {dice1: 0, dice2: 0}

    diceRoll = () => {

        // this.setState((roll => ({dice: Math.trunc(Math.random() * 6 ) + 1})))
       let firstNumber = this.genarateNumber()
       let secondNumber = this.genarateNumber()

       console.log(firstNumber, secondNumber)
       this.setState({dice1: firstNumber, dice2: secondNumber})

        
    }
    genarateNumber= ()=> {
       const result =  Math.trunc(Math.random() * 6 ) + 1

       return result;
    }
    
    

    render() {
        return <>  
            <div className="container">
                <div className="dice">
                <p className="display">{this.state.dice1}</p>
                <p className="">{this.state.dice2}</p>
                </div>
                

                <button type="button" className="btn btn-decrease" onClick={this.diceRoll}>Roll dice</button>
                    
            </div> 

        </>
    }
}

export default DiceApp;