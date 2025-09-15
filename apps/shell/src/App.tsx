import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary'; 

import ProductApp from 'productApp/ProductApp';
import UserApp from 'userApp/UserApp';
 
// Loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-64">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    <span className="ml-3 text-gray-600">Loading...</span>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/*" element={<ProductApp />} />
              <Route path="/users/*" element={<UserApp />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </Layout>
    </Router>
  );
}

export default App;