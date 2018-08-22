import React, { Component } from 'react';
import '../../css/churchlist.css';

class ChurchList extends Component {
   
       state = { 
          acts: [],
          text:'',
          name: '',
        }

    
    componentWillReceiveProps(props) {
        let newarray = props.allacts && props.allacts.map( word => {
            return {
                text: word.description,
                name: word.fullname
            }
            
        })
        this.setState({ acts: newarray })


    }

    componentWillMount() {

    }

    componentDidMount() {
        
        setInterval(() => {
            this.randomQuote()
        }, 5000);
    }

    // getLatestQuote = () => {
    //     let word = this.state.acts
    //     console.log('word', word)
    //     this.setState({text: word.text});
    //     this.setState({name: word.name});
    // }
    
    randomQuote = () => {
        let word = this.state.acts[Math.floor(Math.random() * this.state.acts.length)];
        this.setState({text: word.text});
        this.setState({name: word.name});
    }
    
    render() {
     
        return(
            <div className='quote-wrapper'>
           
                <div className='listquote'>
                    {this.state.text}  
                </div>
                <p className='person'>{this.state.name} </p>
            </div>
        )
    }


}

export default ChurchList;