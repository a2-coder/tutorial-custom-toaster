import { useCallback, useMemo } from "react";
import { ToastMessageContext, useToasterStore } from "../stores/toaster";

/**
 * Custom hook to interact with the toaster store.
 */
export function useToaster() {
  const store = useToasterStore();
  const generateId = useCallback(
    () => {
      // combine Date.now() and Math.random() to generate a random ID
      return Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
    },
    []
  )

  const show = useCallback((message: string, context: ToastMessageContext = "default", timeout = 3000) => {
    const id = generateId();
    store.addMessage({ id, message, context });
    // remove the message after `timeout` seconds
    setTimeout(() => store.removeMessage(id), timeout);
  }, [store, generateId])

  return useMemo(() => ({
    default: (message: string, timeout = 3000) => show(message, "default", timeout),
    info: (message: string, timeout = 3000) => show(message, "info", timeout),
    success: (message: string, timeout = 3000) => show(message, "success", timeout),
    warning: (message: string, timeout = 3000) => show(message, "warning", timeout),
    error: (message: string, timeout = 3000) => show(message, "error", timeout),
    clear: () => store.clearMessages()
  }), [show, store])
}