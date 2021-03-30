import * as React from 'react';
import { Component } from 'react';
import RollButton from './Button';
import Dice from './Dice'


export interface MainPageProps {}
 
export interface MainPageState {
    headerText: string;
    diceRoll: number;
    diceRoll2: number;
}
 
class MainPage extends React.Component<MainPageProps, MainPageState> {
    constructor(props: MainPageProps) {
        super(props);
        this.state = { headerText: "", diceRoll: 3, diceRoll2: 5  };
    }

    rollDiceOne = (roll: number) => {
        this.setState({diceRoll: roll})
    }
    rollDiceTwo = (roll: number) => {
        this.setState({ diceRoll2: roll })
    };

    render() { 
        return (
        <div>
                <p>{this.state.headerText}</p>
                <br /><Dice playerName="Player 1" diceRoll={this.state.diceRoll} />
                <Dice playerName="Player 2" diceRoll={this.state.diceRoll2}/>
                <RollButton rollDiceOne={this.rollDiceOne} rollDiceTwo={this.rollDiceTwo} />
            </div>
        );
    }
}
 
export default MainPage;