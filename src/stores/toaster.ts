import create from 'zustand';

/* -------------------------------------------------------------------------- */
/*                              COMMON INTERFACES                             */
/* -------------------------------------------------------------------------- */

export type ToastMessageContext = "default" | "info" | "success" | "warning" | "error";

export interface IToastMessage {
  id: string;
  message: string;
  context: ToastMessageContext;
}

/* -------------------------------------------------------------------------- */
/*                                    STORE                                   */
/* -------------------------------------------------------------------------- */

const MAX_TOASTS = 5;

interface IToasterStore {
  messages: IToastMessage[];
  addMessage: (message: IToastMessage) => void;
  removeMessage: (id: string) => void;
  clearMessages: () => void;
}

export const useToasterStore = create<IToasterStore>((set, get) => ({
  messages: [],
  addMessage: (message: IToastMessage) => {
    set({ messages: [message, ...get().messages].slice(0, MAX_TOASTS) });
  },
  removeMessage: (id: string) => {
    set({ messages: get().messages.filter(message => message.id !== id) });
  },
  clearMessages: () => {
    set({ messages: [] });
  }
}));