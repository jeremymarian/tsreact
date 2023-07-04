import Navbar from './components/Navbar';
import { Employes } from './Pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import { data as mockedData } from '@/data';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import * as Interfaces from '@/Interfaces';
import { Provider } from 'react-redux';
import store from '@/redux/Store/store';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(12);
  const [currentPost, setCurrentPost] =
    useState<Interfaces.DataModel[]>(mockedData);
  const totalData = Math.ceil(mockedData.length / postPerPage);

  useEffect(() => {
    const lastPostIndex = currentPage * postPerPage;
    const firsPostIndex = lastPostIndex - postPerPage;
    setCurrentPost(mockedData.slice(firsPostIndex, lastPostIndex));
  }, [currentPage]);

  return (
    <Provider store={store}>
      <BrowserRouter key={5}>
        <div key={4} className="d-flex flex-column justify-content-between gap-3 ">
          <Navbar key={3} />
          <br />
          <Routes key={6}>
            <Route key={1} path="/employes" element={<Employes key={7} data={currentPost} />} />
            <Route key={2} path="/" element={<Home key={10} />} />
          </Routes>
          <br />
          <Pagination
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
            key={currentPage}
            count={totalData}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
          />
          <br />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
