import React from 'react'
import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';


import { Header } from './components/Header';
import { Footer } from './components/Footer';


const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});


function App() {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
      <Header title="Header" motto="Informace pro informatiky" />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/recipes/:id' element={<RecipeDetail />} />
          </Routes>
        </main>
        <Footer />
      </ApolloProvider>
    </BrowserRouter>
  );
}


export default App;
