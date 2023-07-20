import React, { useState, createContext } from 'react';
export const AppContext = createContext();
function AppProvider({ children }) {
    const [data, setData] = useState({
        ip: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/",
        API_VE_ADDRESS: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com/"+ "api/ve",
        API_IMAGE: "http://spring-aws-rapchieuphim.ap-southeast-2.elasticbeanstalk.com"
    });
    return (<AppContext.Provider value={{ data }}>
        {children}
    </AppContext.Provider>);
}

export default AppProvider;