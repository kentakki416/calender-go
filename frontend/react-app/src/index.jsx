import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./redux/rootReducer";
import CalendarBoard from "./components/CalendarBoard/container";
import resetCss from "./reset.css";
import Navigation from "./components/Navigation/container";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import  Sidemenu  from "./components/Sidemenu/container";
import AddScheduleDialog from "./components/AddScheduleDialog/container";
import CurrentScheduleDialog from "./components/CurrentScheduleDialog/container";

// dayjsを日本の日付に設定
dayjs.locale("ja");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// storeを作成
const store = createStore(rootReducer, applyMiddleware(thunk));



const App = () => {
  const [active, setActive] = useState(false);
  const value = {
    active, 
    setActive,
  }
  return (
    <div className={resetCss}>
    <Provider store={store} >
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Navigation value={{value}}/>
          <div style={{margin: '2px', display: 'flex'}}>
            <Sidemenu/>
          <CalendarBoard/>
          <AddScheduleDialog/>
          <CurrentScheduleDialog />
          </div>
      </MuiPickersUtilsProvider>
    </Provider>
  </div>
  )
};

root.render(<App />);
