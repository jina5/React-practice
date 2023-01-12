import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

import { FavoritesContextProvider } from "./store/favorite-context"; //기본값으로 보냈던 context가 아니라 컴포넌트 함수를 가져오기 위해 그 이름으로 import 한다.
//렌더링 되고 있는 App컴포넌트를 브라우저라우터로 감싸준다.
// 브라우저 라우터도 컴포넌트기 때문에 html 태그처럼 사용 가능하다.
// 비표준 컴포넌트
// 비 html 컴포넌트

ReactDOM.render(
  <FavoritesContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
