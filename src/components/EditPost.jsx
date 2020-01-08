import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:5000/posts/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("title", result.data.title);
            setValue("author", result.data.author);
            setValue("body", result.data.body);
        })
    }, [id]);

    const onSubmit = data => {
        axios.put(`http://localhost:5000/posts/${id}`, data).then(result => {
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Novo Post</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>ID</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className="form-control" name="title" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.title && 'Título inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Autor</label>
                            <input type="text" className="form-control" name="author" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.author && 'Autor inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Conteúdo</label>
                            <textarea name="body" cols="30" rows="10" className="form-control" ref={register({ required: true })}></textarea>
                            <small className="form-text text-danger">{errors.body && 'Conteúdo inválido'}</small>
                        </div>

                        <Link to="/" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;