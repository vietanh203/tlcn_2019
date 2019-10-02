import React, { Component } from 'react';

class FormStepFour extends Component {
    constructor(props){
        super(props);
        this.state = { 
            user : [],
            userInput : ''    
        }
    }
    onForm = () => {
        return this.props.onForm ? { display: 'block' } : { display: 'none' };
    }
    onChange = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    onSubmit = () =>{
        var user = [...{...this.state}.user];
        user.push(this.state.userInput);
        this.setState({
            user:user,
            userInput:''
        });
    }
    

    render() {
        var elementTask = this.state.user.map((value,index)=>{
            return (
                <tr key={index+1}>
                    <td className="text-center">{index+1}</td>
                    <td className="text-center">{value}</td>
                </tr>
            );
        });
        return (

            <section id="steps-uid-0-p-3" role="tabpanel" aria-labelledby="steps-uid-0-h-3" className="body text-center" aria-hidden="true" style={this.onForm()}>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="panel panel-warning">
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label>ID Người Dùng</label>
                                        <input 
                                            value={this.state.userInput} 
                                            onChange={this.onChange} 
                                            type="text" 
                                            className="form-control" 
                                            name="userInput" 
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button  
                                            type="button" 
                                            className="btn btn-primary"
                                            onClick = {()=> this.onSubmit()}
                                        >
                                            <span className="fa fa-plus mr-5"></span>Thêm
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <label>Danh Sách Chia Sẽ</label>
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th className="text-center">STT</th>
                                    <th className="text-center">ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {elementTask}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        );
    }
}

export default FormStepFour;