

const childComponent = (props:any) => {
    console.log (props);
    return (
        <div >
            <div className="my-4 bg-white h-72 w-56 ">
            <h1 >{props.Image}</h1>
            <p className="font-bold text-blue-900 text-center font-sans text-lg"> {props.Name} </p>
            <p className="text-green-700 text-center font-sans  "> {props.price} </p>
            <p className="flex justify-center py-1 text-orange-600"> {props.rating} </p>
            <p className="flex justify-center text-sm text-gray-600"> {props.reviews} </p>

            </div>


        </div>

    )
}

export default childComponent;