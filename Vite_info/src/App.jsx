import "./App.css";
import Button from "./components/Button";
import Profile from "./components/Profile";

/**
 * Renders the main application component displaying a set of buttons.
 * Each button is rendered with a specific label and variant styling.
 */
function App() {
  return (
    <>
      <Profile /><br/><br/>
      <Button label="Primary" variant="primary" />{' '}
      <Button label="Secondary" variant="secondary" />{' '}
      <Button label="Default" variant="default" />{' '}
    </>
  );
}

export default App;
