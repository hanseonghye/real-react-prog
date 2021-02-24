import React, {createContext} from 'react'

const UserContext = createContext('unknown')

export default function App() {
    return (
        <div>
            {/*value 값이 변경 -> rendering -> 하위 consumer 도 rendering*/}
            <UserContext.Provider value="mike">
                <div>상단 메뉴</div>
                <Profile />
                <div>하단 메뉴</div>
            </UserContext.Provider>
        </div>
    )
}


function Profile() {
    return (
        <div>
            <Greeting />
            {/*{ ... }*/}
        </div>
    )
}


function Greeting() {
    return (
        // 가장 가까운 provider를 찾는다.
        // 찾지 못하면 초기값을 사용.
        <UserContext.Consumer>
            {username => <p>{`${username}님 안녕하세요`}</p>}
        </UserContext.Consumer>
    )
}