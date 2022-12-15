import React,{useState} from 'react'

function Input(props) {
    const [list, setList] = useState('');

    const onChnEvent = (e) => {
        setList(e.target.value);
        console.log(e.target.value);
    }

    const onSubEvent = (e) =>{
        e.preventDefault();

        props.onAdd(list);
        setList('');
    }



  return (
    <div>
      <form onSubmit={onSubEvent}>
        <label>이름</label>
        <input type='text' value={list}  onChange={onChnEvent}/>
        <input type='submit' value='버 튼'/>
      </form>
    </div>
  )
}

export default Input
