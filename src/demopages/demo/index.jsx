import React ,{ useState ,useEffect,useRef,useMemo,useDebugValue} from 'react';
import http from '../../lib/http.js'

const FancyButton = React.forwardRef((props, ref) => (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  ));

function RefsComponents(){
  let [value,setValue] = useState('')
  const ref = React.createRef();

  useEffect(() => {
      console.log(ref)
  }, [])
  return ( <div>
    <FancyButton ref={ref}>Click me!</FancyButton>
  </div>)
}
 

// useRef 访问DOM
function UseRefComponents(){
    const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => {
    return 2 * count;
  }, [count]);

  const couterRef = useRef();

  useEffect(() => {
    document.title = `The value is ${count}`;
    console.log(couterRef.current);
  }, [count]);
  
  return (
    <>
      <button ref={couterRef} onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
    </>
  );
}

// 跨渲染周期保存数据
function UseRefComponents2(props){
    const [count, setCount] = useState(0);
  
    const doubleCount = useMemo(() => {
      return 2 * count;
    }, [count]);
  
    
    const timerID = useRef();

    
    useEffect(() => {
      timerID.current = setInterval(()=>{
          setCount(count => count + 1);
      }, 1000); 
    }, []);
    
    useEffect(()=>{
        if(count > 10){
            clearInterval(timerID.current);

        }
    });
    
    return (
      <>
        <button onClick={() => {setCount(count + 1)}}>Count: {count}, double: {doubleCount}</button>
      </>
    );
  }
export default UseRefComponents2;
