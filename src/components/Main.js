import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AstronomyPictureContainer from '../components/AstronomyPicture/astronomyPictureContainer';
import GalleryContainer from './Gallery/GalleryContainer';

const Main = () => {
    return (
        <Switch>
            <Route path='/astronomy_picture' component={AstronomyPictureContainer} />
            <Route path='/gallery' component={GalleryContainer} />
        </Switch>
    );
}

export default Main;