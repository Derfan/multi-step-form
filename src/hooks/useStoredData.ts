export const useStoredData = <T extends {}>(storageKey: string) => {
  const getStoredData = () => {
    const item = localStorage.getItem(storageKey);

    return item ? JSON.parse(item) : {};
  };

  return {
    getStoredData,
    updateStoredData: (data: T) => {
      const currentData = getStoredData();

      localStorage.setItem(
        storageKey,
        JSON.stringify({ ...currentData, ...data })
      );
    },
  };
};
