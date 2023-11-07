import { getMovieApi } from '@/api'

export default async function Page({ params: { id } }) {

    const detailMovie = await getMovieApi(`movie/${id}`)
    return (
        <div className='m-4 mx-10 h-full'>
            <div className='flex justify-between items-center text-white select-none'>
                <img src={`${process.env.NEXT_PUBLIC_BASEIMAGE}/${detailMovie.poster_path}`} alt="" className='w-[28em]' />
                <div className='relative'>
                    <h1 className='text-6xl font-bold text-white w-[30rem]'>{detailMovie.original_title}</h1>
                    <p className='text-base text-gray-600 ml-3 mt-4'>{detailMovie.release_date} | {detailMovie.runtime}min</p>
                    <div className='w-[40em] mt-8'>
                        <h1 className='border-b-4 border-red-600 w-12 py-3 hover:text-red-600 hover:border-white text-2xl font-semibold mb-4'>OVERVIEW</h1>
                        <p className='font-extralight mb-6'>{detailMovie.overview}</p>
                        <p className='mb-4'><span className='text-gray-600 mr-8'>Tagline</span> {detailMovie.tagline}</p>
                        <p className='flex'><span className='text-gray-600 mr-12'>Genre</span> {detailMovie.genres.map((genre, index) => (
                            <span key={index} className=''>{genre.name},</span>
                        ))}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
