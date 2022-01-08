import React from 'react';

let visibility = "hidden";

class SubmitForm extends React.Component {
  
  render() {
    const { display } = this.props;

    if(display === true) {
      visibility = "visible";
    } else {
      visibility = "hidden";
    }
    console.log(display);
    console.log(visibility);
    return (
    <div style={ { visibility:visibility, } }>
      <span>Aasdkjflaksdjflasjdl</span>
    </div>
    )
  }
}

export default SubmitForm;