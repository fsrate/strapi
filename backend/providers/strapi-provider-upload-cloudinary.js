import cloudinary from 'cloudinary';

module.exports = {
    init(providerOptions) {
        // init your provider if necessary

        return {
            upload(file) {
                cloudinary.v2.image(`remote_strapi/${file}`, providerOptions);
            },

            delete(file) {

            },
        };
    },
};
