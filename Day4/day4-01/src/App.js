import React from 'react';
import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`;

function App(){
  return <Circle/>;
}
export default App;


