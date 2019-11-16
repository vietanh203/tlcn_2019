import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from '../../../../apicall/apiCaller';

class FormStepFour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userInput: '',
            messageUser:'',
            statusUser: 0
        }
    }
    onForm = () => {
        return this.props.onForm ? { display: 'block' } : { display: 'none' };
    }
    onChange = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]: value
        });
    }
    onSubmit = () => {
        if (this.state.userInput === this.props.username) {
            this.setState({
                messageUser: 'Không Thể Chia Sẽ Cho Chính Mình'
            })
        } else {
            var user = [...{ ...this.state }.user];
            callApi(`api/users/finduser/${this.state.userInput}`, 'POST', {
                token: this.props.token
            }).then(res => {
                if (res.data) {
                    if (res.data.status && !this.state.user.includes(this.state.userInput)) {
                        user.push(this.state.userInput);
                        this.setState({
                            user: user,
                            userInput: '',
                            messageUser : 'Thêm Thành Công!',
                            statusUser: 1

                        });
                    } else {
                        this.setState({
                            messageUser: this.state.user.includes(this.state.userInput) ? 'User Đã Chia Sẽ' : 'User Không Tồn Tại',
                            statusUser: this.state.user.includes(this.state.userInput) ? -2 : -1
                        })
                    }
                }
            })
        }

        console.log(this.state.messageUser)
    }


    render() {
        var elementTask = this.state.user.map((value, index) => {
            return (
                <tr key={index + 1}>
                    <td className="text-center">{index + 1}</td>
                    <td className="text-center">{value}</td>
                </tr>
            );
        });
        return (

            <section style={{ backgroundColor: '#9fbbd4' }} id="steps-uid-0-p-3" role="tabpanel" aria-labelledby="steps-uid-0-h-3" className="body text-center" aria-hidden="true" style={this.onForm()}>
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <div className="panel panel-warning">
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <label>ID Người Dùng</label>
                                        {/* <input onChange = {(events)=>this.onChange(events)} id="id" name="id" type="text" className="required form-control" /> */}
                                        <input
                                            value={this.state.userInput}
                                            onChange={this.onChange}
                                            type="text"
                                            className="form-control"
                                            name="userInput"
                                            style={{ 'border': 'solid' }}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => this.onSubmit()}
                                        >
                                            <span className="fa fa-plus mr-5"></span>Thêm
                                        </button>
                                        {
                                            this.state.statusUser!== 1 && this.state.statusUser!== 0 ? <div><br/><div class="alert alert-danger"> <br /> <strong>Fail!</strong>{this.state.messageUser}</div></div> : 
                                            this.state.statusUser===1 ? <div><br/><div class="alert alert-success"> <br /> <strong>Success!</strong>{this.state.messageUser}</div></div> : ''
                                        }
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

const mapStateToProps = state => {
    return {
        username: state.username,
        token: state.token
    }
}

export default connect(mapStateToProps)(FormStepFour);