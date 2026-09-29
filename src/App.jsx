import GeneralInfo from "./components/GeneralInfo.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";

import "./styles/App.css";

export default function App() {
  return (
    <div className="app">
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">
            React CV Builder
          </p>

          <h1>
            Build your professional CV.
          </h1>

          <p className="introduction">
            Enter your information, submit
            each section and edit it whenever
            you need to make changes.
          </p>
        </div>
      </header>

      <main className="container sections">
        <GeneralInfo />
        <Education />
        <Experience />
      </main>

      <footer className="page-footer">
        <div className="container">
          <p>
            Built with React and Vite.
          </p>
        </div>
      </footer>
    </div>
  );
}