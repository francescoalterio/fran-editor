import "./styles/Console.css";
import draculaData from "monaco-themes/themes/Dracula.json";

export default function Console() {
  return (
    <div
      id="console"
      style={{ backgroundColor: draculaData.colors["editor.background"] }}
    ></div>
  );
}
