import React,{Children,useState, createContext} from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

const AppContext = ({children}) =>{
    const { pathname } = useLocation();

// Automatically scrolls to top whenever pathname changes
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
    return(
        <Context.Provider>
            {children}
        </Context.Provider>
    )
}

export default AppContext;