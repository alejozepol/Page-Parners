import React, { Component } from 'react';

class Button extends Component {

    handleclick = () =>{
      this.setState({
        count : this.state.count+ 1,
      })
    }

    render() {
      const { count } = this.state
      return(
        <div>
          <h1>Manzanas: </h1>
          <button type="button" onClick={this.handleclick}>
                    Agregar
          </button>
        </div>
      )
    }

}

export default Button;
