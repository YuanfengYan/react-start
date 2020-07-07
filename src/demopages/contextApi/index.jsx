import React ,{useContext, useState ,useEffect} from 'react';
import http from '../../lib/http.js'
import './index.css'

const ThemeContext = React.createContext({
  theme:'dark',toggle:() => {},
});

// class方式
class ContextApiClass extends React.Component{
  constructor(props){
    super(props);
    this.toggle = ()=>{
      console.log(111)
      this.setState(state => ({
        theme:
          state.theme === "dark"
            ? "green"
            : "dark",
      }));
    }
    this.state = {
      theme:'dark',  
      toggle:this.toggle
    };
  }
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value={this.state}>
        <MyboxClass />
      </ThemeContext.Provider>
    );
  }
}
class MyboxClass extends React.Component{
  render(){
    return(
      <ThemeContext.Consumer>
        {(c)=>(
          <div>
            <div className="default" onClick={c.toggle}>主题切换-class</div>
            <div className={c.theme}>主题-{c.theme}</div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}



// hook方式
function Mybox(props){
  let value = useContext(ThemeContext)
  useEffect(() => {
    console.log('Mybox')
  }, [])
  return ( <div>
    <div className="default" onClick={value.toggle}>
     主题切换-hook 
    </div>
    <div className={value.theme}>主题-{value.theme}</div>
  </div>)

}
function ContextApi(){
  let [theme,setTheme] = useState("dark")
  let  toggle = function(){
    setTheme(preTheme=>{
      return preTheme=="dark"?"green":"dark"
    })
  }
  let state = {
    theme,
    toggle
  }
  return (
    <ThemeContext.Provider value={state}>
      <Mybox></Mybox>
    </ThemeContext.Provider>
  )
}
// export default  ContextApiClass
export default ContextApi;