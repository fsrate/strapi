'use strict';

import cloudinary from 'cloudinary';

/**
 * cloudinary.js service
 *
 * @description: A set of functions similar to controller's actions to avoid code duplication.
 */

module.exports = {
    async upload(file) {
        const config = {
            cloud_name: 'dotfhmjvl',
            api_key: '739128235266877',
            api_secret: 'lRxjxj78mz4T5ByWxYPuwYEf_Ig',
            secure: true,
            useComponent: true,
        };

        await cloudinary.uploader.upload(file, config, function(err, results) {
            console.log(results, err);
        });
    },

    createMediaLibrary(options, callback, btnPlaceholder) {
        return cloudinary.v2.createMediaLibrary(options, callback, btnPlaceholder);
    }

};