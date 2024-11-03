import logo from './logo.svg';
import './App.css';
import Header from './components/Header.jsx'
import URLShrinking from './components/URLShrinking.jsx'
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <URLShrinking />
      <Footer year='2024'/>
    </>
  );
}

export default App;
