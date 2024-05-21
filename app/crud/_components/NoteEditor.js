
import { useState, useEffect, useCallback } from 'react';
//import { useRouter } from 'next/navigation';

import { update, del } from '../_components/crud';

export function NoteEditor(props) {

    const [text, setText] = useState("");

    if (props.error) return <div>failed to load</div>
    if (!props.data) return <div>loading..edditor.</div>

    const router = useRouter();


    const onChangeText = (e) => {
        setText(e.target.value);
    }


    const onClickUpdate = async () => {
        update(props.data.id, text);
        //router.push('/crud');

    }

    const onClickDelete = async () => {
        del(props.data.id);
        //router.push('/crud');
    }


    return (
        <>
            {
                <div key={props.data.id}>
                    <input className="form-control" type="text" onChange={onChangeText} defaultValue={props.data.content}></input>
                    <button className="form-control" type='submit' onClick={onClickUpdate}>修正</button>
                    <button className="form-control" type='submit' onClick={onClickDelete}>削除</button>
                </div>


            }
        </>
    )
}