import { getRandomValues, randomInt } from "node:crypto";

export const expectedSectionsData = [
  '1. General Information',
  '2. Customer Requirements / Restrictions',
  '3. Hitachi Energy Strategy',
  'a. Tender / Project Strategy',
  'b. SCM Sourcing Strategy',
  '4. High Spend and Long Lead Items',
  'a. Key Equipment and/or Services with Specific Strategy',
  'b. Project Procurement Criticality / Priority',
  '5. Procurement Risks',
  'a. Tender / Project Risks affecting SCM',
  'b. SCM Risk Mitigation Plan',
  '6. Close Out',
  'a. Tender Close-out & Win/Loss Analysis',
  'b. Project Close-out'
];

export const expectedSectionCardsData = [
  '1.  General Information',
  '2.  Customer Requirements / Restrictions',
  '3.  Hitachi Energy Strategy',
  '4.  High Spend and Long Lead Items',
  '5.  Procurement Risks',
  '6.  Close Out'
]

// -------------------------------- General Information Section Data ---------------------------------

export type GeneralInformationData = {
  plantType: string;
  plantLocation: string;
  salesforceId: string;
  projectName: string;
  clientCustomer: string;
  clientCustomerCountry: string;
  heLocalUnitCountry: string;
  finalDestinationCountry: string;
  finalDestinationCity: string;
};
export function generateProjectName(): string {
  const phase = Math.floor(Math.random() * 10);
  return `SCM Automation Phase ${phase}`;
}
export const generalInformationFormData: GeneralInformationData = {
  plantType: "Manufacturing",
  plantLocation: "Pune, Maharashtra",
  salesforceId: "SF-IND-2026-00125",
  projectName: generateProjectName(),
  clientCustomer: "Tata Motors Ltd",
  clientCustomerCountry: "India",
  heLocalUnitCountry: "India",
  finalDestinationCountry: "India",
  finalDestinationCity: "Mumbai"
};

// -------------------------------- Customer Requirements Section Data ---------------------------------

export type CustomerRequirementsData = {
  forbiddenSuppliers: string;
  projectIncoterms: string;
  targetedCurrency: string;
  documentationLanguage: string;
  tenderSubmissionDateCommercial: string;
  tenderSubmissionDateTechnical: string;
  tenderValidity: string;
  expectedAwardDate: string;
  expectedProjectStartDate: string;
  expectedProjectEndDate: string;
  warrantyConditions: string;
  paymentTerms: string;
  liquidatedDamages: string;
  bonds: string;
  generalComments: string;
  priceEscalation: string;
  suspension: string;
  termination: string;
  forceMajeure: string;
  otherSpecificTnCs: string;
  imposedCodes: string;
  exportCreditAgency: string;
  customDutiesExemption: string;
  customDutiesTaxes: string;
  tradeAgreements: string;
  importRestrictions: string;
};

export const customerRequirementsFormData: CustomerRequirementsData = {
  forbiddenSuppliers: "ABC Corp, XYZ Global (Blacklisted due to compliance issues)",
  projectIncoterms: "DAP – Delivered At Place (Incoterms 2020)",
  targetedCurrency: "EUR",
  documentationLanguage: "English",

  tenderSubmissionDateCommercial: "2026-04-15",
  tenderSubmissionDateTechnical: "2026-04-10",
  tenderValidity: "90 Days",
  expectedAwardDate: "2026-05-01",
  expectedProjectStartDate: "2026-06-01",
  expectedProjectEndDate: "2027-06-01",

  warrantyConditions: "24 months warranty from date of commissioning.",
  paymentTerms: "30% Advance, 60% Against Dispatch, 10% After Commissioning (Net 30)",
  liquidatedDamages: "0.5% per week of delay, maximum 5% of contract value.",
  bonds: "10% Performance Bank Guarantee valid till project completion.",

  generalComments: "Project is strategic and requires strict adherence to timeline.",
  priceEscalation: "Applicable if raw material cost increases beyond 5%.",
  suspension: "Client reserves the right to suspend the contract with 30 days notice.",
  termination: "Termination allowed for breach of contract with 60 days cure period.",
  forceMajeure: "Applicable for natural disasters, war, government restrictions.",
  otherSpecificTnCs: "All materials must comply with EU environmental regulations.",
  imposedCodes: "ISO 9001, ISO 14001 compliance mandatory.",
  exportCreditAgency: "Euler Hermes (Germany)",
  customDutiesExemption: "Exemption certificate to be provided by client.",
  customDutiesTaxes: "VAT applicable as per destination country regulations.",
  tradeAgreements: "EU-India Free Trade Agreement benefits applicable.",
  importRestrictions: "Subject to EU import control regulations."
};



export type HitachiEnergyStrategyData = {
  contractBasis: string;
  hitachiEnergyCompetitors: string;
  winningFactors: string;
  giInternalConsortiumAgreement: string;
  giExternalConsortiumAgreement: string;
  losingFactors: string;
  hitachiEnergyStrategy: string;
  strategy: string;
  targetedSourcingCountries: string;
  turnkeyPackagesForeseen: string;
  clientVendorList: string;
  referenceProjectsAndTenders: string;
  scmStrategy: string,

};

export const hitachiEnergyStrategyFormData: HitachiEnergyStrategyData = {

  contractBasis: "Lump Sum Turnkey Contract based on EPC model with milestone-based payments.",

  hitachiEnergyCompetitors: "Siemens Energy, GE Grid Solutions, Schneider Electric",

  winningFactors: "Strong local presence, proven EPC experience, competitive pricing strategy, faster delivery timeline.",

  giInternalConsortiumAgreement: "Internal consortium between Grid Integration and Transformers division for execution support.",

  giExternalConsortiumAgreement: "External consortium with ABC Engineering Ltd for civil and installation works.",

  losingFactors: "Aggressive competitor pricing, delayed material approvals, limited local supplier base.",

  hitachiEnergyStrategy:
    "Focus on cost optimization through global sourcing, early supplier involvement, and risk mitigation planning. Leverage global framework agreements for key materials.",

  strategy:
    "Adopt multi-source procurement strategy for critical components while maintaining single-source for highly specialized equipment.",

  scmStrategy: "Prioritize cost optimization through strategic global sourcing, proactive supplier engagement, and comprehensive risk management planning, while capitalizing on global framework agreements for critical materials.",

  targetedSourcingCountries:
    "India, Germany, China, South Korea",

  turnkeyPackagesForeseen:
    "Complete substation automation package including control panels, protection relays, and SCADA integration.",

  clientVendorList:
    "Approved vendor list includes ABB India, Larsen & Toubro, Siemens Ltd, and Bharat Heavy Electricals Ltd.",

  referenceProjectsAndTenders:
    "Reference projects: 400kV Substation – Germany (2024), HVDC Link – India (2023), Offshore Grid – UK (2022)."
};