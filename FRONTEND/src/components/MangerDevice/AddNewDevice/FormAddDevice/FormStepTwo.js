import React, { Component } from 'react';

class FormStepTwo extends Component {
    onForm = () =>{
        return this.props.onForm ? {display:'block'} : {display:'none'};
    }
    render() {
        return (

            <div className="text-center" >
                <section id="steps-uid-0-p-1" role="tabpanel" aria-labelledby="steps-uid-0-h-1" className="body" aria-hidden="true" style={this.onForm()}>
                    <div>
                        <label htmlFor="surname">ID thiết bị</label>
                        <input id="surname" name="surname" type="text" className="required form-control" />
                        <label htmlFor="email">Mật khẩu trên thiết bị</label>
                        <input id="password" name="password" type="password" className="required email form-control" />
                    </div>
                    <p>(*) Mandatory</p>
                </section>
            </div>

        );
    }
}

export default FormStepTwo;