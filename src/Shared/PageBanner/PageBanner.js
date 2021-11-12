import React from 'react';
import './PageBanner.css';

const PageBanner = ({pageName}) => {

    return (
        <div className="page-banner">
            <h1 className="page-banner-heading">{pageName}</h1>
        </div>
    );
};

export default PageBanner;