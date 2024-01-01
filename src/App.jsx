
import "./Styles/App.css";


import Header from './components/Header'; // Importez le composant Header
import Frame1 from './components/Frame1'; // Importez le composant Header
import Frame2 from './components/Frame2'; // Importez le composant Header
import Frame3 from './components/Frame3'; // Importez le composant Header
import Frame4 from './components/Frame4'; // Importez le composant Header
import Frame5 from './components/Frame5'; // Importez le composant Header
import Frame6 from './components/Frame6'; // Importez le composant Header
import Frame7 from './components/Frame7'; // Importez le composant Header
import Frame8 from './components/Frame8'; // Importez le composant Header



const App = () => {
  return (
    <div className="app">
      <Header /> 
      <div className="frames-container"></div>
      <Frame1 /> 
      <Frame2 /> 
      <Frame3 /> 
      <Frame4 /> 
      <Frame5 /> 
      <Frame6 /> 
      <Frame7 /> 
      <Frame8 />
    </div>
  );
};

export default App;
