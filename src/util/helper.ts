export const getFullName = (value: any) => {
  const fullname = [value?.first_name, value?.second_name, value?.last_name]
    .filter(Boolean)
    .join(' ');
  return fullname;
};

export const getSFullName = (value: any) => {
  const fullname = [value?.first_name, value?.second_name]
    .filter(Boolean)
    .join(' ');
  return fullname;
};

export const extractIdFromSlug = (slugAndId: unknown): number | null => {
  if (typeof slugAndId !== "string" || !slugAndId.trim()) {
    return null;
  }

  const parts = slugAndId.split("-");
  const lastPart = parts[parts.length - 1];
  const id = Number(lastPart);

  return isNaN(id) ? null : id;
};