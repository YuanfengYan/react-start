import React ,{ useState ,useEffect} from 'react';
import http from '../../lib/http.js'


function ContextApi(){
  let [value,setValue] = useState('')

  useEffect(() => {
  }, [])
  return ( <div>
 {value}12
  </div>)
}
 
export default ContextApi;
