import logo from './logo.svg'
import './styles.css'

function App(props) {
  return (
    <div className="via-widget">
      <div>
        <img src={logo} className="via-logo" alt="logo" />
      </div>
      Widget example {props.some}
    </div>
  );
}

export default App
