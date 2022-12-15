import {useState} from 'react'

import Input from './components/Input';
import Showlist from './components/Showlist';
import ShowValue from './components/ShowValue';

const App=(props) => {
  const [list, setList] = useState('');

  const addValue = (newList)=>{
    // 여기에 누적시키는 작업 해줘야지
    setList((prevList)=>{
      return [newList, ...prevList];
    })
  }

  // 여기서 선언한 데이터 배열 list뷰에 props로 전달할거임
  const family=[
    {name:'종빈이',age:28,sex:'남'},
    {name:'인영이',age:28,sex:'여'},
    {name:'테리이',age:28,sex:'남'}
  ]

  return (
    <div className="App">
     {/* <ShowValue name={family[0].name} age={family[0].age} sex={family[0].sex}/>
     <ShowValue name={family[1].name} age={family[1].age} sex={family[1].sex}/>
     <ShowValue name={family[2].name} age={family[2].age} sex={family[2].sex}/> */}
     <Input onAdd={addValue}/>
     <Showlist lists={list}/>
    </div>
  );
}

export default App;
