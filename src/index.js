import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import RegisterParents from './components/memberParents/Register-parent';
import RegisterTutor from './components/memberTutor/Register-tutor';
import LoginParents from './components/memberParents/LoginParents';
import ForgotPassword from './components/member/ForgotPassword';
import RegisterProfileTutor from './components/memberTutor/Register-profile-tutor';
import CreatePost from './components/memberParents/CreatePost';
import LoginTutor from './components/memberTutor/LoginTutor';
import ViewPost from './components/memberParents/ViewPost';
import PersonalInfo from './components/memberParents/PersonalInfo';
import PostHistory from './components/memberParents/PostHistory';
import ViewPostTutor from './components/memberTutor/ViewPostTutor';
import PersonalInfoTutor from './components/memberTutor/PersonalInfoTutor';
import EditPost from './components/memberParents/EditPost';
import UpdateMember from './components/memberParents/UpdateMember';
import ViewSavePostForTutor from './components/memberTutor/ViewSavePostForTutor';
import ViewListTutor from './components/memberParents/ViewListTutor';
import ViewDetailTutor from './components/memberParents/ViewDetailTutor';
import ViewSaveTutor from './components/memberParents/ViewSaveTutor';
import SearchTutor from './components/memberParents/SearchTutor';
import SearchPost from './components/memberTutor/SearchPost';
import Test from './components/memberParents/Test';
import Pay from './components/memberParents/Pay';
import UpdateTutor from './components/memberTutor/UpdateTutor';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          <Route index path="/" element={<Home/>}></Route>
          {/* phụ huynh */}
          <Route path="/memberParents/RegisterParents" element={<RegisterParents/>}> </Route>
          <Route path="/memberParents/LoginParents" element={<LoginParents/>}> </Route> 
          <Route path="/memberParents/CreatePost" element={<CreatePost/>}> </Route>
          <Route path="/memberParents/ViewPost" element={<ViewPost/>}> </Route>
          <Route path="/memberParents/PersonalInfo" element={<PersonalInfo/>}> </Route>
          <Route path="/memberParents/PostHistory" element={<PostHistory/>}> </Route>
          <Route path="/memberParents/EditPost/:id" element={<EditPost/>}> </Route>
          <Route path="/memberParents/UpdateMember" element={<UpdateMember/>}> </Route>
          <Route path="/memberParents/ViewListTutor" element={<ViewListTutor/>}> </Route>
          <Route path="/memberParents/ViewDetailTutor/:id" element={<ViewDetailTutor/>}> </Route>
          <Route path="/memberParents/ViewSaveTutor" element={<ViewSaveTutor/>}></Route>
          <Route path="/memberParents/SearchTutor" element={<SearchTutor/>}></Route>
          <Route path="/memberParents/Test" element={<Test/>}></Route>
          <Route path="/memberParents/UpdateAccount" element={<Pay/>}></Route>
           {/*gia sư  */}
          <Route path="/memberTutor/RegisterTutor" element={<RegisterTutor/>}> </Route>
          <Route path="/memberTutor/RegisterProfileTutor" element={<RegisterProfileTutor/>}></Route>
          <Route path="/memberTutor/LoginTutor" element={<LoginTutor/>}> </Route>
          <Route path="/memberTutor/ViewPostTutor" element={<ViewPostTutor/>}></Route>
          <Route path="/memberTutor/PersonalInfoTutor" element={<PersonalInfoTutor/>}> </Route>
          <Route path="/memberTutor/ViewSavePostForTutor" element={<ViewSavePostForTutor/>}></Route>
          <Route path="/memberTutor/SearchPost" element ={<SearchPost/>}></Route>
          <Route path="/memberTutor/UpdateTutor" element={<UpdateTutor/>}> </Route>
          {/*dùng chung */} 
          <Route path="/member/ForgotPassword" element={<ForgotPassword/>}> </Route> 
        </Routes>
      </App>
    </Router>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
