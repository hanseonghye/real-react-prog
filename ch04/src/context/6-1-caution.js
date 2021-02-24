import React, {createContext, useContext, useState} from 'react'

const UserContext = createContext({ username : 'unknown', age: 0})


export default function App() {
    // user 객체는 오직 setUser함수를 호출해야 변경된다. 렌더링 할때마다 새로운 객체가 만들어 지지 않음.
    // 반면 컴포넌트 내부에서 중괄호를 사용해서 정의한 객체는 컴포넌트 함수가 실행될 때마다 생성된다.
    const [user, setUser] = useState({ username: 'mkie', age: 20})
    const [count, setCount] = useState(0)

    return (
        <div>
            <UserContext.Provider value={user}>
                <Profile/>
                <button onClick={() => setCount(count + 1)}>증가가</button>
            </UserContext.Provider>
        </div>
    )
}


const Profile = React.memo(function () {
    return (
        <div>
            <Greeting />
        </div>
    )
})


function Greeting() {
    const {username} = useContext(UserContext)
    return (
            <p>{`${username}님 안녕하세요`}</p>
    )
}