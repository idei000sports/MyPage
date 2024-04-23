import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())

export const useNotes = () => {
    const { data, error, isLoading, mutate } = useSWR('/api/notes', fetcher);
    return {
        data,
        error,
        isLoading,
        mutate,
    }
}
