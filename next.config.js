module.exports = {
    reactStrictMode: true,
    env: {
        JSON_API_PATH: process.env.JSON_API_PATH,
        CONTACT_API_URL: process.env.CONTACT_API_URL,
        FORM_API_URL: process.env.FORM_API_URL,
        API_DATABASE: process.env.API_DATABASE,
        API_USER: process.env.API_USER,
    },
    images: {
        loader: 'imgix',
        path: '',
    },
}