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
[1.InputTest_1 [예제] ](#InputTest1.예제 )






</br></br></br></br></br></br></br>







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

 
