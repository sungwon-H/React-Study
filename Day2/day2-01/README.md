# React Day2 공부자료   
<br />

## Hooks 상태관리함수   

<br />
  
<br/>

### useState, useRef, useEffcet 의 예제자료
   
<br/><br/>

- 설명 블로그 링크 : <https://develop-hsw9058.tistory.com/>




<br/><br/>

# 목차
1. [InputTest_1 [예제] ](#input-예제-(1) )  

2. [InputTest_2 [예제] ](#input-예제-(2) )

3. [InputTest_3 [예제] ](#input-예제-(3) )

4. [UserList_1 [예제] ](#userlist.예제 )


 

</br>

- [**spread시트문법**](#스프레드시트-문법)

</br>
</br>

----

</br>
</br>
</br>  







## Input 예제 (1)

<br/>

-   **App.js code**

    ```jsx
    import React from 'react';
        import InputTest from './InputTest';

        function App() {
        return (
            <div>
            <InputTest/>
            </div>
        );
        }

    export default App;
    ```

    - 리액트 모듈사용 함수

        ```jsx
        import React from 'react';
        ```

    - InputTest 컴포넌트 사용

        ```jsx
        import InputTest from './InputTest';
        ```

    - InputTest 컴포넌트를 화면에 출력해주기 & App 컴포넌트 외부 사용 해주는 코드

        ```jsx
        function App() {
          return (
            <div>
              <InputTest/>
            </div>
          );
        }

        export default App; 
        ```

- **InputTest.js code**

    ```jsx
    import React,{useState} from 'react'; // 리액트 모듈 사용 , useState hooks 상태관리 함수 사용 

        function InputTest(){ // InpunTest 컴포넌트 생성
            const [text, setText] = useState(''); // 기본값 샛팅 text='' 변화를 주려면 setText함수를 사용해야한다
            
            const onChange = (e) => { // onChange 값을 변경하는  이벤트 생성 
                setText(e.target.value); // e.target.value 
            }
            const onReset = () => { // onReset함수 실행되면 공백으로 변함
                setText('');
            }
            return(
                <div>
                    <input onChange={onChange} value={text}/>       {/*value 값이 있어야 값이 초기화된다.*/}
                    <button onClick={onReset}>초기화</button>
                    <div>
                        <b>값 : {text}</b>
                    </div>
                </div>
                
            )
        }

    export default InputTest;
    ```

    - **리액트 모듈 사용 및 useState (Hooks)상태 관리 함수 모듈 사용**

        ```jsx
        import React,{useState} from 'react'; // 리액트 모듈 사용 , useState hooks 상태관리 함수 사용 
        ```

    - **InputTest 컴포넌트 생성 및 외부 사용 코드**

        ```jsx
        function InputTest(){ // InpunTest 컴포넌트 생성
            const [text, setText] = useState(''); // 기본값 샛팅 text='' 변화를 주려면 setText함수를 사용해야한다
            
            const onChange = (e) => { // onChange 값을 변경하는  이벤트 생성 
                setText(e.target.value); // e.target.value 
            }
            const onReset = () => { // onReset함수 실행되면 공백으로 변함
                setText('');
            }
            return(
                <div>
                    <input onChange={onChange} value={text}/>       {/*value 값이 있어야 값이 초기화된다.*/}
                    <button onClick={onReset}>초기화</button>
                    <div>
                        <b>값 : {text}</b>
                    </div>
                </div>
                
            );
        }

        export default InputTest;
        ```
-----

</br>
</br>

 ## Input 예제 (2)


</br>

- **App.js code**

    ```jsx
    import React from 'react';
    import InputTest2 from './InputTest2'

    function App() {
      return (
        <>
          <InputTest2/>
        </>
      );
    }

    export default App;
    ```

    - 리액트 모듈사용 함수

        ```jsx
        import React from 'react';
        ```

    - InputTest2 컴포넌트 사용

        ```jsx
        import InputTest2 from './InputTest2';
        ```

    - InputTest2 컴포넌트를 화면에 출력해주기 & App 컴포넌트 외부 사용 해주는 코드

        ```jsx
        function App() {
          return (
            <div>
              <InputTest2/>
            </div>
          );
        }

        export default App; 
        ```

- **InputTest2.js code**

    ```jsx
    import React, {useState} from 'react';

    function InputTest2(){
        const [inputs, setInputs] = useState({ // 기본 값을 객체형으로 여러가지 기본 값을 사용할 때
            userid: '',
            name: ''
        });

        const {userid, name} = inputs; //  비구조화 할당 

        const onChange = (e) =>{ // 값을 변경 하는 이벤트 
            const {value, name} = e.target; // 아래 input값가져옴 
            setInputs({ // 기본 값 변경
                ...inputs,
                [name]: value 
            });
        }
        const onReset = () => { // 초기화 이벤트 
            setInputs({
                userid:'',
                name:''
            });
        }
          return(
              <div>
                <input name="userid" value={userid} placeholder="아이디" onChange={onChange}/>
                <input name="name" value={name} placeholder="이름" onChange={onChange}/>
                <button onClick={onReset}>초기화</button>
                <div>
                
                    <b>값 : </b>
                    {name}({userid})
                </div>
            </div> 
        );
    }

    export default InputTest2;
    ```

    - **리액트 모듈 사용 및 useState (Hooks)상태 관리 함수 모듈 사용**

        ```jsx
        import React,{useState} from 'react'; // 리액트 모듈 사용 , useState hooks 상태관리 함수 사용 
        ```

    - **InputTest2 컴포넌트 생성 및 외부 사용 코드**

        ```jsx
        function InputTest2(){
            const [inputs, setInputs] = useState({ // 기본 값을 객체형으로 여러가지 기본 값을 사용할 때
                userid: '',
                name: ''
            });

            const {userid, name} = inputs; //  비구조화 할당 

            const onChange = (e) =>{ // 값을 변경 하는 이벤트 
                const {value, name} = e.target; // 아래 input값가져옴 
                setInputs({ // 기본 값 변경
                    ...inputs,
                    [name]: value 
                });
            }
            const onReset = () => { // 초기화 이벤트 
                setInputs({
                    userid:'',
                    name:''
                });
            }
              return(
                  <div>
                    <input name="userid" value={userid} placeholder="아이디" onChange={onChange}/>
                    <input name="name" value={name} placeholder="이름" onChange={onChange}/>
                    <button onClick={onReset}>초기화</button>
                    <div>
                    
                        <b>값 : </b>
                        {name}({userid})
                    </div>
                </div> 
            );
        }

        export default InputTest2;
        ```

        - useState Hooks 상태관리 함수 사용 코드

            ```jsx
            const [inputs, setInputs] = useState({ // 기본 값을 객체형으로 여러가지 기본 값을 사용할 때
                    userid: '',
                    name: ''
                });

                const {userid, name} = inputs; //  비구조화 할당 

                const onChange = (e) =>{ // 값을 변경 하는 이벤트 
                    const {value, name} = e.target; // 아래 input값가져옴 
                    setInputs({ // 기본 값 변경
                        ...inputs,
                        [name]: value 
                    });
                }
                const onReset = () => { // 초기화 이벤트 
                    setInputs({
                        userid:'',
                        name:''
                    });
                }
            ```

            - 객체로 기본 값 만들기

                ```jsx
                const [inputs, setInputs] = useState({ // 기본 값을 객체형으로 여러가지 기본 값을 사용할 때
                        userid: '',
                        name: ''
                    });
                ```

            - 객체 구조 분해(비구조화 할당)

                ```jsx
                const {userid, name} = inputs; // inputs에 userid, name 객체 값 저장 
                ```

            - onChange 함수

                ```jsx
                const onChange = (e) =>{ // 값을 변경 하는 이벤트 
                        const {value, name} = e.target; // return안에  input값가져옴 
                        setInputs({ // 기본 값 변경
                            ...inputs,
                            [name]: value 
                        });
                    }
                ```

            - onReset 함수

                ```jsx
                const onReset = () => { // return 안에 초기화 버튼 클릭시 실행 setInputs으로 기본 값 변경 
                        setInputs({
                            userid:'',
                            name:''
                        });
                    }
                ```
----
<br/>

## Input 예제 (3)

 <br/>


  - **App.js code**

    ```jsx
    import React from 'react';
    import InputTest3 from './InputTest3'

    function App() {
      return (
        <>
          <InputTest3/>
        </>
      );
    }

    export default App;
    ```

    - 리액트 모듈사용 함수

        ```jsx
        import React from 'react';
        ```

    - InputTest3 컴포넌트 사용

        ```jsx
        import InputTest2 from './InputTest3';
        ```

    - InputTest3 컴포넌트를 화면에 출력해주기 & App 컴포넌트 외부 사용 해주는 코드

        ```jsx
        function App() {
          return (
            <div>
              <InputTest3/>
            </div>
          );
        }

        export default App; 
        ```

- **InputTest3.js code**

    ```jsx
    import React, {useState, useRef} from 'react';

    function InputTest3(){
        const [inputs, setInputs] = useState({
            userid : '',
            name: ''
        });
        const useridInput = useRef(); // useRef

        const {userid, name} = inputs; // inputs에 userid, name 객체 값 저장 

        const onChange = (e) => { // 이벤트가 실행되면 아래 input의 값이 들어가고  e 에 들어가거
            const {value, name} = e.target; //    <input name="userid" value={userid} placeholder="아이디"/>
            setInputs({
                ...inputs,
                [name]: value // 
             });
        }
        const onReset = () => { // 초기화 이벤트
            setInputs({ // 객체 자체를 비워줌 
                userid:'',
                name:''
            });
            useridInput.current.focus(); // 값이 초기화 된 후 useridinput창에 포커스 
        }

        return(
            <div>
                <input name="userid" value={userid} placeholder="아이디" onChange={onChange} ref={useridInput}/>
                <input name="name" value={name} placeholder="이름" onChange={onChange}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    <b>값 : </b>
                    {name}({userid})
                </div>
            </div> 
        );
    }

    export default InputTest3;
    ```

    - **리액트 모듈 사용 및 useState (Hooks)상태 관리 함수 모듈 사용**

        ```jsx
        import React,{useState} from 'react'; // 리액트 모듈 사용 , useState hooks 상태관리 함수 사용 
        ```

    - **InputTest3 컴포넌트 생성 및 외부 사용 코드**

        ```jsx
        import React, {useState, useRef} from 'react';

        function InputTest3(){
            const [inputs, setInputs] = useState({
                userid : '',
                name: ''
            });
            const useridInput = useRef(); // useRef

            const {userid, name} = inputs; // inputs에 userid, name 객체 값 저장 

            const onChange = (e) => { // 이벤트가 실행되면 아래 input의 값이 들어가고  e 에 들어가거
                const {value, name} = e.target; //    <input name="userid" value={userid} placeholder="아이디"/>
                setInputs({
                    ...inputs,
                    [name]: value // 
                 });
            }
            const onReset = () => { // 초기화 이벤트
                setInputs({ // 객체 자체를 비워줌 
                    userid:'',
                    name:''
                });
                useridInput.current.focus(); // 값이 초기화 된 후 useridinput창에 포커스 
            }

            return(
                <div>
                    <input name="userid" value={userid} placeholder="아이디" onChange={onChange} ref={useridInput}/>
                    <input name="name" value={name} placeholder="이름" onChange={onChange}/>
                    <button onClick={onReset}>초기화</button>
                    <div>
                        <b>값 : </b>
                        {name}({userid})
                    </div>
                </div> 
            );
        }

        export default InputTest3;
        ```

        - useState Hooks 상태관리 함수 사용 코드

            ```jsx
            const [inputs, setInputs] = useState({
                    userid : '',
                    name: ''
                });
                const useridInput = useRef(); // useRef

                const {userid, name} = inputs; // inputs에 userid, name 객체 값 저장 

                const onChange = (e) => { // 이벤트가 실행되면 아래 input의 값이 들어가고  e 에 들어가거
                    const {value, name} = e.target; //    <input name="userid" value={userid} placeholder="아이디"/>
                    setInputs({
                        ...inputs,
                        [name]: value // 
                     });
                }
                const onReset = () => { // 초기화 이벤트
                    setInputs({ // 객체 자체를 비워줌 
                        userid:'',
                        name:''
                    });
                    useridInput.current.focus(); // 값이 초기화 된 후 useridinput창에 포커스 
                }
            ```

            - 객체로 기본 값 만들기

                ```jsx
                const [inputs, setInputs] = useState({ // 기본 값을 객체형으로 여러가지 기본 값을 사용할 때
                        userid: '',
                        name: ''
                    });
                ```

            - 객체 구조 분해(비구조화 할당)

                ```jsx
                const {userid, name} = inputs; // inputs에 userid, name 객체 값 저장 
                ```

            - useRef(React에서 DOM작업을 하기위한 React Hook 함수) 선언

                ```jsx
                const useridInput = useRef(); // useRef 
                ```

            - onChange 함수

                ```jsx
                const onChange = (e) =>{ // 값을 변경 하는 이벤트 
                        const {value, name} = e.target; // return안에  input값가져옴 
                        setInputs({ // 기본 값 변경
                            ...inputs,
                            [name]: value 
                        });
                    }
                ```

            - onReset 함수 (useridInput.current.focus() ) ⇒ useRef

                ```jsx
                const onReset = () => { // 초기화 이벤트
                        setInputs({ // 객체 자체를 비워줌 
                            userid:'',
                            name:''
                        });
                        useridInput.current.focus(); // 값이 초기화 된 후 useridinput창에 포커스 
                    }
                ```


---





<br/>

## UserList.예제

<br/>

- **App.js code**

    ```jsx
    import React from 'react';
    import UserList from './UserList'

    function App() {
      return (
        <>
          <UserList/>
        </>
      );
    }

    export default App;
    ```

    - 리액트 모듈사용 함수

        ```jsx
        import React from 'react';
        ```

    - UserList 컴포넌트 사용

        ```jsx
        import UserList from './UserList'
        ```

    - UserList 컴포넌트를 화면에 출력해주기 & App 컴포넌트 외부 사용 해주는 코드

        ```jsx
        function App() {
          return (
            <>
              <UserList/>
            </>
          );
        }

        export default App;
        ```

- **UserList.js code**

    ```jsx
    import React from 'react';

    function User({user}){ // User 컴퍼넌트 아래 userList가져옴 
        return(
            <div>
                <b>{user.userid}</b> <span>({user.email})</span> {/*users 객체의 userid, email정보 가져옴 */}
            </div>
        )
    }
    function UserList(){ // 유저 리스트 컴퍼넌트 
        const users = [ // 유저 객체 
            {
                id:1,
                userid:'apple',
                name:'김사과',
                email:'apple@apple.com'
            },
            {
                id:2,
                userid:'banana',
                name:'반하나',
                email:'banana@banana.com'
            },
            {
                id:3,
                userid:'melon',
                name:'이메론',
                email:'melon@melon.com'
            },
            {
                id:4,
                userid:'orange',
                name:'오렌지',
                email:'orange@orange.com'
            },
            {
                id:5,
                userid:'berry',
                name:'박배리',
                email:'berry@berry.com'
            },
        ];
        return(
            <div>
                <div>
                    {/* <User user={users[0]}/>  
                    <User user={users[1]}/> 
                    <User user={users[2]}/> 
                    <User user={users[3]}/>
                    <User user={users[4]}/> */}
                    {users.map(user =>( // map를 사용하여 users의 배열을 순차적으로 찍어준다 
                        <User user={user}/> // 
                    ))}
                </div>
            </div>
        )
    }
    export default UserList;
    ```

    - **리액트 모듈 사용 및 useState (Hooks)상태 관리 함수 모듈 사용**

        ```jsx
        import React from 'react';
        ```

    - **InputTest3 컴포넌트 생성 및 외부 사용 코드**

        ```jsx
        function User({user}){ // User 컴퍼넌트 아래 userList가져옴 
            return(
                <div>
                    <b>{user.userid}</b> <span>({user.email})</span> {/*users 객체의 userid, email정보 가져옴 */}
                </div>
            )
        }
        function UserList(){ // 유저 리스트 컴퍼넌트 
            const users = [ // 유저 객체 
                {
                    id:1,
                    userid:'apple',
                    name:'김사과',
                    email:'apple@apple.com'
                },
                {
                    id:2,
                    userid:'banana',
                    name:'반하나',
                    email:'banana@banana.com'
                },
                {
                    id:3,
                    userid:'melon',
                    name:'이메론',
                    email:'melon@melon.com'
                },
                {
                    id:4,
                    userid:'orange',
                    name:'오렌지',
                    email:'orange@orange.com'
                },
                {
                    id:5,
                    userid:'berry',
                    name:'박배리',
                    email:'berry@berry.com'
                },
            ];
            return(
                <div>
                    <div>
                        {/* <User user={users[0]}/>  
                        <User user={users[1]}/> 
                        <User user={users[2]}/> 
                        <User user={users[3]}/>
                        <User user={users[4]}/> */}
                        {users.map(user =>( // map를 사용하여 users의 배열을 순차적으로 찍어준다 
                            <User user={user}/> // 
                        ))}
                    </div>
                </div>
            )
        }
        export default UserList
        ```

        - 객체로 만든 회원리스트 컴퍼넌트 code

            ```jsx
            function UserList(){ // 유저 리스트 컴퍼넌트 
                const users = [ // 유저 객체 
                    {
                        id:1,
                        userid:'apple',
                        name:'김사과',
                        email:'apple@apple.com'
                    },
                    {
                        id:2,
                        userid:'banana',
                        name:'반하나',
                        email:'banana@banana.com'
                    },
                    {
                        id:3,
                        userid:'melon',
                        name:'이메론',
                        email:'melon@melon.com'
                    },
                    {
                        id:4,
                        userid:'orange',
                        name:'오렌지',
                        email:'orange@orange.com'
                    },
                    {
                        id:5,
                        userid:'berry',
                        name:'박배리',
                        email:'berry@berry.com'
                    },
                ];
                return(
                    <div>
                        <div>
                            {/* <User user={users[0]}/>  
                            <User user={users[1]}/> 
                            <User user={users[2]}/> 
                            <User user={users[3]}/>
                            <User user={users[4]}/> */}
                            {users.map(user =>( // map를 사용하여 users의 배열을 순차적으로 찍어준다 
                                <User user={user}/> // 
                            ))}
                        </div>
                    </div>
                )
            }
            ```

            - 회원정보 객체 만들기

                ```jsx
                const users = [ // 유저 객체 
                        {
                            id:1,
                            userid:'apple',
                            name:'김사과',
                            email:'apple@apple.com'
                        },
                        {
                            id:2,
                            userid:'banana',
                            name:'반하나',
                            email:'banana@banana.com'
                        },
                        {
                            id:3,
                            userid:'melon',
                            name:'이메론',
                            email:'melon@melon.com'
                        },
                        {
                            id:4,
                            userid:'orange',
                            name:'오렌지',
                            email:'orange@orange.com'
                        },
                        {
                            id:5,
                            userid:'berry',
                            name:'박배리',
                            email:'berry@berry.com'
                        },
                    ];
                ```

                - 웹에 보일 부분

                    ```jsx
                    return(
                            <div>
                                <div>
                                    {/* <User user={users[0]}/>  
                                    <User user={users[1]}/> 
                                    <User user={users[2]}/> 
                                    <User user={users[3]}/>
                                    <User user={users[4]}/> */}
                                    {users.map(user =>( // map를 사용하여 users의 배열을 순차적으로 찍어준다 
                                        <User user={user}/> // 
                                    ))}
                                </div>
                            </div>
                        )
                    ```

                - .map사용으로 정보를 순차적으로 보여준다.

                    ```jsx
                    {users.map(user =>( // map를 사용하여 users의 배열을 순차적으로 찍어준다 
                                        <User user={user}/> 
                    ))}
                    ```

            - users객체의 userid,email 값 가져오는 코드

                ```jsx
                function User({user}){ // User 컴퍼넌트 아래 userList가져옴 
                    return(
                        <div>
                            <b>{user.userid}</b> <span>({user.email})</span> {/*users 객체의 userid, email정보 가져옴 */}
                        </div>
                    )
                }
                ```

       

### 스프레드시트 문법

<br/>


- **1_spread.js code**

    ```jsx
    const dog = {
        name: '루시'
    };
    const cuteDog = {
        ...dog, // 스프레드시트 방법 
        age:9
    }

    const whiteCuteDog = {
        ...cuteDog,
        color:'white'
    };

    console.log(dog);
    console.log(cuteDog);
    console.log(whiteCuteDog);

    console.log('-------------------------');

    const stduent = ['김사과','오렌지','반하나','이메론'];
    const addStudent = [...stduent,'홍길동'];
    console.log(stduent);
    console.log(addStudent);
    ```

    - (...복사해올 변수명)을 사용할 객체에 입력한다.

        ```jsx
        const dog = {
            name: '루시'
        };
        const cuteDog = {
            ...dog, // 스프레드시트 방법 
            age:9
        }

        //     콘솔 창

            { name: '루시' }
            { name: '루시', age: 9 }
        ```

    - 배열에서 사용법

        ```jsx
        const stduent = ['김사과','오렌지','반하나','이메론'];
        const addStudent = [...stduent,'홍길동'];
        console.log(stduent);
        console.log(addStudent);

        // 콘솔 창 
        [ '김사과', '오렌지', '반하나', '이메론' ]
        [ '김사과', '오렌지', '반하나', '이메론', '홍길동' ]
        ```