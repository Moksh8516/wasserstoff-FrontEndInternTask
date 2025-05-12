import {create} from "zustand" 

type FormData = {
name : string;
email : string;
github: string;
};

type FormStore = {
    FormData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  FormData: {
    name: '',
    email: '',
    github: '',
  },
  setFormData: (data) =>
    set((state) => ({
      FormData: { ...state.FormData, ...data },
    })),
}));