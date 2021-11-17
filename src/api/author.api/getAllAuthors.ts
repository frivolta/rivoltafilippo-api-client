import axios from "axios";
import {useQuery} from "react-query";
import {Author} from "../../types/Author.type";

interface GetAllAuthorsApi {
    authors: Author[]
}

export const fetchAllAuthors = async (): Promise<Author[]> => {
    const {data} = await axios.get<GetAllAuthorsApi>(`${process.env.REACT_APP_API_URL}/author`)
    return data.authors
}

export function useAllAuthors() {
    return useQuery('authors', fetchAllAuthors)
}