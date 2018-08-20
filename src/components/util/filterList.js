import React, { Component } from 'react';
import { connect} from 'react-redux';
import UserDash from '../userdash';


const getVisibleActs = (acts, filter) => {
    console.log('acts' , acts)
    console.log('filter' , filter)
    //show all acts
    if(filter.typeFilter.length === 0) {
        return acts.userlist;
    }
    //show only witness
    else if (filter.typeFilter.length !== 0) {

        let filteredArray = []

        acts.userlist.forEach( w => {
            console.log('w', w)
            if(filter.typeFilter.indexOf(w.typeofact) !== -1){
                filteredArray.push(w)
            }
        })
        return filteredArray
    } 
    
   
    
}

export class VisableActList extends Component {
    render() {
        console.log('this.props visable act list', this.props)

        let showFiltertedActs = getVisibleActs(this.props.userlist, this.props.visableFilter)

        return (
            <div className='visiable-act-list'>
                <UserDash showFiltertedActs={showFiltertedActs}/>
            </div>
        )
    }

}

const mapsStateToProps = (state) => {
    return {
        visableFilter: state.visableFilter,
        userlist: state.userlist
    }
}

export default connect(mapsStateToProps, null) (VisableActList)
