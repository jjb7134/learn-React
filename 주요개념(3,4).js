//Component 와 Props

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className="Avatar"
          src={props.user.avatarUrl}
          alt={props.user.name} />
  );
}

function UserInfo(props) {
  return (
     <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
  <div className="Comment">
     <UserInfo user={props.author} /> 
      <div className="Comment-text1">
        {props.text1}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
      <div className="Comment-text2">
        {props.text2}
      </div>
  </div>
  );
}

const comment = {
  date: new Date(),
  text1: '여보,테리야 나',
  text2: '에 이거 공부했어...',
  author:{
    name: "파이리",
    avatarUrl: 'https://velog.velcdn.com/images/jjb7134/profile/1e6b620c-9dd1-44de-bc6f-a31a8488ec36/image.jpg'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Comment
    date={comment.date}
    text1={comment.text1}
    text2={comment.text2}
    author={comment.author} />
);
      
// 느낀점
// 1. React의 기본구성 요소 element를 알 수 있었음.
// 2. 함수형 컴포넌트를 알고, 렌더링 과정을 알 수 있었음.
// 3. 컴포넌트의 props를 수정할 수 없고 순수함수처럼 동작하게 해야함에 주의하자
