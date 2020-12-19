import React, {useRef, useState}from 'react';

import UserList2 from './UserList2';
import CreateUser from './CreateUser';


function App(){
  const [inputs, setInputs] = useState({ // 
    userid: '',
    name: '',
    email: '',
  });
  
  const {userid, name, email} = inputs;

  const onChange = e =>{
    const{name,value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }
  
  const [users, setUsers] = useState([ // users기본값 셋팅하기위해선 setUsers사용
    {
        id:1,
        userid:'apple',
        name:'김사과',
        email:'apple@apple.com',
        isclick: true // 클릭이됬니
    },
    {
        id:2,
        userid:'banana',
        name:'반하나',
        email:'banana@banana.com',
        isclick: false
    },
    {
        id:3,
        userid:'melon',
        name:'이메론',
        email:'melon@melon.com',
        isclick: false
    },
    {
        id:4,
        userid:'orange',
        name:'오렌지',
        email:'orange@orange.com',
        isclick: false
    },
    {
        id:5,
        userid:'berry',
        name:'박배리',
        email:'berry@berry.com',
        isclick: false
    },
]);

//다음값 아이디값 설정 
  const nextId = useRef(6); // useRef()를 사용할 때 매개변수를 넣어주면 그 값이 .current 값의 기본값이 됩니다.
  
  const onCreate = () =>{
    const user = {
      id: nextId.currnet, // 현재해당번호
      userid,
      name,
      email
    }
    setUsers([...users, user]);

    setInputs({
      userid:'',
      name : '',
      email: ''
    });

    nextId.current += 1; // 다음값은 5

  };

  const onRemove = id => {
    // user.id가 파라미터로 일치하지 않는 요소만 추출해서 새로운 배열을 만든다.
    setUsers(users.filter(user => user.id !== id)); // user.id와 현재 id 가 일치하지 않는것만 빼와서 새로운 배열에 넣고 나머지는 제거 
  }


// 
const onToggle = id =>{ // id값을 전달받아서
  setUsers(
    users.map(user =>
      user.id === id ? {...user, isclick: !user.isclick} : user // 맞으면 반대로 바꾸고 아니면 그대로
    )
  )
}



  return(

    <>
    <CreateUser
      userid={userid}
      name={name}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    
    />
    {/* <InputTest/> */}
    {/* <InputTest3/> */}
    {/* <UserList/> */}
    <UserList2 users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;