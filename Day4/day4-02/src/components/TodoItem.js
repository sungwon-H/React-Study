import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md';

const Remove = styled.div` // 삭제버튼 
    display: flex;
    aligin-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    cursor:pointer;
    &:hover{
        color: #ff6b6b;
    }
    display:none;
    
`;
const TodoItemBlock = styled.div` 
    display:flex;
    align-items: center;
    padding-top:12px;
    padding-bottom:12px;
    &:hover{
        ${Remove}{
            display:initial;
        }
    }
`;

const CheckCircle = styled.div` // 체크버튼
    width: 32px;
    height: 32px;
    border-radius: 16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;
    ${props => 
    props.done && // 체크 표시 
        css`
            border:1px solid #38d9a9;
            color: #38d9a9;
        `}

`

const Text = styled.div` // 글
    flex: 1;
    font-size: 21px;
    color: #495057;
    ${props => // 체크가 되면 흐릿하게 글자체가 흐릿하게 바뀜
        props.done &&
        css`
        color: #ced4da;
        `}
`;




function TodoItem({id, done, text}){
    return(
        <TodoItemBlock>
            <CheckCircle done={done}>
                {done && <MdDone/>}
            </CheckCircle>
            <Text done={done}>
                {text}
            </Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem;