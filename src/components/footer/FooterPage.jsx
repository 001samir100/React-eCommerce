import { Footer } from "flowbite-react";
import {
	BsDribbble,
	BsFacebook,
	BsGithub,
	BsInstagram,
	BsTwitter,
} from "react-icons/bs";

const FooterPage = () => {
	return (
		<Footer bgDark className="w-auto mt-6">
			<div className="w-auto ">
				<div className="grid w-auto grid-cols-2 gap-8 px-6 py-8 tablet:grid-cols-3 text-center">
					<div>
						<Footer.Title title="Menus" className="text-smoke" />
						<Footer.LinkGroup col className="hover:text-white">
							<Footer.Link href="#">
								<p>Home</p>
							</Footer.Link>
							<Footer.Link href="#">About Us</Footer.Link>
							<Footer.Link href="#">Products</Footer.Link>
							<Footer.Link href="#">Carts</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="help center" className="text-smoke" />
						<Footer.LinkGroup col>
							<Footer.Link href="#">Discord Server</Footer.Link>
							<Footer.Link href="#">Twitter</Footer.Link>
							<Footer.Link href="#">Facebook</Footer.Link>
							<Footer.Link href="#">Contact Us</Footer.Link>
						</Footer.LinkGroup>
					</div>
					<div>
						<Footer.Title title="legal" className="text-smoke" />
						<Footer.LinkGroup col>
							<Footer.Link href="#">Privacy Policy</Footer.Link>
							<Footer.Link href="#">Licensing</Footer.Link>
							<Footer.Link href="#">Terms & Conditions</Footer.Link>
						</Footer.LinkGroup>
					</div>
				</div>
				<div className="w-auto bg-gray-700 px-4 py-6 flex flex-col items-center justify-center">
					<Footer.Copyright
						by="eCommerce™"
						href="#"
						year={2023}
						className="hover:text-white"
					/>
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon
							href="#"
							icon={BsFacebook}
							className="hover:text-white"
						/>
						<Footer.Icon
							href="#"
							icon={BsInstagram}
							className="hover:text-white"
						/>
						<Footer.Icon
							href="#"
							icon={BsTwitter}
							className="hover:text-white"
						/>
						<Footer.Icon
							href="#"
							icon={BsGithub}
							className="hover:text-white"
						/>
						<Footer.Icon
							href="#"
							icon={BsDribbble}
							className="hover:text-white"
						/>
					</div>
				</div>
			</div>
		</Footer>
	);
};

export default FooterPage;
