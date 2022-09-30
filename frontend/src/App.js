import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes}  from 'react-router-dom'

//Stranky
import Homepage from './pages/Homepage';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';

//Komponenty
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  /* Nastavení adresy, na které backendový server přijímá dotazy GraphQL */
  uri: "http://localhost:1337/graphql",
  /* Základní nastavení vyrovnávací paměti (cache) pro urychlení načtení často používaných částí webu */
  cache: new InMemoryCache(),
});


function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
          <main className='container'>
          <Header/>
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/recipes" element={<Recipes/>} />
              <Route path="/recipes/:id" element={<RecipeDetail/>} />
            </Routes>
            <Footer />
          </main>
        </ApolloProvider>
    </Router>
  );
}


export default App;
