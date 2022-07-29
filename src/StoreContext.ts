import React from "react";
import store, {storeType} from "./components/redux/redux-store";

const StoreContext = React.createContext(store as storeType)


export default StoreContext