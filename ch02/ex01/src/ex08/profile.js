import React, {useEffect, useState} from 'react'

export default function Profile({ userId }) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserApi(userId).then(data => setUser(data))
    }, [userId]) //빈 배열을 넣으면, mount 된 이후에 한 번만 호출된다. --> 그렇게 짜면 안됨.

    return (
        <div>
            {!user && <p>사용자 정보를 가져오는 중 ...</p>}
            {user && (
                <>
                    <p>{`name is ${user.name}`}</p>
                    <p>{`age is ${user.age}`}</p>
                </>
            )}
        </div>
    )
}


const user1 = { name : 'mkie', age:20}
const user2 = { name : 'kim' , age:50}


function getUserApi(userId) {
    return new Promise(res => {
        setTimeout(() => {
            res(userId % 2 ? user1 : user2)
        }, 500)
    })
}