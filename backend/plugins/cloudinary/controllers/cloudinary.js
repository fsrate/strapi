'use strict';

/**
 * cloudinary.js controller
 *
 * @description: A set of functions called "actions" of the `cloudinary` plugin.
 */

module.exports = {

    /**
     * Default action.
     *
     * @return {Object}
     */

    index: async(ctx) => {
        // Add your own logic here
        const cloudinary = require('../services/cloudinary');
        window.ml = cloudinary.createMediaLibrary({
            cloud_name: 'dotfhmjvl',
            api_key: '739128235266877',
            username: 'admin@fs-rate.com',
            timestamp: '1234567890',
            signature: 'abcdefgh',
            button_class: 'myBtn',
            button_caption: 'Insert Images ',
            default_transformations: [
                [{ quality: "auto" }, { fetch_format: "auto" }],
                [{ width: 100, height: 100, crop: "fill", gravity: "auto", radius: "max" }, { fetch_format: "auto", quality: "auto" }]
            ],
        }, {
            insertHandler: function(data) {
                data.assets.forEach(asset => {
                    console.log("Inserted asset", JSON.stringify(asset, null, 2));
                })
            }
        }, {
            btnPlaceholder: function() {

            }
        })

        // Send 200 `ok`
        ctx.send({
            message: 'ok'
        });
    }
};