
export function Note(props) {
    return (
        <>
            <div key={props.id}>
                <p>{props.id}<a href={"/crud/" + props.id}>{props.content}</a></p>
            </div>
        </>
    )
}