import React from 'react';
import ReactDOM from 'react-dom';

// // =============== 5.state와 생명주기


// // function Clock(props) {
// //   return (
// //   <div>
// //     <h1>hi, i'm jongbin</h1>
// //     <h2>현재는 {props.date.toLocaleTimeString()} 입니다.</h2>
// //   </div>
// //   );
// // }

// function FormattedDate(props) {
//   return <h2>지금은 {props.date.toLocaleTimeString()} 에요.</h2>;
// }

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()}; //직접수정하지 마라. this.state 지정가능 공간은 이곳이 유일
//   }

//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   //렌더링 영역
//   render() {
//     return (
//       <div>
//         <h1>Hi, dear</h1>
//           <FormattedDate date={this.state.date}/>
//       </div>
//     );
//   }
//   // render() {
//   //   return (
//   //     <div>
//   //       <h1>Hi, dear</h1>
//   //         <h2>지금은 {this.state.date.toLocaleTimeString()} 에요.</h2>
//   //     </div>
//   //   );
//   // }
// }

//   function App(props) {
//     return (
//       <div>
//         <Clock />
//         <Clock />
//         <Clock />
//       </div>
//     );
//   }

//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );


//   // // 데이터는 아래로 흐릅니다
//   // // 부모 컴포넌트나 자식 컴포넌트 모두 특정 컴포넌트가 유상태인지 
//   // 또는 무상태인지 알 수 없고, 그들이 함수나 클래스로 정의되었는지에 대해서 관심을 가질 필요가 없습니다.
  
//   // // 이 때문에 state는 종종 로컬 또는 캡슐화라고 불립니다. 
//   // state가 소유하고 설정한 컴포넌트 이외에는 어떠한 컴포넌트에도 
//   // 접근할 수 없습니다.
  
//   // // 컴포넌트는 자신의 state를 자식 컴포넌트에 props로 전달할 수 있습니다.
  
//   // // <FormattedDate date={this.state.date} />
//   // // FormattedDate 컴포넌트는 date를 자신의 props로 받을 것이고 이것이 
//   // Clock의 state로부터 왔는지, Clock의 props에서 왔는지, 수동으로 입력한 
//   // 것인지 알지 못합니다.
  
//   // // function FormattedDate(props) {
//   // //   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
//   // // }
  
//   // // 일반적으로 이를 “하향식(top-down)” 또는 “단방향식” 데이터 흐름이라고
//   //  합니다. 모든 state는 항상 특정한 컴포넌트가 소유하고 있으며 
//   //  그 state로부터 파생된 UI 또는 데이터는 오직 트리구조에서 
//   //  자신의 “아래”에 있는 컴포넌트에만 영향을 미칩니다.
  
//   // // 트리구조가 props들의 폭포라고 상상하면 각 컴포넌트의 state는 
//   // 임의의 점에서 만나지만 동시에 아래로 흐르는 부가적인 
//   // 수원(water source)이라고 할 수 있습니다.
  
//   // // 모든 컴포넌트가 완전히 독립적이라는 것을 보여주기 위해 
//   // App 렌더링하는 세 개의 <Clock>을 만들었습니다.
  
//   // function App() {
//   //   return (
//   //     <div>
//   //       <Clock />
//   //       <Clock />
//   //       <Clock />
//   //     </div>
//   //   );
//   // }
  
//   // ReactDOM.render(
//   //   <App />,
//   //   document.getElementById('root')
//   // );
  
//   // 각 Clock은 자신만의 타이머를 설정하고 독립적으로 업데이트를 합니다.
  
//   // React 앱에서 컴포넌트가 유상태 또는 무상태에 대한 것은 시간이 지남에
//   //  따라 변경될 수 있는 구현 세부 사항으로 간주합니다. 유상태 컴포넌트 안에서 
//   //  무상태 컴포넌트를 사용할 수 있으며, 그 반대 경우도 마찬가지로 사용할 수
//   //   있습니다

// ========= 6. 이벤트 처리하기=========

// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('you click bla');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <button type='submit'>Submit</button>
//     </form>
//   );
// }

//on off 버튼 렌더링 해보자
// 컴포넌트
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isTogglOn: true};

//     //콜백에서 'this'가 작동하려면 아래와 같이 바인딩 해주자
//     // !!! 함수형,클래스 필드형도 있지만 되도록 const와 클래스 필드형을 써주자.
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isTogglOn: !prevState.isTogglOn
//     }));
//   }

//   // 렌더메서드
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isTogglOn ? 'on' : 'off'}
//       </button>
//     );
//   }
// }

// // 렌더링영역
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};
    //바인딩 처리
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn? 'o' : 'x'}
      </button>
    );
  }

}

//렝더링 영역
ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);