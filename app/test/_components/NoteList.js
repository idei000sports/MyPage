import { Note } from "./Note"

import { ReadAll } from "./crud";
export function NoteList() {

    const {data, error} = ReadAll();
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            {
                data.map((item) => (
                    <Note key={item.id} id={item.id} content={item.content} />
                ))
            }
        </>
    )
}