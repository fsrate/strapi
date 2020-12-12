/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
// import cloudinary from '../../../../controllers/cloudinary';

const HomePage = () => {
    return ( 
      <html>
        <head>
          <title> {pluginId}s HomePage </title> 
        </head> 
        <body>
          <button id="open-btn"></button> 
        </body> 
      </html>
    );
};

export default memo(HomePage);
