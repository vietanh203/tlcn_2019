import React, { Component } from 'react';

class FanDeviceItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
            youClick : false,
            topic : '',
            valueControll : 1
        }
    }


    componentWillMount() {
        this.setState({
            status: this.props.status,
            topic : this.props.topic
        })
    }
    componentWillReceiveProps(nextProps){
        var newData = nextProps.data[0];
        if(newData!=undefined){
            if(newData.topic==this.state.topic && this.state.youClick==false){
                this.setState({
                    status:newData.status,
                    valueControll : !newData.status ? 1 : newData.valueControll
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
            valueControll : 1
        });
        
        const {mqtt} = this.props;
        mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:!this.state.status,valueControll : 1}));
    }
    changeStatus = () => {
        if (!this.state.status) {
            return (
                <div className="card bg-dark card-hover bg-w-r-g-x">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box text-center" onClick={() => this.onChange()} >                  
                        <h1 className="font-light text-white"><i className="mdi mdi-fan" /></h1>
                    </div>
                    <div className="p-b-36"></div>
                </div>
            );
        } else {
            return (
                <div className="card card-hover bg-dark   bg-w-r-g">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box  text-center"  onClick={() => this.onChange()} >
                        <h1 className="font-light text-yellow">

                            <i className="mdi mdi-fan"  />
                        </h1>
                        
                    </div>
                        <h3 className="text-white text-center">
                            <i className="text-left fas fa-minus  " onClick={()=> this.onChangValueControll('-')} />
                            <i className="p-l-50 p-r-50 block-text">{this.state.valueControll}</i>
                            <i className="text-right fas fa-plus" onClick={()=> this.onChangValueControll('+')}
                            
                             />
                        </h3>
                </div>
            );
        }

    }
    onChangValueControll = (char) =>{
        const {mqtt} = this.props;
        if(char=='+' && this.state.valueControll<3){
            this.setState({
                valueControll: this.state.valueControll+1
            })
            mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:true,valueControll: this.state.valueControll+1}));
        }
        if(char=='-' && this.state.valueControll>1){ 
            this.setState({
                valueControll: this.state.valueControll-1
            })
            mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:true,valueControll: this.state.valueControll-1}));
        }
        
        
    } 

    render() {
        return (
            <div className="col-md-6 col-lg-3 col-xl-2 col-6">


                {this.changeStatus()}

            
        </div >
        );
    }
}

export default FanDeviceItem;