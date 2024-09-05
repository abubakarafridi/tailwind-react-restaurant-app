
const FoodCard = ({name, image}) => {
  return (
    <div className="rounded-md overflow-hidden relative">
        <img className="h-[400px] w-[300px] rounded-md object-cover" src={image} alt="" />
        <p className="absolute bottom-[10%] right-[50%] translate-x-[50%] translate-y-[50%] text-white font-bold">{name}</p>
    </div>
  )
}

export default FoodCard