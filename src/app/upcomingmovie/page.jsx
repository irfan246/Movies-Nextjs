"use client"

import Card from "@/components/upcoming/card"
import Header from "@/components/upcoming/header"
import { getUpcomingMovie } from "@/api"
import Pagination from "@/components/util/pagination"
import { useEffect, useState } from "react"

export default function page() {
    const [page, setPage] = useState(1)
    const [api, setApi] = useState([])

    const fecthData = async () => {
        const data = await getUpcomingMovie(page)
        setApi(data)
    }

    useEffect(() => {
        fecthData()
    }, [page])

    return (
        <div className="relative">
            <div className="relative top-[2rem] left-20">
                <Header />
            </div>
            <div className='relative top-[5rem] grid grid-cols-4 gap-2 justify-items-center'>
                {api.results?.map((movie, index) => (
                    <Card image={`${process.env.NEXT_PUBLIC_BASEIMAGE}/${movie.poster_path}`} title={movie.original_title} key={index} link={`/detailmovie/${movie.id}`} />
                ))}
            </div>
            <div className="flex justify-center items-center relative top-14 p-5">
                <Pagination Page={page} setPage={setPage} last_page={api.total_pages} />
            </div>
        </div>
    )
}
