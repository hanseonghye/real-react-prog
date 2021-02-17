import React from 'react'
import useUser from "./useUser";


export default function Profile({ userId }) {
    // hook !
    const user = useUser(userId)

    return (
        <div>
            {! user && <p>사용자 정보를 가져오는중...</p>}
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