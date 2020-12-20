# React Study Day3  
<br/>

## Hooks 성능개선함수 
</br>

### useReducer
- 컴퍼넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.
- 상태 업데이트 로직을 컴포넌트 외부에 작성할 수도 있고, 다른 파일에 작성 후 불러와서 사용할 수 있습니다.
현재상태액션의 객체를 파라미터로받고 새로운상태로 바꾸는 함수 

<br/><br/>

-----
</br>

- 블로그 링크 : <https://develop-hsw9058.tistory.com/>

</br>

---
## useReducer 예제

</br>

```jsx
import React, {useRef, useReducer, useMemo, useCallback} from 'react';

import UserList from './UserList';
import CreateUser from './CreateUser';

// 클릭된 사용자 인원 명수 
function countClickUsers(users){ // users객체 받아옴
  console.log('선택한 사용자 카운트');
  return users.filter(user => user.isclick).length; // 유저에서 클릭된사람 전체 랭스를구해서 
}

const initialState = { // 객체 생성
      inputs: {
        userid:'',
        name: '',
        email: '',
      },
      users :[
        {
            id:1,
            userid:'apple',
            name:'김사과',
            email:'apple@apple.com',
            isclick: true // 클릭되어있다
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
        }
         ]
}

function reducer(state, action){
    //onChange 대한 처리
    switch(action.type){
      case 'CHANGE_INPUT':
        return{
          ...state, // 초기값 가져옴
          inputs:{
            ...state.inputs,
            [action.name]:action.value // 액션이름에 밸류값, []는 앞뒤 구분
          }
        }
      case 'CREATE_USER':
          return{
            inputs: initialState.inputs,
            users: state.users.concat(action.user) // state.users와action.user합쳐 users에 저장 concat가 합쳐주는 문법 
 
          };
      case 'TOGGLE_USER':
            return{
              ...state, // 복사객체 
              users: state.users.map(user => // 유저스 객체안에 들어있는 갯수만큼 5명이면 5명 만큼 반복 시킨다  아래 내용을 그중 객체 하나를 꺼내서 그객체의 아이디값과 액션의 아이디 값이 같은지 만약에 같으면 내가 선택했으니 그 해당객체에 클릭의 값을 기존의 false 그렇지 않다면 냅둔다
                user.id === action.id ?{...user, isclick: !user.isclick } : user)//
            }; 
      case 'REMOVE_USER':
          return{
            ...state,
            users : state.users.filter(user => user.id !== action.id)
          }
            default: 
            return state; // 기본값
        }
      
    }

function App(){
   // reducer 함수와 초기화 시킨 객체를 넣는다, 객체를 한번에 처리하기 위해 현재값은 state 변경값은 dispatch
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(6); // 회원 추가시 ID번호가 6번 부터 시작

  const{users} = state ; // 초기값 state값을 users에 비구조화 할당 문법을 사용해서 컴포넌트 user에 전달
  const {userid, name, email} = state.inputs; //입력받은 값 분해 

  const onChange = useCallback(e =>{ // CHANGE_INPUT액션 객체를 사용하여 
    const {name, value} = e.target;
    dispatch({
      type:'CHANGE_INPUT',
      name,
      value
    })
  },[])//갱신값 없음 

  const onCreate = useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user:{ // 데이터를 객체
        id: nextId.current, // 현재번호
        userid,
        name,
        email
      }
    });
    nextId.current += 1; // create하면 아이디 번호가 올라감 
  },[userid, name, email]); // 실제 업데이트 될 내용

  const onToggle = useCallback(id =>{
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []); // 갱신 값 없음
  //9.
  const onRemove = useCallback(id =>{
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []); // 갱신 값 없음

  const count = useMemo (() => countClickUsers(users),[users]); // 

  return(

    <>
    <CreateUser 
      userid={userid} 
      name={name} 
      email={email} 
      onChange={onChange} 
      onCreate={onCreate}
    />
    <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
    <div>선택한 사용자 수 : {count}</div>
    </>

  );

}
export default App;
```

- 리액트 , Hook ,컴포넌트  사용

    ```jsx
    import React, {useRef, useReducer, useMemo, useCallback} from 'react';

    import UserList from './UserList';
    import CreateUser from './CreateUser';
    ```

- 생성된 메일 계정 클릭 시 나타나는 사용자 수

    ```jsx
    // 클릭된 사용자 인원 명수 
    function countClickUsers(users){ // users객체 받아옴
      console.log('선택한 사용자 카운트');
      return users.filter(user => user.isclick).length; // 유저에서 클릭된사람 전체 랭스를구해서 
    }
    ```

- 객체 생성

    ```jsx
    const initialState = { // 객체 생성
          inputs: {
            userid:'',
            name: '',
            email: '',
          },
          users :[
            {
                id:1,
                userid:'apple',
                name:'김사과',
                email:'apple@apple.com',
                isclick: true // 클릭되어있다
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
            }
             ]
    }

    ```

