# React Day2 공부자료   
<br />

## Hooks 상태관리함수   

<br />
  
<br/>

### useState, useRef, useEffcet,의 예제자료
   
<br/><br/>

- 설명 블로그 링크 : <https://develop-hsw9058.tistory.com/>




<br><br>

# 목차
[1.InputTest_1 [예제] ](#inputtest1.예제 )  
[2.InputTest_2 [예제] ](#inputtest2.예제 )






[**spread시트문법**](#스프레드시트-문법)

</br>
</br>

----

</br>
</br>
</br>  







## InputTest1.예제
-----
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

 ## InputTest2.예제
 ---

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