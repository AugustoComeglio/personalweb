import './App.css'
import Footer from './componets/Footer/Footer'
import Header from './componets/Header/Header'
function App() {
  return (
    <div className='mainCont'>
      <Header></Header>
      <div>
        <div className='btnsCont'>
          <button className='btn'>Sobre Mi</button>
          <button className='btn'>Contacto</button>
        </div>
        <div className='fotoCont'>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
