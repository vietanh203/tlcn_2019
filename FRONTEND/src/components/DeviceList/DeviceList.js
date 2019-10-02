import React, { Component } from 'react';
import _LightDeviceItem from './DeviceItem/LightDeviceItem';
import _FanDeviceItem from './DeviceItem/FanDeviceItem';
import ErrorItem from './DeviceItem/ErrorItem';
import _AirConditionerDeviceItem from './DeviceItem/AirConditionerDeviceItem';
import InHome from './DeviceItem/InHome';
import _LampDeviceItem from './DeviceItem/LampDeviceItem';
import OutHome from './DeviceItem/OutHome';
import { Connector , subscribe} from 'mqtt-react';


var data =[
    {
        id:1,
        name:'đèn phòng khách',
        status:false,
        type:'light',
        connect: true,
        topic:'ABCSE'
    },
    {
        id:2,
        name:'quạt phòng khách',
        status:false,
        type:'fan',
        connect: true,
        topic:'ABCSA'
    },
    {
        id:3,
        name:'đèn nhà tắm',
        status:false,
        type:'light',
        connect: true,
        topic:'ABCSB'
    },
    {
        id:4,
        name:'quạt phòng ngủ',
        status:false,
        type:'fan',
        connect: true,
        topic:'ABCSD'
    },
    {
        id:5,
        name:'đèn bếp',
        status:false,
        type:'light',
        connect: true,
        topic:'ABCSF'
    },
    {
        id:6,
        name:'quạt bếp',
        status:false,
        type:'fan',
        connect: true,
        topic:'ABCSG'
    },
    {
        id:6,
        name:'máy lạnh phòng ngủ',
        status:false,
        type:'air-conditioner',
        connect: true,
        topic:'ABCSH'
    },
    {
        id:7,
        name:'đèn ngủ',
        status:false,
        type :'lamp',
        connect:true,
        topic:'ABCSJ'
    }

];

var datas = data.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return 1;}
    if (x > y) {return -1;}
    return 0;
});









class DeviceList extends Component {

    renderData = () =>{
        var result = datas.map((value,index)=>{
            if(!value.connect){
                return (<ErrorItem
                    name= {value.name}
                    index = {value.id}
                />);
            }else{
                switch(value.type){
                   case 'light' :
                        const LightDeviceItem = subscribe({topic:value.topic})(_LightDeviceItem);
                        return( <LightDeviceItem 
                            name={value.name}
                            status ={value.status}
                            index= {value.id}
                            topic={value.topic}
                        />);
                   case  'fan' :
                        const FanDeviceItem = subscribe({topic:value.topic})(_FanDeviceItem);
                        return (<FanDeviceItem
                            name={value.name}
                            status={value.status}
                            index ={ value.id}
                            topic={value.topic}
                        />);
                    case 'air-conditioner':
                        const AirConditionerDeviceItem = subscribe({topic:value.topic})(_AirConditionerDeviceItem);
                        return (<AirConditionerDeviceItem
                            name={value.name}
                            status={value.status}
                            index ={ value.id}
                            topic={value.topic}
                        />);
                    case 'lamp':
                            const LampDeviceItem = subscribe({topic:value.topic})(_LampDeviceItem);
                            return( <LampDeviceItem
                                name={value.name}
                                status ={value.status}
                                index= {value.id}
                                topic={value.topic}
                            />);
                    default :
                        return null;
               }
            }
        });
        return result;
    }
    render() {
       
        return (
            <Connector mqttProps="ws://171.227.97.11:1884/">
                
                <div className="row">
                    <InHome name="Về Nhà" status={false}/>
                    <OutHome name="Rời Khỏi Nhà"status={true}/>
                    {this.renderData()}                         
                </div> 
            </Connector>
        );
    }
}

export default DeviceList;