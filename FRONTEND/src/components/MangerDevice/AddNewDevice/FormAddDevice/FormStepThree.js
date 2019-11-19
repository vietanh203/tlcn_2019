import React, { Component } from 'react';
import { connect } from 'react-redux';
import callApi from './../../../../apicall/apiCaller';
class FormStepThree extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: [],
      mainArea:'',
      childArea:'',
      areaSelect :'',
      nameDevice:''
    }
  }


  onChange = (events)=>{
    let value = events.target.value;
    let name = events.target.name;
    this.setState({
      [name]:value
    })
    console.log(this.state.childArea)
  }

  onForm = () => {
    return this.props.onForm ? { display: 'block' } : { display: 'none' };
  }
  componentDidMount() {
    callApi(`api/areas/usercontrollarea/${this.props.username}`, 'GET', {
      'x-access-token': this.props.token
    }).then(res => {
      if (res.data) {
        this.setState({
          areas: res.data,
          mainArea:res.data.filter(area=>area.mainArea)[0].id,
          childArea:res.data.filter(area=>area.mainArea)[0].areaControll[0]
        })
      }
     
    })
  }
  onRenderOptionMain = () =>{
    let result = '';
    if(this.state.areas.length>0){
      let arrayMain = this.state.areas.filter(area => area.mainArea);
      result = arrayMain.map((value,index)=>{
        return <option className="text-center" value={value.id} key={index}>{value.name}</option>
      })
    }
    return result;
  }
  onRenderOptionChild = () =>{
    let result = '';
    if(this.state.mainArea){
      let arrayArea = this.state.areas.find(area=>area.id==this.state.mainArea).areaControll;
      result = arrayArea.map((value,index)=>{
        let areaRender = this.state.areas.find(area=>area.id==value);
        return <option className="text-center" value={areaRender.id} key={index}>{areaRender.name}</option> 
      })
    }
    return result;
  }

  onSubmit = ()=>{
    this.props.callFromParent(this.state.nameDevice,this.state.childArea)
  }
  // onChange =(events)=>{
  //   let name = events.target.name;
  //   let value = events.target.value;
  //   this.setState({
  //     [name]:value
  //   })
  //   console.log(this.state.nameDevice)
  // }

  render() {
    
    return (

      <section style={{ backgroundColor: '#9fbbd4' }} id="steps-uid-0-p-2" role="tabpanel" aria-labelledby="steps-uid-0-h-2" className="body" aria-hidden="true" style={this.onForm()}>
        <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p-b-10">
          </div>
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p-b-10">
            <div className="container text-center">
              <form>
                <label><h3>Khu Vực Chính</h3></label>&nbsp;
                <select name='mainArea' className="text-center" type="text" style={{'width':'350px','height':'45px','border':'solid'}} onChange={(events)=>this.onChange(events)}>
                  {this.onRenderOptionMain()}
                 
                </select>             
                <label><h3>Khu Vực Con</h3></label>&nbsp;
                <select name='childArea' className="text-center" type="text" style={{'width':'350px', 'height':'45px','border':'solid'}} onChange={(events)=>this.onChange(events)}>
                  {this.onRenderOptionChild()}
                  {/* <option className="text-center" value="haha">Nhà của Nghĩa</option> */}
                </select>
                <label><h3>Ten Thiet Bi</h3></label>&nbsp;
                <input onChange={(events)=>this.onChange(events)} name='nameDevice' className="text-center" type="text" style={{'width':'350px', 'height':'45px','border':'solid'}} onChange={(events)=>this.onChange(events)}/>

              </form>
              <br/><button onClick={()=>this.onSubmit()} type="button" className="btn btn-primary">Xac Nhan</button>
            </div>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 p-b-10">
          </div>
      </section>

    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.username,
    token: state.token
  }
}


export default connect(mapStateToProps)(FormStepThree);



