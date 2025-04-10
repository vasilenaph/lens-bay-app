
import Home from './components/home/Home';
import CameraList from './components/camera-list/CameraList'
import Header from './components/header/Header';
import About from './components/about/About'
import Footer from './components/footer/Footer';
import NotFound from './components/not-found/NotFound';
import CreateCamera from './components/camera-create/cameraCreate';
import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import CameraDetails from './components/camera-details/CameraDetails';
import CameraListItem from './components/camera-list/camera-list-item/CameraListItem'

export default function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* <Home/> */}
        {/* <CameraList/> */}
        <CameraListItem/>
        {/* <CameraDetails/> */}
        {/* <CreateCamera/> */}
        {/* <SignUp/> */}
        {/* <SignIn/> */}
        {/* <NotFound></NotFound> */}
      </main>
      <Footer />
    </div>
  )
}

