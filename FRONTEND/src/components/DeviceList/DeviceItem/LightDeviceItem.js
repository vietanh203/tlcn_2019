import React, { Component } from 'react';

class LightDeviceItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            youClick : false,
            status: false,
            topic: '',
        }
    }
    
    componentWillMount() {
        
        this.setState({
            status: this.props.status,
            topic : this.props.topic,
        })

    }
    componentWillReceiveProps(nextProps){
        
        var newData = nextProps.data[0];
        console.log(newData);
        if(newData!=undefined){
            if(newData.topic==this.state.topic && this.state.youClick==false){
                this.setState({
                    status:newData.status
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
            status: !this.state.status
        });
        
        const {mqtt} = this.props;
        mqtt.publish(this.props.topic,JSON.stringify({name:this.props.name,topic:this.props.topic,status:!this.state.status}));
    }
    changeStatus = () => {
        
        if (!this.state.status) {
            return (
                <div className="card card-hover bg-dark  bg-w-r-g-x ">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box text-center" onClick={() => this.onChange()} >

                        <h1 className="font-light text-white"><i className="far fa-lightbulb" /></h1>
                    </div>
                    <div className="p-b-36"></div>
                </div>
            );
        } else {
            return (
                <div className="card card-hover bg-dark bg-w-r-g">
                    <h4 className="text-white text-center">{this.props.name}</h4>
                    <div className="box  text-center " onClick={() => this.onChange()}>

                        <h1 className="font-light text-yellow "><i className="fas fa-lightbulb" /></h1>
                    </div>
                    <div className="p-b-36"></div>
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

export default LightDeviceItem;