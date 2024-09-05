import FoodCard from "../components/FoodCard";
import MenuCard from "../components/MenuCard";

const Home = () => {
    const foodCard = [
        {
            id: 1,
            imgUrl: "pizza.jpg",
            name: "Pizza"
        },
        {
            id: 2,
            imgUrl: "burger.jpg",
            name: "Burger"
        },
        {
            id: 3,
            imgUrl: "momo.jpg",
            name: "Momos"
        }
    ];

    const menuCard = [
        {
            id: 1,
            name: "Burger",
            imgUrl: "burger.jpg",
            price: "800"
        },
        {
            id: 2,
            name: "Pasta",
            imgUrl: "pasta.jpg",
            price: "1000"
        },
        {
            id: 3,
            name: "Sandwich",
            imgUrl: "sandwich.jpg",
            price: "500"
        },
        {
            id: 4,
            name: "Momo",
            imgUrl: "momo.jpg",
            price: "300"
        },
        {
            id: 5,
            name: "Pizza",
            imgUrl: "pizza.jpg",
            price: "1500"
        },
        {
            id: 6,
            name: "Steak",
            imgUrl: "steak.jpg",
            price: "3000"
        },
    ];

  return (
    <div>
        {/* Hero Section */}
        <section className="relative">
                <img className="h-[50vh] w-full object-cover" src="backgroundImage.jpg" alt="" />
            <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[50%]">
                <div className="flex gap-1">
                    <input type="text" className="sm:w-[35vw] w-[50vw] px-4 py-2 focus:outline-none border border-gray-400 rounded-lg" placeholder="Type Something..."/>
                    <button className="text-white font-semibold bg-gradient-to-tl to-pink-600 from-pink-700 py-2 px-6 rounded-md">Search</button>
                </div>
            </div>
        </section>

        {/* FoodCard Section */}
        <section className="flex flex-col items-center p-5">
            <h2 className="text-3xl font-bold mb-8">Explore Foods</h2>
            <div className="w-full flex flex-wrap items-center justify-center gap-16">
                {
                    foodCard.map((item) => (<FoodCard key={item.id} image={item.imgUrl} name={item.name}/>))
                }
            </div>
        </section>

        {/* FoodMenu Section */}
        <section className="mx-auto mt-10">
            <h2 className="text-center font-bold text-2xl">Food Menu</h2>
            
            <div className="flex flex-wrap justify-around mt-10 gap-4">
                {
                    menuCard.map((item) => (<MenuCard key={item.id} name={item.name} price={item.price} image={item.imgUrl}/>))
                }
            </div>
        </section>
    </div>
  )
}

export default Home