/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./b/templates/**/*.html', './b/static/**/*.css'],
    theme: {
        extend: {
            spacing: {
                half: '49%',
            },
        },
    },
    plugins: [],
};
