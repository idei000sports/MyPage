export function Note(props) {
    return (
        <div>
            <p>{props.item.id}<a href={"/test/" + props.item.id}>{props.item.content}</a></p>
        </div>
    )
}