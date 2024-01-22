import { useNavigate } from "react-router-dom";

export default function useNavigatePage() {
  const navigate = useNavigate();

  const navigatePage = (url, location) => {
    if (location) {
      navigate(url, { state: location });
    } else {
      navigate(url);
    }
  };

  const navigateBackPage = () => {
    navigate(-1);
  };

  return { navigatePage, navigateBackPage };
}
