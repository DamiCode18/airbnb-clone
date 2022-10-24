import { Fragment } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card from  "./airbnbCard";
import { images } from "../api/data";
import Image from "next/image";

const Rooms=()=>{
// const arr = Array(20).fill(0).map((x,i)=>i+1);
// const useImages = images.sort(() => Math.random() - 0.5);
return(
<Fragment>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:mx-12 mx-6">
{images.map((x,i)=>(
    <div key={i}>
    <Carousel  
    showThumbs={false}
    showArrows={true} 
    showStatus={false} 
    showIndicators={true} 
    stopOnHover 
    thumbWidth={40}>
    {x?.image?.map(y=>(
        <Card key={y} srcImage={y}/>
    ))}
    </Carousel>
    <div className="mx-3">
    <div className="flex justify-between"><div className="text-sm font-bold">{x.location}</div><p><Image src="https://cdn-icons-png.flaticon.com/128/929/929495.png" height={10} width={10} /><span className="ml-1">{x.star_rating}</span></p></div>
    <div className="text-sm font-light">San Felipe</div>
    <div className="text-sm font-light">{x.date}</div>
    <div className="text-sm font-bold">{x.price}</div>
    </div>
     </div>
))}    

    </div>
</Fragment>
)
}
export default Rooms;