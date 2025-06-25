export interface Kontakt {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: {
    street: string;
    city: string;
    postalCode: string;
    country: string;
  };
  vatNumber: string;
  notes: string;
  isActive: string;
  createdAt: string;
  updatedAt: string;
}
