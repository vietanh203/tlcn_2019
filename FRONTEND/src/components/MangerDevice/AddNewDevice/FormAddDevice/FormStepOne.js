import React, { Component } from 'react';

class FormStepOne extends Component {
    onForm = () =>{
        return this.props.onForm ? {display:'block'} : {display:'none'};
    }
    render() {
       
        return (
            <section id="steps-uid-0-p-0" role="tabpanel" aria-labelledby="steps-uid-0-h-0" className="body current" aria-hidden="false" style={this.onForm()}>
                <ul className="text-center">Kết Nối Thiết Bị Với Nguồn Điện Và Reset Thiết Bị</ul>
            </section>
        );
    }
}

export default FormStepOne;