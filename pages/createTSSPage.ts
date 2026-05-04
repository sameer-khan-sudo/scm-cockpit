import { Page, Locator, expect } from "@playwright/test";
import { CustomerRequirementsData, GeneralInformationData, HitachiEnergyStrategyData } from "../testData/tssSectionData";

export class CreateTSS {

  constructor(private readonly page: Page) { }

  get tssCard(): Locator {
    return this.page.getByText('Tender Sourcing Strategy (TSS)');
  }

  get createTSSButton(): Locator {
    return this.page.getByRole("button", { name: 'Create TSS' })
  }

  get createTSSLabel(): Locator {
    return this.page.locator('[class="MuiBox-root css-8wb2tw"] h6')
  }

  get saveAsDraftButton(): Locator {
    return this.page.getByRole('button', { name: 'Save as Draft' })
  }

  get publishButton(): Locator {
    return this.page.getByRole('button', { name: 'Publish' })
  }
  get draftButton(): Locator {
    return this.page.getByRole('button', { name: 'Save as Draft' })
  }

  get draftChip(): Locator {
    return this.page.locator('[class="MuiBox-root css-8wb2tw"] span');
  }

  get sectionListLocator(): Locator {
    return this.page.locator('.sectionList-link');
  }

  get sectionListCards(): Locator {
    return this.page.locator('div[class*="MuiGrid-grid-xs-9"] [class="MuiBox-root css-4h3rvn"]')
  }

  async extractSectionList(locator: Locator): Promise<string[]> {
    const texts = await locator.allTextContents();
    console.log(texts);
    return texts;
  }

  // --------------------------------1. General Information Section ---------------------------------

  get generalInformationButton(): Locator {
    return this.page.locator('.openButton').first()
  }

  get generalInformationLabel(): Locator {
    return this.page.locator('h4').filter({ hasText: 'General Information' })
  }

  get plantType(): Locator {
    return this.page.locator('input[name="plantType"]')
  }
  get plantLocation(): Locator {
    return this.page.locator('input[name="plantLocation"]')
  }
  get salesforceID(): Locator {
    return this.page.locator('input[name="salesforceId"]')
  }
  get projectName(): Locator {
    return this.page.locator('input[name="projectName"]')
  }
  get clientCustomer(): Locator {
    return this.page.locator('input[name="clientCustomer"]')
  }


  async fillGeneralInformationForm(
    data: GeneralInformationData
  ): Promise<void> {

    await this.plantType.click()
    await this.plantType.fill(data.plantType);
    await this.plantLocation.fill(data.plantLocation);
    await this.salesforceID.fill(data.salesforceId);
    await this.projectName.fill(data.projectName);
    await this.clientCustomer.fill(data.clientCustomer);
  }

  get plantTypeError(): Locator {
    return this.page
      .locator('input[name="plantType"]')
      .locator('xpath=ancestor::div[1]')
      .locator('span')
      .filter({ hasText: 'Please enter valid details.' });
  }

  get clientCustomerError(): Locator {
    return this.page
      .locator('input[name="clientCustomer"]')
      .locator('xpath=ancestor::div[1]')
      .locator('span')
      .filter({ hasText: 'Please enter valid details.' });
  }

  async validateMandatoryScenario(data: {
    plantType?: string;
    clientCustomer?: string;
  }) {

    if (data.plantType !== undefined) {
      await this.plantType.fill(data.plantType);
    }

    if (data.clientCustomer !== undefined) {
      await this.clientCustomer.fill(data.clientCustomer);
    }

    await this.publishButton.click();
  }
  // -------------------------------- 2. Customer Requirements Section ---------------------------------

  get customerRequirementCardButton(): Locator {
    return this.page.getByRole('button').filter({ hasText: /^$/ }).nth(4)
  }

  get customerRequirementsLabel(): Locator {
    return this.page.locator('h4').filter({ hasText: 'Customer Requirements / Restrictions' });
  }

  get forbiddenSuppliers(): Locator {
    return this.page.locator('input[name="forbiddenSuppliers"]');
  }

  get projectIncoterms(): Locator {
    return this.page.locator('input[name="projectIncoterms"]');
  }

  get documentationLanguage(): Locator {
    return this.page.locator('input[name="documentationLanguage"]');
  }

  get tenderValidity(): Locator {
    return this.page.locator('input[name="tenderValidity"]');
  }

  get warrantyConditions(): Locator {
    return this.page.locator('textarea[name="warrantyConditions"]');
  }

  get paymentTerms(): Locator {
    return this.page.locator('textarea[name="paymentTerms"]');
  }

  get liquidatedDamages(): Locator {
    return this.page.locator('textarea[name="liquidatedDamages"]');
  }

  get bonds(): Locator {
    return this.page.locator('textarea[name="bonds"]');
  }

  get generalComments(): Locator {
    return this.page.locator('textarea[name="generalTenderComments"]');
  }

  get priceEscalation(): Locator {
    return this.page.locator('textarea[name="priceEscalation"]');
  }

  get suspension(): Locator {
    return this.page.locator('textarea[name="suspension"]');
  }

  get termination(): Locator {
    return this.page.locator('textarea[name="termination"]');
  }

  get forceMajeure(): Locator {
    return this.page.locator('textarea[name="forceMajeure"]');
  }

  get otherSpecificTnCs(): Locator {
    return this.page.locator('textarea[name="otherClientTCs"]');
  }

