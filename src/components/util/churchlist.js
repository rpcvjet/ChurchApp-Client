import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import '../../css/churchlist.css';

const quotes = [{text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',name:'John'}, {text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta.', name: 'Ken'}, {text:'I sick and tired of being sick and tired',name:'Sojurner Truth'}];

class ChurchList extends Component {
    
    state = { 
        words: '',
        name:''
      
    }
    
    componentWillMount() {
        this.randomQuote()
    }
    
    componentDidMount() {
      setInterval(() => {
        this.randomQuote()
      }, 10000);

    }


    randomQuote = () => {
        let num = quotes[Math.floor(Math.random() * quotes.length)];
        this.setState({words : num.text});
        this.setState({name: num.name});
    }
    
    render() {
        const  {hide, show, visible} = this.state;

        console.log(this.state)
        return(
            <div className='quote-wrapper'>
           
                <div className='listquote'>
                    "{this.state.words}"   
                </div>
                <p className='person'>--{this.state.name} </p>
            </div>
        )
    }


}

export default ChurchList;