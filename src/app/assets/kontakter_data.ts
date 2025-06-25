import {Kontakt} from '../components/model/kontakt';

export const DUMMY_KONTAKTER: Kontakt[] = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@company.com",
    phone: "+46 70 123 4567",
    company: "Tech Solutions AB",
    address: {
      street: "Innovation Street 123",
      city: "Stockholm",
      postalCode: "111 22",
      country: "Sweden"
    },
    vatNumber: "SE123456789001",
    notes: "Preferred client, monthly invoicing",
    isActive: "true",
    createdAt: "2025-01-15",
    updatedAt: "2025-06-25"
  },
  {
    id: 2,
    name: "Maria Andersson",
    email: "maria.andersson@consulting.se",
    phone: "+46 73 987 6543",
    company: "Digital Consulting SE",
    address: {
      street: "Business Avenue 45",
      city: "Gothenburg",
      postalCode: "411 08",
      country: "Sweden"
    },
    vatNumber: "SE987654321001",
    notes: "Quarterly payments",
    isActive: "true",
    createdAt: "2025-03-20",
    updatedAt: "2025-06-24"
  },
  {
    id: 3,
    name: "Erik Johnson",
    email: "erik@inactive.com",
    phone: "+46 76 555 1234",
    company: "Old Client Ltd",
    address: {
      street: "Past Street 10",
      city: "Malmö",
      postalCode: "211 15",
      country: "Sweden"
    },
    vatNumber: "SE555666777001",
    notes: "Inactive since 2025-05-01",
    isActive: "false",
    createdAt: "2024-12-01",
    updatedAt: "2025-05-01"
  }
];
