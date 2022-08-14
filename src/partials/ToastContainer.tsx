import ToastMessage from "../components/ToastMessage"
import { useToasterStore } from "../stores/toaster"

const ToastContainer = () => {

  const messages = useToasterStore(state => state.messages);
  const remove = useToasterStore(state => state.removeMessage);

  return (
    <div className="absolute top-0 w-full flex flex-col space-y-3 items-center p-3">
      {
        messages.map(({ context, message, id }) => (
          <ToastMessage onClose={() => remove(id)} key={id} context={context} message={message} />
        ))
      }
    </div>
  )
}

export default ToastContainer