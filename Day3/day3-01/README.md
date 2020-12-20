# React Study Day3  
<br/>

## Hooks 성능개선함수 
</br>

### useMemo(특정결과 재사용)
- "memoized" 의미이며, 이전에 계산 한 값을 재사용한다는 의미로 사용되는 react hook입니다. 
-  useMemo의 첫번쨰 파라미터는 어떻게 연산할지 정의하는 함수를 입력하고 두번째 파라미터에는 deps 배열을 넣어주면 됩니다.

### useCallback 
- 특정 함수를 새로 만들지 않고 재사용하고 싶을 때 사용합니다.

### useReducer
- 컴퍼넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다.
- 상태 업데이트 로직을 컴포넌트 외부에 작성할 수도 있고, 다른 파일에 작성 후 불러와서 사용할 수 있습니다.
현재상태액션의 객체를 파라미터로받고 새로운상태로 바꾸는 함수 

<br/><br/>

-----
</br>

- 블로그 링크 : <https://develop-hsw9058.tistory.com/>
---
</br>

### UseMemo, useCallback의 예제자료

1. [App.js](#app.js-code)
2. [CreateUser.js](#CreateUser.js-code)
3. [UserList.js](#UserList.js-code)

### useReducer 예제

1. [Counter.js](#Counter.js-code)

</br>

---

## **App.js code**
</br>

- **App.js code**

</br>

```jsx
import React, {useRef, useState, useMemo, useCallback}from 'react';

import UserList from './UserList'; // UserList 컴포넌트 사용
import CreateUser from './CreateUser'; // CreateUser 컴포넌트 사용 

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
const onChange = useCallback(e =>{  
  const{name,value} = e.target; // 아래 input의 값을 가져와서 
  setInputs({
    ...inputs, //[userid, name, email]
    [name]:value 
    
  });
},
[inputs]
);

// 회원정보 등록 함수 
  const onCreate =  useCallback(() =>{ // 유즈 콜백 
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
```

- React 모듈 사용및 컴포넌트, Hook함수 사용 선언

    ```jsx
    import React, {useRef, useState, useMemo, useCallback}from 'react';

    import UserList from './UserList'; // UserList 컴포넌트 사용
    import CreateUser from './CreateUser'; // CreateUser 컴포넌트 사용 
    ```

- 클릭된 값을 세는 함수

    ```jsx
    function countClickUsers(users){ // users객체 받아옴
      console.log('선택한 사용자 카운트');
      return users.filter(user => user.isclick).length; // users의 전체 값 중에서 클릭된 값만 리턴 

    ```

    - 클릭된 값을 불러와서 count 상수에 저장

        ```jsx
        const count = useMemo(() => countClickUsers(users), [users]);
        ```

        - return안에 상수 입력

            ```jsx
            <div>선택한 사용자 수 : {count}</div>
            ```

---

- App 컴포넌트

    ```jsx
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
            isclick: true // 클릭이되었디
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
    const onChange = useCallback(e =>{  
      const{name,value} = e.target; // 아래 input의 값을 가져와서 
      setInputs({
        ...inputs, //[userid, name, email]
        [name]:value 
        
      });
    },
    [inputs]
    );

    // 회원정보 등록 함수 
      const onCreate =  useCallback(() =>{ // 유즈 콜백 
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
    ```

    - inputs 객체 기본 값 생성 및 구조분해

        ```jsx
          const [inputs, setInputs] = useState({ // inputs 객체 기본 값 생성 setInputs으로 새로운 값 가져옴
            userid: '',
            name: '',
            email: '',
          });

          const {userid, name, email} = inputs; // 구조분해 inputs에 userid, name, email, 분해해서 저장 

        ```

    - users 객체 기본 값 셋팅

        ```jsx

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

        ```

    - 계정 생성이 ID번호 생성

        ```jsx

        //신규생성된 ID 번호 6번부터 시작 
          const nextId = useRef(6); // useRef()를 사용할 때 매개변수를 넣어주면 그 값이 .current 값의 기본값이 됩니다.
        ```

    - useCallback Hook사용하여 onChange 생성

        ```jsx
          
          //유즈콜백 함수 사용 
        // 이벤트 객체를 받아서 처리를 한다  유즈콜백으로 감싸면 다시만들지 않고 재사용이 가능 하다 
        const onChange = useCallback(e =>{  
          const{name,value} = e.target; 
          setInputs({
            ...inputs, //[userid, name, email]
            [name]:value 
            
          });
        },
        [inputs]
        );
        ```

    - useCallback Hook사용하여 onCreate 계정생성 함수

        ```jsx
        // 회원정보 등록 함수 
          const onCreate =  useCallback(() =>{ // 유즈 콜백 
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

          },[users,userid,name,email]); // 갱신값 deps배열 값이 변하라고 넣어주는 것 

        ```

    - useCallback Hook사용하여 만들어진 계정 삭제하는 함수생성

        ```jsx
        const onRemove = useCallback(id => { // 유즈콜백
            // user.id가 파라미터로 일치하지 않는 요소만 추출해서 새로운 배열을 만든다.
            setUsers(users.filter(user => user.id !== id)); // user.id와 현재 id 가 일치하지 않는것만 빼와서 새로운 배열에 넣고 나머지는 제거
          },[users]);// 유저스 갱신
        ```

    - useCallback Hook사용하여  클릭시 변화 주는 함수

        ```jsx
        // 클릭하면 변화되는 함수 
        const onToggle = useCallback(id =>{ // id값을 전달받아서 // usecallback
          setUsers(
            users.map(user =>
              user.id === id ? {...user, isclick: !user.isclick} : user // 맞으면 반대로 바꾸고 아니면 그대로
            )
          )
        },[users]);
        ```

    - **return**

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
            <UserList users={users} onRemove={onRemove} onToggle={onToggle}/> 
            <div>선택한 사용자 수 : {count}</div>
            </>
          );
        ```


</br>

## CreateUser.js code

</br>

- **CreateUser.js code**

```jsx
import React from 'react';
/*
    React 객체기능
    React.memo 성능최적화 함수
    컴퍼넌트의 props가 바뀌지 않았다면 리랜더링을 방지하여 컴퍼넌트의 리렌더링 성능 최적화를 해줄 수 있습니다.
    이 함수를 사용하면 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정합니다.

*/ 

// 유저 생성
function CreateUser({ userid,username, email, onChange, onCreate }){
    return(
        <>
        <div>
            <input name="userid" placeholder="아이디" onChange={onChange} value={userid}/>
        </div>
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={username}/>
        </div>
        <div>
            <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
        </div>
        <button onClick={onCreate}>등록하기</button>
        </>
    );
}

export default React.memo(CreateUser);
```

- 리액트 모듈 사용 선언

    ```jsx
    import React from 'react';
    ```

- 유저 생성 함수 생성

    ```jsx
    // 유저 생성
    function CreateUser({ userid,username, email, onChange, onCreate }){
        return(
            <>
            <div>
                <input name="userid" placeholder="아이디" onChange={onChange} value={userid}/>
            </div>
            <div>
                <input name="name" placeholder="이름" onChange={onChange} value={username}/>
            </div>
            <div>
                <input name="email" placeholder="이메일" onChange={onChange} value={email}/>
            </div>
            <button onClick={onCreate}>등록하기</button>
            </>
        );
    }
    ```

- **React 객체기능**
- React.memo 성능최적화 함수
- 컴퍼넌트의 props가 바뀌지 않았다면 리랜더링을 방지하여 컴퍼넌트의 리렌더링 성능 최적화를 해줄 수 있습니다.
 이 함수를 사용하면 컴포넌트에서 리렌더링이 필요한 상황에서만 리렌더링을 하도록 설정합니다.

    ```jsx
    export default React.memo(CreateUser); 사용 문법 
    ```
---

</br>

## UserList.js code


</br>

- **UserList.js code**

 ```jsx
import React,{useEffect} from 'react'; 

function User ({user, onRemove , onToggle}){
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return () =>{
            console.log('컴포넌트가 화면에서 사라짐');
        };
    
    }, [user]); // 유즈이펙트에 첫번째 파라미터에는 함수 두번째 파라미터에는 의존값이 들어있는 배열 뎁스배열이 아무것도없다면 use이펙트 함수가 실행됨

    return(
        <div>
            <b
                style={{
                    cursor : 'pointer',
                    color:user.isclick ? 'deepskyblue': 'black'
                }}
                onClick={() => onToggle(user.id)} // userid값 전달
            >{user.userid}</b>
             <span>({user.email})</span>
            {/* 메일 옆 삭제 버튼  */}
            <button onClick={ () => onRemove(user.id)}>삭제</button> 
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map(user =>(
                    <User 
                    user={user}
                    key={user.id}
                    onRemove={onRemove} 
                    onToggle={onToggle}
                    /> // 키는 각각의 값에 구분을 주기위함 
            ))}
        </div>
    )
}

