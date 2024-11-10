import { create } from "zustand";
import { ConfirmData } from "../types/componentProps.types";

type ConfirmDataStoreType = {
  confirmData?: ConfirmData;
  setConfirmData: (confirmData: ConfirmData) => void;
};

export const useConfirmDataStore = create<ConfirmDataStoreType>((set) => ({
  confirmData: undefined,
  setConfirmData: (newData) => set({ confirmData: newData }),
}));
