# React Study Day3  
<br/>

## scss(sass) 
- css pre-processor입니다. 
- 복잡한 작업을 쉽게 할 수 있고, 코드의 재활용성을 높여줄 뿐아니라, 코드의 가독성을  높여주어 유지보수를 쉽게합니다. 
</br>

---

</br>

- 블로그 링크 : <https://develop-hsw9058.tistory.com/> 

- 어렵다 열심히 해보자 
---

</br>

## SCSS 예제

<br/>

### App.js

 </br>

 - 모듈 설치

    ```jsx
    npm install node-sass@4.14.1
    ```

- **App.js**

    ```jsx
    import React, { useState } from 'react';
    import './App.scss';
    import Button from './components/Button';
    import CheckBox from './components/CheckBox';

    function App(){
      // 10.
      const [check, setCheck] = useState(false);
      const onChange= e =>{
        setCheck(e.target.checked);
      }

      return(
        <>
        {/* 10. */}
          <div>
              <CheckBox onChange={onChange} checked={check}>약관 동의</CheckBox>
              <p>
                <b>체크 : {check ? '예' : '아니오'}</b> 
              </p>
            </div>

            
        <div className="App">
          <div className="buttons">
              {/* 1. <Button>버튼</Button> */}
              <Button size="large">버튼</Button>
              <Button>버튼</Button>
              <Button size="small">버튼</Button>
              
          </div>
          {/* 5. */}
          <div className="buttons">
              <Button size="large" color="gray">버튼</Button>
              <Button color="gray">버튼</Button>
              <Button size="small" color="gray">버튼</Button>
              
          </div>
          <div className="buttons">
              <Button size="large" color="pink">버튼</Button>
              <Button color="pink" >버튼</Button>
              <Button size="small" color="pink" >버튼</Button>
          </div>
          
            {/* outline */}
         
          <div className="buttons">
              <Button size="large" color="blue" outline>버튼</Button>
              <Button color="gray" outline > 버튼</Button>
              <Button size="small" color="pink" outline>버튼</Button>
              
          </div>
          {/* fullWidth */}
          <div className="buttons">
              <Button size="large" fullWidth>버튼</Button>
              <Button size="large" color="gray" fullWidth > 버튼</Button>
              <Button size="large" color="pink" fullWidth>버튼</Button>
              
          </div>

        </div>
        </>
      );
    }
    export default App;
    ```

    - 리액트 모듈 사용 및 컴포넌트 연결

        ```jsx
        import React, { useState } from 'react';
        import './App.scss';
        import Button from './components/Button';
        import CheckBox from './components/CheckBox';

        ```

    - App 함수 선언 및 전역사용 선언

        ```jsx
        function App(){
          // 10.
          const [check, setCheck] = useState(false);
          const onChange= e =>{
            setCheck(e.target.checked);
          }

          return(
            <>
            {/* 10. */}
              <div>
                  <CheckBox onChange={onChange} checked={check}>약관 동의</CheckBox>
                  <p>
                    <b>체크 : {check ? '예' : '아니오'}</b> 
                  </p>
                </div>

                
            <div className="App">
              <div className="buttons">
                  {/* 1. <Button>버튼</Button> */}
                  <Button size="large">버튼</Button>
                  <Button>버튼</Button>
                  <Button size="small">버튼</Button>
                  
              </div>
              {/* 5. */}
              <div className="buttons">
                  <Button size="large" color="gray">버튼</Button>
                  <Button color="gray">버튼</Button>
                  <Button size="small" color="gray">버튼</Button>
                  
              </div>
              <div className="buttons">
                  <Button size="large" color="pink">버튼</Button>
                  <Button color="pink" >버튼</Button>
                  <Button size="small" color="pink" >버튼</Button>
              </div>
              
                {/* outline */}
             
              <div className="buttons">
                  <Button size="large" color="blue" outline>버튼</Button>
                  <Button color="gray" outline > 버튼</Button>
                  <Button size="small" color="pink" outline>버튼</Button>
                  
              </div>
              {/* fullWidth */}
              <div className="buttons">
                  <Button size="large" fullWidth>버튼</Button>
                  <Button size="large" color="gray" fullWidth > 버튼</Button>
                  <Button size="large" color="pink" fullWidth>버튼</Button>
                  
              </div>

            </div>
            </>
          );
        }
        export default App;
        ```

        - 체크박스 기본값 및 이벤트 객체에 따라 값 변경

            ```jsx
             const [check, setCheck] = useState(false);
              const onChange= e =>{
                setCheck(e.target.checked);
              }
            ```

        - 웹에 출력되는 부분

            ```jsx
            return(
                <>
                {/* 10. */}
                  <div>
                      <CheckBox onChange={onChange} checked={check}>약관 동의</CheckBox>
                      <p>
                        <b>체크 : {check ? '예' : '아니오'}</b> 
                      </p>
                    </div>

                    
                <div className="App">
                  <div className="buttons">
                      {/* 1. <Button>버튼</Button> */}
                      <Button size="large">버튼</Button>
                      <Button>버튼</Button>
                      <Button size="small">버튼</Button>
                      
                  </div>
                  {/* 5. */}
                  <div className="buttons">
                      <Button size="large" color="gray">버튼</Button>
                      <Button color="gray">버튼</Button>
                      <Button size="small" color="gray">버튼</Button>
                      
                  </div>
                  <div className="buttons">
                      <Button size="large" color="pink">버튼</Button>
                      <Button color="pink" >버튼</Button>
                      <Button size="small" color="pink" >버튼</Button>
                  </div>
                  
                    {/* outline */}
                 
                  <div className="buttons">
                      <Button size="large" color="blue" outline>버튼</Button>
                      <Button color="gray" outline > 버튼</Button>
                      <Button size="small" color="pink" outline>버튼</Button>
                      
                  </div>
                  {/* fullWidth */}
                  <div className="buttons">
                      <Button size="large" fullWidth>버튼</Button>
                      <Button size="large" color="gray" fullWidth > 버튼</Button>
                      <Button size="large" color="pink" fullWidth>버튼</Button>
                      
                  </div>

                </div>
                </>
              );
            ```

            - 체크박스 선택에 따라 변화

            ```jsx
             <div>
                  <CheckBox onChange={onChange} checked={check}>약관 동의</CheckBox>
                      <p>
                        <b>체크 : {check ? '예' : '아니오'}</b> 
                      </p>
                    </div>
            ```

            - 색상이 blue 버튼

            ```jsx
            <div className="App">
                  <div className="buttons">
                      {/* 1. <Button>버튼</Button> */}
                      <Button size="large">버튼</Button>
                      <Button>버튼</Button>
                      <Button size="small">버튼</Button>
             </div>
            ```


            - gray,pink 버튼

            ```jsx
            <div className="buttons">
                      <Button size="large" color="gray">버튼</Button>
                      <Button color="gray">버튼</Button>
                      <Button size="small" color="gray">버튼</Button>
                      
                  </div>
                  <div className="buttons">
                      <Button size="large" color="pink">버튼</Button>
                      <Button color="pink" >버튼</Button>
                      <Button size="small" color="pink" >버튼</Button>
                  </div>
            ```


        - outline이 적용된 버튼

            ```jsx
            <div className="buttons">
                      <Button size="large" color="blue" outline>버튼</Button>
                      <Button color="gray" outline > 버튼</Button>
                      <Button size="small" color="pink" outline>버튼</Button>
            </div>
            ```


            - fullwidth가 적용된 버튼

            ```jsx
            <div className="buttons">
                      <Button size="large" fullWidth>버튼</Button>
                      <Button size="large" color="gray" fullWidth > 버튼</Button>
                      <Button size="large" color="pink" fullWidth>버튼</Button>
                      
                  </div>
            ```
