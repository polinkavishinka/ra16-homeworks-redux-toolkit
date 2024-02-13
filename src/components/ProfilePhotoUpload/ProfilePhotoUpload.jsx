import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addFile } from "../../reducers/imageReducer";
import ImageProfile from "../ImageProfile/ImageProfile";

function ProfileImageUpload() {
    const { photos } = useSelector(state => state.imageUpload);
    const dispatch = useDispatch();

    const handleImageChange = (e) => {
        Array.from(e.target.files).forEach(file => {
            const fileURL = URL.createObjectURL(file);
            dispatch(addFile(fileURL));
        });
    };

    return (
        <>
            <div className="profile-upload">
                <input
                    type="file"
                    accept="image/*"
                    className="profile-upload-input"
                    onChange={handleImageChange}
                    id="file-input"
                    multiple 
                    style={{ display: 'none' }}
                />
                <label htmlFor="file-input" className="custom-file-label">
                    Выберите файл
                </label>
            </div>
            <div className="image-container">
                {photos.map((image) => (
                    <ImageProfile key={image.id}>{image}</ImageProfile>
                ))}
            </div>
        </>
        
    );
}

export default ProfileImageUpload;
