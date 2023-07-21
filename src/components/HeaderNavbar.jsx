import { Dropdown } from "flowbite-react";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { AiFillSetting } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import Logo from "../assets/logo.png";
import SearchBar from "./searchbar/SearchBar";
import { BsCart4 } from "react-icons/bs";
import { TbSitemap } from "react-icons/tb";

export const HeaderNavbar = () => {
	// toggle
	const [open, setOpen] = useState(false);

	// handle toggle
	function handleToggle() {
		setOpen((prev) => !prev);
	}

	return (
		<nav className="sticky z-10 px-6 py-3 flex flex-row items-center justify-between top-0 left-0 right-0 min-h-20 backdrop-opacity backdrop-blur-md bg-white/90">
			{/* Logo here */}
			<div className="flex-initial ml-6 bg-red-400">
				<img src={Logo} alt="Logo" width={100} />
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
					<div
						className={`${
							open ? "block px-3 py-2" : "hidden"
						} tablet:block tablet:px-6 w-full `}
					>
						<div className="flex items-center gap-1">
							<TbSitemap />
							<p>Products</p>
						</div>
					</div>
					<div
						className={`${
							open ? "block px-3 py-2" : "hidden"
						} tablet:block tablet:px-6 w-full flex flex-row`}
					>
						<div className="flex items-center gap-1">
							<BsCart4 />
							<p>Cart</p>
						</div>
					</div>
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
