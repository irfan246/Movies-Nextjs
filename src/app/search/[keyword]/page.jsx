import { getSearchMovieApi } from "@/api";
import Card from "../../../components/popmovie/card";

export default async function searchMovie({ params }) {
    const { keyword } = params;
    const searchMovie = await getSearchMovieApi(keyword);
    return (
        <>
            <div className=' relative top-[5rem] grid grid-cols-4 gap-2 justify-items-center'>
                {searchMovie.results.map((movie, index) => (
                    <Card image={`${process.env.NEXT_PUBLIC_BASEIMAGE}/${movie.poster_path}`} title={movie.original_title} key={index} link={`/detailmovie/${movie.id}`} />
                ))}
            </div>
        </>

    )
}
