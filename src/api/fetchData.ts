//use try catch block to handle errors
export const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorCode = response.status.toLocaleString();
      return errorCode;
    } else {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
