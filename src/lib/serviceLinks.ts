export type ServiceLink = {
    label: string;
    href: string;
    description?: string;
  };

  export type ServiceCategory = {
    title: string;
    links: ServiceLink[];
  };

  export const serviceCategories: ServiceCategory[] = [
    {
      title: "Homebuyer Services",
      links: [
        { label: "Credit Readiness", href: "/services/credit-readiness" },
        { label: "Down Payment Assistance", href: "/services/down-payment-assistance" },
        { label: "Affordable Loan Solutions", href: "/services/affordable-loan-solutions" },
        { label: "Rent-to-Own Services", href: "/services/rent-to-own-services" },
      ],
    },
    {
      title: "Homeowner Services",
      links: [
        { label: "Home Selling Services", href: "/services/home-selling" },
        { label: "Foreclosure Assistance", href: "/services/foreclosure-assistance" },
      ],
    },
    {
      title: "Additional Services",
      links: [{ label: "Notary Services", href: "/services/notary-services" }],
    },
  ];
