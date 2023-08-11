global class ContactMeController {
  @AuraEnabled
  public static void createLead(
    String firstname,
    String lastname,
    String linkedin,
    String company,
    String email,
    String description
  ) {
    Lead lead = new Lead();

    lead.FirstName = firstname;
    lead.LastName = lastname;
    lead.LinkedIn_Profile__c = linkedin;
    lead.Company = company;
    lead.Email = email;
    lead.Description = description;

    insert lead;
  }
}