----
</br>

### App.scss

</br>

- 바깥 테두리와 버튼 간격 scss

```jsx
.App{
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  //5.
  .buttons + .buttons {
    margin-top: 1rem;
  }
}
```
---

<br/>

### components-Button.js

<br/>

```jsx
import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//className={'Button ${size}' }
function Button({children,size, color, outline,fullWidth }){
    // return <button className={['Button', size].join(' ')}>{children}</button>; // 해당 클래스 네임을 붙히고 한칸 띄어줌
    //3.
    return <button className={classNames('Button', size, color, {outline,fullWidth})}>{children}</button> //{outline} 값찍기 

}


Button.defaultProps={ // 기본값
    size:'medium',
    color: 'blue'
};

export default Button;
```

- 리액트 모듈, 컴포넌트 사용

    ```jsx
    	import React from 'react';
    import classNames from 'classnames';
    import './Button.scss';
    ```

- Button 함수 및 전역사용 선언

    ```jsx
    function Button({children,size, color, outline,fullWidth }){
        // return <button className={['Button', size].join(' ')}>{children}</button>; // 해당 클래스 네임을 붙히고 한칸 띄어줌
        //3.
        return <button className={classNames('Button', size, color, {outline,fullWidth})}>{children}</button> //{outline} 값찍기 

    }

   
    Button.defaultProps={ // 기본값
        size:'medium',
        color: 'blue'
    };

    export default Button;
    ```

    - 버튼, 사이즈, 컬러, {outline, fullwidth} 사용

        ```jsx
        function Button({children,size, color, outline,fullWidth }){
            // return <button className={['Button', size].join(' ')}>{children}</button>; // 해당 클래스 네임을 붙히고 한칸 띄어줌
            //3.
            return <button className={classNames('Button', size, color, {outline,fullWidth})}>{children}</button> //{outline} 값찍기 

        }
        ```

    - 기본값

        ```jsx
        Button.defaultProps={ // 기본값
            size:'medium',
            color: 'blue'
        };
        ```
---
<br/>

### components-Button.scss

