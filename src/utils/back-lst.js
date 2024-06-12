export const backList = (currentList, newItem) => {
  if (!newItem) {
    throw new Error("Novo item não recebido!");
  }

  const updatedList = [...currentList, newItem];

  return updatedList;
};
