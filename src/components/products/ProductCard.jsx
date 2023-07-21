import { Button, Rating } from "flowbite-react";
import Img from "../../assets/iphone.jpg";
import { BsCart4 } from "react-icons/bs";

const ProductCard = () => {
	return (
		<div className="max-w-3xl h-96 bg-slate-100 border m-3">
			<img className="w-full h-52 object-cover" alt="Product Image" src={Img} />
			<div className="p-3">
				<h1 className="text-1xl font-bold">iPhone</h1>
				<p>Brand</p>
				<p>Discount</p>
				<Rating>
					<Rating.Star />
					<p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
						4.95
					</p>
				</Rating>
				<div className="flex flex-row items-center justify-between">
					<span className="text-1xl font-bold">($200)</span>
					<Button>
						<BsCart4 className="mr-1 h-5 w-5" />
						<p>Cart</p>
					</Button>
					{/* <ButtonComponent>
						<BsCart4 className="mr-2 h-5 w-5" />
						<p>Add to Cart</p>
					</ButtonComponent> */}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