- Reducer 함수 생성
    - useReducer은 state, action을 사용한다 그리고 switch로 처리한다
    - 각 기능에 대한 처리방법이다

    ```jsx
    function reducer(state, action){
        //onChange 대한 처리
        switch(action.type){
          case 'CHANGE_INPUT':
            return{
              ...state, // 초기값 가져옴
              inputs:{
                ...state.inputs,
                [action.name]:action.value // 액션이름에 밸류값, []는 앞뒤 구분
              }
            }
          case 'CREATE_USER':
              return{
                inputs: initialState.inputs,
                users: state.users.concat(action.user) // state.users와action.user합쳐 users에 저장 concat가 합쳐주는 문법 
     
              };
          case 'TOGGLE_USER':
                return{
                  ...state, // 복사객체 
    // users 객체안에 들어있는 갯수만큼 반복시킨다 아래 내용을 그중 객체 하나를 꺼내서 그 객체의 아이디값과 액션의 아이디 값이 같은지 만약에 같으면 내가 선택했으니 그 해당객체에 클릭의 값을 기존의 false 그렇지 않다면 냅둔다
                  users: state.users.map(user => user.id === action.id ?{...user, isclick: !user.isclick } : user)//
                }; 
          case 'REMOVE_USER':
              return{
                ...state,
                users : state.users.filter(user => user.id !== action.id)
              }
                default: 
                return state; // 기본값
            }
          
        }
    ```

- App 함수

    ```jsx
    function App(){
       // reducer 함수와 초기화 시킨 객체를 넣는다, 객체를 한번에 처리하기 위해 현재값은 state 변경값은 dispatch
      const [state, dispatch] = useReducer(reducer, initialState);
      const nextId = useRef(6); // 회원 추가시 ID번호가 6번 부터 시작

      const{users} = state ; // 초기값 state값을 users에 비구조화 할당 문법을 사용해서 컴포넌트 user에 전달
      const {userid, name, email} = state.inputs; //입력받은 값 분해 

      const onChange = useCallback(e =>{ // CHANGE_INPUT액션 객체를 사용하여 
        const {name, value} = e.target;
        dispatch({
          type:'CHANGE_INPUT',
          name,
          value
        })
      },[])//갱신값 없음 

      const onCreate = useCallback(()=>{
        dispatch({
          type:'CREATE_USER',
          user:{ // 데이터를 객체
            id: nextId.current, // 현재번호
            userid,
            name,
            email
          }
        });
        nextId.current += 1; // create하면 아이디 번호가 올라감 
      },[userid, name, email]); // 실제 업데이트 될 내용

      const onToggle = useCallback(id =>{
        dispatch({
          type: 'TOGGLE_USER',
          id
        });
      }, []); // 갱신 값 없음
      //9.
      const onRemove = useCallback(id =>{
        dispatch({
          type: 'REMOVE_USER',
          id
        });
      }, []); // 갱신 값 없음

      const count = useMemo (() => countClickUsers(users),[users]); // 

      return(
        <>
        <CreateUser 
          userid={userid} 
          name={name} 
          email={email} 
          onChange={onChange} 
          onCreate={onCreate}
        />
        <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
        <div>선택한 사용자 수 : {count}</div>
        </>
      );
    }
    ```

    - reducer 함수와 초기화 시킨 객체를 넣는다, 객체를 한번에 처리하기 위해 현재값은 state 변경값은 dispatch

        ```jsx
         const [state, dispatch] = useReducer(reducer, initialState);
        ```

    - 사용자 추가 시 ID번호가 6번부터 시작

        ```jsx
         const nextId = useRef(6); // 회원 추가시 ID번호가 6번 부터 시작
        ```

    - 초기값 state 값을 users에 비구조화 할당 문법을 사용해서 컴포넌트 users에 전달 그리고 state.inputs 값을 분해하여 userid, name, email 저장

        ```jsx
         const{users} = state ; // 초기값 state값을 users에 비구조화 할당 문법을 사용해서 컴포넌트 user에 전달
          const {userid, name, email} = state.inputs; //입력받은 값 분해 

        ```

    - 각 기능별 useCallback으로 처리

        ```jsx
         const onChange = useCallback(e =>{ // CHANGE_INPUT액션 객체를 사용하여 
            const {name, value} = e.target;
            dispatch({
              type:'CHANGE_INPUT',
              name,
              value
            })
          },[])//갱신값 없음 

          const onCreate = useCallback(()=>{
            dispatch({
              type:'CREATE_USER',
              user:{ // 데이터를 객체
                id: nextId.current, // 현재번호
                userid,
                name,
                email
              }
            });
            nextId.current += 1; // create하면 아이디 번호가 올라감 
          },[userid, name, email]); // 실제 업데이트 될 내용

          const onToggle = useCallback(id =>{
            dispatch({
              type: 'TOGGLE_USER',
              id
            });
          }, []); // 갱신 값 없음
          //9.
          const onRemove = useCallback(id =>{
            dispatch({
              type: 'REMOVE_USER',
              id
            });
          }, []); // 갱신 값 없음

        ```

    - 사용자 클릭 시 아래 사용자 수 출력 문구

        ```jsx
         const count = useMemo (() => countClickUsers(users),[users]); // 
        ```

    - 웹에 보이는 부분

        ```jsx
        return(

            <>
            <CreateUser 
              userid={userid} 
              name={name} 
              email={email} 
              onChange={onChange} 
              onCreate={onCreate}
            />
            <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
            <div>선택한 사용자 수 : {count}</div>
            </>

          );
        ```