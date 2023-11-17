import compression from "vite-plugin-compression"

export default function createCompression(env: any) {
    const {VITE_BUILD_COMPRESS} = env
    const plugin = []
    if (VITE_BUILD_COMPRESS) {
        const compressList = VITE_BUILD_COMPRESS.split(",")
        if (compressList.includes("gzip")) {
            //https://segmentfault.com/a/1190000020978410 部署的时候看看这个
            plugin.push(
                compression({
                    ext: ".gz",
                    deleteOriginFile: false,
                }),
            )
        }
        if (compressList.includes("brotli")) {
            plugin.push(
                compression({
                    ext: ".br",
                    algorithm: "brotliCompress",
                    deleteOriginFile: false,
                }),
            )
        }
    }
    return plugin
}
