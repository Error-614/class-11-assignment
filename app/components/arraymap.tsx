import Image from "next/image"
const ArrayMap = () => {


        const carName = [
        { carName: "Toyota corolla",image:<Image src="/Corolla.jpg" alt="corolla" width={800} height={800}/>, price: "PKR 59.7 - 75.5 lacs",rating: "★★★☆☆" ,reviews: "623 Reviews"},
        { carName: "Suzuki Alto",image:<Image src="/Alto.png" alt="alto" width={800} height={800}/>, price: "PKR 23.3 - 30.5 lacs" ,rating: "★★★☆☆" ,reviews: "200 Reviews"},
        { carName: "Honda City",image:<Image src="/City.jpg" alt="city" width={800} height={800}/>, price: "PKR 46.5 - 58.5 lacs",rating: "★★★☆☆" ,reviews: "456 Reviews" },
        { carName: "Honda Civic",image:<Image src="/Civic.jpg" alt="civic" width={800} height={800}/>, price:"PKR 86.6 - 99.0 lacs" ,rating: "★★★☆☆",reviews: "361 Reviews"},
    ]
    return (
        <div className="bg-gray-200 flex justify-around">
             {
                carName.map((veh, index) => {
                    return (
                        <div key={`${veh.carName}-${index}`} className="my-4 bg-white h-72 w-56 ">
                            {veh.image}
                            <h4 className="font-bold text-blue-900 text-center font-sans text-lg">{veh.carName}</h4>
                            <p className="text-green-700 text-center font-sans  ">{veh.price}</p>
                            <p className="flex justify-center py-1 text-orange-600" >{veh.rating}</p>
                            <p className="flex justify-center text-sm text-gray-600">{veh.reviews}</p>

                        </div>
                    )
                })
            }


        </div>
    )
}

export default ArrayMap
