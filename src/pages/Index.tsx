import { useEffect } from "react";

const REDIRECT_URL = "https://спасениенадежды.рф/";

const Index = () => {
  useEffect(() => {
    window.location.replace(REDIRECT_URL);
  }, []);

  return null;
};

export default Index;