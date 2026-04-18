import userData from "@/data/userData.json";


const handleLogin = (e, username, password, router, setError) => {
  e.preventDefault();
  if (username === userData.username && password === userData.password) {
    document.cookie = `userSession=${JSON.stringify({ name: userData.name, isLogin: true })}; path=/`;
    router.push("/home");
  } else {
    setError("Invalid username or password");
  }
};

export default handleLogin;