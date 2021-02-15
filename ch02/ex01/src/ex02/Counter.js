import React, {useState} from 'react'
import Title from "./Title";

// counter component가 렌더링 될때마다 (count 값이 바뀔 때마다) Title component도 렌더링된다.
// == 부모 컴포넌트가 렌더링 될때마다 자식 컴포넌트가 렌더링 된다.
export default function Counter() {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    function onClick1() {
        setCount(count + 1)
    }
    function onClick2() {
        setCount2(count2 + 1)
    }

    return (
        <div>
            <Title title={`현재 카운트: ${count}`} />
            <button onClick={onClick1}>증가1</button>
            <button onClick={onClick2}>증가2</button>
        </div>
    )
}