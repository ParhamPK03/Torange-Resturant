import { createContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { Food_list } from "../assets/Item_Infoes";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedCartItems = localStorage.getItem('cartItems');

        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            if (parsedUser && parsedUser.token) { 
                setUser(parsedUser);
                setIsLoggedIn(true);
            } else {
                localStorage.removeItem('user'); 
            }
        }

        if (storedCartItems) {
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    const addToCart = (itemId) => {
        if (!isLoggedIn) {
            Swal.fire({
                icon: 'error',
                title: 'خطا!',
                text: 'برای افزودن محصول به سبد خرید ابتدا باید وارد شده باشید.',
                confirmButtonText: 'باشه',
                confirmButtonColor: '#3085d6'
            });
            return;
        }

        const updatedCartItems = {
            ...cartItems,
            [itemId]: (cartItems[itemId] || 0) + 1
        };

        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const removeFromCart = (itemId) => {
        const updatedItems = { ...cartItems };
        if (updatedItems[itemId] > 0) {
            updatedItems[itemId] -= 1;
            if (updatedItems[itemId] === 0) {
                delete updatedItems[itemId];
            }
        }
        setCartItems(updatedItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedItems));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        let totalCount = 0;

        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = Food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += (itemInfo.newprice || 0) * cartItems[item];
                    totalCount += cartItems[item];
                }
            }
        }

        return { totalAmount, totalCount };
    };

    const login = (userData) => {
        setUser(userData);
        setIsLoggedIn(true);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
        setCartItems({});
        localStorage.removeItem('user');
        localStorage.removeItem('cartItems');
    };

    const contextValue = {
        Food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        isLoggedIn,
        user,
        login,
        logout
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
