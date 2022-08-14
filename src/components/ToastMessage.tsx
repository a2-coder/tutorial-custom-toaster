import { cloneElement, useMemo } from "react";
import {
  RiNotification3Line,
  RiCloseLine,
  RiInformationLine,
  RiErrorWarningLine,
  RiAlarmWarningLine,
  RiCheckDoubleLine,
} from "react-icons/ri";

type ToastMessageContext = "default" | "info" | "success" | "warning" | "error";

interface IToastMessageProps {
  message: string;
  context?: ToastMessageContext;
  onClose?: () => void;
}

const ToastMessage = ({ message, context = "default", onClose }: IToastMessageProps) => {
  // icon based on context
  const icon = useMemo(() => {
    switch (context) {
      case "info":
        return <RiInformationLine />;
      case "success":
        return <RiCheckDoubleLine />;
      case "warning":
        return <RiErrorWarningLine />;
      case "error":
        return <RiAlarmWarningLine />;
      default:
        return <RiNotification3Line />;
    }
  }, [context]);

  // background color based on context
  const bgColor = useMemo(() => {
    switch (context) {
      case "info":
        return 'bg-sky-500';
      case "success":
        return 'bg-emerald-500';
      case "warning":
        return 'bg-amber-500';
      case "error":
        return 'bg-red-500';
      default:
        return 'bg-slate-700';
    }
  }, [context]);

  // text color based on context
  const textColor = useMemo(() => {
    switch (context) {
      case "info":
        return 'text-sky-500';
      case "success":
        return 'text-emerald-500';
      case "warning":
        return 'text-amber-500';
      case "error":
        return 'text-red-500';
      default:
        return 'text-slate-700';
    }
  }, [context]);

  return (
    <div className="h-9 bg-slate-100 rounded flex items-center space-x-4">
      <div className={`w-9 h-9 ${bgColor} flex items-center justify-center text-slate-100 rounded-l`}>
        {cloneElement(icon, { className: "w-4 h-4" })}
      </div>
      <div title={message} className={`${textColor} text-xs w-56 truncate`}>{message}</div>
      <button onClick={onClose} className="w-9 h-9 text-slate-300 hover:text-slate-500 flex items-center justify-center">
        <RiCloseLine className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ToastMessage;
