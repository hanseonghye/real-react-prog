import React from 'react';
import Style from './Box.module.css';  // 객체 형식으로 내보냄.
import cn from 'classnames'


export default function Box({ size }) {
    const isBig = size === 'big';

    return <button className={cn(Style.Button, {[Style.big]: isBig, [Style.small]: !isBig})}>{isBig ? '큰 버튼' : '작은 버튼'}</button>

