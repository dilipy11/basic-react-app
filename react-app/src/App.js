import logo from './logo.svg';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import AppBreadcrumbs from './components/AppBreadcrumbs/AppBreadcrumbs';
import SalesProposal from './pages/SalesProposal/SalesProposal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppBreadcrumbs />
      <SalesProposal />
    </div>
  );
}

export default App;
