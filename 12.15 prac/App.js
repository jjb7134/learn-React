import { useState } from "react";

import Input from "./pages/Input";
import Showlist from "./pages/Showlist";
import ShowValue from "./pages/ShowValue";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = (props) => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // ---------셀프 영역--------
  // useState([]) 배열로 해줘야되는구나....
  // const [list, setList] = useState([]);

  // const addValue = (newList) => {
  //   // 여기에 누적시키는 작업 해줘야지
  //   setList((prevList) => {
  //     return [newList, ...prevList];
  //   });
  // };

  // // 여기서 선언한 데이터 배열 list뷰에 props로 전달할거임
  // const family = [
  //   { name: "종빈이", age: 28, sex: "남" },
  //   { name: "인영이", age: 28, sex: "여" },
  //   { name: "테리이", age: 28, sex: "남" },
  // ];

  return (
    <div className="App">
      {/* <ShowValue name={family[0].name} age={family[0].age} sex={family[0].sex}/>
     <ShowValue name={family[1].name} age={family[1].age} sex={family[1].sex}/>
     <ShowValue name={family[2].name} age={family[2].age} sex={family[2].sex}/> */}
      {/* <Input onAdd={addValue} />
      <Showlist lists={list} /> */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
