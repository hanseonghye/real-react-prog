import React from 'react'
import times from 'lodash/times'
import {MAX_POS} from "../constant";
import {useState} from "react/cjs/react.production.min";
import {getInitTilaList} from "../util/tile";

export default function Game() {
    // eslint-disable-next-line no-unused-vars
    const [tileList, setTileList] = useState(getInitTilaList)

    return (
        <div className="game-container">
            <div className="grid-container">
                {times(MAX_POS, () => (
                    <div className="grid-row">
                        {times(MAX_POS, () => (
                            <div className="grid-cell"></div>
                        ))}
                    </div>
                ))}
            </div>

            <div className="tile-container">
                {tileList.map(item => (
                    <div key='' className={`tile tile-${item.value} tile-position-${item.x}-${item.y} tile-new`}>
                        <div className="tile-inner">{item.value}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}