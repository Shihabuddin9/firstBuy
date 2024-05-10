
const FoodCart = ({ food }) => {
    const { name, price, description, category } = food
    return (
        <div className="border bg-slate-100 p-3 rounded">
            <h2 className="font-semibold">{name}</h2>
            <h4 className="my-1 text-red-600">${price}</h4>
            <p>{description.slice(0, 50)}</p>
        </div>
    );
};

export default FoodCart;