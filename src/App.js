import {
    Route,
} from "react-router-dom";
import {Routes} from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import GroupPage from "./pages/GroupPage";
import PostPage from "./pages/PostPage";
import PostForm from "./components/PostForm";
import GroupFilter from "./components/GroupFilter";
import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";

function App() {
  return (
      <>
          <Header/>
          <div className="mainBlock">
              <Routes>
                  <Route exact path="/" element={<div className="flex flex-col justify-center content-center h-full">
                                                    <h5 className="text-center">Здесь могла бы быть ваша реклама</h5>
                                                    <h5 className="text-center">Но ее нет :0</h5>
                                                </div>}/>
                  <Route exact path="/group" element={<GroupFilter/>}/>
                  <Route exact path="/post" element={<PostForm/>}/>
                  <Route exact path="/admin" element={<div className="mt-20">
                                                        <h5 className="">Хочешь стать админом?</h5>
                                                        <p className="">Если ты чувствуешь в себе силы и идеи для развития проекта. Пиши нам!</p>
                                                        <p className="">Пройдешь собеседование, решишь пару задачек, и ты уже в команде!</p>
                                                        <p className="font-bold">krlbook@work.ru</p>
                                                    </div>}/>
              </Routes>
              <Routes>
                  <Route exact path="/" element={<MainPage/>}/>
                  <Route exact path="/group" element={<GroupPage/>}/>
                  <Route exact path="/post" element={<PostPage/>}/>
                  <Route exact path="/admin" element={<AdminPage/>}/>
              </Routes>
              <Footer />
          </div>
      </>
  );
}

export default App;
