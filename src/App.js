import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./assets/scss/styles.scss";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import PrivateRoute from "./core/guards/PrivateRoute";

const Account = React.lazy(() => import("./pages/Account"));
const Auth = React.lazy(() => import("./pages/Auth"));
const Features = React.lazy(() => import("./pages/Features"));

function App() {
  return (
    <div className="App">
      <Header />
      <main className="page-main">
        <Suspense fallback={<div>...Loading</div>}>
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <PrivateRoute path="/account">
              <Account />
            </PrivateRoute>
            <Route path="/">
              <Features />
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
