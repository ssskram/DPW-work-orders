import * as React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import Modal from 'react-responsive-modal'
import Overlay from '../Form/Overlay'
import { Helmet } from "react-helmet"


export class selectMap extends React.Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
            selectedPlace: {}
        }
    }

    markerClick(props) {
        let self = this;
        self.setState({
            modalIsOpen: true,
            selectedPlace: props,
        });
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        const { modalIsOpen } = this.state;
        const place = require('../../../icons/place.png');

        return (
            <div id="map">
                <Helmet>
                    <style>{'body { background-color: rgb(44, 62, 80); }'}</style>
                </Helmet>
                <Map
                    className="map"
                    google={this.props.google}
                    initialCenter={{
                        lat: '40.437470539681442',
                        lng: '-79.987124601795273'
                    }}
                    zoom={13}>
                    {this.props.facilities.map(facility =>
                        <Marker
                            issues={this.props.issues}
                            key={facility.oid}
                            oid={facility.oid}
                            name={facility.name}
                            neighborhood={facility.neighborhood}
                            img={facility.img}
                            lat={facility.lat}
                            lng={facility.lng}
                            position={{ lat: facility.lat, lng: facility.lng }}
                            onClick={this.markerClick.bind(this)}
                            icon={{
                                url: place,
                            }}
                        />,
                    )}
                </Map>
                <Modal
                    open={modalIsOpen}
                    onClose={this.closeModal.bind(this)}
                    classNames={{
                        overlay: 'custom-overlay',
                        modal: 'custom-modal'
                    }}
                    center>
                    <Overlay
                        img={this.state.selectedPlace.img}
                        name={this.state.selectedPlace.name}
                        neighborhood={this.state.selectedPlace.neighborhood} />
                </Modal>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyA89-c5tGTUcwg5cbyoY9QX1nFwATbvk6g')
})(selectMap)
