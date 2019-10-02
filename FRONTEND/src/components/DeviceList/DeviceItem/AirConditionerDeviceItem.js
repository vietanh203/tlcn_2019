import React, { Component } from 'react';

class AirConditionerDeviceItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            youClick: false,
            status: false,
            topic: '',
            valueControll : 18
        }
    }


    componentWillMount() {
        this.setState({
            topic: this.props.topic,
            status: this.props.status
        })
    }
    componentWillReceiveProps(nextProps){
        var newData = nextProps.data[0];
        if(newData!=undefined){
            if(newData.topic==this.state.topic && this.state.youClick==false){
                this.setState({
                    status:newData.status,
                    valueControll : !newData.status ? 18 : newData.valueControll
                })
            }else{
                this.setState({
                    youClick:false
                })
            }
        }
    }
    onChange = () => {
        this.setState({
            youClick:true,
            status: !this.state.status,
            valueControll: 18
        });
      
        const {mqtt} = this.props;

        mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:!this.state.status,valueControll:18}));
        
        
    }
    onChangValueControll = (char) =>{
        
        const {mqtt} = this.props;
        if(char=='+' && this.state.valueControll<30){
            this.setState({
                valueControll: this.state.valueControll+1
            })
            mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:true,valueControll: this.state.valueControll+1}));
            
        }
        if(char=='-' && this.state.valueControll>18){ 
            this.setState({
                valueControll: this.state.valueControll-1
            })
            mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:true,valueControll: this.state.valueControll-1}));
        }
        
        
    }
    changeStatus = () => {
        if (!this.state.status) {
            return (
                <div className="card card-hover bg-dark bg-w-r-g-x">
                    <h4 className="text-white text-center ">{this.props.name}</h4>
                    <div className="box text-center" onClick={() => this.onChange()} >
                        <h1 className="font-light text-white"><i className="mdi mdi-air-conditioner" /></h1>
                    </div>
                    <div className="p-b-36"></div>
                </div>

            );
        } else {
            return (

                <div className="card card-hover bg-dark  bg-w-r-g">
                    <h4 className="text-white text-center ">{this.props.name}</h4>
                    <div className="box   text-center "  >          
                        <h1 className="font-light text-yellow" onClick={() => this.onChange()}>
                           
                            <i className="mdi mdi-air-conditioner"  />
                     
                        </h1>
                    </div>
                    <h3 className="text-white text-center">
                        <i className="fas fa-minus" onClick={()=> this.onChangValueControll('-')} />
                        <i className="p-l-50 p-r-50 block-text" >{this.state.valueControll}</i>
                        <i className="fas fa-plus"  onClick={()=> this.onChangValueControll('+')}/>
                    </h3>
                </div>
            );
        }

    }

    render() {
        return (
            <div className="col-md-6 col-lg-3 col-xl-2 col-6">
                {this.changeStatus()}
            </div>
        );
    }
}

export default AirConditionerDeviceItem;