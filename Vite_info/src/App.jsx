import "./App.css";
import Button from "./components/Button";

/**
 * Renders the main application component displaying a set of buttons.
 * Each button is rendered with a specific label and variant styling.
 */
function App() {
  return (
    <>
      <div>
        <Button label="Default Button" variant="default" />{' '}
        <Button label="Primary Button" variant="primary" />{' '}
        <Button label="Secondary Button" variant="secondary" />{' '}
      </div>
    </>
  );
}

export default App;
