import { useContext } from "react";
import { BlobCursorContext } from "./context";

export const useBlobCursor = () => {
  const context = useContext(BlobCursorContext);
  if (!context) {
    throw new Error("useBlobCursor must be used within a BlobCursorProvider");
  }
  return context;
};
