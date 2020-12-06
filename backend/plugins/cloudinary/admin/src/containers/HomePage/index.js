/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';

import button from '../../containers/HomePage/index';
import script from 'https://media-library.cloudinary.com/global/all.js';

const HomePage = () => {
    return ( <
        div >
        <
        h1 > { pluginId } & apos; s HomePage < /h1>  <
        p > < button {...script } > { button } < /button></p >
        <
        /div>
    );
};

export default memo(HomePage);