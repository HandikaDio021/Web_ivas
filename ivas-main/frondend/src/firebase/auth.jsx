
import { Outlet } from "react-router-dom";
import store from "../redux/store";
//import store from "../redux/stores/store"
import { Provider } from "react-redux";

const Auth = () => {
  return (
    <div >
            <Provider store={store}>
              <Outlet/>      
            </Provider>
    </div>
  );
};

export default Auth;
