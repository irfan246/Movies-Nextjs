import Input from "./input"
import Dropdown from "./dropdown"
import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="relative flex flex-col justify-center items-center pt-4 sm:flex-row sm:justify-around">
            <Link href="/"><img src="/image/logo.png" className="w-12 h-12 sm:w-16 sm:h-16" /></Link>
            <Input />
            <Dropdown />
        </nav>
    )
}
