import React,{useEffect} from 'react'; 



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