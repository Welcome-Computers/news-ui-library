var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/util/helper.ts
var helper_exports = {};
__export(helper_exports, {
  extractIdFromSlug: () => extractIdFromSlug,
  getFullName: () => getFullName,
  getSFullName: () => getSFullName
});
module.exports = __toCommonJS(helper_exports);
var getFullName = (value) => {
  const fullname = [value?.first_name, value?.second_name, value?.last_name].filter(Boolean).join(" ");
  return fullname;
};
var getSFullName = (value) => {
  const fullname = [value?.first_name, value?.second_name].filter(Boolean).join(" ");
  return fullname;
};
var extractIdFromSlug = (slugAndId) => {
  if (typeof slugAndId !== "string" || !slugAndId.trim()) {
    return null;
  }
  const parts = slugAndId.split("-");
  const lastPart = parts[parts.length - 1];
  const id = Number(lastPart);
  return isNaN(id) ? null : id;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  extractIdFromSlug,
  getFullName,
  getSFullName
});
