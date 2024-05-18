import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../../firebase/firebase.config'

export const AuthContext = createContext(null)
const auth = getAuth(app);

const Context = ({ children }) => {
    const [allFoods, setAllFoods] = useState([])
    const [cartItems, setCartItems] = useState({})
    const [displayFood, setDisplayFood] = useState([])
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [searchText, setSearchText] = useState('')


    const fetchData = async () => {
        try {
            // Fetch data from foodData.json using axios
            const response = await axios.get('foodData.json');
            // Set the fetched data to the state variable 'allFoods'
            setAllFoods(response.data);
        } catch (error) {
            // If an error occurs during fetching, log the error to the console
            console.error('Error fetching data:', error);
        }
    };

    const handleFilterFood = (item) => {
        if (item && item !== 'All Foods') {
            // If a specific category is selected, filter the 'allFoods' array to display only items in that category
            const foodCategory = allFoods.filter(food => item === food.category);
            // Update the state variable 'displayFood' with the filtered food items
            setDisplayFood(foodCategory);
        }
        else if (item === "All Foods") {
            // If 'All Foods' is selected, display all food items
            setDisplayFood(allFoods);
        }
    }


    const addToCart = (itemId) => {
        // Check if the item is not already in the cart
        if (!cartItems[itemId]) {
            // If not, add it to the cart with a quantity of 1
            setCartItems(prev => ({ ...prev, [itemId]: 1 }));
        } else {
            // If the item is already in the cart, increase its quantity by 1
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
    }

    const removeFromCart = (itemId) => {
        // Decrease the quantity of the item in the cart by 1
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    const handleRemoved = (id) => {
        const updatedCartItems = { ...cartItems };
        delete updatedCartItems[id];
        setCartItems(updatedCartItems);
    }

    // calculate product price
    let productPrice = 0;
    for (let food of allFoods) {
        const quantity = cartItems[food.id] || 0; // Check if item exists in cart
        productPrice += food.price * quantity; // Accumulate product price
    }
    const formattedPrice = parseFloat(productPrice.toFixed(2));

    // Filter out properties with value 0
    const nonZeroItems = Object.keys(cartItems).filter(key => cartItems[key] !== 0);
    // Get the length of non-zero properties
    const totalItemsInShoppingCart = nonZeroItems.length;

    // create user sign Up
    const createUserSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // create user Sign in
    const createUserSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out
    const createLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        // console.log(cartItems);
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
        createUserSignUp,
        createUserSignIn,
        user,
        createLogOut,
        formattedPrice,
        totalItemsInShoppingCart,
        handleRemoved,
        loading,
        searchText,
        setSearchText,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;