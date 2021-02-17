import React, {useEffect, useState} from 'react'


export default function useUser(userId) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUserApi(userId).then(data => setUser(data))
    }, [userId])
    return user
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