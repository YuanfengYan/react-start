import React ,{ useState ,useEffect} from 'react';
import http from '../../lib/http.js'


function ContextApi(){
  let [value,setValue] = useState('')
 

  useEffect(() => {
    setValue(111)
  }, [])
  return ( <div>
 {value}
  </div>)
  
}
 
export default ContextApi;
