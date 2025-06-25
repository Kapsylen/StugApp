export interface Kontakt {
  id: number;
  name: string;
  company: string;
  category: string;  // Instead of 'trade' to make it more generic
  phone: string;
  email: string;
  address: string;
  notes: string;    // Will include certifications and other details here
  status: string;   // Active/Inactive status
}
