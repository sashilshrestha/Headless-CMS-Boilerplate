module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/scss/main.scss";`,
                //additionalData: "$env: " + process.env.NODE_ENV + ";",
            },
        },
    },
};
