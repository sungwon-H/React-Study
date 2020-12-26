import React from 'react';
import styled, {ThemeProvider} from 'styled-components'; // 스타일 컴포넌트 라이브러리 
import Button from './components/Button';


const AppBlock = styled.div` // 테두리 
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
`;

function App(){
  return(
    <ThemeProvider
    theme={{
      palette: {
        blue: '#228be6',
        gray: '#495057',
        pink: '#f06595'
      }
    }}
    >
    <AppBlock>
      <Button>BUTTON</Button>
      <Button color="gray">BUTTON</Button>
      <Button color="pink">BUTTON</Button>
    </AppBlock>
    </ThemeProvider>
  );
}
export default App;


