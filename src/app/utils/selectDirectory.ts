const selectDirectory = async () => {
  try {
    const selectedDirectory = await window.showDirectoryPicker();
    return selectedDirectory;
  } catch (error) {
    console.error('Error selecting directory:', error);
    throw new Error('Failed to select directory.');
  }
};

export default selectDirectory;