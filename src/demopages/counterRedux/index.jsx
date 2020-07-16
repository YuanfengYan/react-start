import React ,{ useState ,useEffect} from 'react';
import   { connect,Provider } from 'react-redux'
import { createStore ,bindActionCreators,combineReducers} from 'redux'
import http from '../../lib/http.js'
import './index.css'
// 创建reducer
let initstate = {count:10}
const counter = (state=initstate,action)=>{
  switch(action.type){
      case 'ADD':
        return {
          count:state.count+1
        }
      case "MINUS":
        return {
          count:state.count-1
        }
      default:
        break
  }
  return state
}
const counter2 = (state=initstate,action)=>{
  switch(action.type){
      case 'AD':
        return {
          count:state.count+2
        }
      case "MINU":
        return {
          count:state.count-2
        }
      default:
        break
  }
  return state
}
// 创建store
const store = createStore(combineReducers({counter}))
// 创建action
function add(){
  return {
    type:"ADD",
    text:'加1'
  }
}
function minus(){
  return {
    type:"MINUS2",
    text:'减1'
  }
}
function mapstateToProps(state){
  return {
    count:state.count
  }
}
function mapdispatchToProps(dispatch){
  return bindActionCreators({minus,add},dispatch)
}
// 利用connect高阶组件，返回一个组件
const ConnectCount = connect(mapstateToProps,mapdispatchToProps)(CounterRedux)
function CounterRedux(props){

  let {count,minus,add}   = props
  console.log(props.minus.toString())
  useEffect(() => {
    console.log(props)
  }, [])
  return (
      <div >
        <div className="minus" onClick={minus}>-</div>
        <div className="num">{count}</div>
        <div className="add" onClick={add}>+</div>
    </div>
  )
}
function CounterReduxWarp(){
  return(
    <Provider store={store}>
      <ConnectCount></ConnectCount>
    </Provider>
  )
}

export default CounterReduxWarp;
