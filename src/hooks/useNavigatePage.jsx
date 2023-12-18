import { useNavigate } from "react-router-dom";

export default function useNavigatePage() {
  const navigate = useNavigate();

  const navigatePage = (url) => {
    navigate(url);
  };

  const navigateBackPage = () => {
    navigate(-1);
  };

  return { navigatePage, navigateBackPage };
}
