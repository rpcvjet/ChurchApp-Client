import React, { Component } from 'react';
import { connect} from 'react-redux';
import UserDash from '../userdash';


const getVisibleActs = (acts, filter) => {
    console.log('acts' , acts)
    console.log('filter' , filter)
    //show all acts
    if(filter.typeFilter.length === 0) {
        console.log('im here')
        return acts.userlist;
    }
    //show only witness
    else if (filter.typeFilter.length !== 0) {

        let witnessArray = []

        acts.userlist.forEach( w => {
            console.log('w', w)
            if(w.typeofact === 'witness'){
                witnessArray.push(w)
            }
        })
        console.log('witnessArray', witnessArray)

        return witnessArray
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
