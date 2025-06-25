import {Faktura} from '../components/model/faktura';

export const DUMMY_FAKTUROR: Faktura[] = [
  // Regular invoice with multiple items
  {
    id: 1,
    invoiceNumber: "INV-2025-001",
    clientName: "Test Company AB",
    issueDate: "2025-06-01",
    dueDate: "2025-07-01",
    items: [
      {
        id: 1,
        description: "Frontend Development",
        quantity: "40",
        price: "1000",
        total: "40000"
      },
      {
        id: 2,
        description: "Backend Development",
        quantity: "35",
        price: "1200",
        total: "42000"
      }
    ],
    totalAmount: "82000",
    status: "paid"
  },

  // Invoice with single item
  {
    id: 2,
    invoiceNumber: "INV-2025-002",
    clientName: "Single Item Ltd",
    issueDate: "2025-06-15",
    dueDate: "2025-07-15",
    items: [
      {
        id: 1,
        description: "Website Design",
        quantity: "1",
        price: "25000",
        total: "25000"
      }
    ],
    totalAmount: "25000",
    status: "sent"
  },

  // Invoice with zero amount
  {
    id: 3,
    invoiceNumber: "INV-2025-003",
    clientName: "Zero Amount Corp",
    issueDate: "2025-06-20",
    dueDate: "2025-07-20",
    items: [
      {
        id: 1,
        description: "Warranty Replacement",
        quantity: "1",
        price: "0",
        total: "0"
      }
    ],
    totalAmount: "0",
    status: "paid"
  },

  // Overdue invoice
  {
    id: 4,
    invoiceNumber: "INV-2025-004",
    clientName: "Late Payer Inc",
    issueDate: "2025-05-01",
    dueDate: "2025-06-01",
    items: [
      {
        id: 1,
        description: "Cloud Services",
        quantity: "3",
        price: "5000",
        total: "15000"
      }
    ],
    totalAmount: "15000",
    status: "overdue"
  },

  // Draft invoice
  {
    id: 5,
    invoiceNumber: "INV-2025-005",
    clientName: "Draft Company",
    issueDate: "2025-06-25",
    dueDate: "2025-07-25",
    items: [
      {
        id: 1,
        description: "Consulting Services",
        quantity: "10",
        price: "1500",
        total: "15000"
      },
      {
        id: 2,
        description: "Travel Expenses",
        quantity: "1",
        price: "2500",
        total: "2500"
      }
    ],
    totalAmount: "17500",
    status: "draft"
  }
];

