import { TextInput } from "flowbite-react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
	return (
		<TextInput
			placeholder="Search..."
			type="search"
			icon={FaSearch}
			// icon={<BiSearch />}
			className="w-full"
		/>
	);
};

export default SearchBar;
