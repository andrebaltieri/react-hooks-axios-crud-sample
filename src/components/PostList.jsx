import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/posts').then(result => {
            setPosts(result.data);
        })
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">Post</th>
                    <th className="text-center">Autor</th>
                    <th className="text-center">#</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map(post => (
                        <tr key={post.id}>
                            <td>{post.title}</td>
                            <td className="text-center">{post.author}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${post.id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${post.id}`} className="btn btn-secondary">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/delete/${post.id}`} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default PostList;