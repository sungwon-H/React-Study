import React from 'react';
import styled from 'styled-components'; // 스타일 컴포넌트 라이브러리 
import Button from './components/Button';


const AppBlock = styled.div` // 테두리 
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`

function App(){
  return(
    <AppBlock>
      <Button>BUTTON</Button>
    </AppBlock>
  );
}
export default App;


