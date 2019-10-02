var redux = require('redux');
var isAuthenticate = '';
var user =localStorage.getItem('user');
if(user!=null){
    isAuthenticate = JSON.parse(user).isAuthenticate ? user : '';
}
console.log(isAuthenticate);
var InitialState = { 
    showFormRegister : false,
    isAuthenticate 
}

const allReducer = (state=InitialState,action)=>{
    switch(action.type){
        case  "SHOW_FORM_REGISTER" :
            return {showFormRegister:!state.showFormRegister};
        case  "IS_AUTHENTICATE" :
            localStorage.setItem('user',JSON.stringify({isAuthenticate : true}))
            return {isAuthenticate:true};
        case "IS_LOGOUT" :
            localStorage.setItem('user',JSON.stringify({isAuthenticate : false}))    
            return {isAuthenticate:false};
        default : 
            return {...state};

    }
}

var store = redux.createStore(allReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.subscribe(function(){
    console.log(JSON.stringify(store.getState()));
})
export default store;