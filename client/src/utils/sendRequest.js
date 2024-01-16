const sendRequest = async ({ url, method }) => {
  const options = {
    method: method
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const { error } = await response.json();
      return { status: error };
    }
    const result = await response.json();
    return result;
  } catch (err) {
    return 'error';
  }
};

export default sendRequest;
