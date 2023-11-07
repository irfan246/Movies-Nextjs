export default function pagination({ Page, last_page, setPage }) {
    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }

    const nextPage = () => {
        setPage((prev) => prev + 1)
        scrollTop()
    }

    const prevPage = () => {
        setPage((prev) => prev - 1)
        scrollTop()
    }

    return (
        <>
            <div className="text-white flex gap-5 items-center">
                {Page <= 1 ? null : <button className="text-xl hover:text-red-600" onClick={prevPage}>Prev</button>}
                <div className="flex gap-2">
                    <p>{Page}</p>
                    <p>of</p>
                    <p>{last_page}</p>
                </div>
                {Page >= last_page ? null : <button className="text-xl hover:text-red-600" onClick={nextPage}>Next</button>}
            </div>
        </>

    )
}
