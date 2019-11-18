import React, { Component } from 'react';
import Statics from './Statics'
import _LightDeviceItem from './DeviceItem/LightDeviceItem';
import _FanDeviceItem from './DeviceItem/FanDeviceItem';

import _AirConditionerDeviceItem from './DeviceItem/AirConditionerDeviceItem';
//import InHome from './DeviceItem/InHome';
import _LampDeviceItem from './DeviceItem/LampDeviceItem';
//import OutHome from './DeviceItem/OutHome';
import { Connector, subscribe } from 'mqtt-react';
import callApi from '../../apicall/apiCaller';
import { connect } from 'react-redux';
import * as Config from '../../mqttcall/Config';

class DeviceList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            devices: [],
            areas: []
        }
    }

    sort(data) {
        let devices = '';
        if (data.length > 0) {
            devices = data.sort(function (a, b) {
                var x = a.type.toLowerCase();
                var y = b.type.toLowerCase();
                if (x < y) { return 1; }
                if (x > y) { return -1; }
                return 0;
            });
        }
        return devices;
    }

    sort2(data) {
        var x = data.splice(data.findIndex(function (element) {
            return element.mainArea;
        }), 1);
        data.unshift(x[0]);
        return data;

    }

    componentDidMount() {
        callApi(`api/devices/usercontrolldevice/${this.props.username}`, 'GET', {
            'x-access-token': this.props.token
        }).then(res => {
            if (res.data) {
                this.setState({
                    devices: this.sort(res.data.myDevice),
                    deviceShare: this.sort(res.data.shareDevice)
                })
            }

        });
        // callApi(`api/areas/usercontrollarea/${this.props.username}`,'GET',{
        //     'x-access-token' : this.props.token
        // }).then(res=>{
        //     if(res.data){
        //         this.setState({
        //             areas : this.sort2(res.data)
        //         })
        //     }
        // })

    }

    onRenderDevice = (value, index) => {
        switch (value.type) {
            case 'light':
                const LightDeviceItem = subscribe({ topic: value.id, id: value.id })(_LightDeviceItem);
                return (<LightDeviceItem
                    key={index}
                    name={value.name}
                    status={value.data.status}
                    index={value.id}
                    topic={value.id}
                    connect={value.connect}
                />);
            case 'fan':
                const FanDeviceItem = subscribe({ topic: value.id })(_FanDeviceItem);
                return (<FanDeviceItem
                    key={index}
                    name={value.name}
                    status={value.data.status}
                    valueControll={value.data.valueControll}
                    index={value.id}
                    topic={value.id}
                    connect={value.connect}
                />);
            case 'air-conditioner':
                const AirConditionerDeviceItem = subscribe({ topic: value.id })(_AirConditionerDeviceItem);
                return (<AirConditionerDeviceItem
                    key={index}
                    name={value.name}
                    status={value.data.status}
                    valueControll={value.data.valueControll}
                    index={value.id}
                    topic={value.id}
                    connect={value.connect}
                />);
            case 'lamp':
                const LampDeviceItem = subscribe({ topic: value.id })(_LampDeviceItem);
                return (<LampDeviceItem
                    key={index}
                    name={value.name}
                    status={value.data.status}
                    index={value.id}
                    topic={value.id}
                    connect={value.connect}
                />);
            default:
                return null;
        }
    }

    // renderData = (area) =>{
    //     let result='';
    //     if(area!=undefined){
    //         result = this.state.devices.map((value,index)=>{
    //             if(area.mainArea){
    //                  console.log(true);
    //                  return this.onRenderDevice(value,index);
    //             }else {
    //                  if(area.id === value.manaAreas)
    //                      return this.onRenderDevice(value,index);
    //             }
    //             return '';
    //         });
    //         return (<div> <h4 className="p-l-2">{area.name}</h4><div className="row">{result}</div></div>);
    //     }
    //     return '';
    // }

    onRenderData2 = () => {
        let result = '';
        let result1 = '';
        if (this.state.devices !== '') {
            result = this.state.devices.map((value, index) => {
                return this.onRenderDevice(value, index);
            });
        }
        if (!(this.state.deviceShare === '' || this.state.deviceShare === undefined)) {
            result1 = this.state.deviceShare.map((value, index) => {
                return this.onRenderDevice(value, index);
            })
        }
        return (<div>
            <Statics />
            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="card-stats mb-4 mb-xl-0 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <h5 class="text-uppercase text-muted mb-0 card-title">Nhà Của {this.props.username}
                                            <i class="fas fa-angle-down float-right" data-toggle="collapse" data-target="#home-devices"></i></h5>
                                    </div>
                                    <hr/>
                                    <div id="home-devices" className="row collapse">{result}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="card-stats mb-4 mb-xl-0 card">
                        <div class="card-body">
                            <div class="row">
                                <div class="col">
                                    <div>
                                        <h5 class="text-uppercase text-muted mb-0 card-title">Thiết Bị Được Chia Sẻ
                                        <i class="fas fa-angle-down float-right" data-toggle="collapse" data-target="#shared-devices"></i></h5>
                                    </div>
                                    <hr />
                                    <div id="shared-devices" className="row collapse">{result1}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }


    render() {

        return (
            <Connector mqttProps={Config.MQTT_URL}>
                {/* <InHome name="Về Nhà" status={false}/>
                <OutHome name="Rời Khỏi Nhà"status={true}/> */}
                {this.onRenderData2()}
            </Connector>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.username,
        token: state.token
    }
}

export default connect(mapStateToProps)(DeviceList);