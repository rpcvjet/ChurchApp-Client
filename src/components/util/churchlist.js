import React, { Component } from 'react';
import '../../css/churchlist.css';

class ChurchList extends Component {
   
       state = { 
          acts: [],
          text:'',
          name: '',
        }

    
    componentWillReceiveProps(props) {
        let newarray = props.allacts && props.allacts.map( randomuser => {
            return randomuser;
            }).filter( filteredlist => {
                return filteredlist.acts.length > 0
            })
            
        
        this.setState({ acts: newarray })


    }

    componentDidMount() {
        console.log('this.props DID mount', this.props)
            setInterval(() => {
                this.randomQuote()
            }, 5000);
            console.log('DID mount state', this.state)
           
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

        const { acts } = this.state

            if(this.props.isLoading) {
                return <p>Loading...</p>
            }

        console.log('this.state RENDER', this.state)
        console.log('this.props RENDER', this.props)

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