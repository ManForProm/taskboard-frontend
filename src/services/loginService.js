

export const loginService = async (username, password) => {
    const response = await fetch("http://your-api-url/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  
    if (!response.ok) {
      throw new Error("Неверное имя пользователя или пароль");
    }
  
    const data = await response.json();
    return data.token; // Api JWT expected
  };