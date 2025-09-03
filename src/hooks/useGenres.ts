import useData from "./useData";
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Genre {
    id: number;
    name: string;
    games_count: number;
    image_background: string;
}

const useGenres = () => useData<Genre>('/genres');

export default useGenres;