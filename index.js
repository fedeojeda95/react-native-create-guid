import { NativeModules } from "react-native";

const {
  CreateGuid: { createGuid },
} = NativeModules;

export default createGuid;
