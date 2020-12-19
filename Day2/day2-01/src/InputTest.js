import React,{useState} from 'react'; // 리액트 모듈 사용

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
