import React from "react";
import ReactDOM from "react-dom/client";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/rootReducer";
import CalendarBoard from "./components/CalendarBoard/container";
import resetCss from "./reset.css";
import Navigation from "./components/Navigation/container";

import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// dayjsを日本の日付に設定
dayjs.locale("ja");

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

// storeを作成
const store = createStore(rootReducer);

const App = () => (
  <div className={resetCss}>
    <Provider store={store} >
      <MuiPickersUtilsProvider utils={DayjsUtils}>
        <Navigation/>
          <div style={{margin: '2px'}}>
          <CalendarBoard/>
          </div>
        
      </MuiPickersUtilsProvider>
    </Provider>
  </div>
  );

root.render(<App />);
