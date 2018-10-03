import React from 'react'
import ContactForm from './WizardForm/WizardForm';
import {connect} from 'react-redux';
import { nuevoCv } from '../actions/authentication';

class ContactPage extends React.Component {
  constructor(props){
    super(props);
  }



  submit = values => {
    // print the form values to the console
    const post = values;
    console.log(post);
    this.props.nuevoCv(post);

    this.props.history.push('/cv');




    //console.log(values)
  }
  render() {
    return <ContactForm onSubmit={this.submit} />
  }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, {nuevoCv})(ContactPage);
