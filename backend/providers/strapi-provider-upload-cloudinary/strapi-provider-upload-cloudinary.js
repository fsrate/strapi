module.exports = {
    init(providerOptions) {
        const cloudinary = require('cloudinary').v2;
        cloudinary.v2.config(providerOptions);

        return {
            upload(file) {
                cloudinary.uploader.upload(`remote_strapi/${file}`, {
                    cloud_name: providerOptions.cloud_name || 'dotfhmjvl',
                    api_key: providerOptions.api_key || '739128235266877',
                    api_secret: providerOptions.api_secret || 'lRxjxj78mz4T5ByWxYPuwYEf_Ig',
                    secure: true,
                    public_id: 'strapi',
                    type: 'upload'
                }, function(err, result) {
                    console.log(result, err);
                });
            },
            delete(file) {

            },
            uploadWidget() {
                window.uw = cloudinary.openUploadWidget({
                    cloudName: providerOptions.cloudName || 'dotfhmjvl',
                    uploadPreset: 'ml_default',
                    sources: [
                        'local',
                        'url'
                    ],
                    showAdvancedOptions: true,
                    cropping: false,
                    multiple: true,
                    defaultSource: 'local',
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
            },
        };
    },
};