export default React.memo(UserList);
```

- 리액트 모듈 선언

    ```jsx
    import React,{useEffect} from 'react';
    ```

- User 함수

    ```jsx
    function User ({user, onRemove , onToggle}){
        useEffect(()=>{
            console.log('컴포넌트가 화면에 나타남');
            return () =>{
                console.log('컴포넌트가 화면에서 사라짐');
            };
        
        }, [user]); // 유즈이펙트에 첫번째 파라미터에는 함수 두번째 파라미터에는 의존값이 들어있는 배열 뎁스배열이 아무것도없다면 use이펙트 함수가 실행됨

        return(
            <div>
                <b
                    style={{
                        cursor : 'pointer',
                        color:user.isclick ? 'deepskyblue': 'black'
                    }}
                    onClick={() => onToggle(user.id)} // userid값 전달
                >{user.userid}</b>
                 <span>({user.email})</span>
                {/* 메일 옆 삭제 버튼  */}
                <button onClick={ () => onRemove(user.id)}>삭제</button> 
            </div>
        );
    }
    ```

    - useEffect 사용하여 로그찍히게 한다.

        ```jsx

            useEffect(()=>{
                console.log('컴포넌트가 화면에 나타남');
                return () =>{
                    console.log('컴포넌트가 화면에서 사라짐');
                };
            
            }, [user]); // 유즈이펙트에 첫번째 파라미터에는 함수 두번째 파라미터에는 의존값이 들어있는 배열 뎁스배열이 아무것도없다면 use이펙트 함수가 실행됨
        ```

    - return

        ```jsx
         return(
                <div>
                    <b
                        style={{
                            cursor : 'pointer', // 포인터
                            color:user.isclick ? 'deepskyblue': 'black' // 클릭하고 안하고에따라 색변화 
                        }}
                        onClick={() => onToggle(user.id)} // userid값 전달
                    >{user.userid}</b>
                     <span>({user.email})</span>
                    {/* 메일 옆 삭제 버튼  */}
                    <button onClick={ () => onRemove(user.id)}>삭제</button> 
                </div>
            );
        ```

- 외부사용 및 React.memo사용

    ```jsx
    export default React.memo(UserList);
    ```

---

</br>

## Counter.js code

</br>

- **Counter.js code**

    ```jsx
    import React, {useReducer} from 'react'; // 리액트 모듈 사용

    function reducer(state, action){ // state, action 값 받아옴
        switch(action.type){ 
            case 'PLUS': // 상태값
                return state +1 
            case 'MINUS':
                return state -1;
            default:
                return state // 원래값 되돌려줌     
        }
    }

    function Counter(){
        const [number, dispatch] = useReducer(reducer,0); // dispatch는 액션을 발생시키는 함수 plus,minus를 발생 

        const Plus = () => {
            console.log('1을 더합니다.');
            dispatch({type:'PLUS'}); //type 객체 plus를 불러준다.
        }
        const Minus =() =>{ // 호출된 함수 실행
            console.log('1을 뺍니다');
            dispatch({type:'MINUS'});
        }

    return(
        <div>
            <h2>{number}</h2>
            <button onClick={Plus}>1 더하기</button>
            <button onClick={Minus}>1 빼기</button> {/*함수를 호출*/ }
        </div>
    );
    }
    export default Counter;
    ```

    - 리액트 사용 및 useReducer Hook 모듈 사용 선언

        ```jsx
        import React, {useReducer} from 'react'; // 리액트 모듈 사용
        ```

    - reducer 함수 초기 셋팅

        ```jsx
        function reducer(state, action){ // state, action 값 받아옴
            switch(action.type){ 
                case 'PLUS': // 상태값
                    return state +1 
                case 'MINUS':
                    return state -1;
                default:
                    return state // 원래값 되돌려줌     
            }
        }
        ```

    - Counter 함수 (reducer)함수를 가져와서 값변화 작업

        ```jsx
        function Counter(){
            const [number, dispatch] = useReducer(reducer,0); // dispatch는 액션을 발생시키는 함수 plus,minus를 발생 

            const Plus = () => {
                console.log('1을 더합니다.');
                dispatch({type:'PLUS'}); //type 객체 plus를 불러준다.
            }
            const Minus =() =>{ // 호출된 함수 실행
                console.log('1을 뺍니다');
                dispatch({type:'MINUS'});
            }
        ```

    - return 작성 및 전역사용 선언

        ```jsx
        return(
            <div>
                <h2>{number}</h2>
                <button onClick={Plus}>1 더하기</button>
                <button onClick={Minus}>1 빼기</button> {/*함수를 호출*/ }
            </div>
        );
        }
        export default Counter;
        ```

    ---