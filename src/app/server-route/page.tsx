import ImageSlider from "@/components/image_slider";
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage(){
    const result =serverSideFunction();
    return (<>
    
    <h1>ServerRoutePage</h1>
    <p>{result}</p>
    <ImageSlider/>
    </>
    );
}