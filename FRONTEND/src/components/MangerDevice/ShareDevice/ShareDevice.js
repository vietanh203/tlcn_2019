import React, { Component } from 'react';
import callApi from '../../../apicall/apiCaller';
import { connect } from 'react-redux';



class ShareDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successUpdate: true,
            deviceSelect: {},
            statusUser: true,
            statusUserShared: true,
            userShare: '',
            devices: [],
        };
    }
    componentDidMount() {
        callApi(`api/devices/usercontrolldevice/${this.props.username}`, 'GET', {
            'x-access-token': this.props.token
        }).then(res => {

            this.setState({
                devices: res.data.myDevice,
                deviceSelect: res.data.myDevice[0]
            })
        })

    }
    onSelected = (event) => {
        let value = event.target.value;
        let device = this.state.devices.find((Element) => {
            return Element.id === value;
        })
        this.setState({
            deviceSelect: device,
            statusUser: true,
            statusUserShared: true,
            successUpdate: true
        })
    }
    onRenderData = () => {
        let result = '';
        result = this.state.devices.map((device, index) => {
            return <option
                value={device.id}

            >{device.name}</option>
        });
        return result;
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value,
            statusUser: true,
            statusUserShared: true,
            successUpdate: true
        })

    }

    onShare = () => {
      
        callApi(`api/devices/${this.state.deviceSelect.id}`, 'PUT', {
            token: this.props.token,
            shareID: [...this.state.deviceSelect.shareID]
        }).then(res => {
            console.log('true in share device');
            this.setState({
                successUpdate: false,
                userShare: ''
            })
        })
            //     } else {
            //         this.setState({
            //             statusUserShared: false
            //         })
            //     }


            //     //console.log('callapi thiết bị ' + this.state.valueSelect + ' cho user ' + this.state.userShare);
            // }
        
    }

    onRemove = (event) => {
        var name = event.target.name;
        console.log(name);
        this.state.deviceSelect.shareID.splice(this.state.deviceSelect.shareID.indexOf(name), 1);
        this.setState({
            deviceSelect: this.state.deviceSelect
        })
    }
    onAddID = () => {
        if (this.state.userShare !== '') {
            if(this.state.userShare===this.props.username){
                this.setState({
                    statusUser:true
                })
            }else{
                callApi(`api/users/finduser/${this.state.userShare}`, 'POST', {
                    token: this.props.token
                }).then(res => {
                    if (!res.data.status) {
                        this.setState({
                            statusUser: res.data.status
                        })
                    } else {
                        if (!this.state.deviceSelect.shareID.includes(this.state.userShare)) {
                            //call api put
    
                            this.state.deviceSelect.shareID.push(this.state.userShare);
                            this.setState({
                                deviceSelect: this.state.deviceSelect,
                                userShare: ''
                            })
    
                        } else {
                            this.setState({
                                statusUserShared: false
                            })
                        }
    
    
                        //console.log('callapi thiết bị ' + this.state.valueSelect + ' cho user ' + this.state.userShare);
                    }
                })
            }

        }


    }
    onRenderTable = () => {
        let result = '';
        if (Object.getOwnPropertyNames(this.state.deviceSelect).length > 0) {
            console.log(this.state.deviceSelect)
            if (this.state.deviceSelect.shareID !== undefined) {
                result = this.state.deviceSelect.shareID.map((id, value) => {
                    return <tr>
                        <td>{this.state.deviceSelect.name}</td>
                        <td>{id}</td>
                        <td>
                            <button
                                className="btn btn-danger" type="button"
                                name={id}
                                onClick={(event) => this.onRemove(event)}

                            >Xoá
                                </button>
                        </td>
                    </tr>
                })
            }
        }
        return result;
    }

    render() {
        return (
            <div className="card">
                <div className="row">                
                    <div className="card-body col-xs-4 col-sm-4 col-md-4 col-lg-4" >
                        <h3 className="text-center">Chia Sẽ Thiết Bị</h3>
                        <form >
                            <div className="form-group ">
                                <label >Tài Khoản Muốn Chia Sẽ *</label>
                                {
                                    !this.state.statusUser? <label className="p-l-20 text-danger">Tài Khoản Không Tồn Tại</label> :
                                    this.state.statusUser&&this.state.userShare===this.props.username ? <label className="p-l-20 text-danger">Không Thể Chia Sẽ Cho Chính Mình</label>:
                                    !this.state.statusUserShared ? <label className="p-l-20 text-danger">Đã Chia Sẽ Thiết Bị Cho Tài Khoản Này</label> :''
                                }
                                <input value={this.state.userShare} onChange={(event) => this.onChange(event)} name="userShare" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleFormControlSelect1">Chọn Thiết Bị Muốn Chia Sẽ</label>
                                <select
                                    onChange={(event) => this.onSelected(event)}
                                    value={this.state.deviceSelect.id}
                                    className="form-control" id="exampleFormControlSelect1"
                                >
                                    {this.onRenderData()}
                                </select>
                                <br />
                                <button onClick={() => this.onAddID()} type="button" className="btn btn-primary">Thêm</button><br />
                                
                            </div>
                        </form>
                    </div>
                    <div className="card-body col-xs-8 col-sm-8 col-md-8 col-lg-8 p-t-0 text-center">
                        <h5 className="card-title">Danh Sách Đã Chia Sẽ</h5>
                        <div className="table-responsive">
                            <table id="zero_config" className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Tên Thiết Bị</th>
                                        <th>Tên Người Dùng</th>
                                        <th>Xoá Chia Sẽ</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {this.onRenderTable()}
                                </tbody>

                            </table>
                        </div>
                        <button onClick={() => this.onShare()} className="btn btn-success text-center">Lưu Thay Đổi</button>
                        {
                            !this.state.successUpdate ? <div class="alert alert-success"> <br /> <strong>Success!</strong> Cập Nhập Thiết Bị Thành Công.</div> : ''
                        }        
                    </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        username: state.username,
        token: state.token
    }
}
export default connect(mapStateToProps)(ShareDevice);


