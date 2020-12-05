'use strict';

/**
 * cloudinary.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
    async upload(file) {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config({
            cloud_name: 'dotfhmjvl',
            api_key: '739128235266877',
            api_secret: 'lRxjxj78mz4T5ByWxYPuwYEf_Ig',
            secure: true,
            useComponent: true,
        });
    },
};