import React from 'react';
import classNames from 'classnames';
import './Button.scss';

//className={'Button ${size}' }
function Button({children,size, color, outline,fullWidth }){
    // return <button className={['Button', size].join(' ')}>{children}</button>; // 해당 클래스 네임을 붙히고 한칸 띄어줌
    //3.
    return <button className={classNames('Button', size, color, {outline,fullWidth})}>{children}</button> //{outline} 값찍기 

}

/*
classNames 라이브러리
calssNames("Button", "size"); // className="Button Size"
classNames("Button", {Size: true}) // "Button Size" // 사이즈를 쓸건지말건지
classNames("Button-size": false) // ''
classNames({Button: true},{Size:true}) // Button Size
classNmaes({Button: true, Size: true}) // Button Size
*/ 
//2.
Button.defaultProps={ // 기본값
    size:'medium',
    color: 'blue'
};

export default Button;