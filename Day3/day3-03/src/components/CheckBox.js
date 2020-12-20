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