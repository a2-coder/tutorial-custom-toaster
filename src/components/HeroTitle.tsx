interface IHeroTitleProps {
  title: string;
}

const HeroTitle = ({ title }: IHeroTitleProps) => {
  return (
    <h1 className="text-7xl font-bold tracking-wider uppercase text-slate-300 text-center">
      {title}
    </h1>
  )
}

export default HeroTitle