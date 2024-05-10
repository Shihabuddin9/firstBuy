import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const Context = ({ children }) => {
    const [allFoods, setAllFoods] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get('foodData.json');
            setAllFoods(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData()
    }, [])
    const contextInfo = {
        allFoods,
    }
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Context;