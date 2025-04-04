
import Home from './components/home/Home';
import CameraList from './components/camera-list/CameraList'
import Header from './components/header/Header';
import About from './components/about/About'
import Footer from './components/footer/Footer';
import CameraListItem from './components/camera-list/camera-list-item/CameraListItem';

export default function App() {

  return (
    <div>
      <Header />
      {/* <CameraList/> */}
      <CameraListItem/>
      <Footer />
    </div>
  )
}

