import { createContext } from "react";

interface BlobCursorContextType {
  triggerRotation: () => void;
}

export const BlobCursorContext = createContext<
  BlobCursorContextType | undefined
>(undefined);
