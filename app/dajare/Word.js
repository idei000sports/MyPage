'use client'
import React from 'react'
import Link from 'next/link'

const Word = ({ word, ichibuText }) => {
    return (



        <li className="list-group-item list-group-item-action fs-4">
            ・
            {ichibuText.mae}
            <ruby>
                <b>{word.word}</b>
                <rt>
                    {word.kana}
                </rt>
            </ruby>
            {ichibuText.ato}
        </li>



    )
}

export default Word