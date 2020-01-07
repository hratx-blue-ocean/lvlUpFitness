import React, {Component} from 'react';

class BodyPart2 extends Component{
    constructor(){
       super();
       this.state = {
          checked: false,
       };
       this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(){
       this.setState({
          checked: !this.state.checked,
       })
    }
    render(){
        return(
            <div>
                <button type="button" onclick="">BodyPart2!

                </button>
            </div>
        )
    }
}
export default BodyPart2;
