import { Provider } from "react-redux";
import "./App.css";
import Content from "./components/content/Content";
import store from "./store";
// console.log(store);

function AppContent() {
  return (
      <div>
        <Content />
      
      </div>
  );
}
export const App=()=>{
    return<Provider store={store}>
      <AppContent/>
    </Provider>
 
}


export default App;
