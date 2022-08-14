import ToastMessage from "../components/ToastMessage"

const ToastContainer = () => {

  const messages = [
    {
      context: "default" as const,
      message: "This is a default message"
    },
    {
      context: "info" as const,
      message: "This is an info message"
    },
    {
      context: "success"  as const,
      message: "This is a success message"
    },
    {
      context: "warning" as const,
      message: "This is a warning message"
    },
    {
      context: "error" as const,
      message: "This is an error message"
    }
  ];

  return (
    <div className="absolute top-0 w-full flex flex-col space-y-3 items-center p-3">
      {
        messages.map(({ context, message }) => (
          <ToastMessage key={message} context={context} message={message} />
        ))
      }
    </div>
  )
}

export default ToastContainer