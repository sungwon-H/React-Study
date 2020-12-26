import React from 'react';
import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: ${props => props.color || 'black'}; // Circle 컴포넌트에서 color props 값을 설정 해줬다면 해당 값을 배경색으로 지정하고, 그렇지 않다면 검정색으로 설정 
  border-radius: 50%;
`;

function App(){
  return <Circle color='blue'/>;
}
export default App;


