import React from 'react';


function User({user}){ // User 컴퍼넌트 아래 userList가져옴 
    return(
        <div>
            <b>{user.userid}</b> <span>({user.email})</span> {/*users 객체의 userid, email정보 가져옴 */}
        </div>
    )
}
function UserList(){ // 유저 리스트 컴퍼넌트 
    const users = [ // 유저 객체 
        {
            id:1,
            userid:'apple',
            name:'김사과',
            email:'apple@apple.com'
        },
        {
            id:2,
            userid:'banana',
            name:'반하나',
            email:'banana@banana.com'
        },
        {
            id:3,
            userid:'melon',
            name:'이메론',
            email:'melon@melon.com'
        },
        {
            id:4,
            userid:'orange',
            name:'오렌지',
            email:'orange@orange.com'
        },
        {
            id:5,
            userid:'berry',
            name:'박배리',
            email:'berry@berry.com'
        },
    ];
    return(
        <div>
            <div>
                {/* <User user={users[0]}/>  
                <User user={users[1]}/> 
                <User user={users[2]}/> 
                <User user={users[3]}/>
                <User user={users[4]}/> */}
                {users.map(user =>( // map를 사용하여 users의 배열을 순차적으로 찍어준다 
                    <User user={user}/> // 
                ))}
            </div>
        </div>
    )
}
export default UserList;