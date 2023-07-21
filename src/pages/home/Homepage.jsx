import CarouselComponent from "../../components/carousel/CarouselComponent";
import ProductLayout from "../../components/products/ProductLayout";

const Homepage = () => {
	return (
		<div>
			<CarouselComponent />
			<ProductLayout name={"Recommendation"}>
				<h2>Hello there</h2>
			</ProductLayout>
		</div>
	);
};

export default Homepage;
