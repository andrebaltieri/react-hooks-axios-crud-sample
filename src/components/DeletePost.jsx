import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const DeletePost = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);

    const handleRemovePost = () => {
        axios.delete(`http://localhost:5000/posts/${id}`).then(result => {
            props.history.push("/");
        })
    }

    return (
        <div>
            <h2>Deseja excluir o post <strong>{post?.title}</strong>?</h2>
            <br />
            <div className="btn-group">
                <Link to="/" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancelar
                </Link>
                <button onClick={handleRemovePost} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </button>
            </div>
        </div>
    );
}

export default DeletePost;