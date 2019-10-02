import React, { Component } from 'react';

class FormStepThree extends Component {
  onForm = () => {
    return this.props.onForm ? { display: 'block' } : { display: 'none' };
  }
  render() {
    return (
     

        <section id="steps-uid-0-p-2" role="tabpanel" aria-labelledby="steps-uid-0-h-2" className="body" aria-hidden="true" style={this.onForm()}>
          <ul className="text-center">
            Thiết Bị Không Có Cảm Biến Đi Kèm 
          </ul>
        </section>
      
    );
  }
}

export default FormStepThree;