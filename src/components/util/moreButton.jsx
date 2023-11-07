import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai"

export default function ({ link_path }) {
    return (
        <div>
            <Link href={link_path}>
                <div className="my-8 flex justify-center items-center">
                    <h1 className="w-[30rem] font-bold text-2xl text-white bg-red-600 rounded-full hover:bg-red-800 flex justify-center items-center gap-2">More <AiOutlinePlus /></h1>
                </div>
            </Link>
        </div>
    )
}
