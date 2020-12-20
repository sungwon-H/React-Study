import React, {useRef, useState, useMemo, useCallback}from 'react';

import UserList from './UserList'; // UserList 컴포넌트 사용
import CreateUser from './CreateUser'; // CreateUser 컴포넌트 사용 

/*
useMemo
"memoized" 의미이며, 이전에 계산 한 값을 재사용한다는 의미로 사용되는 react hook입니다. 

useCallback 
특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다.

useReducer
컴퍼넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.
상태 업데이트 로직을 컴포넌트 외부에 작성할 수도 있고, 다른 파일에 작성 후 불러와서 사용할 수 있습니다.

*/ 


// 화면에 버튼을 누르거나 눌러져있는 선택자를 세보는 함수
function countClickUsers(users){ // users객체 받아옴
  console.log('선택한 사용자 카운트');
  return users.filter(user => user.isclick).length; // 유저에서 클릭된사람 전체 랭스를구해서 
}



function App(){
  const [inputs, setInputs] = useState({ // inputs 객체 기본 값 생성 setInputs으로 새로운 값 가져옴
    userid: '',
    name: '',
    email: '',
  });

  const {userid, name, email} = inputs; // 구조분해 inputs에 userid, name, email, 분해해서 저장 


  


  const [users, setUsers] = useState([ // users기본값 셋팅하기위해선 setUsers사용 .. 배열등록 삭제 수정 
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


//신규생성된 ID 번호 6번부터 시작 
  const nextId = useRef(6); // useRef()를 사용할 때 매개변수를 넣어주면 그 값이 .current 값의 기본값이 됩니다.



  
  //유즈콜백 함수 사용 
// 이벤트 객체를 받아서 처리를 한다  유즈콜백으로 감싸면 다시만들지 않고 재사용이 가능 하다 
const onChange = useCallback(
  e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  },
  [inputs]
);




// 회원정보 등록 함수 
  const onCreate =  useCallback(() =>{ // 유즈 콜백 
    const user = {
      id: nextId.current, // 현재해당번호
      userid,
      name,
      email
    };
    setUsers([...users, user]);
    setInputs({
      userid:'',
      name : '',
      email: ''
    });

    nextId.current += 1; // 다음값은 5

  },[users,userid,name,email]); // 갱신값 deps배열 값이 변하라고 넣어주는 것 



  const onRemove = useCallback(id => { // 유즈콜백
    // user.id가 파라미터로 일치하지 않는 요소만 추출해서 새로운 배열을 만든다.
    setUsers(users.filter(user => user.id !== id)); // user.id와 현재 id 가 일치하지 않는것만 빼와서 새로운 배열에 넣고 나머지는 제거
  },[users]);// 유저스 갱신 


// 클릭하면 변화되는 함수 
const onToggle = useCallback(id =>{ // id값을 전달받아서 // usecallback
  setUsers(
    users.map(user =>
      user.id === id ? {...user, isclick: !user.isclick} : user // 맞으면 반대로 바꾸고 아니면 그대로
    )
  )
},[users]);


// 클릭함수 불러옴 데이터를 갱신할 배열을 뒤에 적어준다  해당하는 곳만 처리가 되도록
const count = useMemo(() => countClickUsers(users), [users]); 
 


  return(

    <>
    <CreateUser
      userid={userid}
      name={name}
      email={email}
      onChange={onChange}
      onCreate={onCreate}

    />
    <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> 
    <div>선택한 사용자 수 : {count}</div>
    </>
  );
}

export default App;
