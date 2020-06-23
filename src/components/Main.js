import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AstronomyPictureContainer from '../components/AstronomyPicture/astronomyPictureContainer';
import GalleryContainer from './Gallery/GalleryContainer';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={AstronomyPictureContainer} />
            <Route path='/gallery' component={GalleryContainer} />
        </Switch>
    );
}

export default Main;