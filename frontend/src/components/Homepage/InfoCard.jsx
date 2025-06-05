export const InfoCard =  ({name,image}) =>{
    return(
        <div className="w-64 mx-4 my-2 card-link">
        <div className="info-card p-4 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <img src={image} alt={name} className="w-full h-40 object-cover rounded-lg" />
            <div className="mt-4">
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            </div>
        </div>
        </div>
    )
}
