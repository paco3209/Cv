import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../actions/authentication';



class Home extends Component {
constructor(props){
  super(props);
  this.state = {
    user: this.props.user
  }


}



    render() {
        const {user} = this.state;
        return (
            <div className="container">
              <div>
                Home Component
              </div>

                <div>{user.name}</div>
                <div>{user.id}</div>
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    user: state.auth.user
})

export  default connect(mapStateToProps, { loginUser })(Home);
