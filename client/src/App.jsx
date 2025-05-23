import { Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import CameraList from './components/camera-list/CameraList';
import Header from './components/header/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import NotFound from './components/not-found/NotFound';
import CreateCamera from './components/camera-create/cameraCreate';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import CameraDetails from './components/camera-details/CameraDetails';

export default function App() {
  return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/cameras" element={<CameraList />} />
            <Route path="/cameras/:cameraId" element={<CameraDetails />} />
            <Route path="/cameras/create" element={<CreateCamera />} />
            
            {/* Auth Routes */}
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            
            {/* Other Routes */}
            <Route path="/about" element={<About />} />
            
            {/* 404 Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
  );
}