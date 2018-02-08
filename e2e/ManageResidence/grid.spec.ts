import { browser, by, element } from 'protractor';

describe('GIVEN at the NRP Admin Tool application', () => {

  beforeEach(() => {
    browser.get('https://nursing.test.vizientinc.com/NRPAdminTool/');
	});

	it('WHEN page is loaded THEN should have a title', () => {
		expect(browser.getTitle()).toEqual('Vizient • Nurse Residency Survey');
	});

	it('WHEN Great State is selected THEN should display Great State in dropdown as selected', () => {
		element(by.cssContainingText('option', 'Great State Medical Center')).click();
		expect(element(by.id('ManageResidenceGrid')).isPresent()).toBeTruthy();
		expect(element(by.text('123456789', 'div')).isPresent()).toBeTruthy();
	});

});