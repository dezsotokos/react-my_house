import React from 'react';
import { googleAPI } from '../constants/index.js';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { RotatingLines } from 'react-loader-spinner'
import { useTranslation } from "react-i18next";
import * as Style from '../style/Maps.js';

const MyGoogleMap = () => {
    const { t } = useTranslation();
    const libraries = ['places'];
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: googleAPI.key,
        libraries,
    });

    const center = {
        lat: googleAPI.lat,
        lng: googleAPI.lng,
    };

    if (loadError) {
        return (
            <div style={Style.error}>
                <p>{t('maps.error')}</p>
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div style={Style.loading}>
                <p>{t('maps.loading')}</p>
                <div style={Style.loadingSpin}>
                    <RotatingLines
                        height="80"
                        width="80"
                        radius="9"
                        ariaLabel="loading"
                        strokeColor="#000b4d"
                    />
                </div>
            </div>
        );
    }

    return (
        <GoogleMap
            mapContainerStyle={Style.mapContainer}
            zoom={googleAPI.zoom}
            center={center}
        >
            <Marker position={center} />
        </GoogleMap>
    );
}

export default MyGoogleMap