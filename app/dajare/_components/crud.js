import useSWR from "swr";

const url = "/api/words";

export const create = async (content) => {
    const url = "/api/words";

    // APIのURL
    //const url = "/api/notes";
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
    const url = "/api/words";
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
    //const url = "/api/notes";

    // APIへのリクエスト
    const response = await fetch(url);
    return await response.json();
};

export const ReadAll =  () => {
    const url = "/api/words";
    const fetcher = url => fetch(url).then(res => res.json())
    const { data, error, isLoading, mutate } = useSWR(url, fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}

export const ReadSearch =  (boin) => {
    console.log("readsearch")
    const fetcher = url => fetch(url).then(res => res.json())
    console.log(boin)
    const { data, error } = useSWR(`/api/words/search/${boin}`, fetcher);

    console.log(data);


    return {
        data,
        error,
    }
}



export const update = async (id, text) => {
    const url = "/api/words";
    const response = await fetch(
        `${url}/${id}`,
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
    const url = "/api/words";
    const response = await fetch(
        `${url}/${id}`,
        {
            method: 'DELETE',
        }
    )
}