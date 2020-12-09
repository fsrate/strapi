'use strict';

const cloudinary = require('cloudinary');

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
        ctx.ml = function showMediaLibrary() {
            cloudinary.createMediaLibrary({
                    cloud_name: 'dotfhmjvl',
                    api_key: '739128235266877',
                    username: 'admin@fs-rate.com',
                    timestamp: '1234567890',
                    button_class: 'myBtn',
                    button_caption: 'Select Image or Video',
                    default_transformations: [
                        [{ quality: "auto" }, { fetch_format: "auto" }],
                        [{ width: 80, height: 80, crop: "fill", gravity: "auto", radius: "max" }, { fetch_format: "auto", quality: "auto" }]
                    ],
                }, {
                    insertHandler: function(data) {
                        data.assets.forEach(asset => {
                            console.log("Inserted asset:", JSON.stringify(asset, null, 2));
                        });
                    },
                },
                document.getElementById("open-btn")
            );
        }

        ctx.uw = function showUploadWidget() {
            cloudinary.openUploadWidget({
                cloudName: "dotfhmjvl",
                uploadPreset: "ml_default",
                sources: [
                    "local",
                    "url"
                ],
                googleApiKey: "<image_search_google_api_key>",
                showAdvancedOptions: true,
                cropping: false,
                multiple: true,
                defaultSource: "local",
                styles: {
                    palette: {
                        window: "#FFFFFF",
                        windowBorder: "#90A0B3",
                        tabIcon: "#0078FF",
                        menuIcons: "#5A616A",
                        textDark: "#000000",
                        textLight: "#FFFFFF",
                        link: "#0078FF",
                        action: "#FF620C",
                        inactiveTabIcon: "#0E2F5A",
                        error: "#F44235",
                        inProgress: "#0078FF",
                        complete: "#20B832",
                        sourceBg: "#E4EBF1"
                    },
                    fonts: {
                        default: null,
                        "sans-serif": {
                            url: null,
                            active: true
                        }
                    }
                }
            }, (err, info) => {
                if (!err) {
                    console.log("Upload Widget event - ", info);
                }
            });
        }

        // Send 200 `ok`
        ctx.send({
            message: 'ok'
        });
    },


};