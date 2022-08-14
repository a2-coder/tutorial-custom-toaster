import Button from "../components/Button"
import HeroTitle from "../components/HeroTitle"

const ArticlesPage = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="m-auto space-y-6">
        <HeroTitle title="Articles" />
        <div className="flex items-center space-x-4 justify-center">
          <Button type="primary" text="Show Toast" />
          <Button type="secondary" text="Clear All" />
        </div>
      </div>
    </div>
  )
}

export default ArticlesPage