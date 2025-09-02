import { useState, useEffect } from "react";
import apiClient from '../services/api-client';
import { CanceledError } from "axios";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}  

const useGenres = () => {
    const [genres, setGenres] = useState<Game[]>([])
    const [error, setError] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true)
        apiClient.get<FetchGamesResponse>('/genres', {signal: controller.signal})
        .then(res => {
            setGenres(res.data.results);
            setLoading(false)
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false)
        })

        return () => controller.abort();
    }, [])

    return {genres, error, isLoading}
}

export default useGenres;