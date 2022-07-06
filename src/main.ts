import { boolish } from "getenv";

const x = boolish("EXPO_DEBUG", false);

console.log(x);
