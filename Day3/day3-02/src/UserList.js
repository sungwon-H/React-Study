import React,{useEffect} from 'react'; // 리액트 훅은 {} 안에 사용한다 class를 사용하기어려워서 나온 함수 

/*
useEffect를 사용하여 컴포넌트가 마운트(처음나타났을때) 됬을때 언마운트됬을때(사라질때),
그리고 업데이트 될때(특정 props가 바뀔때) 특정 작업을 처리할 수 있습니다. 

*마운트 시 하는 작업
    1. props로 받은 값을 컴포넌트의 로컬 상태로 설정 할때
    2. 외부 API요청(REST API)
    3. 라이브러리 사용(D3, Video.js 등 ..)
    4. setIntreval을 통한 반복작업 혹은 setTimeout을 통한 작업 예약
* 언마운트시 하는 작업 
    -setTimeout, setInterval을 사용하여 등록한 작업들 clear할 때 
    - 라이브러리 인스턴스 제거 
    

*리액트 컴포넌트는 기본적으로 부모 컴포넌트가 리랜덩링 되면 자식 컴포넌트 또한 리랜더링 됩니다.
변경된 값이 없더라고 리랜더링이 됩니다.
실제 DOM에 변화가 반영되는 것은 바뀐 내용이 있는 컴포넌트에만 해당합니다.
하지만 Virtual DOM에는 모든 걸 렌더링하고 있는 것입니다.
*/ 

function User ({user, onRemove , onToggle}){
    useEffect(()=>{
        console.log('컴포넌트가 화면에 나타남');
        return () =>{
            console.log('컴포넌트가 화면에서 사라짐');
        };
    
    }, [user]); // 유즈이펙트에 첫번째 파라미터에는 함수 두번째 파라미터에는 의존값이 들어있는 배열 뎁스배열이 아무것도없다면 use이펙트 함수가 실행됨



    return(
        <div>
            <b
                style={{
                    cursor : 'pointer',
                    color:user.isclick ? 'deepskyblue': 'black'
                }}
                onClick={() => onToggle(user.id)} // userid값 전달
            >{user.userid}</b>
             <span>({user.email})</span>
            {/* 메일 옆 삭제 버튼  */}
            <button onClick={ () => onRemove(user.id)}>삭제</button> 
        </div>
    );
}

function UserList({users, onRemove, onToggle}){
    return(
        <div>
            {users.map(user =>(
                    <User 
                    user={user}
                    key={user.id}
                    onRemove={onRemove} 
                    onToggle={onToggle}
                    /> // 키는 각각의 값에 구분을 주기위함 
            ))}
        </div>
    )
}

export default React.memo(UserList);