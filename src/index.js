import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function Block(props){
    return(
        <button 
            className = "block" 
            onClick = {props.onClick}
        >
            {props.value}
        </button>        
    );
}

function Winner(blocks){
    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],        
    ];
    for(let i = 0 ; i < winningCombinations.length; ++i){
        const [x,y,z] =winningCombinations[i];
        if(blocks[x] && blocks[x] === blocks[y] && blocks[x] === blocks[z]){
            return blocks[x];
        }
    }
    return null;
}
class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            blocks : Array(9).fill(null),
            isX :true,
        };
    }

    handleClick(id){
        const x = this.state.blocks.slice();
        if(Winner(x) || x[id]){
            return;
        }
        if(this.state.isX)
            x[id] = 'X';
        else    
            x[id] = 'O';
        this.setState({
            blocks : x,
            isX : !this.state.isX,
        });
    }
    renderBlock(id){
        return(
            <Block 
                value = {this.state.blocks[id]}
                onClick = {() => this.handleClick(id)}
            />
        );
    }

    render(){
        const winner = Winner(this.state.blocks);
        let status = winner?'!!! Winner '+(winner)+' !!!':'Next Player: ' + (this.state.isX?'X':'O');

        return(
            <div className="boardBody">
                <div className = "declarator"> 
                    {status}
                </div>
                <div className = "row">
                    {this.renderBlock(0)}
                    {this.renderBlock(1)}
                    {this.renderBlock(2)}
                </div>
                <div className = "row">
                    {this.renderBlock(3)}
                    {this.renderBlock(4)}
                    {this.renderBlock(5)}
                </div>  
                <div className = "row">
                    {this.renderBlock(6)}
                    {this.renderBlock(7)}
                    {this.renderBlock(8)}
                </div>                                  
            </div>
        );
    }
}

class Game extends React.Component{
    render(){
        return(
            <div className="game">
                <div className = "board">
                    <Board/>
                </div>
                <div className = "moves">
                    <div>{}</div>
                    <ol>{}</ol>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Game />,document.getElementById('root'));
    