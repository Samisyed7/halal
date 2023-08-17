import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Datastore } from './Components/DataStore';
// import { InteractivePagedata } from './Components/PagesData/InteractivePagedata';
// import { BlogPagedata } from './Components/PagesData/BlogpageData';
// import { CloudPagedata } from './Components/PagesData/CloudpageData';
// import { CompatativePagedata } from './Components/PagesData/CompatativePageData';
// import { CovidPagedata } from './Components/PagesData/CovidPageData';


function App() {
  
  return (
    <div className="App">
     <Datastore/>
     {/* <InteractivePagedata/>
     <BlogPagedata/>
     <CloudPagedata/>
     <CompatativePagedata/>
     <CovidPagedata/> */}
     
    </div>
  );
}

export default App;
