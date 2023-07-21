import { Carousel } from "flowbite-react";
import Img from "../../assets/logo.png";

const CarouselComponent = () => {
	return (
		<div className="bg-slate-50 h-96 w-auto mx-6 my-6">
			<Carousel className="w-full h-full">
				<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"></img>
				<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"></img>
				<img src="https://flowbite.com/docs/images/carousel/carousel-1.svg"></img>
				<img src={Img}></img>
			</Carousel>
		</div>
	);
};

export default CarouselComponent;
