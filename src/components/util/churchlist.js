import React, { Component } from 'react';
import '../../css/churchlist.css';

class ChurchList extends Component {
   
       state = { 
          acts: [],
          text:'',
          name: '',
        }

    
    componentWillReceiveProps(props) {
        console.log('this.props in churchlist', props)

        let newarray = props.allacts && props.allacts.map( randomuser => {
            return randomuser;
            })
            
        
            
        console.log('newarry',newarray)
        this.setState({ acts: newarray })


    }

    componentWillMount() {

    }

    componentDidMount() {
        
        setInterval(() => {
            this.randomQuote()
        }, 5000);
    }

    
    randomQuote = () => {
        let user = this.state.acts[Math.floor(Math.random() * this.state.acts.length)];
        
        let wordsArray = [];

         user.useracts.map( words => {
                wordsArray.push(words.description)
                return words
        });
        let screenword = wordsArray[Math.floor(Math.random() * wordsArray.length)]
              
        this.setState({text: screenword});
        this.setState({name: user.fullname});
    }
    
    render() {
        console.log('this.state', this.state)
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