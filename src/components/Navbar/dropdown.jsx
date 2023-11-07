"use client"

import Link from "next/link"
import { RiMenu3Line } from "react-icons/ri"
import { Dropdown } from 'flowbite-react'

export default function CustomTriggerDropdown() {
    const menuList = [
        {
            label: "Settings",
            path: "/"
        },
        {
            label: "Sing Out",
            path: "/"
        },
    ]

    return (
        <Dropdown dismissOnClick={false} renderTrigger={() => <span><RiMenu3Line className="cursor-pointer text-red-700 text-3xl  sm:text-4xl" /></span>} className="outline-none rounded-md bg-white">
            {menuList.map((menu, index) => (
                <div key={index}>
                    <Dropdown.Item className="hover:bg-red-600 hover:text-white"><Link href={menu.path}>{menu.label}</Link></Dropdown.Item>
                </div>
            ))}
        </Dropdown>
    )
}
