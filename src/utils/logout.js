const handleLogout = (router) => {
  document.cookie =
    "userSession=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  router.push("/");
  localStorage.clear();
  sessionStorage.clear();
};

export default handleLogout;
