import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const Context = ({ children }) => {
    const [allFoods, setAllFoods] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [displayFood, setDisplayFood] = useState([])

    const fetchData = async () => {
        try {
            const response = await axios.get('foodData.json');
            setAllFoods(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleFilterFood = (item) => {
        if (item && item !== 'All Foods') {
            // If no category is selected, display all food items
            const foodCategory = allFoods.filter(food => item === food.category);
            setDisplayFood(foodCategory);
        } else if (item === "All Foods") {
            setDisplayFood(allFoods);
        }
    }

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems(prev => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const contextInfo = {
        allFoods,
        setAllFoods,
        addToCart,
        removeFromCart,
        cartItems,
        displayFood,
        setDisplayFood,
        handleFilterFood,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;