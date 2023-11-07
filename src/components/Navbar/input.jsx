"use client"

import { useRef } from "react"
import { useRouter } from "next/navigation"
export default function Input() {
    const seacrhRef = useRef()
    const router = useRouter()

    const handelSearch = (event) => {
        const keyword = seacrhRef.current.value

        if (!keyword) return;

        if (event.key === "Enter") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }
    return (
        <input type="text"
            placeholder="Search Anime"
            ref={seacrhRef}
            onKeyDown={handelSearch}
            className="outline-none bg-slate-100 border-none py-2 px-4 rounded-full focus:bg-transparent focus:outline-[#171717] text-red-400 placeholder-red-400 w-[20em] my-2 sm:w-[25em] lg:w-[35em] 2xl:w-[45em]" />

    )
}
