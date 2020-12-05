import plugins from '../../config/plugins';

module.exports = {
    init(providerOptions) {
        const cloudinary = require('cloudinary').v2;
        cloudinary.config(providerOptions);

        return {
            upload(file) {
                cloudinary.uploader.upload(`remote_strapi/${file}`, {
                    cloud_name: plugins.upload.providerOptions.cloud_name,
                    api_key: plugins.upload.providerOptions.api_key,
                    api_secret: plugins.upload.providerOptions.api_secret,
                    secure: true,
                    use_root_path: true,
                    type: 'upload'
                });
            },
            delete(file) {

            },
        };
    },
};
