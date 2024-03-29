import { useEffect, useState } from 'react';

const useSelectDirectory = () => {
  const [directory, setDirectory] = useState<FileSystemDirectoryHandle | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const showDirectoryPicker = async () => {
      try {
        const selectedDirectory = await window.showDirectoryPicker();
        setDirectory(selectedDirectory);
      } catch (error) {
        console.error('Error selecting directory:', error);
        setError('Failed to select directory.');
      } finally {
        setIsLoading(false);
      }
    };

    if (isLoading) {
      showDirectoryPicker();
    }
  }, [isLoading]);

  const resetState = () => {
    setDirectory(null);
    setError(null);
    setIsLoading(true);
  };

  return { directory, error, isLoading, resetState };
};

export default useSelectDirectory;
