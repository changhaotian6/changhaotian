/**
 * 获取本地图片地址
 * @param url {string} 图片地址
 * @return imageFile 图片文件
 * */
export const getAssetURL = (url) =>
    new URL(`../assets/images/${url}`, import.meta.url).href;
