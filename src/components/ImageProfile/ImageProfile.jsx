import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFile } from "../../reducers/imageReducer";

export default function ImageProfile({children}) {
    const {id, url} = children;
    const dispatch = useDispatch();

    const handleImageRemove = () => {
        dispatch(removeFile(id));
    };

    return (
        <div key={id} className="image-wrap">
            <img
                src={url}
                className="profile-upload-preview"
                alt="profile"
            />
            <button onClick={handleImageRemove} className="btn-delete">
                ✕
            </button>
        </div>
    )
}
