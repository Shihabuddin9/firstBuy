import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)

const Context = ({ children }) => {
    const [allFoods, setAllFoods] = useState([])
    const [cartItems, setCartItems] = useState({})

    const fetchData = async () => {
        try {
            const response = await axios.get('foodData.json');
            setAllFoods(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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
        addToCart,
        removeFromCart,
        cartItems,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;