/**
 * NOT WORKING
 */
//import { getTime } from "./getTime";
//export const getStringifiedTime = () => getTime().toString();

/**
 * WORKING
 */
export const getStringifiedTime = () => Date.now().toString();
