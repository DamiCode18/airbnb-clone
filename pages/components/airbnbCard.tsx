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
                    width={500}
                    height={400}
                    className="rounded-lg"
                    src={srcImage.srcImage}
                    alt="card"
                    />
            </div>
        </Fragment>
    )
}

export default Card;