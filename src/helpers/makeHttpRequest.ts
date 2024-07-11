export const makeHttpRequest = async (url: string, method: string = 'GET', body: object | null = null): Promise<any> => {
    const options: RequestInit = {
      method: method,
      headers: {
        'Content-Type': 'application/json' // Update the content type as per your use case
      },
      body: body ? JSON.stringify(body) : null
    };
  
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Failed to make the HTTP request: ' + error);
    }
  }
  