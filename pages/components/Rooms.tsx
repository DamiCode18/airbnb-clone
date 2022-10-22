import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from  "./airbnbCard";
import { images } from "../api/data";

const Rooms=()=>{
const arr = Array(20).fill(0).map((x,i)=>i+1);
const useImages = images.sort(() => Math.random() - 0.5);
return(
<Fragment>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2">
{arr.map(x=>(
    <Carousel  
    showThumbs={false}
    key={x}
    showArrows={true} 
    showStatus={false} 
    showIndicators={true} 
    stopOnHover 
    thumbWidth={40}>
     {useImages.map(x=>(
     <Card key={x} srcImage={x}/>
     ))}   
    </Carousel>
))}    
    </div>
</Fragment>
)
}
export default Rooms;