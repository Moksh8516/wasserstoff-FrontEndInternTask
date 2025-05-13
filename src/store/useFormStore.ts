import {create} from "zustand" 

type FormData = {
name : string;
email : string;
github: string;
};

type FormStore = {
    formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formData: {
    name: '',
    email: '',
    github: '',
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}));