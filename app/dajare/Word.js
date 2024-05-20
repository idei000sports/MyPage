
export const Word = ({ word, kana, ichibuText}) => {

    const mae = ichibuText.mae;
    const ato = ichibuText.ato;

    return (
        <li className="list-group-item list-group-item-action fs-4">
            {mae}
            <ruby>
                <b>{word}</b>
                <rt>
                    {kana}
                </rt>
            </ruby>
            {ato}
        </li>
    )
}