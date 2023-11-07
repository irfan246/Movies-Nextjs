import Link from "next/link"
export default function card({ image, title, link }) {
    return (
        <div className='mb-4 z-10 group hover:scale-95 transition duration-500 ease-in-out'>
            <Link href={link}>
                <div className="flex flex-col flex-wrap justify-center">
                    <img src={image} className="w-[15em] h-[20em]" />
                    <h1 className="w-48 font-bold text-xl text-white mt-2 group-hover:text-red-600">{title}</h1>
                </div>
            </Link>
        </div>
    )
}
