

import prisma from '../../lib/prisma';
import Word from "./Word"


export default async function Aho(props) {


    const feed = await prisma.words.findMany({
        where: { boin: props.boin },
    })

    /*

                {feed.map((word) => (
                <div key={word.id}>
                    <Word word={word} />
                </div>
            ))}


    */
    /*
    const onChangeWord = ((e) => {
        console.log(e.target.value);
    })
    <input type="text" onChange={onChangeWord}></input>
    */




    return (
        <>


            {feed.map((word) => (
                <div key={word.id}>
                    <Word word={word} />
                </div>
            ))}


            <p>aijii</p>
        </>
    )

}
