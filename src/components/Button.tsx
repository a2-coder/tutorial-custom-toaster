import { useMemo } from "react";

interface IButtonProps {
  text: string;
  type?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button = ({ text, type = 'secondary', onClick }: IButtonProps) => {

  const classes = useMemo(() => {
    const common = "cursor-pointer w-36 px-4 py-3 rounded font-semibold border";
    const primary = "bg-blue-500 hover:bg-blue-600 text-slate-100 border-blue-500"
    const secondary = "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300"
    return [common, type === 'primary' ? primary : secondary].join(" ");
  }, [type]);

  return (
    <button className={classes}>
      {text}
    </button>
  )
}

export default Button