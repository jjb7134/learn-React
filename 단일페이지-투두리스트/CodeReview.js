import React, { useState } from "react";

// useState를 사용해 state를 업데이트하고 setSteat에 누적해서
// 동적으로 띄우는 코드
function CodeReview() {
  // 입력받은 값
  const [list, setlist] = useState("");
  // 중요!!!리스트들은 배열에 누적되기에 useState를 []로 초기화 시켜주셔야 합니다
  const [vue, setVue] = useState([]);

  // 값이 변경되면 setState에 추가해주는 함수
  const onAddEvent = (e) => {
    setlist(e.target.value);
  };

  // 버튼을 클릭하면 빈칸이 되는 함수
  const onClickEvent = () => {
    // setVue에 누적
    setVue((prevValue) => {
      return [{ list }, ...prevValue];
    });
    // console.log({ list })
    // console.log(vue);
    // 빈칸 초기화
    setlist("");
  };

  return (
    <div style={{ background: "white" }}>
      {/* 입력받는 영역 */}
      <div className="formWrap">
        <label>입력해줘</label>
        <input type="text" value={list} onChange={onAddEvent} />
        <input
          type="button"
          value="눌러주숑 다 띄워불랑게"
          onClick={onClickEvent}
        />
      </div>
      {/* 리스트 영역 */}
      <ul>
        {/* map함수의 변수도 단일페이지로 작업하니까 {동적으로} 받아야지 */}
        {vue.map(({ list }) => (
          <li key={Math.random()}>{list}</li>
        ))}
      </ul>
    </div>
  );
}

export default CodeReview;
