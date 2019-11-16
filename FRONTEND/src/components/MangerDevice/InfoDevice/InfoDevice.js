import React, { Component } from 'react';
import InfoDeviceList from './InfoDeviceList';
import callApi from '../../../apicall/apiCaller';
import InfoDeviceItem from './InfoDeviceItem';
import {connect} from 'react-redux';





class InfoDevice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myDevices : [],
            shareDevices : []
        }
    }
    componentDidMount(){
        callApi(`api/devices/usercontrolldevice/${this.props.username}`,'GET',{
            'x-access-token' : this.props.token
        }).then(res=>{
            
            this.setState({
                myDevices:res.data.myDevice,
                shareDevices: res.data.shareDevice
            })
        });
    }
    

    render() {

        var { myDevices,shareDevices } = this.state;
    
        return (
            <div>
                <div className="card col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="card-body">
                        <h5 className="card-title">Thiết Bị Của Tôi</h5>
                        <div className="table-responsive text-center ">
                           <InfoDeviceList>
                               {this.showDevices(myDevices)}
                           </InfoDeviceList>
                           
                        </div>
                    </div>
                </div>
                <div className="card col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="card-body">
                        <h5 className="card-title">Thiết Bị Được Chia Sẽ</h5>
                        <div className="table-responsive text-center">
                            <InfoDeviceList>
                                {this.showDevices(shareDevices)}
                            </InfoDeviceList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    showDevices(myDevices){
        // console.log(myDevices);
        // var result=null;
        //  if(myDevices.length>0){
        //     result = myDevices.map((device,index)=>{
        //         return 
        //             (<InfoDeviceItem
        //                 // key = { index}
        //                 // index = { index}
        //                 // device = {device}
        //             />);
        //     });
        //  }

        // return result;

        var result = null ;

        if(myDevices.length>0){
            result = myDevices.map((device,index)=>{
                
                return (<InfoDeviceItem
                        device = { device }
                        key = { index }
                        index = { index }
                        
                />);
            })
        }

        return result;

        
    }

}

const mapStateToProps = state =>{
    return {
        token : state.token,
        username : state.username
    }
}

export default connect(mapStateToProps)(InfoDevice);