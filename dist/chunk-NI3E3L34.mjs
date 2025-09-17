// src/util/helper.ts
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

export {
  getFullName,
  getSFullName,
  extractIdFromSlug
};
