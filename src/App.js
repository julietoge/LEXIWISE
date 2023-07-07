import './App.css';
import ContactUsForm from './components/form';

function App() {
  const ContactUsApp = (form) => {
    console.log(form)
  }
  return (
    <div className="App">
      <ContactUsForm submitForm={ContactUsApp} />
    </div>
  );
}

export default App;
