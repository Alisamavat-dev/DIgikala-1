const deletedata = async (url: string) => {
  let response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

export default deletedata;
