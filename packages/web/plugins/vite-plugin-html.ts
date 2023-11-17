import {createHtmlPlugin as htmlPlugin} from "vite-plugin-html"

export const createHtmlPlugin = (env: any) => {
    return htmlPlugin({
        inject: {
            data: {
                //html的title
                title: env.VITE_APP_TITLE,
            },
        },
    })
}
