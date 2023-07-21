import { Avatar, Button, Dropdown, Navbar, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { BiSearch, BiSolidUserCircle } from "react-icons/bi";
import Logo from "../assets/logo.png";
import SearchBar from "./searchbar/SearchBar";

export const HeaderNavbar = () => {
	// toggle
	const [open, setOpen] = useState(false);

	// handle toggle
	function handleToggle() {
		setOpen((prev) => !prev);
	}

	return (
		<nav className="sticky px-6 py-3 flex flex-row items-center justify-between top-0 left-0 right-0 h-20 ">
			{/* Logo here */}
			<div className="w-[10%] ml-6">
				<img src={Logo} alt="Logo" />
			</div>
			<div className="mx-6 flex-auto flex flex-col tablet:flex-row">
				{/* Searchbar */}
				<div className="flex-auto">
					<SearchBar />
				</div>
				{/* Menus */}
				<ul
					className={`flex flex-initial items-center flex-col bg-slate-100 tablet:bg-transparent tablet:flex-row`}
				>
					<li
						className={`${
							open ? "block px-3 py-2" : "hidden"
						} tablet:block tablet:px-6 w-full `}
					>
						test
					</li>
					<li
						className={`${
							open ? "block px-3 py-2" : "hidden"
						} tablet:block tablet:px-6 w-full`}
					>
						best
					</li>
					<li
						className={`${
							open ? "block px-3 py-2" : "hidden"
						} tablet:block tablet:px-6`}
					>
						<Dropdown inline label="Dropdown">
							<Dropdown.Item icon={BiSolidUserCircle}>Dashboard</Dropdown.Item>
							<Dropdown.Item icon={AiFillSetting}>Settings</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item icon={FaSignOutAlt}>Sign out</Dropdown.Item>
						</Dropdown>
					</li>
				</ul>
			</div>
			{/* Toggle */}
			<div className="text-2xl tablet:hidden">
				<div onClick={handleToggle} className=" hover:cursor-pointer">
					{open ? <MdClose /> : <HiMenu />}
				</div>
			</div>
		</nav>
	);
};
