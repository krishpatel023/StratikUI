"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

export type ToastProps = {
  toastId: string;
  state: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
  visibility: boolean;
  visibilityDuration?: number;
  creationTime: number;
  closeType: "timeout" | "manual";
  duration: number;
};

export type ToastProviderProps = {
  toasts: ToastProps[];
  addToast: (value: ToastProps) => void;
  removeToast: (id: string) => void;
  calculateHierarchy: (toastId: string) => number | null;
  getToast: (id: string) => ToastProps | null;
};

type ContextWrapperProps = {
  children: React.ReactNode;
};

export const ToastContext = createContext<ToastProviderProps>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  calculateHierarchy: () => {
    return null;
  },
  getToast: () => {
    return null;
  },
});

const ToastProvider: React.FC<ContextWrapperProps> = (props) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (value: ToastProps) => {
    setToasts([...toasts, value]);
  };
  const removeToast = (id: string) => {
    const newtoast = toasts.map((toast) => {
      if (toast.toastId === id) {
        return {
          ...toast,
          visibility: false,
        };
      } else {
        return toast;
      }
    });
    setToasts(newtoast);
  };

  const calculateHierarchy = (toastId: string) => {
    var count: number = -1;
    var flag = false;
    var selfvisible = false;

    toasts.forEach((toast) => {
      if (flag === false) {
        if (toast.visibility === true) {
          count++;
        }
      }
      if (toast.toastId === toastId) {
        if (toast.visibility === true) {
          flag = true;
        } else {
          selfvisible = true;
        }
      }
    });

    if (selfvisible) {
      return null;
    } else {
      if (count >= 0) {
        return count;
      } else {
        return null;
      }
    }
  };

  const getToast = (toastId: string) => {
    const toast = toasts.find((toast) => toast.toastId === toastId);
    if (toast) {
      return toast;
    } else return null;
  };

  const value: ToastProviderProps = {
    toasts,
    addToast,
    removeToast,
    calculateHierarchy,
    getToast,
  };

  // Clear the toasts when all are closed. To avoid memory issues
  useEffect(() => {
    function checkAllClosed() {
      var flag = true;
      for (const toast of toasts) {
        if (toast.visibility) {
          flag = false;
          break;
        }
      }
      return flag;
    }
    if (toasts.length === 0) return;
    const check = checkAllClosed();
    if (check) setToasts([]);
  }, [toasts]);

  // -----------------------------------------------------
  // TIMEOUT HANDLER
  // -----------------------------------------------------

  const timeoutsRef = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>(
    {}
  );

  useEffect(() => {
    // Clear existing timeouts
    Object.values(timeoutsRef.current).forEach(clearTimeout);

    // Set new timeouts
    const newTimeouts: { [key: string]: ReturnType<typeof setTimeout> } = {};
    const currentTime = Date.now();

    toasts.forEach((toast) => {
      if (
        toast.visibility &&
        !timeoutsRef.current[toast.toastId] &&
        toast.closeType === "timeout"
      ) {
        const timeElapsed = currentTime - toast.creationTime;
        const remainingTime = toast.duration - timeElapsed;
        if (remainingTime > 0) {
          newTimeouts[toast.toastId] = setTimeout(
            () => removeToast(toast.toastId),
            remainingTime
          );
        } else {
          // If time has already elapsed, remove immediately
          removeToast(toast.toastId);
        }
      }
    });

    // Update timeoutsRef
    timeoutsRef.current = newTimeouts;

    return () => {
      // Clear timeouts on component unmount
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, [toasts, removeToast]);

  return (
    <ToastContext.Provider value={value}>
      {props.children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast Hook must be used within the Toast Provider");
  }
  return context;
};

export default ToastProvider;
