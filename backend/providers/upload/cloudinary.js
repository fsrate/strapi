import plugins from '../../config/plugins';

module.exports = {
    init(providerOptions) {
        const cloudinary = require('cloudinary');
        cloudinary.v2.config(providerOptions);

        return {
            upload(file) {
                cloudinary.v2.uploader.upload(`remote_strapi/${file}`, {
                    cloud_name: plugins.upload.providerOptions.cloud_name,
                    api_key: plugins.upload.providerOptions.api_key,
                    api_secret: plugins.upload.providerOptions.api_secret,
                    secure: true,
                    public_id: 'strapi',
                    type: 'upload'
                });
            },
            delete(file) {

            },
            showUploadWidget() {
                window.uw = cloudinary.v2.openUploadWidget({
                    cloudName: plugins.upload.providerOptions.cloudName || 'dotfhmjvl',
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
