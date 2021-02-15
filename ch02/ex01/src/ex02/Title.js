import React from 'react'

// tip - 자식 컴포넌트에서는 부모 컴포넌트에서 넘어온 값을 직접 변경 할 수 없다.
// XX props.title = 'aaaa' XX
function Title(props) {
    console.log(props.title)
    return <p>{props.title}</p>
}


// export default function Title({title) {
//     return <p>{title}</p>
// }


// title값이 변경될 때마 이 컴포넌트가 렌더링되게 한다.
export default React.memo(Title)

