import React from 'react';
import { connect } from 'react-redux';
import Gallery from './Gallery';

class GalleryContainer extends React.Component {
    render() {
        return <Gallery img={this.props.img} />
    }
}

const mapToStateProps = state => ({
    img: state.gallery.img
});

export default connect(mapToStateProps, {})(GalleryContainer);