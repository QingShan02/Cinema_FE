import React, { useState, createContext } from 'react';
export const AppContext = createContext();
function AppProvider({ children }) {
    const [data, setData] = useState({
        ip: "192.168.106.18",
        API_VE_ADDRESS: "http://"+"192.168.106.18"+":8484/api/ve",
        API_IMAGE: "http://"+"192.168.106.18"+":8484"
    });
    return (<AppContext.Provider value={{ data }}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;