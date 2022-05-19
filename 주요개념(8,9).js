import React from "react";
import ReactDOM from "react-dom";

// ======= 리스트와 key 실습=========

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((number) =>
//   <li>{number}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

// =========폼 실습==========

// ========1.이름 적으면 경고창으로 반환======

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this); //바인딩으로 함수랑 연결해줌
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('누구 이름 제출하누?' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <textarea value={this.state.value}
//           onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>      
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );


// =========2.과일 맛 고르기===========


// class FlavorForm extends React.Component {
//   // 생성자 영역
//   constructor(props){
//     super(props);
//     this.state = {value: '수박맛'};
//     // 바인딩으로 함수(메서드)랑 연결시켜주자
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   } 

//   handleSubmit(event) {
//     alert('고른거' + this.state.value +'맞누?');
//     event.preventDefault(); //submit되면서 새로고침 되는걸 막아줌
//   } 

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           어떤 맛 원하누?
//           <select value={this.state.value}
//           onChange={this.handleChange} >
//             <option value="딸기맛">딸기맛</option>
//             <option value="포도맛">포도맛</option>
//             <option value="수박맛">수박맛</option>
//             <option value="사과맛">사과맛</option>
//           </select>
//         </label>
//         <br />
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// // 랜더링 영역
// ReactDOM.render(
//     <FlavorForm />,
//     document.getElementById('root')
//   );

// ==========3. ================


class Reservation extends React.Component {
  // 생성자 영역
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    // 바인딩처리
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 
                  'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
        가주아잇
        <input
          name="isGoing"
          type="checkbox"
          checked={this.state.isGoing}
          onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          몇명이누~?
          <input 
            name="numberOfGuestes"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

ReactDOM.render(
      <Reservation />,
      document.getElementById('root')
    );