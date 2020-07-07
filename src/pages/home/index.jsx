import React ,{ useState ,useEffect} from 'react';
import Noteitem from '../../components/note/index'
import http from '../../lib/http.js'


function Home(){
  let [value,setValue] = useState('')
  const [list,setList] = useState([])

  // 获取列表
  const getNote = ()=>{
    http.get('userNoteHotline').then(res=>{
      console.log('userNoteHotline',res)
      if(res.code===0){
        setList(res.list)
      }
    })
  }
  const handleChange = (event)=>{
    setValue(event.target.value)
    // 内存泄露测试
    // var c = new Array(100000).fill(1);
    // var b = new Array(100000).fill(1);
    // let a = setInterval(()=>{
    //   console.log(222,c[2])
    //   clearInterval(a)
    // },1000)
  }
  useEffect(() => {
    getNote()
  }, [])
  return ( <div>
    <div className="navtop"></div>
    <input  value={value} onChange={handleChange} />
    <Noteitem list={list}>
      我爱我的祖国
    </Noteitem>
  </div>)
  
}
 
export default Home;
