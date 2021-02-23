import React, {useState} from 'react'
import Header from "./component/Header";
import AboveGame from "./component/AboveGame";
import Game from "./component/Game";


export default function App() {
    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    return (
        <div className="container">
            <Header score={score} bestScore={bestScore} />
            <AboveGame />
            <Game setScore={setScore}/>
        </div>
    )
}