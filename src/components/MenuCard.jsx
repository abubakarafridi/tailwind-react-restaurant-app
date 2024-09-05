
const MenuCard = ({name, price, image}) => {
  return (
    <div className="flex border border-gray-200 rounded-md px-4 py-2 gap-x-2">
        <img className="w-32 h-32 object-cover rounded-md" src={image} alt="" />
        <div className="flex flex-col">
            <span className="text-gray-950 text-lg font-semibold">{name}</span>
            <span>Rs.{price}</span>
            <p>This is a brief description of the product</p>
            <button className="text-white bg-gradient-to-tl to-pink-600 from-pink-700 w-32 font-semibold py-2 px-4 rounded-md">shop Now</button>
        </div>
    </div>
  )
}

export default MenuCard