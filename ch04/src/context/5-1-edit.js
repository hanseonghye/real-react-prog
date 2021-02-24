import React, {createContext, useContext, useState} from 'react'

const UserContext = createContext({ username : 'unknown', hellocount: 0})
const SetUserContext = createContext(() => {})

// 하위 컴포넌트에서 데이터를 수정하고 싶을때

export default function App() {
    const [user, setUser] = useState({ username: 'mkie', helloCount: 0})
    return (
        <div>
            <SetUserContext.Provider value={setUser}>
                <UserContext.Provider value={user}>
                    <Profile/>
                </UserContext.Provider>
            </SetUserContext.Provider>
        </div>
    )
}
