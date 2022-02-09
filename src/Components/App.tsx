import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { LoginPage } from "Pages/Login";
import { PrivateRoute } from "PrivateRoute";
import { CardsPage } from "Pages/Card/";
import { SignUpPage } from "Pages/SignUp";
import { FeedsPage } from "Pages/Feed";
import { PublicatePage } from "Pages/Publicate";
import { NetworkPage } from "Pages/Network";
import { ExplorePage } from "Pages/Explore";
import { AuthProvider } from "Context/AuthContext";
import { DrawerProvider } from "Context/DrawerContext";
import { CreateCardProvider } from "Context/CreateCard";
import { StepperProvider } from "Context/StepperContext";
import { CardInfoProvider } from "Context/CardInfo";
import { SettingProvider } from "Context/SettingContext";
import { DashboardPage } from "Pages/Dashboard";
import { SavedPostPage } from "Pages/SavedPosts";
import { ProfilePage } from "Pages/ProfilePage";
import { PostPage } from "Pages/PostPage";
import { InsitutionalProfilePage } from "Pages/InstitutionalProfile";
import { NotFoundPage } from 'Pages/404'
import ScrollToTop from "Components/ScrollOnTop"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

// TODO: provide a better fallback UI for suspense, like a skeleton UI

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <DrawerProvider>
          <StepperProvider>
            <CreateCardProvider>
              <SettingProvider>
                <CardInfoProvider>
                  <Router >
                    <ScrollToTop />
                    <Switch>
                      {/* will add fallback={<Fallback />} later */}
                      {/* <React.Suspense fallback={}> */}
                      <Route exact path="/login">
                        <LoginPage />
                      </Route>
                      <Route exact path="/404">
                        <NotFoundPage />
                      </Route>
                      <PrivateRoute exact path="/cards">
                        <CardsPage />
                      </PrivateRoute>
                      <Route exact path="/signup">
                        <SignUpPage />
                      </Route>
                      <PrivateRoute exact path="/">
                        <FeedsPage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/explore">
                        <ExplorePage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/publicate">
                        <PublicatePage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/network">
                        <NetworkPage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/dashboard">
                        <DashboardPage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/saved">
                        <SavedPostPage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/profile">
                        <ProfilePage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/post">
                        <PostPage />
                      </PrivateRoute>
                      <PrivateRoute exact path="/institution">
                        <InsitutionalProfilePage />
                      </PrivateRoute>
                      <Redirect to='/404' />
                      {/* </React.Suspense> */}
                    </Switch>
                    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
                  </Router>
                </CardInfoProvider>
              </SettingProvider>
            </CreateCardProvider>
          </StepperProvider>
        </DrawerProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
