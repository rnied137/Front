import React, { Component} from 'react';

import { connect } from 'react-redux'

import {setUser2} from '../redux/actions'

class Tester extends Component {

    setUserValue(){
 
this.props.setUser2({
    name: "vaa",
    authorized: true,
    avatar_url: "aaa"
})

    }
    render() {
        return (
            <div>

                <p>Tester user2 Reducer2</p>
                {this.props.user2.name}
                <button 
                onClick={()=>this.setUserValue()}>Test</button>

                <hr/>

                <p></p>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => ({
user2: state.user2.user
})

const mapDispatchToProps = (dispatch)=>({
    setUser2: user => dispatch(setUser2(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tester);
