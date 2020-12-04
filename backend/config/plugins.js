module.exports = ({ env }) => ({
    upload: {
        provider: 'cloudinary',
        providerOptions: {
            cloud_name: env('CLOUD_NAME', 'dotfhmjvl'),
            api_key: env('CLOUD_API_KEY', '739128235266877'),
            api_secret: env('CLOUD_API_SECRET', 'lRxjxj78mz4T5ByWxYPuwYEf_Ig'),
            secure: true,
            useComponent: true,
        },
    },
});