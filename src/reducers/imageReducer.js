
import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    photos: [],
};

const imagesUploadSlice = createSlice({
    name: 'imageUpload',
    initialState,
    reducers: {
        addFile: (state, action) => {
            
            state.photos = [{id: nanoid(), url: action.payload}, ...state.photos];
        },
        removeFile: (state, action) => {
            state.photos = state.photos.filter(photo => photo.id !== action.payload);
        },
    }
});

export const {
    addFile,
    removeFile
} = imagesUploadSlice.actions;

export default imagesUploadSlice.reducer;