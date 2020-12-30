module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'brand-1': '#306184',
                'brand-2': '#739663',
                'brand-3': '#56959E',
                'brand-4': '#C4E7E7',
                'brand-5': '#A3C1BF',
                'brand-6': '#FCAF1B',
            },
            fontSize: {
                'ts-h1': ['2.986rem', '3rem'],
                'ts-h2': ['2.488rem', '2.488rem'],
                'ts-h3': ['2.074rem', '3.11rem'],
                'ts-h4': ['1.728rem', '2.16rem'],
                'ts-h5': ['1.44rem', '1.801rem'],
                'ts-h6': ['1.2rem', '1.5rem'],
                'ts-body': ['1rem', '1.5rem'],
                'ts-sub-detail': ['0.833rem', '1.04rem'],
                'ts-caption': ['0.694rem', '0.868rem'],
                'ts-citation': ['0.579rem', '0.724rem'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
