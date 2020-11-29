import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Block extends React.Component{
    render(){
        return(
            <button className = "block">
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component{
    renderBlock(id){
        return <Block value = {id}/>;
    }

    render(){
        const moveData = 'X';
        return(
            <div className="boardBody">
                <div className = "moveSpecifier"> 
                    Next Player : {moveData}
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
    