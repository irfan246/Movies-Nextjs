import Card from "./card"
import Header from "./header"
import MoreCard from "../util/moreButton"
import { getMovieApi } from "@/api/index"

export default async function Index() {
    const movieApi = await getMovieApi("movie/popular")

    return (
        <div className="h-full">
            <div className="ml-20 mb-6">
                <Header />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 justify-items-center '>
                {movieApi.results.map((movie, index) => (
                    <Card image={`${process.env.NEXT_PUBLIC_BASEIMAGE}/${movie.poster_path}`} title={movie.original_title} key={index} link={`/detailmovie/${movie.id}`} />
                ))}
            </div>
            <div>
                <MoreCard link_path="/popularmovie" />
            </div>
        </div>
    )
}
