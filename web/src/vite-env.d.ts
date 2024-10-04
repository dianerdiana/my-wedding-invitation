/// <reference types="vite/client" />

declare global {
  namespace React {
    interface HTMLAttributes<T> {
      placeholder?: string;
      onPointerEnterCapture?: React.PointerEventHandler<T>;
      onPointerLeaveCapture?: React.PointerEventHandler<T>;
    }
  }
}

export {};
