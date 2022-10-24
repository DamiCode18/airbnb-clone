import Image from "next/image";
import React, { Fragment } from "react";
import { customLoader } from "../../utils/customLoader";

type Images = {
    srcImage: string
}
const Card = (srcImage: Images) => {
    return (
        <Fragment>
            <div>
                <Image 
                    width={348}
                    height={331}
                    className="rounded-xl"
                    src={srcImage.srcImage}
                    alt="card"
                    objectFit="cover"
                    />
            </div>
        </Fragment>
    )
}

export default Card;