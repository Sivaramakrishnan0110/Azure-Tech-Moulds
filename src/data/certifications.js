import isoImg from "../assets/certs/iso-9001.jpg";
import tagmaImg from "../assets/certs/tagma.jpg";

export const certifications = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    issuer: "BSA International Certification Co. Private Limited",
    scope: "Manufacture of Die, Mould and CNC Machined Automobile Components",
    certificateNumber: "BNT1391/N1391/0722",
    originallyRegistered: "15 Jul 2022",
    dateOfLastIssue: "12 Jul 2025",
    dateOfReCertification: "15 Jul 2025",
    dateOfExpiry: "14 Jul 2026",
    note: "Issued to our facility under its previous registered name, New Tech Moulds, at the same works address.",
    image: isoImg,
  },
  {
    id: "tagma",
    name: "TAGMA India Membership",
    issuer: "Tool and Gauge Manufacturers Association \u2013 India",
    scope: "Certificate of Membership",
    membershipNumber: "N041",
    enrolledYear: "May 2024",
    validity: "April 2025 \u2013 March 2026",
    note: "Membership record lists our facility as New Tech Moulds, Ranipet, our previous registered name.",
    image: tagmaImg,
  },
];
