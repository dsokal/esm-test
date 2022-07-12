import { boolish } from "getenv";
import { AndroidConfig } from "@expo/config-plugins";

console.log(AndroidConfig);

const x = boolish("EXPO_DEBUG", false);
console.log(x);
