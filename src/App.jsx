import Navigations from "./components/Navigation/Navigations"
import "./App.css"
import ContactHeader from "./components/ContactHeader/ContactHeader"
import ContactForm from "./components/ContactForm/ContactForm"
const App = () => {
  return (
    <div>
      <Navigations/>
      <main className="main_container">
      <ContactHeader/>
      <ContactForm/>

      </main>
    </div>
  )
}

export default App