<br/>

```jsx
$blue: #228be6; //변수 선언
$gray: #495057;
$pink: #f06595;
//5.
@mixin button-color($color){
    background: $color;
    &:hover{ // 해당요소의 호버
        background: lighten($color:$color, $amount: 10%); // 기존 색상보다 10%밝게
    }
    &:active{
        background: darken($color:$color, $amount: 10%); // 기존 색상보다 10%어둡게
    }
    //7.
    &.outline{
        color: $color;
        background: none;
        border: 1px solid $color;
        &:hover{
            background: $color;
            color:white;
        }
    }
}
.Button{
    display: inline-flex;
    color:white;
    font-weight: bold;
    outline:none;
    border-radius: 4px;
    border: none;
    cursor: pointer;

    //size2.
    &.large{
        height: 3rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.25rem;
    }
    &.medium{
        height: 2.25rem;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1rem;
    }
    &.small{
        height: 1.75rem;
        padding-left: 0.87rem;
        padding-right: 1rem;
        font-size: 1rem;
    }

    &.blue{
        @include button-color($blue);
    }
    &.gray{
        @include button-color($gray);
    }
    &.pink{
        @include button-color($pink);
    }

    //2
    & + &{ // 옆에 붙었을때
        margin-left: 1rem;
    }

    //8.
    &.fullWidth{
        width: 100%;
        justify-content: center; // 양쪽정렬
        & + &{
            margin-left: 0;
            margin-top: 1rem;
        }
    }
}
```

- 컬러 변수 선언

    ```jsx
    $blue: #228be6; //변수 선언
    $gray: #495057;
    $pink: #f06595;
    ```

- 믹스인 반복 코드 정리

    ```jsx
    @mixin button-color($color){ // 컬러로 이름을 준다 
        background: $color;
        &:hover{ // 해당요소의 호버
            background: lighten($color:$color, $amount: 10%); // 기존 색상보다 10%밝게
        }
        &:active{
            background: darken($color:$color, $amount: 10%); // 기존 색상보다 10%어둡게
        }
        //7.
        &.outline{
            color: $color;
            background: none;
            border: 1px solid $color;
            &:hover{
                background: $color;
                color:white;
            }
        }
    }
    ```

    - 믹스인 코드 사용 문법(@include)

        ```jsx
        &.blue{
                @include button-color($blue);
            }
            &.gray{
                @include button-color($gray);
            }
            &.pink{
                @include button-color($pink);
            }
        ```

- 버튼 디자인 및 사이즈

    ```jsx
    .Button{
        display: inline-flex;
        color:white;
        font-weight: bold;
        outline:none;
        border-radius: 4px;
        border: none;
        cursor: pointer;

        //size2.
        &.large{
            height: 3rem;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1.25rem;
        }
        &.medium{
            height: 2.25rem;
            padding-left: 1rem;
            padding-right: 1rem;
            font-size: 1rem;
        }
        &.small{
            height: 1.75rem;
            padding-left: 0.87rem;
            padding-right: 1rem;
            font-size: 1rem;
        }

        &.blue{
            @include button-color($blue);
        }
        &.gray{
            @include button-color($gray);
        }
        &.pink{
            @include button-color($pink);
        }

        //2
        & + &{ // 옆에 붙었을때
            margin-left: 1rem;
        }

        //8.
        &.fullWidth{
            width: 100%;
            justify-content: center; // 양쪽정렬
            & + &{
                margin-left: 0;
                margin-top: 1rem;
            }
        }
    }
    ```

    - 버튼 양쪽 붙을 경우

        ```jsx
        & + &{ // 옆에 붙었을때
                margin-left: 1rem;
            }
        ```

    - fullwidth 설정

        ```jsx
        &.fullWidth{
                width: 100%;
                justify-content: center; // 양쪽정렬
                & + &{
                    margin-left: 0;
                    margin-top: 1rem;
                }
            }
        ```
---
<br>

### components-CheckBox.js

<br>

```jsx
import React from 'react';
//11.아이콘 설정 
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
//10.체크박스 컴퍼넌트
function CheckBox({children, checked, ...rest}){
    return(
        <div>
            <label>
                    <input type="checkbox" checked={checked}{...rest}/>
                    <div>{checked ? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>}</div>
            </label>
            <span>{children}</span>
        </div>
    )
}
export default CheckBox;
```

- 리액트 모듈 사용 선언

    ```jsx
    import React from 'react';
    ```

- 아이콘 설정

    ```jsx
    //11.아이콘 설정 
    import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';
    ```

- 체크박스 컴포넌트 및 전역사용

    ```jsx
    //10.체크박스 컴퍼넌트
    function CheckBox({children, checked, ...rest}){
        return(
            <div>
                <label>
                        <input type="checkbox" checked={checked}{...rest}/>
                        <div>{checked ? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>}</div>
                </label>
                <span>{children}</span>
            </div>
        )
    }
    export default CheckBox;
    ```