import Button from "../components/Button";
import HeroTitle from "../components/HeroTitle";
import { useToaster } from "../hooks/toaster";

const HomePage = () => {
  const toaster = useToaster();

  return (
    <div className="w-full h-full flex flex-col">
      <div className="m-auto space-y-6">
        <HeroTitle title="Home" />
        <div className="flex items-center space-x-4 justify-center">
          <Button
            onClick={() => toaster.info("Notification from Home Page")}
            type="primary"
            text="Show Toast"
          />
          <Button
            onClick={() => toaster.clear()}
            type="secondary"
            text="Clear All"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
