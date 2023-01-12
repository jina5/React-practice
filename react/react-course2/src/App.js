import { Route, Switch } from "react-router-dom";
//Route - url내 다른 경로 정의하고 각 경로별로 어떤 컴포넌트 로딩할건지 결정
//path : 도메인 뒤에 나오는 경로
//경로에 따라 어떤 컴포넌트로 로딩할지
//Switch : 적합한 최초의 하나만 렌더링!
// exact props 추가하지 않으면 /new-meetup 일떄 / 에서 끝나버림 (all)
//
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetups";
import FavoritePage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route path="/favorites">
            <FavoritePage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
