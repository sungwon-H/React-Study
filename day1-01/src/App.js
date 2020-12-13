import React from 'react'; // 리액트 문법 사용
import Student from './Student'; // student props불러옴 컴포넌트 
import Wrapper from './Wrapper'; // Wrapper 컴포넌트 불러옴
import Hi from './Hi';
function App() {
    
  
    const text = "안녕하세요 리액트 공부 중입니다."
    const style = {
      backgroundColor : 'gold',
      fontSize : 30,
      color : 'purple',
      padding : '1em'
    } // CSS 적용

  return ( // 화면에 출력되는 부분 
    <>
      
      <div style={style}>{text}</div>
      <Student name ="김을동" color="deepskyblue"></Student>{/* Student 컴퍼넌트를 가져옴 */}
      <Student name ="이순신" color="green"></Student>
      <Student name ="김이박" color="brown"></Student>

      <Student/> {/*default 값 가져옴 */}

      <Wrapper>{/*Wrapper 컴포넌트 사용*/}
        <Student></Student>
      </Wrapper>

      <Hi name="김xx" color="purple" isSpecial={true}></Hi>
      <Hi name="강xx" color="red" isSpecial></Hi>
      <Hi name="이xx" color="deeppink"></Hi>
      <Wrapper>
        <Hi></Hi>
      </Wrapper>
      

    </>
      
  );
}

export default App;
