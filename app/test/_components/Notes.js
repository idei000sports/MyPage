
import { useNotes } from "./useNotes";
import { Note } from "./Note";
export function Notes() {
    const { data, error, mutate } = useNotes();

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return (
        <>
            {
                data.map((item) => (

                    <Note item={item} key={item.id} />

                ))
            }
        </>
    )
}