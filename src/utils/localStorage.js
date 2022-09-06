exports.setNotesStorage = data => {
  localStorage.setItem('notes', JSON.stringify(data));
};
exports.getNotesStorage = () => {
  const notesString = localStorage.getItem('notes');
  return notesString ? JSON.parse(notesString) : [];
};
