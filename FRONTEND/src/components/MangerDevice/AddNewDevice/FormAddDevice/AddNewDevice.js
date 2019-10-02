import React, { Component } from 'react';
import FormStepOne from './FormStepOne';
import FormStepTwo from './FormStepTwo';
import FormStepThree from './FormStepThree';
import FormStepFour from './FormStepFour';




class AddNewDevice extends Component {
  constructor(props){
    super(props);
    this.state = {
      formControll : [
        {
          id:1,
          status : true,
          statusTablist : true,
          validateTablist :false,
          validate : false
        },
        {
          id:2,
          status : false,
          statusTablist : false,
          validateTablist :false,
          validate : false
        },
        {
          id:3,
          status : false,
          statusTablist : false,
          validateTablist :false,
          validate : false
        },
        {
          id:4,
          status : false,
          statusTablist : false,
          validateTablist :false,
          validate : false
        }
      ],
      onButtonNext : 'block',
      onButtonFinish: 'none'
    }
  }
  onForm = (id) => {
    var form = this.state.formControll.find((value,index)=>{
      return value ?  value.id ===id : '';
    });
    return form.status;
  }
  onStatusTablist = (id) =>{
    var form = this.state.formControll.find((value,index)=>{
      return value ?  value.id ===id : '';
    });

    if(form.validateTablist&&!form.statusTablist){
      return 'done';
    }else if(form.statusTablist){
      return 'current';
    }else return 'disabled';
  }
  onNext = () => { 
    var index = this.state.formControll.findIndex((value,index)=>{
      return value.status=== true ;
    });
    var formControll = [...{...this.state}.formControll];
    if(index <3){
      formControll[index].status=false;
      formControll[index].statusTablist=false;
      formControll[index].validateTablist=true;
      formControll[index+1].statusTablist=true;
      formControll[index+1].status=true;
    }
    this.setState({
      formControll
    });
    if(index ==2 ){
      this.setState({
        onButtonNext : 'none' ,
        onButtonFinish : 'block'
      });
    }
    console.log(this.state);
  }
  onPrevious = () =>{
    var index = this.state.formControll.findIndex((value,index)=>{
      return value.status=== true ;
    });
    var formControll = [...{...this.state}.formControll];
    if(index > 0 ){
      formControll[index].status=false;
      formControll[index].statusTablist=false;
      formControll[index-1].statusTablist=true;
      formControll[index-1].status=true;
    }
    this.setState({
      formControll
    });
    if(index<4){
      this.setState({
        onButtonNext : 'block' ,
        onButtonFinish : 'none'
      })
    }
  }
  onClickTabList = (id) =>{
    var index = this.state.formControll.findIndex((value,index)=>{
      return value.id=== id ;
    });
    var formControll = [...{...this.state}.formControll];
    if(formControll[index].validateTablist){
      formControll.map((value,index)=>{
        if(value.id==id){
          value.statusTablist=true;
          value.status=true;
        }else{
          value.statusTablist=false;
          value.status=false;
        }
      });
      this.setState({
        formControll
      });
    }
    
  }
  render() {
    return (
      <div className="card">
        <div className="card-body wizard-content">
          <h4 className="card-title">Basic Form Example</h4>
          <h6 className="card-subtitle" />
          <form id="example-form" action="#" className="m-t-40" noValidate="novalidate">
            <div role="application" className="wizard clearfix" id="steps-uid-0">
              <div className="steps clearfix">
                <ul role="tablist">
                  <li role="tab" className={this.onStatusTablist(1)} onClick={() =>this.onClickTabList(1)} aria-disabled="false" aria-selected="true">
                    <a id="steps-uid-0-t-0" href="#steps-uid-0-h-0" aria-controls="steps-uid-0-p-0">
                      
                      <span className="number">1.</span>
                      Cài đặt thiết bị
                    </a>
                  </li>
                  <li role="tab"  className={this.onStatusTablist(2)} onClick={() => this.onClickTabList(2)} aria-disabled="true" >
                    <a id="steps-uid-0-t-1" href="#steps-uid-0-h-1" aria-controls="steps-uid-0-p-1">
                      <span className="number">2.</span>
                      Kết Nối Với Thiết Bị
                    </a>
                  </li>
                  <li role="tab"  className={this.onStatusTablist(3)} onClick={() =>this.onClickTabList(3)} aria-disabled="true">
                    <a id="steps-uid-0-t-2" href="#steps-uid-0-h-2" aria-controls="steps-uid-0-p-2">
                      <span className="number">3.</span>
                      Cài Đặt Cảm Biến
                    </a>
                  </li>
                  <li role="tab"  className={this.onStatusTablist(4)} onClick={()=>this.onClickTabList(4)} aria-disabled="true">
                    <a id="steps-uid-0-t-3" href="#steps-uid-0-h-3" aria-controls="steps-uid-0-p-3">
                      <span className="number">4.</span>
                      Chia Sẽ Thiết Bị
                    </a>
                  </li>
                </ul>
              </div>
              <div className="content clearfix">
                <h3 id="steps-uid-0-h-0" tabIndex={-1} className="title">Account</h3>
                <FormStepOne onForm ={this.onForm(1)}/>
                <h3 id="steps-uid-0-h-1" tabIndex={-1} className="title">Profile</h3>
                <FormStepTwo onForm ={this.onForm(2)} />
                <h3 id="steps-uid-0-h-2" tabIndex={-1} className="title">Hints</h3>
                <FormStepThree onForm ={this.onForm(3)} />
                <h3 id="steps-uid-0-h-3" tabIndex={-1} className="title">Finish</h3>
                <FormStepFour onForm ={this.onForm(4)} />
              </div>
              <div className="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  <li className="disabled" aria-disabled="true">
                    <a 
                      href="#previous" 
                      role="menuitem"
                      onClick = { () => this.onPrevious()}
                    >Previous</a>
                  </li>
                  <li aria-hidden="false" aria-disabled="false" style={{display : this.state.onButtonNext }} >
                    <a 
                      href="#next" 
                      role="menuitem"
                      onClick = {() => this.onNext()}
                    >Next</a>
                  </li>
                  <li aria-hidden="false" style={{ display: this.state.onButtonFinish }}>
                    <a href="#finish" role="menuitem">Finish</a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default AddNewDevice;