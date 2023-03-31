import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddMeetingPage from './components/AddMeetingPage';
import MeetingsPage from './components/MeetingsPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<MeetingsPage />} />
          <Route path='add' element={<AddMeetingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
