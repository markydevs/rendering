import { ImageSlider } from "@/components/ImageSlider";
import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoutePage() {
	console.log("Server Route Rendereds");
	const result = serverSideFunction();
	return (
		<>
			<h1>ServerRoutePage</h1>
			<p>{result}</p>
			<ImageSlider />
		</>
	);
}
