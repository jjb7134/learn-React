import React,{useState} from 'react'

const ShowValue=(props) => {
  const [memb, setMemb] = useState(props.name)

    // const name = '종빈';
    // const age = 28;
    const clickHandler= () => {
        setMemb('쨘')
        console.log(memb)
    }
    
    

  return (
    <div>
      <div>
        {/* dynamic param 불러오기 */}
        <h2>{memb}</h2>
        <h2>{props.age}</h2>
        <h2>{props.sex}</h2>
        <button onClick={clickHandler}>누 르 쑝</button>
      </div>
    </div>
  )
}

export default ShowValue
