/**
 * NOT WORKING
 */
/*
import { getTime } from "../frameworks/getTime";

export class Thing {
  static create() {
    return {
      value: "Something",
      time: getTime(),
    };
  }
}
*/

/**
 * WORKING
 */
export class Thing {
  static create() {
    return {
      value: "Something",
      time: Date.now(),
    };
  }
}
