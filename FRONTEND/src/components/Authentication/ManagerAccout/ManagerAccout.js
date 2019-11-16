import React, { Component } from 'react';
import callApi from '../../../apicall/apiCaller';
import {connect } from 'react-redux';

class ManagerAccout extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            username : '',
            firstName : '',
            lastName : '',
            email : '',
            phone : '',
            city : '',
            state : '',
            address : '',
            onEdit : false
        }
    }
    

    componentDidMount(){
        callApi(`api/users/${this.props.username}`,'GET',{
            'x-access-token' : this.props.token
        }).then(res=>{
           
            this.setState({
                username : res.data[0].username,
                firstName : res.data[0].firstName,
                lastName : res.data[0].lastName,
                email : res.data[0].email,
                phone : res.data[0].phone,
                city : res.data[0].city,
                state : res.data[0].state,
                address : res.data[0].address
            });
        })
    }

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        this.setState({
            [name] : value
        })
        console.log(this.state);
    }
    onSaveChange = () =>{
        var { firstName,lastName,email,phone,city,state,address} = this.state;
        callApi(`api/users/${this.props.username}`,'PUT',{
            token : this.props.token,
            firstName,lastName,email,phone,city,state,address
        })
    }
   
    render() {        
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Thông Tin Tài Khoản</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-4 mb-3" >
                                            <label >Tên Tài Khoản</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                                                </div>
                                                <input  value={this.state.username} className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" disabled />
                                            </div>
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label >Họ</label>
                                            <input onChange={(event)=>this.onChange(event)} defaultValue={this.state.firstName} name="firstName" className="form-control" id="validationDefault01" required type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-4 mb-3">
                                            <label htmlFor="validationDefault02">Tên</label>
                                            <input onChange={(event)=>this.onChange(event)} name="lastName" defaultValue={this.state.lastName} className="form-control" id="validationDefault02" required type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6 mb-6">
                                            <label >Email</label>
                                            <input onChange={(event)=>this.onChange(event)} name="email" defaultValue={this.state.email} className="form-control" id="validationDefault01" required type="email" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-6">
                                            <label>Số Điện Thoại</label>
                                            <input onChange={(event)=>this.onChange(event)} name="phone" defaultValue={this.state.phone} className="form-control" id="validationDefault02" required type="tel" placeholder=""  />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationDefault03">Thành Phố</label>
                                            <input onChange={(event)=>this.onChange(event)} name="city" defaultValue={this.state.city} className="form-control" id="validationDefault03" required type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-3 mb-3">
                                            <label htmlFor="validationDefault04">Quận/Huyện</label>
                                            <input onChange={(event)=>this.onChange(event)} name="state" defaultValue={this.state.state} className="form-control" id="validationDefault04" required type="text" placeholder="" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationDefault05">Địa Chỉ</label>
                                            <input onChange={(event)=>this.onChange(event)} name="address" defaultValue={this.state.address} className="form-control" id="validationDefault04" required type="text" placeholder="" />
                                        </div>
                                    </div>
                                    <button  className="btn btn-danger p-r-2" type="button">Edit</button>&nbsp;
                                    <button onClick={()=>this.onSaveChange()} className="btn btn-primary" type="button">Lưu</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => { 
    return { 
        username : state.username,
        token : state.token
    }
}

export default connect(mapStateToProps)(ManagerAccout);