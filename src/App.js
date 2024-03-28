import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Firstpage from './Components/loginpage/Firstpage';
import Userhome from './Components/User/Userhome';

import Supplierhome from './Components/Supplier/Supplierhome';
import AppContext from './utils/Context';
import Supplier_details from './Components/Supplier/details/Supplier_details';
import Purchasepage from './Components/User/Buypage/purchasepage'


function App() {
  return (
    <div className="App">
      
     

      <BrowserRouter>
     
      <AppContext>
      <Routes>
        <Route path="/" element={ <Firstpage/>}/>
    
          <Route path="userhome" element={<Userhome />} />
          <Route path='supplierdetails' element={<Supplier_details/>}/>
          <Route path='supplierhome' element={<Supplierhome/>}/>
          <Route path='purchasepage' element={<Purchasepage/>}/>
       
      </Routes>
      </AppContext>
    </BrowserRouter>

    </div>
  );
}

export default App;
