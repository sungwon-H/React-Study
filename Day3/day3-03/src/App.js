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