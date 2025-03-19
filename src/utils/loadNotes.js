export const loadNotes = async () => {
  const modules = import.meta.glob("../json/notes/*.json");
  const notes = [];

  for (const path in modules) {
    const module = await modules[path]();
    const filename = path.split("/").pop().replace(".json", "");
    notes.push({ ...module.default, filename });
  }

  return notes;
};
