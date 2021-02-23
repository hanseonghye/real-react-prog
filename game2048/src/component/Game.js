import React, {useState} from 'react'
import times from 'lodash/times'
import useMoveTile from "../hook/useMoveTile";
import {getInitTileList} from "../util/tile";
import {MAX_POS} from "../constant";
import Tile from "./Tile";

// eslint-disable-next-line react/prop-types
export default function Game({setScore}) {
    const [tileList, setTileList] = useState(getInitTileList)
    useMoveTile({tileList, setTileList, setScore})
    console.log(tileList)

    return (
        <div className="game-container">
            <div className="grid-container">
                {times(MAX_POS, index => (
                    <div key={index} className="grid-row">
                        {times(MAX_POS, index2 => (
                            <div key={index2} className="grid-cell"></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="tile-container">
                {tileList.map(item => (
                    <Tile key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}