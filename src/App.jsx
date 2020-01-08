import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostDetails from './components/PostDetails';
import DeletePost from './components/DeletePost';
import EditPost from './components/EditPost';

const App = () => {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <NavLink to="/" className="navbar-brand">Posts Manager</NavLink>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/" exact>Posts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={{ fontWeight: 'bold' }} to="/create">Novo post</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container">
                <br />
                <Route path="/" exact component={PostList}></Route>
                <Route path="/create" exact component={CreatePost}></Route>
                <Route path="/details/:id" exact component={PostDetails}></Route>
                <Route path="/delete/:id" exact component={DeletePost}></Route>
                <Route path="/edit/:id" exact component={EditPost}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;