  get imposedCodes(): Locator {
    return this.page.locator('textarea[name="imposedCodesRegulationsStandards"]');
  }

  get exportCreditAgency(): Locator {
    return this.page.locator('textarea[name="exportCreditAgency"]');
  }

  get customDutiesExemption(): Locator {
    return this.page.locator('textarea[name="customDutyExemption"]');
  }
  get customDutiesTaxes(): Locator {
    return this.page.locator('textarea[name="customDutyTaxIssues"]');
  }

  get tradeAgreements(): Locator {
    return this.page.locator('textarea[name="tradeAgreements"]');
  }

  get importRestrictions(): Locator {
    return this.page.locator('textarea[name="importRestrictions"]');
  }


  async fillCustomerRequirementsForm(
    data: CustomerRequirementsData
  ): Promise<void> {

    await this.forbiddenSuppliers.fill(data.forbiddenSuppliers);
    await this.projectIncoterms.fill(data.projectIncoterms);
    await this.documentationLanguage.fill(data.documentationLanguage);


    await this.tenderValidity.fill(data.tenderValidity);

    await this.warrantyConditions.fill(data.warrantyConditions);
    await this.paymentTerms.fill(data.paymentTerms);
    await this.liquidatedDamages.fill(data.liquidatedDamages);
    await this.bonds.fill(data.bonds);

    await this.generalComments.fill(data.generalComments);
    await this.priceEscalation.fill(data.priceEscalation);
    await this.suspension.fill(data.suspension);
    await this.termination.fill(data.termination);
    await this.forceMajeure.fill(data.forceMajeure);
    await this.otherSpecificTnCs.fill(data.otherSpecificTnCs);
    await this.imposedCodes.fill(data.imposedCodes);
    await this.exportCreditAgency.fill(data.exportCreditAgency);
    await this.customDutiesExemption.fill(data.customDutiesExemption);
    await this.customDutiesTaxes.fill(data.customDutiesTaxes);
    await this.tradeAgreements.fill(data.tradeAgreements);
    await this.importRestrictions.fill(data.importRestrictions);
  }

  // -------------------------------- 3. Hitachi Energy Strategy ---------------------------------

  get hitachiEnergyStrategyCardButton(): Locator {
    return this.page.getByRole('button').filter({ hasText: /^$/ }).nth(5)
  }

  get hitachiEnergyStrategyLabel(): Locator {
    return this.page.locator('h4').filter({ hasText: 'Hitachi Energy Strategy' });
  }

  get scmSourcingStrategyLabel(): Locator {
    return this.page.getByText('3b. SCM Sourcing Strategy');
  }

  get contractBasis(): Locator {
    return this.page.locator('input[name="contractBasis"]');
  }

  get hitachiEnergyCompetitors(): Locator {
    return this.page.locator('input[name="competitors"]');
  }

  get winningFactors(): Locator {
    return this.page.locator('input[name="winningFactors"]');
  }

  get giInternalConsortiumAgreement(): Locator {
    return this.page.locator('input[name="internalConsortium"]');
  }
  get giExternalConsortiumAgreement(): Locator {
    return this.page.locator('input[name="externalConsortium"]');
  }

  get losingFactors(): Locator {
    return this.page.locator('input[name="losingFactors"]');
  }

  get hitachiEnergyStrategy(): Locator {
    return this.page.locator('textarea[name="hitachiEnergyStrategy"]');
  }

  get strategy(): Locator {
    return this.page.locator('textarea[name="heStrategy"]');
  }
  get ScmStrategy(): Locator {
    return this.page.locator('textarea[name="scmStrategy"]');
  }

  get targetedSourcingCountries(): Locator {
    return this.page.locator('textarea[name="targetSourcingCountries"]');
  }
  get externalConsortium(): Locator {
    return this.page.locator('input[name="externalConsortium"]');
  }

  get turnkeyPackagesForeseen(): Locator {
    return this.page.locator('textarea[name="turnkeyPackages"]');
  }

  get clientVendorList(): Locator {
    return this.page.locator('textarea[name="clientVendorList"]');
  }

  get referenceProjectsAndTenders(): Locator {
    return this.page.locator('textarea[name="referenceProjects"]');
  }

  async fillHitachiEnergyStrategyForm(
    data: HitachiEnergyStrategyData
  ): Promise<void> {

    await this.contractBasis.fill(data.contractBasis);
    await this.hitachiEnergyCompetitors.fill(data.hitachiEnergyCompetitors);
    await this.winningFactors.fill(data.winningFactors);
    await this.giInternalConsortiumAgreement.fill(data.giInternalConsortiumAgreement)
    await this.giExternalConsortiumAgreement.fill(data.giExternalConsortiumAgreement);
    await this.losingFactors.fill(data.losingFactors);
    await this.strategy.fill(data.strategy);
    await this.ScmStrategy.fill(data.scmStrategy)
    await this.targetedSourcingCountries.fill(data.targetedSourcingCountries);
    await this.turnkeyPackagesForeseen.fill(data.turnkeyPackagesForeseen)
    await this.clientVendorList.fill(data.clientVendorList);
    await this.referenceProjectsAndTenders.fill(data.referenceProjectsAndTenders);
  }


  async verifySuccessToast() {
    await this.page.waitForTimeout(1000)
    const isVisible = await this.page
      .getByText('TSS created successfully.')
      .isVisible();

    if (isVisible) {
      console.log('Message appeared : TSS created successfully.');
    } else {
      console.log('Message did NOT appear ❌');
    }
  }
}