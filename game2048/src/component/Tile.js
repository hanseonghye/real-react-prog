import React from 'react'
import cn from 'classnames'

// eslint-disable-next-line react/prop-types
export default function Tile({id, x, y, value, isMerged, isNew}) {
    return (
        <div
            key={id}
            className={cn(`tile tile-${value} tile-position-${x}-${y}`, {
            'tile-merged': isMerged,
            'title-new': isNew
        })}
        >
            <div className="tile-inner">{value}</div>
        </div>
    )
}