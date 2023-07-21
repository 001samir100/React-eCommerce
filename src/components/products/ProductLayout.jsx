import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ProductLayout = ({ name }) => {
	return (
		<div className="flex flex-col mx-6 ">
			<h1 className="text-2xl font-bold text-black underline mb-6">{name}</h1>
			<div className="flex flex-row flex-wrap justify-center">
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};
ProductLayout.propTypes = {
	name: PropTypes.string,
};
export default ProductLayout;
