import { ToastContext } from "./toast.context";
import { useState } from "react";
import Toast from "../components/Toast";

export default function ToastProvider({ children }) {
  const [toast, setToast] = useState({
    visible: false,
    variant: "success",
    message: "",
    messageSecondary: "",
  });

  const showToast = ({
    variant,
    message,
    messageSecondary,
  }) => {
    setToast({
      visible: true,
      variant,
      message,
      messageSecondary,
    });
  };

  const hideToast = () => {
    setToast((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  return (
    <ToastContext.Provider
      value={{
        showToast,
        hideToast,
      }}
    >
      {children}

      {toast.visible && (
        <Toast
          varient={toast.variant}
          message={toast.message}
          messageSecondary={toast.messageSecondary}
          onHide={hideToast}
        />
      )}
    </ToastContext.Provider>
  );
}