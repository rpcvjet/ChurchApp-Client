import React, { Component } from 'react';
import '../../css/churchlist.css';

class ChurchList extends Component {
   
       state = { 
          acts: [],
          text:'',
          name: '',
          wordsArray: []
        }

    
    componentWillReceiveProps(props) {

        let newarray = props.allacts && props.allacts.map( word => {
            return word.description
     })
        this.setState({ acts: newarray})
    }

    componentWillMount() {
        setInterval(() => {
            this.randomQuote()
          }, 3000);
    }

    ///render this.state.acts is rendered here
    
    randomQuote = () => {
        let word = this.state.acts[Math.floor(Math.random() * this.state.acts.length)];
        this.setState({text : word});
        // this.setState({name: num.name});
    }
    
    render() {
        return(
            <div className='quote-wrapper'>
           
                <div className='listquote'>
                    "{this.state.text}"  
                </div>
                {/* <p className='person'>--{this.state.name} </p> */}
            </div>
        )
    }


}

export default ChurchList;