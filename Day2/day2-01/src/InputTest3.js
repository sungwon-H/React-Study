import React, {useState, useRef} from 'react';

function InputTest3(){
    const [inputs, setInputs] = useState({
        userid : '',
        name: ''
    });
    const useridInput = useRef(); // useRef

    const {userid, name} = inputs; // inputs에 userid, name 객체 값 저장 

    const onChange = (e) => { // 이벤트가 실행되면 아래 input의 값이 들어가고  e 에 들어가거
        const {value, name} = e.target; //    <input name="userid" value={userid} placeholder="아이디"/>
        setInputs({
            ...inputs,
            [name]: value // 
         });
    }
    const onReset = () => { // 초기화 이벤트
        setInputs({ // 객체 자체를 비워줌 
            userid:'',
            name:''
        });
        useridInput.current.focus(); // 값이 초기화 된 후 useridinput창에 포커스 
    }

    return(
        <div>
            <input name="userid" value={userid} placeholder="아이디" onChange={onChange} ref={useridInput}/>
            <input name="name" value={name} placeholder="이름" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값 : </b>
                {name}({userid})
            </div>
        </div> 
    );
}


export default InputTest3;