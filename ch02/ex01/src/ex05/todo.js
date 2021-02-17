import React from "react";
import ReactDOM from "react-dom";

function Todo({ title, desc }) {
    const [priority, setPriority] = useState('high')


    // 버튼을 클릭하면 상태값이 변경되고 rendering된다 --> 새로운 가상돔이 생성되고 , 비교된 뒤 변경된부분만 실제 돔에 반영한다.
    function onClick() {
        setPriority(priority === 'high' ? 'low' : 'high')
    }

    return (
        <div>
            <Title title={title} />
            <p>{desc}</p>
            <p>{priority === 'high' ? '우선순위 높음' : '우선순위 낮음'}</p>
            <button onClick={onClick}>우선순위 변경</button>
        </div>
    )
}


const Title = React.memo(({ title }) => {
    return <p style={{ color: 'blue'}}>{title}</p>
})


ReactDOM.render(
    <Todo title="리액트 공부하기" desc="실전 리액트 프로그래밍으로 공부하다" />,
    document.getElementById('root'),
)