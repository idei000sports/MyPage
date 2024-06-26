import useSWR from "swr";

export const create = async (content) => {

    // APIのURL
    const url = "/api/notes";
    // リクエストパラメータ
    const params = {
        method: "POST",
        // JSON形式のデータのヘッダー
        headers: {
            "Content-Type": "application/json",
        },
        // リクエストボディ
        body: JSON.stringify({
            content: content
        })
    };

    // APIへのリクエスト
    await fetch(url, params);
};

export const read = async () => {
    /*
        //こうしたら受け取れる
        const [notes, setNotes] = useState("");
        useEffect(() => {
            const fetchNotes = async() => {
            const json = await read();

            setNotes(json);
            console.log(json);
            }
            fetchNotes();
        }, []);
  */

    // APIのURL
    const url = "/api/notes";

    // APIへのリクエスト
    const response = await fetch(url);
    return await response.json();
};

export const ReadAll =  () => {
    const fetcher = url => fetch(url).then(res => res.json())
    const { data, error, isLoading, mutate } = useSWR('/api/notes', fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export const ReadSearch =  (id) => {
    const fetcher = url => fetch(url).then(res => res.json())
    const { data, error } = useSWR(`/api/notes/${id}`, fetcher);
    console.log(data);
    return {
        data,
        error,
    }
}



export const update = async (id, text) => {
    const response = await fetch(
        `/api/notes/${id}`,
        {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            // リクエストボディ
            body: JSON.stringify({
                content: text,
            })
        }
    )

}


export const del = async (id) => {
    const response = await fetch(
        `/api/notes/${id}`,
        {
            method: 'DELETE',
        }
    )
}