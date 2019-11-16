import React, { Component } from 'react';

class InfoDeviceItem extends Component {
    
   

    
    areaRender(){
        switch(this.props.device.manaAreas){
            case 'P0001' : return  'Phòng Khách';
            case 'P0002' :  return 'Phòng Ngủ'; 
            case 'P0003' :  return 'Nhà Bếp'; 
            case 'P0004' :  return 'Nhà Vệ Sinh'; 
            default : return 'Chưa Thuộc Khu Vực';           
        }
    }

    render() {
       
        return (                        
                <tr>
                    <td>{this.props.device.id}</td>
                    <td>{this.props.device.password}</td>
                    <td>{this.props.device.name}</td>
                    <td>{this.props.device.connect === true ? 'Đang kết nối' : 'Mất kết nối'}</td>
                    <td>{this.props.device.type}</td>
                    <td>{this.props.device.manaUser}</td>
                    <td>{this.areaRender()}</td>
                </tr>
          
        );
    }
}

export default InfoDeviceItem;


