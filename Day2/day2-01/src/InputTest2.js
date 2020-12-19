import React, {useState} from 'react';

function InputTest2(){
    const [inputs, setInputs] = useState({ // 기본 값을 객체형으로 여러가지 기본 값을 사용할 때
        userid: '',
        name: ''
    });

    const {userid, name} = inputs; //  비구조화 할당 

    const onChange = (e) =>{ // 값을 변경 하는 이벤트 
        const {value, name} = e.target; // 아래 input값가져옴 
        setInputs({ // 기본 값 변경
            ...inputs,
            [name]: value 
        });
    }
    const onReset = () => { // 초기화 이벤트 
        setInputs({
            userid:'',
            name:''
        });
    }
      return(
          <div>
            <input name="userid" value={userid} placeholder="아이디" onChange={onChange}/>
            <input name="name" value={name} placeholder="이름" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
            
                <b>값 : </b>
                {name}({userid})
            </div>
        </div> 
    );
}

export default InputTest2;