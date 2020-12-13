import React from 'react';

function Hi({name, color, isSpecial}){ 
    return(
        <div style={{color:color}}> {/*props값의 color 값을 가져옴 */}
            {isSpecial ? <b>*</b> : null} 안녕하세요. {name}!

        </div>
    )

}

Hi.defaultProps ={
    color : 'blue',
    name : '기본 값 '
}

export default Hi; // Hi 호출