

export const loginService = async (username, password) => {
    const email = 'newuser@example.com'
    const response = await fetch("http://localhost:3003/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username, password,email }),
    });

    console.log(response)
  
    if (!response.ok) {
      throw new Error("Неверное имя пользователя или пароль");
    }
  
    const data = await response.json();
    
    localStorage.setItem("authToken", data.token);

    return data.token;
  };