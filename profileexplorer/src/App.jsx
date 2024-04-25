import { useState } from "react";
import "./App.css";
import ProfileList from "./components/ProfileList";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useFetchProfilesQuery } from "./store/usersApiSlice";
import Spinner from "./components/Spinner";
import Dashboard from "./components/Dashboard";

function App() {
  const { data: profiles, error, isLoading } = useFetchProfilesQuery();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                {isLoading ? (
                  <>
                    <div className="flex h-screen items-center justify-center">
                      <Spinner />
                    </div>
                  </>
                ) : (
                  <ProfileList profile={profiles} />
                )}
              </>
            }
          />
          <Route
            path="/dashboard"
            element={
              <>
                <Navbar />
                {isLoading ? (
                  <>
                    <div className="flex h-screen items-center justify-center">
                      <Spinner />
                    </div>
                  </>
                ) : (
                  <Dashboard profile={profiles} />
                )}
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
