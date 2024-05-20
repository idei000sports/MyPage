
import { Word } from "./Word"
export const List = ({ words, ichibuText }) => {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <ul className="list-group list-group-flush" >
                        {words.map((word) => (
                            <Word key={word.id} word={word.word} kana={word.kana} ichibuText={ichibuText} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}