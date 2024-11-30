import Image from "next/image"
import React from "react"
import ChildComponent from "./childComponent"
const parentComponent = () => {
    let carimage1= <Image src="/cultus.png" alt="cultus" width={300} height={300} />
    let carName1 = "Suzuki Cultus"
    let carPrice1 = "PKR 38.6 - 45.5 lacs"
    let carRating1 = "★★★☆☆"
    let carReviews1 = "268 Reviews"


    let carimage2= <Image src="/Wagon-R.jpg" alt="wagon-r" width={300} height={300} />
    let carName2 = "Suzuki Wagon R "
    let carPrice2 = "PKR 32.1 - 37.4 lacs"
    let carRating2 = "★★★☆☆"
    let carReviews2 = "152 Reviews"


    let carimage3= <Image src="/Yaris.png" alt="yaris" width={300} height={300} />
    let carName3 = "Toyota Yaris"
    let carPrice3 = "PKR 44.8 - 63.2 lacs"
    let carRating3 = "★★★☆☆"
    let carReviews3 = "141 Reviews"


    let carimage4= <Image src="/swift.jpg" alt="swift" width={300} height={300} />
    let carName4 = "Suzuki Swift"
    let carPrice4 = "PKR 43.4 - 47.2 lacs"
    let carRating4 = "★★★☆☆"
    let carReviews4 = "194 Reviews"
    
    return (
        <div className="flex justify-around bg-gray-200">
            <ChildComponent
                    Image = {carimage1}
                    Name = {carName1}
                    price = {carPrice1}
                    rating = {carRating1}
                    reviews = {carReviews1}
                    />
             <ChildComponent
                    Image = {carimage2}
                    Name = {carName2}
                    price = {carPrice2}
                    rating = {carRating2}
                    reviews = {carReviews2}
                    />
             <ChildComponent
                    Image = {carimage3}
                    Name = {carName3}
                    price = {carPrice3}
                    rating = {carRating3}
                    reviews = {carReviews3}
                    />
            <ChildComponent
                    Image = {carimage4}
                    Name = {carName4}
                    price = {carPrice4}
                    rating = {carRating4}
                    reviews = {carReviews4}
                    />
                    
        </div>
    )
}
export default parentComponent;