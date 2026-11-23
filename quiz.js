const sources = {
  describe: [
    "DescribeFieldResult Class Reference",
    "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_fields_describe.htm",
  ],
  globalDescribe: [
    "Accessing All sObjects",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dynamic_global_describe.htm",
  ],
  externalIds: [
    "Relating Records by Using an External ID",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_dml_nested_object.htm",
  ],
  relationships: [
    "Object Relationships Overview",
    "https://help.salesforce.com/s/articleView?id=sf.relationships_considerations.htm&type=5",
  ],
  rollups: [
    "Roll-Up Summary Field Considerations",
    "https://help.salesforce.com/s/articleView?id=sf.fields_about_roll_up_summary_fields.htm&type=5",
  ],
  platformEvents: [
    "Publishing Platform Events",
    "https://developer.salesforce.com/docs/platform/platform-events/guide/platform-events-publish.html",
  ],
  events: [
    "Triggers and Order of Execution",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm",
  ],
  static: [
    "Static and Instance Methods, Variables, and Initialization Code",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_static.htm",
  ],
  modifiers: [
    "Class Access Modifiers",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_access_modifiers.htm",
  ],
  flowError: [
    "Flow Core Action: Custom Error",
    "https://help.salesforce.com/s/articleView?id=sf.flow_ref_elements_custom_error.htm&type=5",
  ],
  flowSecurity: [
    "How Does Flow Security Work?",
    "https://help.salesforce.com/s/articleView?id=sf.flow_builder_system_context.htm&type=5",
  ],
  aggregates: [
    "Aggregate Functions Reference",
    "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_agg_functions.htm",
  ],
  dmlObjects: [
    "Objects Not Supported by DML",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dml_non_dml_objects.htm",
  ],
  queueable: [
    "Queueable Apex",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_queueing_jobs.htm",
  ],
  limits: [
    "Execution Governors and Limits",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm",
  ],
  triggerContext: [
    "Trigger Context Variables",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_context_variables.htm",
  ],
  dataTypes: [
    "Apex Data Types",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/langCon_apex_datatypes_variables_intro.htm",
  ],
  database: [
    "Database Class Methods",
    "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database.htm",
  ],
  order: [
    "Triggers and Order of Execution",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers_order_of_execution.htm",
  ],
  soql: [
    "Understanding Relationship Queries",
    "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_relationships.htm",
  ],
  callouts: [
    "Invoking Callouts Using Apex",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_callouts.htm",
  ],
  tests: [
    "Isolation of Test Data from Organization Data in Unit Tests",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_data_access.htm",
  ],
  standardPricebook: [
    "Test.getStandardPricebookId Method",
    "https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-methods-system-test.html#getstandardpricebookid",
  ],
  testRun: [
    "Run Unit Test Methods",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_unit_tests_running.htm",
  ],
  testing: [
    "Testing Best Practices",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_testing_best_practices.htm",
  ],
  flowTest: [
    "FlowTest Metadata API Reference",
    "https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_flowtest.htm",
  ],
  sobject: [
    "SObject Class Reference",
    "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm",
  ],
  logs: [
    "Add Trace Flags and Log Levels",
    "https://developer.salesforce.com/docs/platform/webconsole/guide/add-trace-flags.html",
  ],
  debug: [
    "Working with Logs in the Developer Console",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-debugging-system-log-console.html",
  ],
  console: [
    "Developer Console Overview",
    "https://help.salesforce.com/s/articleView?id=sf.code_dev_console.htm&type=5",
  ],
  dx: [
    "Salesforce DX Developer Guide",
    "https://developer.salesforce.com/docs/platform/sfdx-dev/guide/sfdx-dev-intro.html",
  ],
  pauseJob: [
    "System Class Documentation",
    "https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-methods-system-system.html",
  ],
  models: [
    "Salesforce DX Developer Guide",
    "https://developer.salesforce.com/docs/platform/sfdx-dev/guide/sfdx-dev-intro.html",
  ],
  sandboxes: [
    "Sandbox Licenses and Storage Limits by Type",
    "https://help.salesforce.com/s/articleView?id=platform.data_sandbox_environments.htm&type=5",
  ],
  sandboxClone: [
    "Create, Clone, or Refresh a Sandbox",
    "https://help.salesforce.com/s/articleView?id=platform.data_sandbox_create_parent.htm&language=en_US&type=5",
  ],
  changeSets: [
    "Authorize a Deployment Connection",
    "https://help.salesforce.com/s/articleView?id=sf.changesets_deployment_connections_authorize.htm&type=5",
  ],
  metadata: [
    "Unsupported Metadata Types",
    "https://developer.salesforce.com/docs/atlas.en-us.api_meta.meta/api_meta/meta_unsupported_types.htm",
  ],
  email: [
    "Sandbox Email Deliverability",
    "https://help.salesforce.com/s/articleView?id=sf.data_sandbox_email_deliverability.htm&type=5",
  ],
  sandboxRefreshEmails: [
    "Recommended Best Practices for Email Verification and Device Activation in Summer '26",
    "https://help.salesforce.com/s/articleView?id=005322018&language=en_US&type=1",
  ],
  categories: [
    "Working with Logs in the Developer Console",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-debugging-system-log-console.html",
  ],
  visualforce: [
    "Visualforce Developer Guide",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/",
  ],
  controllerExtension: [
    "Building a Visualforce Controller Extension",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/pages-controller-extension.html",
  ],
  setController: [
    "Visualforce Developer Guide",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/",
  ],
  accessMode: [
    "Enforce Security with User Mode Database Operations",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_enforce_usermode.htm",
  ],
  transient: [
    "Understanding the Transient Keyword",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_keywords_transient.htm",
  ],
  components: [
    "Standard Component Reference",
    "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref.htm",
  ],
  eventsLwc: [
    "Create and Dispatch Events",
    "https://developer.salesforce.com/docs/platform/lwc/guide/events-create-dispatch.html",
  ],
  lms: [
    "Lightning Message Service Documentation",
    "https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel.html",
  ],
  strip: [
    "Enforce Security With the stripInaccessible Method",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm",
  ],
  auraResources: [
    "Aura Components Developer Guide",
    "https://developer.salesforce.com/docs/platform/aura-platform/guide/",
  ],
  lwcGuide: [
    "Lightning Web Components Developer Guide",
    "https://developer.salesforce.com/docs/platform/lwc/guide/",
  ],
  propertyEditor: [
    "Custom Property Editors for Flow Configurations",
    "https://developer.salesforce.com/docs/platform/lwc/guide/use-flow-custom-property-editor.html",
  ],
  vfLightning: [
    "Introducing Visualforce",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/",
  ],
  config: [
    "XML Configuration File Elements",
    "https://developer.salesforce.com/docs/platform/lwc/guide/reference-configuration-tags.html",
  ],
  auraEvents: [
    "Handling Bubbled or Captured Component Events",
    "https://developer.salesforce.com/docs/platform/aura-platform/guide/events-component-bubbling.html",
  ],
  sharing: [
    "Use the with sharing, without sharing, and inherited sharing Keywords",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-classes-keywords-sharing.html",
  ],
  extKeys: [
    "External IDs and OData Entity Keys",
    "https://help.salesforce.com/s/articleView?id=platform.odata_external_id_entity_key.htm&language=en_US&type=5",
  ],
  orchestration: [
    "Monitor Orchestrations",
    "https://help.salesforce.com/s/articleView?id=sf.flow_orchestration_monitoring.htm&type=5",
  ],
  operators: [
    "Flow Operators Reference",
    "https://help.salesforce.com/s/articleView?id=sf.flow_ref_operators.htm&type=5",
  ],
  settings: [
    "Custom Settings Documentation",
    "https://help.salesforce.com/s/articleView?id=sf.cs_about.htm&type=5",
  ],
  dates: [
    "Date Formats and Date Literals",
    "https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_soql_select_dateformats.htm",
  ],
  classDef: [
    "Apex Class Definition & Modifiers",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_defining.htm",
  ],
  saveResult: [
    "Database.SaveResult Class",
    "https://developer.salesforce.com/docs/atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm",
  ],
  eventsGuide: [
    "Platform Events Developer Guide",
    "https://developer.salesforce.com/docs/atlas.en-us.platform_events.meta/platform_events/platform_events_intro.htm",
  ],
  security: [
    "Enforce Security With the stripInaccessible Method",
    "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_classes_with_security_stripInaccessible.htm",
  ],
  dynamicForms: [
    "Cross-Object Fields in Dynamic Forms",
    "https://help.salesforce.com/s/articleView?language=en_US&id=platform.dynamic_forms_spanning_fields.htm&type=5",
  ],
  schemaBuilder: [
    "Design Your Own Data Model With Schema Builder",
    "https://help.salesforce.com/s/articleView?id=platform.schema_builder.htm&type=5",
  ],
  schemaBuilderConsiderations: [
    "Schema Builder Considerations",
    "https://help.salesforce.com/s/articleView?id=platform.schema_builder_considerations.htm&type=5",
  ],
  crossObjectFormula: [
    "Cross-Object Formulas",
    "https://help.salesforce.com/s/articleView?id=platform.customize_formulas_cross_object.htm&type=5",
  ],
  lookupRollupFlow: [
    "Create Roll-Up Summary Fields Utilizing Salesforce Flow",
    "https://help.salesforce.com/s/articleView?language=en_US&id=002722670&type=1",
  ],
  testMethods: [
    "Test Class Reference",
    "https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-methods-system-test.html",
  ],
  testSetup: [
    "Using Test Setup Methods",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-testing-testsetup-using.html",
  ],
  customExceptions: [
    "Create Custom Exceptions",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-exception-custom.html",
  ],
  scheduler: [
    "Apex Scheduler",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-scheduler.html",
  ],
  asyncJobs: [
    "AsyncApexJob Object Reference",
    "https://developer.salesforce.com/docs/platform/object-reference/references/standard-objects/object-asyncapexjob.html",
  ],
  changeSetOverview: [
    "Change Sets",
    "https://help.salesforce.com/s/articleView?id=platform.changesets.htm&type=5",
  ],
  cliDeploy: [
    "Salesforce CLI project deploy start",
    "https://developer.salesforce.com/docs/platform/salesforce-cli-reference/guide/cli_reference_project_deploy_start.html",
  ],
  emailLogs: [
    "Email Logs",
    "https://help.salesforce.com/s/articleView?language=en_US&id=sales.emailadmin_monitor_emails_sent_from_salesforce.htm&type=5",
  ],
  standardController: [
    "StandardController Class Reference",
    "https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-pages-standardcontroller.html",
  ],
  standardSetController: [
    "StandardSetController Class Reference",
    "https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-pages-standardsetcontroller.html",
  ],
  apexPages: [
    "ApexPages Class Reference",
    "https://developer.salesforce.com/docs/platform/apex-ref/references/apex-ref/apex-methods-system-apexpages.html",
  ],
  vfControllerMethods: [
    "Visualforce Controller Methods",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/pages-controller-methods.html",
  ],
  vfGlobalVariables: [
    "Visualforce Global Variables",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/pages-variables-global.html",
  ],
  vfPage: [
    "Visualforce apex:page Component",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/pages-compref-page.html",
  ],
  vfFunctions: [
    "Visualforce Functions",
    "https://developer.salesforce.com/docs/platform/salesforce-pages-developers-guide/guide/pages-variables-functions.html",
  ],
  auraBuilder: [
    "Configure Components for Lightning Pages and the Lightning App Builder",
    "https://developer.salesforce.com/docs/platform/aura-platform/guide/components-config-for-app-builder.html",
  ],
  auraJavaScript: [
    "Using External JavaScript Libraries",
    "https://developer.salesforce.com/docs/platform/aura-platform/guide/js-libs-platform.html",
  ],
  lwcFiles: [
    "Create Your First Lightning Web Component",
    "https://developer.salesforce.com/docs/platform/lwc/guide/get-started-lwc.html",
  ],
  lwcOverview: [
    "Get Started with Lightning Web Components",
    "https://developer.salesforce.com/docs/platform/lwc/guide/",
  ],
  eventsBestPractices: [
    "Events Best Practices",
    "https://developer.salesforce.com/docs/platform/lwc/guide/events-best-practices.html",
  ],
  eventsPropagation: [
    "Configure Event Propagation",
    "https://developer.salesforce.com/docs/platform/lwc/guide/events-propagation.html",
  ],
  dynamicSoql: [
    "Dynamic SOQL",
    "https://developer.salesforce.com/docs/platform/apex-dev/references/apex-dev/apex-dynamic-soql.html",
  ],
  soqlSelect: [
    "SOQL SELECT Syntax",
    "https://developer.salesforce.com/docs/platform/salesforce-soql-sosl/guide/sforce-api-calls-soql-select.html",
  ],
  soqlComparison: [
    "SOQL Comparison Operators",
    "https://developer.salesforce.com/docs/platform/salesforce-soql-sosl/guide/sforce-api-calls-soql-select-comparisonoperators.html",
  ],
  multiSelectPicklists: [
    "Query Multi-Select Picklists",
    "https://developer.salesforce.com/docs/platform/salesforce-soql-sosl/guide/sforce-api-calls-soql-querying-multiselect-picklists.html",
  ],
  soslSyntax: [
    "SOSL Syntax",
    "https://developer.salesforce.com/docs/platform/salesforce-soql-sosl/guide/sforce-api-calls-sosl-syntax.html",
  ],
};

const questions = [];
let nextQuestionId = 1;
function add(topic, source, prompt, correct, distractors, explanation) {
  questions.push({
    id: `q${nextQuestionId++}`,
    topic,
    source,
    prompt,
    correct,
    distractors,
    explanation,
  });
}

add(
  "Apex Schema",
  "describe",
  "What does DescribeFieldResult.getDigits() report for an Integer field?",
  "The maximum number of digits specified for the field",
  [
    "The field's maximum text length in characters",
    "The number of decimal places",
    "The number of digits currently stored in a record",
  ],
  "getDigits() is documented for Integer fields and returns their maximum number of digits.",
);
add(
  "Apex Schema",
  "describe",
  "Which describe method tells whether the current user can read a field?",
  "isAccessible()",
  ["isCreateable()", "isNillable()", "isFilterable()"],
  "isAccessible() reports whether the current user can see the field.",
);
add(
  "Apex Schema",
  "describe",
  "For a variable-length field, which method reports maximum size in bytes?",
  "getByteLength()",
  ["getLength()", "getDigits()", "getScale()"],
  "getByteLength() returns maximum size in bytes; getLength() is in Unicode characters.",
);
add(
  "Apex Schema",
  "describe",
  "Which method reports a field's maximum size in Unicode characters?",
  "getLength()",
  ["getByteLength()", "getPrecision()", "getDigits()"],
  "The reference distinguishes Unicode character length from byte length.",
);
add(
  "Apex Schema",
  "describe",
  "Which field describe method returns the field's Apex API name?",
  "getName()",
  ["getLabel()", "getLocalName()", "getRelationshipName()"],
  "getName() returns the field name used in Apex; getLabel() returns its UI label.",
);
add(
  "Apex Schema",
  "describe",
  "Which method checks whether the running user can update a field?",
  "isUpdateable()",
  ["isAccessible()", "isGroupable()", "isNameField()"],
  "isUpdateable() checks whether the field can be updated by the current user.",
);
add(
  "Apex Schema",
  "describe",
  "Which describe result method gives the field's display type?",
  "getType()",
  ["getSOAPType()", "getSObjectType()", "getReferenceTo()"],
  "getType() returns a Schema.DisplayType for the field.",
);
add(
  "Apex Schema",
  "describe",
  "A developer needs the parent object types referenced by a lookup field. Which method helps?",
  "getReferenceTo()",
  ["getController()", "getRelationshipOrder()", "getDefaultValue()"],
  "getReferenceTo() returns the parent sObject types for a reference field.",
);
add(
  "Apex Schema",
  "describe",
  "Which method indicates that a field can be used in a SOQL WHERE filter?",
  "isFilterable()",
  ["isGroupable()", "isCalculated()", "isDefaultedOnCreate()"],
  "isFilterable() reports whether the field can be used as filter criteria.",
);
add(
  "Apex Schema",
  "describe",
  "Which method determines whether a field is a custom formula field?",
  "isCalculated()",
  ["isAutoNumber()", "isExternalID()", "isNillable()"],
  "isCalculated() returns true for a custom formula field, which is read-only.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "What does Schema.getGlobalDescribe() return?",
  "A map from sObject API names to sObject tokens",
  [
    "A list of record IDs for every object",
    "A map from field labels to field values",
    "A list of every record the user can see",
  ],
  "The method returns a map of object names to Schema.SObjectType tokens.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "When is the set of objects in getGlobalDescribe generated?",
  "At runtime from objects currently available to the organization",
  [
    "Only when an Apex class is compiled",
    "When an administrator exports metadata",
    "Once when the org is first created",
  ],
  "The global describe map is dynamic and reflects sObjects available at runtime.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "What is the key type in the getGlobalDescribe() map?",
  "String",
  ["Id", "Schema.DescribeFieldResult", "SObject"],
  "The keys are object names represented as strings; the values are sObject tokens.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "What type of value is stored for each getGlobalDescribe() object key?",
  "Schema.SObjectType",
  [
    "Schema.DescribeFieldResult",
    "ApexPages.StandardController",
    "Database.SaveResult",
  ],
  "Each map value is an sObject type token.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "How does getGlobalDescribe() treat object-name keys with respect to case?",
  "The names are case-insensitive",
  [
    "They are always uppercase",
    "They are always lowercase",
    "They are case-sensitive only for custom objects",
  ],
  "Salesforce documents the object names in this map as case-insensitive.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "What does an sObject token let dynamic Apex identify?",
  "The type of an sObject",
  [
    "The current user's password policy",
    "A record's sharing owner",
    "A page's Visualforce controller",
  ],
  "A Schema.SObjectType token represents an sObject type.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "Which statement about standard sObjects and namespace prefixes is true?",
  "Standard sObjects have no namespace prefix",
  [
    "Every standard sObject has the org namespace prefix",
    "Standard sObjects always end in __c",
    "Namespace prefixes appear only on record IDs",
  ],
  "The describe guide notes that standard sObjects have no namespace prefix.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "Why use getGlobalDescribe() instead of hard-coding an object token?",
  "To discover available object types dynamically at runtime",
  [
    "To bypass object and field permissions",
    "To retrieve all object records in one query",
    "To avoid governor limits on SOQL",
  ],
  "Global describe supports dynamic code that inspects available sObject types.",
);
add(
  "Dynamic Describe",
  "globalDescribe",
  "What is the value associated with the Account key in a global describe map?",
  "The Account Schema.SObjectType token",
  [
    "An Account record",
    "A DescribeFieldResult for Name",
    "A list of Account record types",
  ],
  "The map associates each object's API name with its object type token.",
);
add(
  "Dynamic Describe",
  "describe",
  "What does DescribeFieldResult.getLabel() return?",
  "The field label displayed in Salesforce UI",
  [
    "The field's API name used in Apex",
    "The object's namespace",
    "The related parent record ID",
  ],
  "getLabel() returns the display label, which can be localized.",
);
add(
  "Dynamic Describe",
  "describe",
  "Which method can identify active picklist values on a field?",
  "getPicklistValues()",
  ["getReferenceTo()", "getRelationshipName()", "getByteLength()"],
  "getPicklistValues() returns active picklist entries and errors if the field is not a picklist.",
);

add(
  "Object Relationships",
  "relationships",
  "Which relationship connects a child external object to a Salesforce parent using a matching external ID?",
  "Indirect lookup",
  ["External lookup", "Hierarchical relationship", "Master-detail only"],
  "An indirect lookup matches a child external object's field to an external ID field on a Salesforce parent.",
);
add(
  "Object Relationships",
  "relationships",
  "Which relationship connects a Salesforce child object to a parent external object?",
  "External lookup",
  ["Indirect lookup", "Hierarchical relationship", "Junction relationship"],
  "External lookup relationships link Salesforce records to parent records in an external system.",
);
add(
  "Object Relationships",
  "relationships",
  "In a master-detail relationship, where does the detail record get its ownership?",
  "From its master record",
  [
    "From a queue assigned to the detail",
    "From the user who last edited it",
    "From its own independent owner field",
  ],
  "Detail records inherit ownership and sharing behavior from the master.",
);
add(
  "Object Relationships",
  "relationships",
  "Which Salesforce object supports a hierarchical relationship type?",
  "User",
  ["Account", "Case", "Opportunity"],
  "Hierarchical relationships are available only on the User object.",
);
add(
  "Object Relationships",
  "relationships",
  "How is a typical custom junction object created?",
  "With two master-detail relationship fields to the two parent objects",
  [
    "With two external lookup fields",
    "With one hierarchy field and one formula field",
    "With a single required lookup to each parent",
  ],
  "A junction object commonly connects two parent objects through two master-detail fields.",
);
add(
  "Object Relationships",
  "relationships",
  "What is a key consequence of deleting a master record in a master-detail relationship?",
  "Its detail records are deleted with it",
  [
    "Its detail records become ownerless",
    "Its detail records are converted to lookups",
    "The delete is always blocked",
  ],
  "Master-detail relationships support cascading deletion of detail records when the master is deleted.",
);
add(
  "Object Relationships",
  "relationships",
  "Can a detail record in a master-detail relationship have an independent owner?",
  "No; it inherits ownership from the master",
  [
    "Yes, if its owner is a queue",
    "Yes, but only for custom objects",
    "Only after its master is deleted",
  ],
  "Ownership is controlled by the master in a master-detail relationship.",
);
add(
  "Object Relationships",
  "externalIds",
  "Why can an external ID be used in a child-to-parent DML relationship?",
  "It can identify the parent without supplying the Salesforce record ID",
  [
    "It bypasses the need to define a relationship",
    "It encrypts the parent record ID",
    "It makes all parent fields writable",
  ],
  "A custom External ID field can identify a parent record when constructing a relationship reference.",
);
add(
  "Object Relationships",
  "externalIds",
  "What must exist before Apex can relate records using a parent External ID?",
  "A defined lookup or master-detail relationship between the objects",
  [
    "A trigger on both objects",
    "A matching record type",
    "A formula field on the child",
  ],
  "External ID relationship references do not replace the relationship itself.",
);
add(
  "Object Relationships",
  "externalIds",
  "Which operations can use external IDs to relate a child to a parent?",
  "Insert, update, or upsert",
  ["Only insert", "Only delete and undelete", "Only query operations"],
  "Salesforce documents external ID relationship references for insert, update, and upsert.",
);
add(
  "Object Relationships",
  "externalIds",
  "What does an indirect lookup match on the external object child?",
  "Its field value against a parent custom External ID field",
  [
    "Its Salesforce record ID against a parent Name",
    "Its record type against the parent's owner",
    "Its CreatedDate against the parent's External ID",
  ],
  "The indirect relationship resolves the parent by matching the configured external ID values.",
);
add(
  "Object Relationships",
  "externalIds",
  "Does the Salesforce parent record have to be referenced by its Salesforce ID when using a custom External ID?",
  "No; the custom External ID value can identify it",
  [
    "Yes, External IDs only work in SOQL",
    "Yes, unless using a queue",
    "No, but only during delete",
  ],
  "The feature is an alternative to using the parent Salesforce record ID.",
);
add(
  "Object Relationships",
  "relationships",
  "Can a standard object be the detail side of a master-detail relationship with a custom object?",
  "No; the standard object is the parent/master in this setup",
  [
    "Yes, if it is read-only",
    "Yes, when the child is a junction object",
    "Only in a scratch org",
  ],
  "Salesforce supports custom objects as detail records of standard-object masters, not the reverse.",
);
add(
  "Object Relationships",
  "relationships",
  "A team needs a many-to-many link between Course and Student. Which model fits?",
  "A junction object with one master-detail relationship to each parent",
  [
    "A formula field on Course",
    "A hierarchical relationship on Student",
    "An external lookup to both parents",
  ],
  "A junction object models many-to-many relationships through its two parent links.",
);
add(
  "Object Relationships",
  "relationships",
  "What should be considered when users have only Read access to junction parents?",
  "Configure junction-object sharing to permit the intended create/edit behavior",
  [
    "Give users ownership of the master records",
    "Replace both master-detail fields with formulas",
    "Set both parent objects to Public Read/Write",
  ],
  "Junction object access is affected by the sharing setting on its master-detail relationships.",
);
add(
  "Object Relationships",
  "relationships",
  "Which relationship type is appropriate when Salesforce records need to reference data hosted externally?",
  "External lookup",
  ["Hierarchical", "Master-detail", "Self-lookup only"],
  "External lookup is designed for a Salesforce child related to an external object parent.",
);
add(
  "Object Relationships",
  "relationships",
  "Which relationship type is appropriate when an external child object must match a Salesforce parent by an external key?",
  "Indirect lookup",
  ["External lookup", "Hierarchical", "Self-relationship"],
  "An indirect lookup uses an external ID field on the Salesforce parent for matching.",
);
add(
  "Object Relationships",
  "relationships",
  "What is inherited by a master-detail child that is not independently controlled?",
  "Sharing access and ownership",
  [
    "Its parent object's field values",
    "The parent's record type",
    "Its parent's page layout",
  ],
  "Master-detail children inherit sharing and ownership characteristics from their master.",
);
add(
  "Object Relationships",
  "relationships",
  "Does a junction object's existence eliminate the need for its two parent records?",
  "No; it relates records that exist on the two parent objects",
  [
    "Yes; it replaces both parent objects",
    "Yes; each junction row creates its parents automatically",
    "Only if both masters are standard objects",
  ],
  "A junction record links two parent records; it does not replace them.",
);

add(
  "Roll-Ups and Formulas",
  "rollups",
  "Which aggregation is not a built-in Roll-Up Summary field operation?",
  "Average",
  ["Count", "Minimum", "Maximum"],
  "The supported native roll-up operations are COUNT, SUM, MIN, and MAX, not AVG.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "Which set lists supported standard roll-up summary operations?",
  "COUNT, SUM, MIN, and MAX",
  [
    "COUNT, AVG, MEDIAN, and MODE",
    "SUM, AVG, FIRST, and LAST",
    "MIN, MAX, DISTINCT, and GROUP BY",
  ],
  "Standard roll-up summary fields support count, sum, minimum, and maximum.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "How can an average be represented when no AVG roll-up is available?",
  "Create a sum and count roll-up, then divide them in a formula",
  [
    "Use a MIN roll-up as an average",
    "Use a cross-object formula to aggregate all children",
    "Use a COUNT roll-up and multiply by the total",
  ],
  "A sum divided by a count can provide an average value.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "Which relationship usually supports a custom roll-up summary field?",
  "Master-detail",
  [
    "Any formula relationship",
    "Any external lookup",
    "Only a hierarchical relationship",
  ],
  "Native custom roll-up summary fields are based on master-detail relationships, subject to documented exceptions.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "What kind of value is a Roll-Up Summary field intended to show on the master?",
  "An aggregate calculated from related detail records",
  [
    "A value copied from a user's profile",
    "A value retrieved from an unrelated object",
    "The result of an external HTTP call",
  ],
  "Roll-up summaries aggregate values from related detail records.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "Can a Long Text Area field be used in a roll-up summary filter?",
  "No",
  [
    "Yes, if the filter uses an exact match",
    "Yes, but only for COUNT roll-ups",
    "Only when the master is a standard object",
  ],
  "Long Text Area fields can’t be used in the field column of roll-up summary filters.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "A roll-up source formula includes TODAY(). Why can this be a limitation?",
  "Dynamic functions such as TODAY() are restricted in roll-up source formulas",
  [
    "TODAY() can only run in a trigger",
    "Roll-ups cannot reference Date values at all",
    "The master must be a User record",
  ],
  "Roll-up summary considerations restrict formulas that use dynamic functions such as TODAY() or NOW().",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "A roll-up source formula references a field on another related object. What is the concern?",
  "Cross-object formula references can make the formula ineligible for a roll-up",
  [
    "Cross-object references turn it into a lookup",
    "It causes the child record to be deleted",
    "It makes the master field read-only",
  ],
  "Cross-object references are among the formula patterns restricted in roll-up summaries.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "In a multicurrency org, which record determines a roll-up summary's currency display?",
  "The master record",
  [
    "The user viewing the page",
    "The oldest detail record",
    "The corporate currency setting only",
  ],
  "Roll-up summary values display in the currency of the master record.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "A data model requires an average of child values. What is a native declarative workaround?",
  "Maintain child count and child sum, then calculate Sum / Count",
  [
    "Use a MAX roll-up and rename it Average",
    "Use a formula directly over every child record",
    "Create a hierarchy relationship",
  ],
  "A count and sum roll-up combined in a formula approximates the desired average.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "Can a custom roll-up summary field aggregate children across an ordinary lookup by default?",
  "No; standard custom roll-ups require master-detail, barring specific standard exceptions",
  [
    "Yes, every lookup supports all four roll-up types",
    "Only if the lookup field is optional",
    "Only from a Visualforce page",
  ],
  "Native custom roll-ups are tied to master-detail, although Salesforce documents some standard-object exceptions.",
);
add(
  "Roll-Ups and Formulas",
  "dynamicForms",
  "When a parent field is needed on a Lightning record page, what can Dynamic Forms provide?",
  "A way to place fields directly on the page without a cross-object formula",
  [
    "A new database relationship",
    "A replacement for field-level security",
    "A way to average children",
  ],
  "Dynamic Forms can surface fields directly on Lightning pages without adding a cross-object formula field.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "What does COUNT() in a roll-up summary count?",
  "Related detail records that meet the roll-up filter criteria",
  [
    "Distinct field values only",
    "Only detail records created by the current user",
    "Parent records in the organization",
  ],
  "A count roll-up counts related detail records matching its criteria.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "Which value does a MIN roll-up return?",
  "The smallest value among the qualifying related records",
  [
    "The number of qualifying related records",
    "The average of qualifying values",
    "The most recently modified value",
  ],
  "MIN returns the minimum value from the selected detail records.",
);
add(
  "Roll-Ups and Formulas",
  "rollups",
  "Which value does a MAX roll-up return?",
  "The largest value among the qualifying related records",
  [
    "The sum of qualifying values",
    "The number of distinct values",
    "The earliest-created detail record",
  ],
  "MAX returns the maximum value from qualifying detail records.",
);
add(
  "Roll-Ups and Formulas",
  "schemaBuilder",
  "Which tool is designed to build or visualize Salesforce object relationships on one screen?",
  "Schema Builder",
  [
    "Apex Replay Debugger",
    "Developer Console Query Editor",
    "Lightning Message Service",
  ],
  "Schema Builder provides a visual interface to create and view data models.",
);
add(
  "Roll-Ups and Formulas",
  "schemaBuilderConsiderations",
  "Which task is a Schema Builder limitation noted in the attempt notes?",
  "Setting field-level security directly",
  [
    "Creating custom objects",
    "Adding fields to an object",
    "Viewing relationships",
  ],
  "Schema Builder does not provide direct field-level security configuration.",
);
add(
  "Roll-Ups and Formulas",
  "crossObjectFormula",
  "A formula must pull data from a parent record. Which formula feature is intended for this?",
  "Cross-object formula",
  ["Roll-up summary", "External ID", "Trigger context variable"],
  "Cross-object formulas reference fields on parent records in a relationship.",
);
add(
  "Roll-Ups and Formulas",
  "lookupRollupFlow",
  "What should you use instead of a roll-up summary when a lookup relationship must remain?",
  "A declarative flow or code-based aggregation pattern",
  [
    "A second master-detail relationship to the same parent",
    "A field history setting",
    "An External ID on the child",
  ],
  "A lookup-based roll-up generally requires automation or code rather than a standard custom roll-up field.",
);

add(
  "Apex Classes and Scope",
  "static",
  "How do you call a static Apex method?",
  "By referring to the class without instantiating it",
  [
    "Only through a new instance of the class",
    "Only from a trigger",
    "By calling it through a record ID",
  ],
  "Static methods are associated with the class and do not require an instance.",
);
add(
  "Apex Classes and Scope",
  "static",
  "How long does a class static variable persist in Apex?",
  "Within the current transaction",
  [
    "Across all transactions until logout",
    "Permanently in the org database",
    "Until the class is redeployed",
  ],
  "A static variable persists for one transaction and resets across transaction boundaries.",
);
add(
  "Apex Classes and Scope",
  "static",
  "Can an Apex class itself be declared static?",
  "No; Apex classes cannot be static",
  [
    "Yes, but only top-level classes",
    "Yes, if it contains only static methods",
    "Only inner classes can be static",
  ],
  "Apex permits static methods and variables, but not static classes.",
);
add(
  "Apex Classes and Scope",
  "static",
  "What can a static method not directly use from its class?",
  "Instance member variables",
  ["Other static methods", "Static variables", "Parameters passed to it"],
  "A static method has no object instance and cannot access instance-member values.",
);
add(
  "Apex Classes and Scope",
  "static",
  "A recursion guard must persist across multiple trigger invocations in one transaction. Where should its static variable live?",
  "In a class",
  ["Only in the trigger body", "In a Visualforce getter", "In a custom label"],
  "A class static variable persists across trigger contexts within a transaction; trigger statics have different behavior.",
);
add(
  "Apex Classes and Scope",
  "static",
  "Which Apex access modifier is the default for a method or variable when omitted?",
  "private",
  ["public", "global", "protected"],
  "If no access modifier is specified, a method or variable is private.",
);
add(
  "Apex Classes and Scope",
  "modifiers",
  "Within Apex, what does public generally allow?",
  "Access by Apex in the same package",
  [
    "Access from any org and every package",
    "Access only in the declaring class",
    "Access only from a Visualforce page",
  ],
  "Apex public visibility is package-scoped; global is for broader cross-application access.",
);
add(
  "Apex Classes and Scope",
  "modifiers",
  "When is global typically needed for an Apex method?",
  "When it must be referenced outside its application, such as by SOAP API",
  [
    "Whenever another class in the same package calls it",
    "For all private helper methods",
    "Only for static methods",
  ],
  "Global is the broadest access modifier and is needed for API/external application use.",
);
add(
  "Apex Classes and Scope",
  "modifiers",
  "What must also be true if a method is global?",
  "Its containing class must be global",
  [
    "The class must be abstract",
    "The class must be an inner class",
    "The method must be static",
  ],
  "A global method or variable requires a global containing class.",
);
add(
  "Apex Classes and Scope",
  "modifiers",
  "What does protected visibility allow in Apex?",
  "Access by inner classes and classes that extend the defining class",
  [
    "Access by every package in the org",
    "Access only in the same method",
    "Access only from a trigger",
  ],
  "Protected is available to inner classes and subclasses.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "What distinguishes an abstract method from a virtual method?",
  "An abstract method has no implementation body and requires an abstract class",
  [
    "A virtual method cannot be overridden",
    "An abstract method must be static",
    "A virtual method has no signature",
  ],
  "Abstract methods declare behavior without a body; virtual methods provide an implementation that can be overridden.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "What does an enum represent in Apex?",
  "A fixed set of named values",
  [
    "An ordered database query",
    "A dynamic schema map",
    "An asynchronous job queue",
  ],
  "Enums are appropriate for a finite set of named identifiers.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "Which modifier communicates that a class uses its caller's sharing context?",
  "inherited sharing",
  ["global sharing", "public sharing", "dynamic sharing"],
  "inherited sharing lets the class inherit the sharing mode of its caller.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "Do inner Apex classes automatically inherit the sharing declaration of their outer class?",
  "No; specify the intended sharing behavior explicitly",
  [
    "Yes, always with sharing",
    "Yes, always without sharing",
    "Only if the inner class is public",
  ],
  "Inner classes do not automatically inherit their container's sharing setting.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "Can an inner class use a static method in Apex?",
  "No; static methods and variables are allowed only in outer classes",
  [
    "Yes, if the inner class is public",
    "Only when nested three levels deep",
    "Only from an abstract inner class",
  ],
  "The Apex static-method guide limits static members to outer classes.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "What does the final modifier communicate for a variable?",
  "Its value cannot be reassigned after initialization",
  [
    "It is visible outside the package",
    "It is automatically persisted",
    "It runs asynchronously",
  ],
  "A final variable is assigned once and cannot be reassigned.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "What happens to a local variable when execution leaves its block?",
  "Its scope ends with that block",
  [
    "It becomes a class static variable",
    "It persists to the next transaction",
    "It is added to the view state",
  ],
  "Local variables are associated with the block of code in which they are declared.",
);
add(
  "Apex Classes and Scope",
  "classDef",
  "When implementing an interface, which must match the declared contract?",
  "Method signature types and parameter order",
  [
    "Parameter names exactly",
    "Comments and annotations exactly",
    "The names of local variables",
  ],
  "Interface implementation requires matching method signatures; parameter names may differ.",
);
add(
  "Apex Classes and Scope",
  "modifiers",
  "A public method must be callable from an unrelated managed package. Is public sufficient?",
  "Not generally; cross-application use requires global visibility",
  [
    "Yes, public always means global in Apex",
    "No, it must be private",
    "No, it must be protected",
  ],
  "Apex public is package-scoped; global exposes the API across application boundaries.",
);

add(
  "Flows",
  "flowError",
  "What is the purpose of the Flow Custom Error element?",
  "To display an error and stop the triggering record operation",
  [
    "To send a platform event after commit",
    "To update a field without saving",
    "To create a debug log",
  ],
  "A Custom Error element surfaces a configured message and prevents the triggering transaction from proceeding.",
);
add(
  "Flows",
  "flowError",
  "A flow must block a record save with a user-facing validation message. Which element fits?",
  "Custom Error",
  ["Assignment", "Get Records", "Pause"],
  "Custom Error is designed to show a message and prevent an operation.",
);
add(
  "Flows",
  "flowSecurity",
  "In a Flow running in System Context with Sharing, what does 'with sharing' affect?",
  "Record-level sharing access",
  [
    "Field-level security only",
    "The order of flow elements",
    "Apex class visibility",
  ],
  "Sharing controls record-level visibility; system context can still bypass object and field permissions.",
);
add(
  "Flows",
  "operators",
  "Which Flow Get Records operator checks whether a value is in a collection?",
  "In",
  ["Contains All", "Matches Any", "Is Member Of"],
  "The Get Records filter supports In and Not In for comparing values with collections.",
);
add(
  "Flows",
  "operators",
  "Which pair of operators can compare a field against a collection in Get Records?",
  "In and Not In",
  [
    "Before and After",
    "Contains and Starts With",
    "Equals Any and Equals None",
  ],
  "The Flow operator reference includes In and Not In for collection-based filtering.",
);
add(
  "Flows",
  "orchestration",
  "Where can an admin inspect stage/step completion times and assignees for a Flow Orchestration run?",
  "The Orchestration Run Details page",
  [
    "The Apex Jobs page",
    "The Lightning App Builder",
    "The Flow formula editor",
  ],
  "Orchestration Run Details provides operational run and assignment information.",
);
add(
  "Flows",
  "flowTest",
  "Which metadata type represents the configuration of a Salesforce flow test?",
  "FlowTest",
  ["FlowDefinition", "FlowInterview", "FlowRecordRelation"],
  "FlowTest represents metadata associated with a flow test.",
);
add(
  "Flows",
  "flowSecurity",
  "Which Flow context choice explicitly respects record sharing?",
  "System Context with Sharing",
  [
    "System Context without Sharing",
    "User Context without Sharing",
    "Anonymous Context",
  ],
  "The 'with sharing' setting controls record sharing in a system-context flow.",
);
add(
  "Flows",
  "flowSecurity",
  "Does 'with sharing' alone enforce Apex field-level security?",
  "No; it governs record-level sharing, not CRUD/FLS",
  [
    "Yes, it enforces every permission automatically",
    "Yes, but only on insert",
    "No, it disables all security",
  ],
  "Sharing keywords apply to record-level access; object and field permissions are separate.",
);
add(
  "Flows",
  "flowError",
  "What should happen after a Custom Error is raised in a record-triggered flow?",
  "The triggering operation is blocked and the message is shown",
  [
    "The record is committed and an email is queued",
    "Only the flow interview is paused",
    "The error is converted into a warning",
  ],
  "The custom error action prevents the record operation from continuing.",
);
add(
  "Flows",
  "operators",
  "A Flow should exclude records whose Status appears in a collection. Which operator is appropriate?",
  "Not In",
  ["Is Null", "Greater Than", "Starts With"],
  "Not In tests whether a field's value is absent from the specified collection.",
);
add(
  "Flows",
  "flowTest",
  "Which required FlowTest field identifies the API name of the flow under test?",
  "flowApiName",
  ["flowVersionNumber", "testType", "label"],
  "The FlowTest metadata reference requires flowApiName and defines it as the associated flow’s API name.",
);
add(
  "Flows",
  "orchestration",
  "An admin needs to monitor who was assigned each orchestration step. Where should they look?",
  "Orchestration Run Details",
  [
    "Setup Audit Trail only",
    "The debug log's Database category",
    "The object manager relationship list",
  ],
  "The orchestration monitoring page shows step status and assignee details.",
);
add(
  "Flows",
  "flowSecurity",
  "What does System Context without Sharing imply about record-level sharing?",
  "The flow can operate without enforcing the running user's sharing access",
  [
    "It enforces sharing but ignores field security",
    "It runs only for system administrators",
    "It cannot read records",
  ],
  "Without Sharing does not enforce record-level sharing in the usual way.",
);
add(
  "Flows",
  "flowSecurity",
  "What is the safer design principle when a Flow needs only selected records?",
  "Use the intended sharing context and explicit criteria",
  [
    "Always run without sharing",
    "Remove all Get Records filters",
    "Use a screen flow instead of record-triggered flow",
  ],
  "Choose context deliberately and constrain data access to the intended records.",
);
add(
  "Flows",
  "flowError",
  "Which element would you use to stop a flow path with a custom message instead of merely assigning a value?",
  "Custom Error",
  ["Assignment", "Loop", "Collection Sort"],
  "Custom Error provides transaction-blocking feedback rather than a data assignment.",
);
add(
  "Flows",
  "operators",
  "What data shape is expected on the right side of an In operator?",
  "A collection of candidate values",
  [
    "A single formula string only",
    "A record ID field only",
    "An Apex class name",
  ],
  "In/Not In operators compare a field with values in a collection.",
);
add(
  "Flows",
  "orchestration",
  "What operational detail is associated with a Flow Orchestration stage?",
  "Step completion and assignment information",
  ["Apex test coverage", "SOQL query plan cost", "Scratch-org expiration date"],
  "The run details monitor orchestration stages and steps.",
);
add(
  "Flows",
  "flowTest",
  "What does the FlowTest testType value WithAssertion specify?",
  "The test compares the actual flow outcome with an expected outcome defined by assertions",
  [
    "The test skips all outcome checks",
    "The test runs only the flow’s start element",
    "The test disables flow error handling",
  ],
  "WithAssertion indicates an automated comparison of actual and user-defined expected flow outcomes.",
);
add(
  "Flows",
  "flowError",
  "What is a Custom Error message intended to communicate?",
  "Why the record-triggering action cannot continue",
  [
    "A successful commit ID",
    "A scheduled job's next run",
    "A list of all database records",
  ],
  "The configured error message explains the blocked operation to the user.",
);

add(
  "SOQL and DML",
  "aggregates",
  "How do you summarize query results by a field in SOQL?",
  "Use GROUP BY with aggregate functions",
  [
    "Use ORDER BY with a trigger",
    "Use LIMIT with DML",
    "Use FOR UPDATE with a formula",
  ],
  "SOQL aggregate queries combine aggregate functions with GROUP BY.",
);
add(
  "SOQL and DML",
  "aggregates",
  "What does COUNT(fieldName) count in a grouped aggregate query?",
  "Non-null values of that field in each group",
  [
    "Every object type in the org",
    "Only distinct values unless DISTINCT is added",
    "The number of query statements",
  ],
  "COUNT(fieldName) counts non-null values of that field.",
);
add(
  "SOQL and DML",
  "dmlObjects",
  "Which statement about some metadata/setup objects such as Profile is true?",
  "They can be queried but do not support ordinary DML",
  [
    "They support insert but not query",
    "They can only be changed by triggers",
    "They are not represented in Salesforce APIs",
  ],
  "Certain setup/metadata objects can be queried but are not available for standard DML.",
);
add(
  "SOQL and DML",
  "database",
  "What does Database.insert(records, false) allow?",
  "Successful rows can be saved even if other rows fail",
  [
    "All rows roll back on any error",
    "The insert runs asynchronously",
    "The records bypass validation rules",
  ],
  "Setting allOrNone to false enables partial success.",
);
add(
  "SOQL and DML",
  "saveResult",
  "What does each Database.SaveResult correspond to after a list DML operation?",
  "The record at the same index in the input list",
  [
    "The record with the same database ID",
    "The most recently modified record",
    "A group of 200 input records",
  ],
  "SaveResult entries correspond index by index to their input sObjects.",
);
add(
  "SOQL and DML",
  "database",
  "Which return type is useful for inspecting per-record success after partial Database DML?",
  "Database.SaveResult",
  [
    "Schema.SObjectType",
    "ApexPages.StandardSetController",
    "System.TriggerOperation",
  ],
  "SaveResult reports whether an individual record succeeded and any errors.",
);
add(
  "SOQL and DML",
  "database",
  "How many records can a single Apex merge statement process at most?",
  "Three: one master and up to two records to merge",
  [
    "Two: one master and one record",
    "Four: one master and three records",
    "Unlimited records",
  ],
  "The merge operation supports one master record and up to two records being merged.",
);
add(
  "SOQL and DML",
  "dmlObjects",
  "What should developers check before attempting DML on a setup or metadata sObject?",
  "Whether Salesforce supports DML for that object",
  [
    "Whether it has a page layout",
    "Whether it has a formula field",
    "Whether its name contains __c",
  ],
  "Not every queryable sObject supports ordinary DML operations.",
);
add(
  "SOQL and DML",
  "sobject",
  "Which SObject method adds an error to a record or field?",
  "addError()",
  ["getErrors()", "hasErrors()", "getPopulatedFieldsAsMap()"],
  "addError() attaches an error that prevents the affected record operation.",
);
add(
  "SOQL and DML",
  "sobject",
  "Which SObject method checks whether an instance has errors?",
  "hasErrors()",
  ["addError()", "isSet()", "getSObjectType()"],
  "hasErrors() reports whether errors are attached to the sObject instance.",
);
add(
  "SOQL and DML",
  "sobject",
  "Which method retrieves errors attached to an SObject?",
  "getErrors()",
  ["getPopulatedFieldsAsMap()", "getSObjectType()", "getOptions()"],
  "getErrors() returns Database.Error entries associated with the instance.",
);
add(
  "SOQL and DML",
  "aggregates",
  "Which clause groups rows for aggregate results?",
  "GROUP BY",
  ["HAVING BY", "ORDER GROUP", "PARTITION"],
  "GROUP BY groups rows by one or more fields for aggregate calculations.",
);
add(
  "SOQL and DML",
  "database",
  "What does upsert use to decide whether to insert or update a record?",
  "A record ID or a configured matching field such as an External ID",
  [
    "Only the record Name",
    "Only a trigger static variable",
    "The current user's profile",
  ],
  "Upsert matches records by ID or a specified external ID field.",
);
add(
  "SOQL and DML",
  "database",
  "When is Database.insert(records, false) preferable to all-or-none DML?",
  "When valid records should succeed even if some records fail",
  [
    "When a transaction must be atomic",
    "When no record should be saved",
    "When inserting metadata types",
  ],
  "Partial DML allows successful records to proceed independently from failures.",
);
add(
  "SOQL and DML",
  "sobject",
  "Can addError() be attached to a record in a trigger to prevent its save?",
  "Yes",
  [
    "No, it is only for Visualforce pages",
    "Only on after undelete",
    "Only from a batch job",
  ],
  "Triggers can use addError() to surface a validation failure and block the operation.",
);
add(
  "SOQL and DML",
  "database",
  "What happens to all records when allOrNone is true and one row fails?",
  "The operation fails as a whole",
  [
    "Successful rows always commit",
    "The failed row is silently skipped",
    "The operation automatically retries asynchronously",
  ],
  "All-or-none behavior rolls back the DML operation when any record fails.",
);
add(
  "SOQL and DML",
  "aggregates",
  "Which function returns the sum of numeric field values in a SOQL aggregate query?",
  "SUM()",
  ["COUNT()", "MIN()", "GROUPING()"],
  "SUM() totals the values of a numeric field.",
);
add(
  "SOQL and DML",
  "aggregates",
  "Which aggregate function returns the maximum field value?",
  "MAX()",
  ["SUM()", "COUNT()", "AVG()"],
  "MAX() returns the maximum value for the grouped records.",
);
add(
  "SOQL and DML",
  "database",
  "What does undelete restore records from?",
  "The Recycle Bin",
  ["A debug log", "A static resource", "A scratch org snapshot"],
  "Undelete restores eligible deleted records from the Recycle Bin.",
);
add(
  "SOQL and DML",
  "database",
  "What does Database.setSavepoint() return?",
  "A savepoint handle usable by Database.rollback()",
  ["A SaveResult array", "A query locator", "A transaction ID string"],
  "A savepoint marks a point in the transaction to which rollback can return.",
);

add(
  "Apex Triggers and Context",
  "order",
  "What effect can a workflow field update have on update-trigger execution?",
  "It can invoke before-update and after-update triggers one additional time",
  [
    "It can invoke all triggers indefinitely",
    "It commits the transaction immediately",
    "It skips validation for the record",
  ],
  "A workflow field update can cause one additional update-trigger pass.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "In which trigger context can Trigger.new records be modified?",
  "Before triggers",
  ["After triggers", "After delete triggers", "All trigger contexts"],
  "Trigger.new records are editable only in before contexts.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "Which trigger context provides the old version of records on update?",
  "Trigger.old",
  ["Trigger.new", "Trigger.newMap only", "Trigger.size"],
  "Trigger.old contains old sObject versions in update and delete contexts.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "What does Trigger.size represent?",
  "The number of records in the current trigger invocation batch",
  [
    "The total number of rows in the org",
    "The total number of records across every DML batch",
    "The number of fields on Trigger.new",
  ],
  "Trigger.size is the size of the current trigger batch.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "Which context variable indicates that the current operation is an undelete?",
  "Trigger.isUndelete",
  ["Trigger.isDelete", "Trigger.isAfter", "Trigger.isExecuting"],
  "isUndelete() is true when records are restored from the Recycle Bin.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "When is Trigger.newMap available?",
  "Before update, after insert, after update, and after undelete",
  [
    "Before insert and before delete only",
    "Every trigger context",
    "After delete only",
  ],
  "Salesforce documents newMap availability for those four trigger contexts.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "Is Trigger.old available in an insert trigger?",
  "No; old is available for update and delete",
  [
    "Yes, it contains null-valued records",
    "Yes, it contains the new records",
    "Only for before insert",
  ],
  "There are no prior record versions in insert contexts.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "What should a before trigger do when changing fields on the record being saved?",
  "Modify the corresponding Trigger.new record",
  [
    "Issue a second update DML on Trigger.new",
    "Change Trigger.old",
    "Modify Trigger.newMap keys",
  ],
  "Before-trigger records can be changed directly before Salesforce saves them.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "What does Trigger.isExecuting report?",
  "Whether the current Apex execution context is a trigger",
  [
    "Whether the current user is an administrator",
    "Whether a transaction has committed",
    "Whether the trigger has an error",
  ],
  "isExecuting identifies trigger execution context.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "Which variable maps record IDs to the old versions of records?",
  "Trigger.oldMap",
  ["Trigger.newMap", "Trigger.old", "Trigger.operationType"],
  "oldMap is the ID-to-old-record map for update and delete contexts.",
);
add(
  "Apex Triggers and Context",
  "triggerContext",
  "What type of value does Trigger.operationType return?",
  "A System.TriggerOperation enum",
  [
    "A String containing an object API name",
    "A Database.SaveResult",
    "A Schema.SObjectType token",
  ],
  "operationType returns the enum identifying the trigger operation.",
);

add(
  "Governor Limits and Bulkification",
  "limits",
  "What enforces Apex transaction limits in Salesforce's multitenant runtime?",
  "The Apex governor-limit system",
  [
    "A Flow assignment element",
    "The browser's JavaScript engine",
    "The org's page layouts",
  ],
  "The Apex runtime enforces governors to help protect shared platform resources.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What is the current per-transaction synchronous Apex limit for DML statements?",
  "150",
  ["50", "100", "500"],
  "The execution governor table lists 150 DML statements for both synchronous and asynchronous Apex.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What is the synchronous per-transaction SOQL query limit listed in the Apex governor table?",
  "100",
  ["50", "150", "200"],
  "The synchronous limit is 100 SOQL queries; the asynchronous limit differs.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "How many records can synchronous Apex retrieve using SOQL per transaction?",
  "50,000",
  ["10,000", "20,000", "200,000"],
  "The documented per-transaction SOQL row limit is 50,000.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What kind of exception occurs when Apex exceeds a governor limit?",
  "An unhandled, uncatchable limit exception",
  [
    "A warning that can always be ignored",
    "A validation rule error only",
    "A successful partial result",
  ],
  "Governor limit violations cause runtime exceptions that cannot be handled.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "Why should SOQL queries generally be kept out of a loop over records?",
  "The loop can consume the per-transaction query limit",
  [
    "SOQL cannot be used in Apex methods",
    "Loops prevent field-level security",
    "Queries in loops always return duplicate rows",
  ],
  "Bulkifying queries avoids exhausting governor limits as the number of records grows.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "Which Limits method reports the number of DML statements already used?",
  "Limits.getDMLStatements()",
  ["Limits.getDMLRows()", "Limits.getQueries()", "Limits.getHeapSize()"],
  "getDMLStatements() returns the count of DML statements used in the transaction.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "Which Limits method reports the number of records processed by DML?",
  "Limits.getDMLRows()",
  ["Limits.getDMLStatements()", "Limits.getQueries()", "Limits.getCpuTime()"],
  "DML rows count records processed; DML statements count calls.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "How does a SOQL for loop help with large query result sets?",
  "It processes records in chunks to reduce heap pressure",
  [
    "It bypasses the SOQL row limit",
    "It runs one transaction per record",
    "It converts the query to SOSL",
  ],
  "SOQL for loops process query rows in chunks rather than requiring one large in-memory list.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What is the purpose of bulkifying a trigger handler?",
  "Handle many records within a small number of queries and DML statements",
  [
    "Force one trigger invocation per record",
    "Disable validation for bulk loads",
    "Increase the governor limits",
  ],
  "Bulkified code handles collections while respecting transaction limits.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What is the maximum number of DML rows processed per transaction in the governor table?",
  "10,000",
  ["150", "50,000", "100,000"],
  "The Apex governor table lists 10,000 DML-processed records per transaction.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What does Limits.getLimitDMLStatements() return?",
  "The transaction's total allowed DML statement limit",
  [
    "The number of DML statements already used",
    "The number of DML rows processed",
    "The number of records in Trigger.new",
  ],
  "getLimitDMLStatements() returns the limit; getDMLStatements() returns current usage.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "When are per-transaction limits reset for each Batch Apex execute method?",
  "At the start of each execute batch",
  [
    "Only when the entire batch job finishes",
    "After every record",
    "Never during a batch job",
  ],
  "For Batch Apex, per-transaction limits reset for each execute method batch.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "How many synchronous Apex jobs can be added to the queue with System.enqueueJob in one transaction?",
  "50",
  ["1", "10", "150"],
  "The current limit table lists 50 queued jobs for synchronous Apex and 1 for asynchronous contexts.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What should a developer do when processing thousands of records in a trigger?",
  "Query and perform DML on collections outside the per-record loop",
  [
    "Issue one query and one DML call per record",
    "Use a static variable to bypass all limits",
    "Split the trigger into multiple triggers",
  ],
  "Collection-based query and DML patterns avoid limit consumption scaling with each record.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "Does the governor limit for retrieved query rows increase just because Apex is asynchronous?",
  "No; the listed SOQL row limit remains 50,000",
  [
    "Yes, it becomes unlimited",
    "Yes, it becomes 100,000",
    "Only for future methods",
  ],
  "The governor table lists 50,000 retrieved SOQL rows for both sync and async Apex.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What does Limits.getDMLRows() measure?",
  "Records processed by DML operations",
  [
    "The number of DML calls",
    "The number of triggers fired",
    "The rows returned by SOQL",
  ],
  "DML rows are record counts, not the number of DML statements.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What is the documented synchronous Apex CPU limit per transaction?",
  "10,000 milliseconds",
  ["1,000 milliseconds", "60,000 milliseconds", "120,000 milliseconds"],
  "The governor table lists 10,000 ms sync CPU and 60,000 ms async CPU.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "Which resource is tracked by a maximum of 10 MB in synchronous Apex?",
  "Heap size",
  ["SOQL rows", "Callout timeout", "Trigger recursion depth"],
  "The governor table lists 10 MB synchronous heap and 25 MB asynchronous heap.",
);
add(
  "Governor Limits and Bulkification",
  "limits",
  "What is the synchronous transaction limit for HTTP/web-service callouts?",
  "100",
  ["10", "50", "150"],
  "The governor table lists 100 callouts per transaction.",
);

add(
  "Apex Types and Transactions",
  "dataTypes",
  "Which Apex type should represent a currency or decimal number?",
  "Decimal",
  ["Currency", "Number", "Float"],
  "Apex uses Decimal for decimal or currency-like numeric values; it has no Currency or Number primitive.",
);
add(
  "Apex Types and Transactions",
  "dataTypes",
  "Which Apex collection enforces uniqueness of its elements?",
  "Set",
  ["List", "Map", "ArrayList"],
  "A Set stores unique elements.",
);
add(
  "Apex Types and Transactions",
  "dataTypes",
  "Which collection maps unique keys to values?",
  "Map",
  ["List", "Set", "Queue"],
  "A Map associates keys with values.",
);
add(
  "Apex Types and Transactions",
  "dataTypes",
  "Which loop executes its body at least once before checking the condition?",
  "do-while",
  ["while", "for", "SOQL for"],
  "A do-while loop evaluates its condition after the first body execution.",
);
add(
  "Apex Types and Transactions",
  "customExceptions",
  "How do you instantiate and throw a custom exception with a message?",
  "throw new MyException('message');",
  [
    "throw MyException('message');",
    "new throw MyException;",
    "System.addError(MyException);",
  ],
  "A custom exception instance is created with new and then thrown.",
);
add(
  "Apex Types and Transactions",
  "sobject",
  "What is a common way for a trigger to surface a record-specific validation error?",
  "Call addError() on the record or field",
  [
    "Throw a LimitException",
    "Write to System.debug()",
    "Return false from the trigger",
  ],
  "addError() blocks the record operation and exposes a validation-style error.",
);
add(
  "Apex Types and Transactions",
  "callouts",
  "Why can a synchronous callout fail after uncommitted DML in the same Apex transaction?",
  "Salesforce can report uncommitted work pending",
  [
    "SOQL cannot follow DML",
    "A callout requires a trigger context",
    "The callout deletes the savepoint",
  ],
  "Apex callouts generally cannot follow pending DML in the same transaction.",
);
add(
  "Apex Types and Transactions",
  "callouts",
  "Which transaction state can cause a synchronous Apex callout to fail with 'uncommitted work pending'?",
  "DML changes are still pending in the same transaction",
  [
    "The transaction has no SOQL queries",
    "A savepoint has already been committed",
    "The callout endpoint uses a Named Credential",
  ],
  "Apex can't make a synchronous callout while earlier DML work remains uncommitted in that transaction.",
);
add(
  "Apex Types and Transactions",
  "database",
  "What does Database.rollback(savepoint) undo?",
  "Uncommitted changes made after that savepoint",
  [
    "Changes already committed to the database",
    "The savepoint itself and all earlier transactions",
    "The callout endpoint's authentication settings",
  ],
  "Rollback returns the current transaction to the state recorded at the savepoint.",
);
add(
  "Apex Types and Transactions",
  "callouts",
  "What must be configured for an Apex callout endpoint unless using a Named Credential?",
  "Remote Site Settings",
  ["A custom label", "A record-triggered flow", "A Salesforce queue"],
  "Salesforce blocks unregistered outbound destinations; Named Credentials can supply the endpoint and auth.",
);
add(
  "Apex Types and Transactions",
  "callouts",
  "What does a Named Credential provide for an Apex callout?",
  "An endpoint definition and managed authentication parameters",
  [
    "An External ID on the remote record",
    "A trigger recursion guard",
    "A replacement for an Apex test",
  ],
  "Named Credentials define the endpoint and authentication so code need not manage them directly.",
);
nextQuestionId += 2;
add(
  "Apex Types and Transactions",
  "dataTypes",
  "What does the safe navigation operator ?. do?",
  "Avoids dereferencing a null value by returning null for that access",
  [
    "Throws a custom exception on null",
    "Converts null to zero",
    "Runs the expression asynchronously",
  ],
  "Safe navigation prevents a null dereference while evaluating a chain.",
);
add(
  "Apex Types and Transactions",
  "database",
  "What does Database.rollback(savepoint) do?",
  "Rolls back uncommitted changes to the chosen savepoint",
  ["Commits all work", "Deletes the savepoint only", "Resets governor limits"],
  "Rollback returns the transaction state to a previously established savepoint.",
);
add(
  "Apex Types and Transactions",
  "dataTypes",
  "Which value type is most appropriate for a whole-number count?",
  "Integer",
  ["Decimal only", "Date", "Currency"],
  "Integer represents whole-number values in Apex.",
);
add(
  "Apex Types and Transactions",
  "dataTypes",
  "What does a List allow that a Set does not?",
  "Ordered elements and duplicate values",
  ["Key-value associations", "Only unique values", "A built-in SOQL query"],
  "Lists are ordered and can contain duplicates; sets enforce uniqueness.",
);
add(
  "Apex Types and Transactions",
  "customExceptions",
  "What is the role of a catch block in Apex?",
  "Handle an exception thrown while the try block runs",
  [
    "Retry every statement in the try block",
    "Make all exceptions recoverable",
    "Commit DML after an unhandled exception",
  ],
  "A catch block handles an exception thrown by code in its associated try block.",
);
add(
  "Apex Types and Transactions",
  "callouts",
  "What kind of callout does Apex support?",
  "HTTP and SOAP web-service callouts",
  [
    "Only FTP uploads",
    "Only browser JavaScript requests",
    "Only database-to-database SQL",
  ],
  "Apex supports HTTP services and SOAP/WSDL integrations.",
);
add(
  "Apex Types and Transactions",
  "dataTypes",
  "What are primitive values such as Integer passed as in Apex method arguments?",
  "By value",
  ["By reference only", "As database IDs", "As static fields"],
  "Primitive variables are passed by value; collections and sObjects are reference types.",
);

add(
  "Asynchronous Apex and Events",
  "queueable",
  "What does QueueableDuplicateSignature help prevent?",
  "Duplicate Queueable jobs with the same signature",
  [
    "Duplicate SOQL rows",
    "Trigger recursion from any object",
    "Duplicate platform event schema fields",
  ],
  "Duplicate signatures let Queueable Apex identify equivalent jobs and prevent duplicate enqueues.",
);
add(
  "Asynchronous Apex and Events",
  "queueable",
  "What is a key benefit of Queueable Apex compared with @future methods?",
  "It supports job IDs and chaining additional Queueable work",
  [
    "It runs synchronously",
    "It bypasses governor limits",
    "It can make callouts only from triggers",
  ],
  "Queueable jobs offer job IDs and chaining capabilities.",
);
add(
  "Asynchronous Apex and Events",
  "scheduler",
  "Which Apex type is typically used to run a task on a schedule?",
  "Schedulable Apex",
  [
    "ApexPages.StandardSetController",
    "Schema.SObjectType",
    "Aura application event",
  ],
  "Schedulable Apex can schedule an Apex job to run at a specified time.",
);
add(
  "Asynchronous Apex and Events",
  "scheduler",
  "Which combination is appropriate for processing a large data set nightly?",
  "Batch Apex scheduled by Schedulable Apex",
  [
    "A getter called from Visualforce",
    "One synchronous trigger for all rows",
    "A single screen flow loop",
  ],
  "Batch Apex handles large data volumes in chunks, and Schedulable Apex can launch it on a schedule.",
);
add(
  "Asynchronous Apex and Events",
  "eventsGuide",
  "Which trigger operation do platform event Apex triggers support?",
  "After insert",
  ["Before insert and after update", "Before delete", "After undelete"],
  "Platform event triggers are defined for after insert.",
);
add(
  "Asynchronous Apex and Events",
  "eventsGuide",
  "What suffix identifies a custom platform event sObject?",
  "__e",
  ["__c", "__x", "__p"],
  "Custom platform event API names end in __e.",
);
add(
  "Asynchronous Apex and Events",
  "platformEvents",
  "How can an external system publish a platform event?",
  "Through a Salesforce API, including REST or Pub/Sub API",
  [
    "Only by editing the event in Setup",
    "Only with a Visualforce page",
    "Only by calling an Apex trigger directly",
  ],
  "External applications can publish event messages through Salesforce APIs.",
);
add(
  "Asynchronous Apex and Events",
  "platformEvents",
  "How can Apex publish a platform event?",
  "Use the EventBus.publish method",
  [
    "Use System.enqueueJob with the event as an argument",
    "Use Trigger.newMap.put()",
    "Use Database.merge()",
  ],
  "Apex publishes platform events with EventBus.publish.",
);
nextQuestionId += 2;
add(
  "Asynchronous Apex and Events",
  "eventsGuide",
  "What should an administrator do if a platform event trigger is failing and messages must not be lost?",
  "Suspend the subscription while investigating",
  [
    "Delete the event object",
    "Deactivate the trigger and discard the queue",
    "Change all events to custom settings",
  ],
  "Suspending a subscription pauses delivery while retaining queued event messages.",
);
add(
  "Asynchronous Apex and Events",
  "platformEvents",
  "What is a platform event designed to support?",
  "Decoupled event-based communication between Salesforce and subscribers",
  [
    "A relational database join",
    "A Visualforce page layout",
    "A direct replacement for every SOQL query",
  ],
  "Platform events enable publish/subscribe integrations with decoupled producers and consumers.",
);
add(
  "Asynchronous Apex and Events",
  "platformEvents",
  "Which API uses gRPC and HTTP/2 with Avro-encoded event messages?",
  "Pub/Sub API",
  ["Metadata API", "Tooling API", "Bulk API 1.0"],
  "Salesforce Pub/Sub API supports event publishing and subscription using gRPC/HTTP/2 and Avro.",
);
add(
  "Asynchronous Apex and Events",
  "platformEvents",
  "Can platform events be published by Flow?",
  "Yes",
  [
    "No, only Apex triggers can publish them",
    "Only from a Visualforce controller",
    "Only from Change Sets",
  ],
  "Flow can publish platform events as part of Salesforce automation.",
);
add(
  "Asynchronous Apex and Events",
  "queueable",
  "What does System.pauseJobById() pause?",
  "A scheduled job identified by its CronTrigger ID",
  [
    "A running Queueable job",
    "A database transaction",
    "A Platform Event definition",
  ],
  "The System class pause methods pause scheduled jobs, not AsyncApexJob records.",
);
add(
  "Asynchronous Apex and Events",
  "asyncJobs",
  "Which object commonly reports status and errors for asynchronous Apex jobs?",
  "AsyncApexJob",
  ["CronTrigger only", "ApexLog", "FlowInterview"],
  "AsyncApexJob exposes status and error details for asynchronous Apex work.",
);
add(
  "Asynchronous Apex and Events",
  "scheduler",
  "Which object can be queried to inspect scheduled Apex job status and times triggered?",
  "CronTrigger",
  ["AsyncApexJob only", "ApexClass", "PlatformEventUsageMetric"],
  "CronTrigger tracks the schedule and execution metadata for scheduled jobs.",
);
add(
  "Asynchronous Apex and Events",
  "eventsGuide",
  "What happens if platform-event trigger logic is declared as before insert?",
  "That operation is not supported for platform event triggers",
  [
    "It runs before the event is published",
    "It converts the event into a custom object",
    "It is treated as after undelete",
  ],
  "Platform event Apex triggers support after insert processing.",
);
add(
  "Asynchronous Apex and Events",
  "queueable",
  "What is the purpose of an AsyncOptions maximum Queueable stack depth?",
  "To constrain the depth of Queueable chaining",
  [
    "To increase maximum SOQL queries",
    "To select a platform-event partition",
    "To control browser history",
  ],
  "AsyncOptions can configure the maximum Queueable stack depth for chained jobs.",
);

add(
  "Testing and Test Data",
  "tests",
  "What is the default Apex test access to ordinary pre-existing org records?",
  "Tests cannot access them by default",
  [
    "Tests can read all records but cannot write",
    "Tests can access them only in production",
    "Tests always use SeeAllData=true",
  ],
  "Apex tests are isolated from most existing org data by default.",
);
add(
  "Testing and Test Data",
  "tests",
  "Which is an example of organization/metadata data a test can query by default?",
  "Profile",
  [
    "An arbitrary Account record",
    "A custom object record created by another user",
    "A Contact from production",
  ],
  "Profile is one of the setup/metadata objects accessible in tests.",
);
add(
  "Testing and Test Data",
  "tests",
  "Which annotation allows an Apex test to access existing org data?",
  "@IsTest(SeeAllData=true)",
  ["@TestVisible(true)", "@AuraEnabled", "@ReadOnly"],
  "SeeAllData=true opts out of the default test-data isolation.",
);
add(
  "Testing and Test Data",
  "tests",
  "What is the recommended approach for ordinary records needed by a unit test?",
  "Create the data in the test",
  [
    "Depend on production records",
    "Use SeeAllData=true for every test",
    "Query the Recycle Bin",
  ],
  "Salesforce recommends creating test-specific data rather than relying on org data.",
);
add(
  "Testing and Test Data",
  "standardPricebook",
  "How can a test obtain the standard price book ID?",
  "Test.getStandardPricebookId()",
  [
    "Database.getStandardPricebookId()",
    "Schema.getGlobalDescribe()",
    "System.getPricebookId()",
  ],
  "The testing API provides Test.getStandardPricebookId() for standard price book use.",
);
add(
  "Testing and Test Data",
  "testMethods",
  "How many times can a test method call Test.startTest()?",
  "Once",
  ["Twice", "Once for each asynchronous job", "Any number of times"],
  "The Test class reference limits each test method to one startTest/stopTest pair.",
);
add(
  "Testing and Test Data",
  "testMethods",
  "What does Test.startTest() primarily provide?",
  "A fresh governor-limit context for the code under test",
  [
    "A production data connection",
    "A database commit",
    "A way to disable all assertions",
  ],
  "startTest/stopTest isolate the limit context around the code being tested.",
);
add(
  "Testing and Test Data",
  "testMethods",
  "What happens to asynchronous work enqueued between Test.startTest() and Test.stopTest()?",
  "It is executed during Test.stopTest()",
  [
    "It is never executed in tests",
    "It runs only after deployment",
    "It is converted into a synchronous trigger",
  ],
  "stopTest causes queued asynchronous test work to execute.",
);
add(
  "Testing and Test Data",
  "testing",
  "Which class is recommended for expressing assertions in Apex tests?",
  "Assert",
  ["Limits", "Schema", "EventBus"],
  "Salesforce recommends Assert methods to verify expected test behavior.",
);
add(
  "Testing and Test Data",
  "testing",
  "What is required for production deployment coverage of Apex code?",
  "At least 75% coverage overall and some coverage for every trigger",
  [
    "100% coverage on every class",
    "At least 50% coverage and no trigger tests",
    "Coverage only for managed packages",
  ],
  "Salesforce's deployment requirement is at least 75% overall, and every trigger must have some coverage.",
);
add(
  "Testing and Test Data",
  "testing",
  "Are System.debug() statements counted as executable lines for Apex coverage?",
  "No",
  [
    "Yes, each debug call counts as one covered line",
    "Only when DEBUG level is FINEST",
    "Only in test classes",
  ],
  "System.debug calls are not counted toward Apex code coverage.",
);
add(
  "Testing and Test Data",
  "testing",
  "How many records should a bulk trigger test exercise as a best practice?",
  "At least 20",
  ["Exactly 1", "At most 5", "At least 1,000"],
  "Salesforce recommends exercising bulk trigger functionality, using at least 20 records.",
);
add(
  "Testing and Test Data",
  "testing",
  "What should tests cover when production code contains conditional branches?",
  "Each branch, including valid and invalid input paths",
  [
    "Only the branch that returns true",
    "Only the happy path",
    "No branches if code coverage is above 75%",
  ],
  "Good tests exercise conditional branches and both positive and negative use cases.",
);
add(
  "Testing and Test Data",
  "tests",
  "Can Apex tests access User and RecordType metadata by default?",
  "Yes",
  ["No, never", "Only with SeeAllData=true", "Only if created in @testSetup"],
  "User and RecordType are among setup objects accessible to isolated Apex tests.",
);
add(
  "Testing and Test Data",
  "testing",
  "What does System.runAs() help test?",
  "Behavior under a different user's sharing context",
  [
    "Apex code in a different API version",
    "A database rollback",
    "An external HTTP response",
  ],
  "runAs is used to simulate different user contexts, especially sharing behavior.",
);
add(
  "Testing and Test Data",
  "testSetup",
  "What is the purpose of @testSetup?",
  "Create common test data once for test methods in a class",
  [
    "Disable test isolation",
    "Run a test method asynchronously",
    "Create a production user",
  ],
  "@testSetup provisions reusable data for a test class.",
);
add(
  "Testing and Test Data",
  "testing",
  "How should test code verify that a method returned the intended result?",
  "Use assertions",
  [
    "Rely on System.debug output",
    "Check only that no exception was thrown",
    "Inspect the org manually after the test",
  ],
  "Assertions make expected behavior executable and verifiable.",
);
add(
  "Testing and Test Data",
  "sobject",
  "What is useful about SObject.hasErrors() in a test?",
  "It can verify whether an SObject has an attached error",
  [
    "It verifies a production deployment",
    "It reports the current DML statement count",
    "It pauses an Apex job",
  ],
  "hasErrors() supports checking error state on an SObject instance.",
);
add(
  "Testing and Test Data",
  "testing",
  "Do Apex unit-test database changes persist after the test completes?",
  "No; test data is rolled back",
  [
    "Yes, unless SeeAllData=true",
    "Only setup objects persist",
    "Only records created in @testSetup persist",
  ],
  "Apex test changes do not commit as persistent org data.",
);
add(
  "Testing and Test Data",
  "testRun",
  "Where can developers run Apex tests from Salesforce's tools?",
  "Developer Console, Setup, or Salesforce CLI/VS Code tooling",
  [
    "Only by invoking a Visualforce getter",
    "Only through Change Sets",
    "Only through the App Launcher",
  ],
  "Salesforce provides multiple UI and CLI entry points for running Apex tests.",
);

add(
  "Debugging and Logs",
  "logs",
  "What does a trace flag associate with a target?",
  "A debug level",
  [
    "A test class and a profile",
    "A database transaction and a rollback",
    "A Visualforce page and a layout",
  ],
  "A trace flag assigns a debug level to a user, class, or trigger target.",
);
add(
  "Debugging and Logs",
  "logs",
  "What does a debug level configure?",
  "The log levels for categories such as Apex, Database, and Workflow",
  [
    "The user's object permissions",
    "The org's API version",
    "The maximum records in a SOQL query",
  ],
  "Debug levels define per-category logging verbosity.",
);
add(
  "Debugging and Logs",
  "categories",
  "Which log category captures database operations?",
  "Database",
  ["Apex Profiling", "Visualforce", "Callout"],
  "Database is the category used for database activity.",
);
add(
  "Debugging and Logs",
  "categories",
  "Which log category is used for approval processes and escalation rules?",
  "Workflow",
  ["Database", "Apex Code", "Validation"],
  "Approval processes and escalation rules are logged under Workflow.",
);
add(
  "Debugging and Logs",
  "logs",
  "What Apex Profiling level is called for in the notes to capture LIMIT_USAGE_FOR_NS?",
  "FINEST",
  ["ERROR", "WARN", "INFO"],
  "The notes identify Apex Profiling at FINEST to capture that limit-usage event.",
);
add(
  "Debugging and Logs",
  "debug",
  "Which Developer Console tool presents a context-sensitive view of log execution?",
  "Log Inspector",
  ["Checkpoint Inspector", "Schema Builder", "Flow Orchestration Run Details"],
  "Log Inspector provides panels such as Stack Tree, Execution Log, and Variables.",
);
add(
  "Debugging and Logs",
  "console",
  "Which Developer Console tool inspects checkpoints in Apex?",
  "Checkpoint Inspector",
  ["Log Inspector", "Query Editor", "Anonymous Apex"],
  "Checkpoint Inspector is used to analyze checkpoints set in Apex code.",
);
add(
  "Debugging and Logs",
  "console",
  "Which tabs are associated with Checkpoint Inspector?",
  "Heap and Symbols",
  ["Triggers and Validation", "Flows and Objects", "Queries and Deployments"],
  "Checkpoint Inspector includes a Heap tab and a Symbols tab.",
);
add(
  "Debugging and Logs",
  "debug",
  "Do Apex debug logs capture client-side JavaScript errors?",
  "No",
  [
    "Yes, all browser events are logged",
    "Only when the log level is FINEST",
    "Only on Visualforce pages",
  ],
  "Apex logs do not capture client-side JavaScript events or errors.",
);
add(
  "Debugging and Logs",
  "logs",
  "At what minimum debug level are user-generated System.debug statements visible?",
  "DEBUG",
  ["NONE", "ERROR", "WARN"],
  "User-generated debug output requires at least the DEBUG log level.",
);
add(
  "Debugging and Logs",
  "debug",
  "What marks the beginning and ending of an execution unit in a log?",
  "EXECUTION_STARTED and EXECUTION_FINISHED",
  [
    "LIMIT_USAGE and LIMIT_END",
    "SOQL_BEGIN and SOQL_END",
    "TRANSACTION_OPEN and TRANSACTION_CLOSE",
  ],
  "These events delimit an execution unit.",
);
add(
  "Debugging and Logs",
  "logs",
  "What is a likely effect of setting too many debug categories to very high levels?",
  "The log can become large and be truncated",
  [
    "Governor limits are disabled",
    "Trace flags stop applying",
    "Tests become SeeAllData=true",
  ],
  "High verbosity can exceed log size limits and lead to truncation.",
);
add(
  "Debugging and Logs",
  "debug",
  "Which object can be queried with Tooling API to access Apex debug logs?",
  "ApexLog",
  ["AsyncApexJob", "CronTrigger", "RecordType"],
  "ApexLog is the Tooling API object for debug-log records.",
);
add(
  "Debugging and Logs",
  "debug",
  "What can a Flow debug details panel help inspect?",
  "Flow execution and resource usage details",
  [
    "Apex package code coverage only",
    "Org sandbox refresh dates",
    "LWC bundle CSS",
  ],
  "Flow debug details can help investigate element execution and resource consumption.",
);
add(
  "Debugging and Logs",
  "logs",
  "Which user can be traced to investigate automated processes and data synchronization?",
  "Platform Integration User",
  [
    "Only the current browser user",
    "Guest User only",
    "The deployment connection user",
  ],
  "A trace flag can be set on the Platform Integration User for automated work.",
);
add(
  "Debugging and Logs",
  "categories",
  "Which category is relevant for following record commit operations in a log?",
  "Database",
  ["Apex Profiling", "Validation", "Visualforce"],
  "Record commits are database operations and are logged under Database.",
);
add(
  "Debugging and Logs",
  "console",
  "Where can Apex developers inspect variable values and execution stack in the Developer Console?",
  "Log Inspector",
  ["Checkpoint Inspector only", "Schema Builder", "App Builder"],
  "Log Inspector has the execution and variable-inspection panels.",
);
add(
  "Debugging and Logs",
  "logs",
  "What does a trace flag target identify?",
  "The user, class, or trigger whose execution should be logged",
  [
    "The SOQL field to index",
    "The static resource to deploy",
    "The API version of an org",
  ],
  "Trace flags are configured for logging targets such as users, Apex classes, or triggers.",
);
add(
  "Debugging and Logs",
  "debug",
  "If an automation evaluates but its criteria do not match, can the evaluation still appear in a log?",
  "Yes",
  [
    "No, only successful automations are logged",
    "Only if it commits a record",
    "Only in a test run",
  ],
  "An evaluated automation can appear in the log even if it does not meet its firing criteria.",
);
add(
  "Debugging and Logs",
  "logs",
  "Which entry should be used to increase verbosity for a specific log category?",
  "The debug level assigned through the trace flag",
  [
    "The profile's login hours",
    "The object's record type",
    "The user's locale",
  ],
  "A trace flag references a debug level that sets category verbosity.",
);

add(
  "Deployment and Environments",
  "models",
  "What is the source of truth in package development?",
  "Version control",
  [
    "A change set",
    "The production org's page layout",
    "The Developer Console log",
  ],
  "Package development is source-driven, with source control as the source of truth.",
);
add(
  "Deployment and Environments",
  "changeSetOverview",
  "Which Salesforce feature moves metadata between related orgs using a deployment connection?",
  "Change Sets",
  ["Scratch orgs", "Developer Console", "Lightning Message Service"],
  "Change Sets move metadata customizations between orgs through deployment connections.",
);
add(
  "Deployment and Environments",
  "changeSetOverview",
  "Can a change set deploy between any two unrelated Salesforce orgs?",
  "No; change sets require a deployment connection between related orgs",
  [
    "Yes, any org can accept any change set",
    "Only if both orgs are production",
    "Only if they share a namespace",
  ],
  "Change sets move between related orgs with an authorized deployment connection.",
);
add(
  "Deployment and Environments",
  "metadata",
  "What does it mean when a metadata type is unsupported by Metadata API?",
  "It can’t be retrieved or deployed using Metadata API",
  [
    "It can be retrieved but not deployed",
    "It is deployed automatically after changes",
    "It is available only through Change Sets",
  ],
  "Unsupported metadata types can’t be retrieved or deployed with Metadata API.",
);
add(
  "Deployment and Environments",
  "cliDeploy",
  "Which tool supports scriptable metadata deployment from a Salesforce DX project?",
  "Salesforce CLI",
  ["Change Sets", "Schema Builder", "Developer Console Checkpoint Inspector"],
  "The Salesforce CLI deploy command deploys metadata from a local project to an org.",
);
add(
  "Deployment and Environments",
  "changeSets",
  "What must the receiving org do before accepting an inbound change set?",
  "Authorize the deployment connection from the source org",
  ["Enable SeeAllData", "Create an Apex trigger", "Set the org to System Mode"],
  "The target org must authorize inbound deployments in Deployment Settings.",
);
add(
  "Deployment and Environments",
  "models",
  "What is a scratch org?",
  "A short-lived, configurable org for development and testing",
  [
    "A production replica with a permanent license",
    "A debug log archive",
    "A managed package namespace",
  ],
  "Scratch orgs are temporary development environments created using a Dev Hub.",
);
add(
  "Deployment and Environments",
  "sandboxes",
  "What data does a Full Sandbox contain?",
  "Metadata and all data",
  ["Metadata only", "Metadata and sample data", "Apex code only"],
  "The sandbox feature table lists a Full Sandbox as copying metadata and all data.",
);
add(
  "Deployment and Environments",
  "sandboxes",
  "What does a Partial Copy Sandbox contain?",
  "Metadata and sample data",
  ["Metadata only", "Metadata and all production data", "Apex code only"],
  "The sandbox feature table lists a Partial Copy Sandbox as copying metadata and sample data.",
);
add(
  "Deployment and Environments",
  "sandboxes",
  "What is the refresh interval for a Developer Sandbox?",
  "1 day",
  ["5 days", "29 days", "No scheduled refresh interval"],
  "The sandbox feature table lists a one-day refresh interval for Developer Sandboxes.",
);
add(
  "Deployment and Environments",
  "metadata",
  "How must you change a Salesforce feature whose metadata type isn't available in Metadata API?",
  "Make the change manually in each organization",
  [
    "Deploy it from a scratch org",
    "Retrieve it through Salesforce CLI",
    "Create a managed package for it",
  ],
  "Salesforce says unsupported metadata types must be changed manually in each organization.",
);
add(
  "Deployment and Environments",
  "changeSetOverview",
  "Can a Developer Edition org connect directly to production for change set deployments?",
  "No; the connection is through related sandboxes",
  [
    "Yes, every Developer Edition org is related to production",
    "Only if the org has a scratch org",
    "Only through an Apex trigger",
  ],
  "Developer Edition orgs are not directly connected to production for change sets.",
);
add(
  "Deployment and Environments",
  "models",
  "Which is a component of the Salesforce DX source-driven model?",
  "Salesforce CLI",
  [
    "Change Sets as the sole source of truth",
    "Only production orgs",
    "Apex Replay Debugger",
  ],
  "Salesforce DX uses the CLI and source control alongside development orgs and extensions.",
);
add(
  "Deployment and Environments",
  "sandboxClone",
  "What does cloning a sandbox do?",
  "Copies its data and metadata into another sandbox",
  [
    "It deploys records to production",
    "It increases governor limits",
    "It creates a managed package",
  ],
  "Salesforce describes cloning a sandbox as copying its data and metadata into another sandbox.",
);
add(
  "Deployment and Environments",
  "email",
  "What should be checked first if sandbox email delivery is not working?",
  "Email Deliverability settings",
  [
    "Trace flag expiration",
    "Platform event partitioning",
    "Lightning Message Service",
  ],
  "Sandbox email behavior depends on Email Deliverability settings.",
);
add(
  "Deployment and Environments",
  "sandboxRefreshEmails",
  "For users outside the designated public group, what happens to their email addresses when a sandbox is refreshed?",
  "Salesforce may append .invalid",
  [
    "They are converted to usernames",
    "They are permanently deleted",
    "They become External IDs",
  ],
  "On refresh, Salesforce appends .invalid to email addresses for users outside the designated public group.",
);
add(
  "Deployment and Environments",
  "emailLogs",
  "Which Salesforce feature provides email delivery logs for troubleshooting?",
  "Email Logs",
  ["System Logs", "ApexLog", "Metadata API"],
  "Email Logs, rather than system debug logs, are used to investigate email delivery.",
);
add(
  "Deployment and Environments",
  "cliDeploy",
  "Which Salesforce CLI flag overrides the deployment API version with the value from package.xml?",
  "--api-version",
  ["--async", "--concise", "--ignore-conflicts"],
  "The deploy command's --api-version flag can use the API version from package.xml.",
);
add(
  "Deployment and Environments",
  "changeSetOverview",
  "Can Change Sets deploy record data between organizations?",
  "No; they move metadata customizations",
  [
    "Yes, all records and files",
    "Only if records are included in a package.xml file",
    "Only when deployed by an Apex trigger",
  ],
  "Change Sets transfer metadata customizations, not business record data.",
);
add(
  "Deployment and Environments",
  "cliDeploy",
  "Which deployment option can deploy metadata to unrelated orgs when properly authorized?",
  "Salesforce CLI",
  ["Change Sets", "Schema Builder", "Flow Builder"],
  "The Salesforce CLI is not limited to related org change-set connections.",
);

add(
  "Visualforce Controllers",
  "standardController",
  "What does a Visualforce StandardController reference?",
  "A pre-built Visualforce controller for a standard or custom object",
  [
    "A Platform Event trigger",
    "A Database.SaveResult collection",
    "A Lightning Message Channel",
  ],
  "StandardController objects reference Salesforce’s pre-built Visualforce controllers.",
);
add(
  "Visualforce Controllers",
  "controllerExtension",
  "What is a Visualforce controller extension?",
  "An Apex class that adds behavior to a standard or custom controller",
  [
    "A Lightning Message Channel",
    "A custom setting type",
    "A SOQL relationship query",
  ],
  "An extension supplements a page's controller with additional Apex behavior.",
);
add(
  "Visualforce Controllers",
  "controllerExtension",
  "What constructor signature is required for an extension of a standard controller?",
  "A constructor that accepts ApexPages.StandardController",
  [
    "A constructor that accepts Database.SaveResult",
    "A no-argument constructor only",
    "A constructor that accepts Schema.SObjectType",
  ],
  "A standard-controller extension receives its controller through that constructor parameter.",
);
add(
  "Visualforce Controllers",
  "apexPages",
  "What can ApexPages.currentPage().getParameters().get('id') retrieve?",
  "The id URL parameter",
  ["The current user's profile name", "A SOQL query result", "A debug level"],
  "Visualforce exposes URL parameters through the current page's parameter map.",
);
add(
  "Visualforce Controllers",
  "standardSetController",
  "What happens when a StandardSetController is constructed from a list larger than 10,000 records?",
  "The list is truncated",
  [
    "It automatically creates a QueryLocator",
    "It always throws a LimitException",
    "It stores all records in view state",
  ],
  "The StandardSetController list constructor truncates lists larger than 10,000.",
);
add(
  "Visualforce Controllers",
  "standardSetController",
  "What happens when StandardSetController receives a QueryLocator that exceeds its supported record limit?",
  "It throws a LimitException",
  [
    "It silently truncates the QueryLocator",
    "It converts it to a List",
    "It ignores the query",
  ],
  "The QueryLocator constructor throws when its result exceeds the controller limit.",
);
add(
  "Visualforce Controllers",
  "standardSetController",
  "Which method indicates whether a StandardSetController list result was truncated?",
  "getCompleteResult()",
  ["getSelected()", "getRecord()", "getFilterId()"],
  "getCompleteResult() returns false when the list result was truncated.",
);
add(
  "Visualforce Controllers",
  "standardSetController",
  "Which StandardSetController method returns selected rows?",
  "getSelected()",
  ["getRecord()", "getCompleteResult()", "getListViewOptions()"],
  "getSelected() returns the records selected by the user.",
);
add(
  "Visualforce Controllers",
  "standardSetController",
  "What is the purpose of StandardSetController.getRecord()?",
  "Returns a prototype record used for mass updates",
  [
    "Returns the active user's profile",
    "Returns the controller's query locator",
    "Returns all selected records",
  ],
  "The prototype record can supply fields for mass update operations.",
);
add(
  "Visualforce Controllers",
  "transient",
  "What does the transient keyword do to a Visualforce controller instance variable?",
  "Excludes it from view state serialization",
  [
    "Makes it a static variable",
    "Encrypts it in the database",
    "Makes it available to every Apex class",
  ],
  "Transient variables are not saved into Visualforce view state.",
);
add(
  "Visualforce Controllers",
  "vfControllerMethods",
  "When can a Visualforce getter execute?",
  "Whenever the page reads the getter value",
  [
    "Only once at page construction",
    "Only after a DML statement",
    "Only when the user clicks Save",
  ],
  "Visualforce getters can run whenever their bound value is evaluated.",
);
add(
  "Visualforce Controllers",
  "vfControllerMethods",
  "Which method transfers Visualforce input values to an Apex controller property?",
  "A setter",
  ["A getter", "A constructor", "A static initializer"],
  "Visualforce setters receive values from the page before action methods execute.",
);
add(
  "Visualforce Controllers",
  "components",
  "Which Visualforce tag displays a field using its Salesforce field metadata and formatting?",
  "<apex:outputField>",
  ["<apex:fieldValue>", "<apex:userInfo>", "<apex:table>"],
  "apex:outputField is a valid standard Visualforce component for displaying a field.",
);
add(
  "Visualforce Controllers",
  "components",
  "Which Visualforce tag is valid for rendering a table of data?",
  "<apex:dataTable>",
  ["<apex:table>", "<apex:grid>", "<apex:records>"],
  "apex:dataTable is a standard Visualforce component.",
);
add(
  "Visualforce Controllers",
  "vfGlobalVariables",
  "How can Visualforce access the current user's ProfileId in an expression?",
  "{!$User.ProfileId}",
  ["{!$Profile.UserId}", "{!$CurrentUser.Profile}", "{!$UserInfo.ProfileId}"],
  "The $User global variable exposes the current user's fields.",
);
add(
  "Visualforce Controllers",
  "vfLightning",
  "How is Visualforce described in its introduction?",
  "A tag-based markup language for building applications and customizing Salesforce's user interface",
  [
    "A JavaScript framework for database triggers",
    "A query language for record search",
    "A metadata format for package installation",
  ],
  "Salesforce describes Visualforce as a tag-based markup language for building applications and customizing its UI.",
);
add(
  "Visualforce Controllers",
  "vfPage",
  "What is required for a Visualforce page to use a standard controller?",
  "Set standardController to the object API name",
  [
    "Set a global static variable",
    "Add a Lightning Message Channel",
    "Use a Batch Apex class",
  ],
  "The standardController page attribute binds a page to a standard object controller.",
);
add(
  "Visualforce Controllers",
  "transient",
  "Does a transient variable persist across Visualforce postbacks in view state?",
  "No",
  ["Yes, always", "Only if it is static", "Only in a production org"],
  "Transient excludes the variable from view state persistence.",
);
add(
  "Visualforce Controllers",
  "controllerExtension",
  "What is a standard controller extension constructor typically passed?",
  "The standard controller instance",
  ["The current debug log", "An SObjectAccessDecision", "A TriggerOperation"],
  "The extension constructor receives ApexPages.StandardController.",
);
add(
  "Visualforce Controllers",
  "vfPage",
  "Which Visualforce page attribute enables PDF rendering?",
  'renderAs="pdf"',
  ['standardController="pdf"', 'transient="true"', 'layout="pdf"'],
  "Visualforce pages can be rendered as PDFs using the renderAs attribute.",
);

add(
  "Apex Security",
  "sharing",
  "What does with sharing enforce in Apex?",
  "Record-level sharing rules",
  [
    "Field-level security by itself",
    "Apex class visibility",
    "Governor limits",
  ],
  "Sharing keywords control record-level access, not object/field permissions.",
);
add(
  "Apex Security",
  "accessMode",
  "What do Apex user-mode database operations enforce?",
  "The running user's sharing, CRUD, and FLS permissions",
  ["Only sharing rules", "Only validation rules", "No security checks"],
  "User mode applies sharing, field-level security, and object permissions.",
);
add(
  "Apex Security",
  "accessMode",
  "How do you specify a user-mode SOQL query?",
  "Add WITH USER_MODE",
  ["Add WITH SHARING", "Call Schema.userMode()", "Use Database.queryUser()"],
  "SOQL supports a WITH USER_MODE clause.",
);
add(
  "Apex Security",
  "accessMode",
  "How do you specify user mode for an Apex DML statement?",
  "Use the as user modifier",
  [
    "Use WITH USER_MODE after the record",
    "Call Trigger.isUserMode()",
    "Set a field named UserMode",
  ],
  "Apex DML supports syntax such as insert as user record.",
);
add(
  "Apex Security",
  "strip",
  "What does Security.stripInaccessible() return?",
  "An SObjectAccessDecision containing sanitized records and access details",
  ["A SaveResult list", "A Set of profile IDs", "A SOQL query locator"],
  "stripInaccessible returns SObjectAccessDecision, whose getRecords method returns sanitized data.",
);
add(
  "Apex Security",
  "strip",
  "What does stripInaccessible do to fields a user cannot access?",
  "Removes inaccessible fields from returned or DML-bound records",
  [
    "Throws an exception in every case",
    "Makes them read-only but leaves them set",
    "Grants temporary field access",
  ],
  "The method supports graceful degradation by stripping inaccessible fields.",
);
add(
  "Apex Security",
  "strip",
  "Does stripInaccessible remove the Id field?",
  "No; Id is never stripped",
  [
    "Yes, on every record",
    "Only for update operations",
    "Only on custom objects",
  ],
  "Salesforce preserves Id to avoid problems when performing DML on sanitized records.",
);
add(
  "Apex Security",
  "sharing",
  "What does WITH sharing alone not enforce?",
  "Object-level and field-level permissions",
  [
    "Record-level sharing",
    "The current user's record visibility",
    "Sharing rules",
  ],
  "Sharing declarations govern record access; CRUD and FLS require separate enforcement.",
);
add(
  "Apex Security",
  "sharing",
  "What is the purpose of inherited sharing?",
  "Use the caller's sharing context for a class",
  [
    "Always bypass sharing",
    "Always require a site guest user",
    "Enforce field-level security only",
  ],
  "inherited sharing adopts the caller's sharing mode.",
);
add(
  "Apex Security",
  "accessMode",
  "In API version 67.0 and later, what is the Apex default database access mode?",
  "User mode",
  ["System mode", "Anonymous mode", "No access mode"],
  "The current Apex guide notes that API 67.0+ defaults database operations to user mode.",
);
add(
  "Apex Security",
  "strip",
  "Which operation can strip fields before DML to avoid an FLS exception?",
  "Security.stripInaccessible(AccessType.CREATABLE or UPDATABLE, records)",
  [
    "Schema.getGlobalDescribe()",
    "System.pauseJobByName()",
    "ApexPages.currentPage()",
  ],
  "stripInaccessible can remove fields the user cannot create or update before DML.",
);
add(
  "Apex Security",
  "accessMode",
  "What is the effect of running a database operation in system mode?",
  "Object and field permissions are ignored; sharing depends on the class sharing declaration",
  [
    "All sharing and FLS are enforced regardless",
    "The operation is blocked",
    "It runs as the org owner",
  ],
  "System-mode operations bypass CRUD/FLS, while the class sharing keyword controls record sharing.",
);
add(
  "Apex Security",
  "strip",
  "How can a developer inspect which fields stripInaccessible removed?",
  "Call getRemovedFields() on the SObjectAccessDecision",
  [
    "Call Trigger.oldMap()",
    "Call getDMLStatements()",
    "Query the FieldPermissions object only",
  ],
  "SObjectAccessDecision.getRemovedFields() reports stripped fields by object.",
);
add(
  "Apex Security",
  "accessMode",
  "What does a SOQL query in user mode do when inaccessible selected fields are referenced?",
  "Raises a query access error",
  [
    "Silently grants access",
    "Automatically runs in system mode",
    "Returns fake null records",
  ],
  "User-mode SOQL enforces FLS and reports access errors.",
);
add(
  "Apex Security",
  "dynamicSoql",
  "How should variable values be supplied when building a dynamic SOQL query?",
  "Use bind variables rather than concatenating the values into the query string",
  [
    "Concatenate untrusted text directly",
    "Use a larger heap",
    "Turn off sharing",
  ],
  "Dynamic SOQL supports bind variables so values can be supplied separately from the query string.",
);
add(
  "Apex Security",
  "vfFunctions",
  "What does HTMLENCODE() do to text used in Visualforce?",
  "Encodes reserved HTML characters as HTML entities",
  [
    "SOQL injection in database queries",
    "Governor-limit exceptions",
    "Unauthorized callouts",
  ],
  "HTMLENCODE replaces characters reserved in HTML with their HTML entity equivalents.",
);
add(
  "Apex Security",
  "vfFunctions",
  "What does JSENCODE() do to text used in a Visualforce JavaScript context?",
  "Escapes unsafe JavaScript characters",
  [
    "DML row limit violations",
    "Record sharing bypass",
    "Platform event duplication",
  ],
  "JSENCODE inserts escape characters before unsafe JavaScript characters.",
);
add(
  "Apex Security",
  "accessMode",
  "Does a user-mode query enforce field permissions in the WHERE clause as well as SELECT fields?",
  "Yes",
  [
    "No, only selected fields are checked",
    "Only in batch Apex",
    "Only for custom objects",
  ],
  "User mode processes all clauses in the SOQL statement, including WHERE.",
);
add(
  "Apex Security",
  "describe",
  "What does a CRUD/FLS check such as isUpdateable() evaluate?",
  "Whether the current user can update the field",
  [
    "Whether the user owns a particular record",
    "Whether the transaction has committed",
    "Whether the field is indexed",
  ],
  "Describe-based permission methods report object or field permissions.",
);
add(
  "Apex Security",
  "sharing",
  "A class declared without sharing is intended to do what to record sharing?",
  "Not enforce the caller's record-sharing rules",
  [
    "Enforce FLS only",
    "Run only as a guest user",
    "Require every record to have a queue owner",
  ],
  "without sharing disables record-sharing enforcement for that class context.",
);

add(
  "Lightning Web Components",
  "eventsLwc",
  "Which constructor creates a custom LWC event?",
  "CustomEvent()",
  ["LightningEvent()", "AuraEvent()", "EventBus.create()"],
  "LWC creates custom events with the standard CustomEvent constructor.",
);
add(
  "Lightning Web Components",
  "eventsLwc",
  "How does a component dispatch an event?",
  "Call dispatchEvent(event)",
  [
    "Call fireEvent(event)",
    "Call event.emit()",
    "Call publishEvent() on the DOM",
  ],
  "The EventTarget dispatchEvent method dispatches the event.",
);
add(
  "Lightning Web Components",
  "eventsLwc",
  "Where should a CustomEvent carry its payload?",
  "In the detail property",
  ["In the event type string", "In bubbles", "In the component's XML targets"],
  "CustomEvent detail carries data to the receiving event handler.",
);
add(
  "Lightning Web Components",
  "eventsBestPractices",
  "What is the recommended default event propagation for the tightest encapsulation?",
  "bubbles: false and composed: false",
  [
    "bubbles: true and composed: true",
    "bubbles: false and composed: true",
    "Capture phase enabled",
  ],
  "The default non-bubbling, non-composed event is the least disruptive and best encapsulated.",
);
add(
  "Lightning Web Components",
  "eventsPropagation",
  "What does composed: true permit an event to do?",
  "Cross a shadow DOM boundary",
  [
    "Run in Apex system mode",
    "Carry an object without a payload",
    "Skip the bubbling phase",
  ],
  "The composed property determines whether an event can cross a shadow boundary.",
);
add(
  "Lightning Web Components",
  "eventsPropagation",
  "What does bubbles: true permit an event to do?",
  "Propagate upward through the DOM",
  [
    "Cross a shadow boundary by itself",
    "Reach every browser tab",
    "Skip its target component",
  ],
  "Bubbles controls whether the event moves up the DOM tree.",
);
add(
  "Lightning Web Components",
  "eventsPropagation",
  "What does bubbles: true with composed: false generally achieve in an LWC?",
  "Bubble within the component's DOM without crossing its shadow boundary",
  [
    "Bubble to the document root",
    "Prevent all listeners from running",
    "Cross every component boundary",
  ],
  "This configuration bubbles but does not cross the shadow boundary.",
);
add(
  "Lightning Web Components",
  "eventsBestPractices",
  "What should be considered before dispatching bubbles:true, composed:true?",
  "The event becomes part of a public API and can reach ancestors",
  [
    "The event is private to the component",
    "The event bypasses security checks",
    "It can no longer carry detail",
  ],
  "This permissive configuration crosses boundaries and exposes the event to ancestors.",
);
add(
  "Lightning Web Components",
  "eventsLwc",
  "Which event name style does Salesforce recommend?",
  "Lowercase, no spaces, and underscores between words",
  [
    "Uppercase with spaces",
    "Prefix every event with on",
    "Use only numeric names",
  ],
  "Salesforce recommends lowercase event names without spaces and underscores as separators.",
);
add(
  "Lightning Web Components",
  "lms",
  "Which service communicates across otherwise separate components on a Lightning page?",
  "Lightning Message Service",
  [
    "ApexPages.StandardController",
    "Schema.getGlobalDescribe()",
    "Visualforce view state",
  ],
  "LMS supports communication across LWC, Aura, Visualforce, and page regions.",
);
add(
  "Lightning Web Components",
  "lms",
  "Which component technologies can communicate through Lightning Message Service?",
  "LWC, Aura, and Visualforce",
  [
    "Only Apex triggers",
    "Only two LWCs in the same template",
    "Only Visualforce pages in Classic",
  ],
  "LMS spans Lightning web components, Aura components, and Visualforce.",
);
add(
  "Lightning Web Components",
  "config",
  "Where is LWC component metadata such as targets configured?",
  "In the component's XML configuration file",
  ["In its CSS file", "In a static resource", "In the Apex trigger"],
  "The XML configuration file declares component metadata and targets.",
);
add(
  "Lightning Web Components",
  "config",
  "Which target exposes an LWC as a record quick action?",
  "lightning__RecordAction",
  [
    "lightning__RecordPageAction",
    "lightning__QuickAction",
    "lightning__ObjectAction",
  ],
  "The LWC metadata target for a record action is lightning__RecordAction.",
);
add(
  "Lightning Web Components",
  "config",
  "Which target exposes an LWC for a screen flow?",
  "lightning__FlowScreen",
  ["lightning__FlowAction", "lightning__RecordAction", "lightning__Screen"],
  "lightning__FlowScreen is the UI target for a screen flow component.",
);
add(
  "Lightning Web Components",
  "config",
  "Which target is intended for a headless Flow action component?",
  "lightning__FlowAction",
  ["lightning__FlowScreen", "lightning__RecordPage", "lightning__Service"],
  "lightning__FlowAction exposes a component for an action in a flow.",
);
add(
  "Lightning Web Components",
  "eventsPropagation",
  "What does Event.currentTarget identify during event handling?",
  "The element with the listener currently executing",
  [
    "Always the original clicked inner element",
    "The component's Apex controller",
    "The event's detail payload",
  ],
  "currentTarget is the element to which the current handler is attached.",
);
add(
  "Lightning Web Components",
  "eventsPropagation",
  "What can event.target represent after an event crosses a shadow boundary?",
  "The component host, due to event retargeting",
  [
    "The private internal button in every context",
    "The current user's profile",
    "The event's source file",
  ],
  "LWC retargets events to preserve shadow DOM encapsulation.",
);
add(
  "Lightning Web Components",
  "lms",
  "Can Lightning Message Service communicate with a Visualforce page embedded on the same Lightning page?",
  "Yes",
  [
    "No, it works only with LWC",
    "Only through an Apex trigger",
    "Only in Salesforce Classic",
  ],
  "LMS supports communication with Visualforce pages in a Lightning page.",
);
add(
  "Lightning Web Components",
  "eventsBestPractices",
  "Why should event detail generally contain primitives or a copied object?",
  "Listeners could otherwise mutate an object shared by reference",
  [
    "LWC cannot serialize strings",
    "Primitive values enable event bubbling",
    "Objects cannot be accessed in a handler",
  ],
  "Passing a shared object by reference can let a listener mutate the dispatcher's data.",
);
add(
  "Lightning Web Components",
  "config",
  "What file exposes LWC targets and properties to builders?",
  "The component .js-meta.xml file",
  [
    "The component CSS file",
    "The Apex class's test file",
    "The package.xml manifest only",
  ],
  "LWC metadata targets are defined in the component configuration XML.",
);

add(
  "Aura and UI Integration",
  "auraEvents",
  "Which phase is used by Aura component events to propagate upward?",
  "Bubble",
  ["Default", "Broadcast", "Commit"],
  "Aura component events can use Bubble or Capture propagation phases.",
);
add(
  "Aura and UI Integration",
  "auraEvents",
  "Which phase lets Aura component events propagate top-down?",
  "Capture",
  ["Bubble", "Default", "After"],
  "Capture propagation travels from ancestors down to nested components.",
);
add(
  "Aura and UI Integration",
  "auraEvents",
  "Which Aura tag registers a component event?",
  "<aura:registerEvent>",
  ["<aura:handler>", "<aura:attribute>", "<aura:method>"],
  "A component that fires an Aura component event registers it with the aura:registerEvent tag.",
);
add(
  "Aura and UI Integration",
  "auraJavaScript",
  "How should an Aura component load a third-party JavaScript library from a static resource?",
  "Use ltng:require with $Resource",
  [
    "Add a raw script tag to the component",
    "Use a Visualforce getter",
    "Use ApexPages.currentPage()",
  ],
  "Aura uses ltng:require to load external libraries from static resources.",
);
add(
  "Aura and UI Integration",
  "vfPage",
  'What does lightningStylesheets="true" on a Visualforce page enable?',
  "Lightning styling for supported Visualforce output",
  ["LWC shadow DOM events", "Apex user-mode DML", "Flow orchestration"],
  "The attribute applies Lightning Experience styling to Visualforce pages.",
);
add(
  "Aura and UI Integration",
  "propertyEditor",
  "What is a custom property editor used for in Flow Builder?",
  "Provide a tailored configuration UI for a custom Flow component/action",
  [
    "Replace a Flow runtime interview",
    "Set Apex governor limits",
    "Edit Salesforce debug logs",
  ],
  "Custom property editors configure the properties of custom Flow components or actions.",
);
add(
  "Aura and UI Integration",
  "propertyEditor",
  "Which LWC metadata target corresponds to a custom property editor for an action?",
  "lightning__FlowAction",
  ["lightning__RecordAction", "lightning__FlowScreen", "lightning__AppPage"],
  "Flow action property editors are associated with Flow action components.",
);
add(
  "Aura and UI Integration",
  "auraBuilder",
  "Which Aura interfaces make a component available on record pages and other page types?",
  "flexipage:availableForRecordHome and flexipage:availableForAllPageTypes",
  [
    "lightning__RecordAction and lightning__FlowAction",
    "apex:availableForRecord and apex:availableForAll",
    "force:recordPage and force:allPages",
  ],
  "The Aura interfaces in the notes expose components to record home and general Lightning pages.",
);
add(
  "Aura and UI Integration",
  "auraBuilder",
  "What does a design:attribute provide in an Aura component bundle?",
  "A configurable design property for App Builder",
  [
    "A trigger context variable",
    "An Apex sharing declaration",
    "A SOQL bind variable",
  ],
  "Design attributes expose component attributes for configuration in builders.",
);
add(
  "Aura and UI Integration",
  "lwcFiles",
  "Which bundle contains the JavaScript controller for an LWC?",
  "The component's JavaScript file",
  ["The component XML file", "Apex debug log", "A Visualforce extension"],
  "An LWC bundle contains JavaScript logic in its .js file.",
);
add(
  "Aura and UI Integration",
  "lwcFiles",
  "Which bundle contains HTML markup for an LWC UI component?",
  "The component's HTML template file",
  [
    "The Apex class file",
    "The package manifest",
    "A Platform Event definition",
  ],
  "An LWC UI component uses an HTML template file.",
);
add(
  "Aura and UI Integration",
  "components",
  "Which Visualforce component is valid for rendering a map?",
  "<apex:map>",
  ["<apex:table>", "<apex:fieldValue>", "<apex:userInfo>"],
  "apex:map is a valid standard Visualforce component.",
);
add(
  "Aura and UI Integration",
  "auraEvents",
  "Which direction does an Aura component event's Bubble phase travel?",
  "From the source component up through its containing components",
  [
    "From the root component down through its children",
    "Directly from the source component to its siblings",
    "From the source component to every component in the app, regardless of containment",
  ],
  "Bubble traverses the containment hierarchy upward, from the source component toward the root.",
);
add(
  "Aura and UI Integration",
  "auraEvents",
  "Which direction does an Aura Capture phase travel?",
  "From parent toward child",
  [
    "From child toward parent",
    "Only between unrelated app pages",
    "From server to database",
  ],
  "Capture travels down from an ancestor to nested components.",
);
add(
  "Aura and UI Integration",
  "lwcFiles",
  "Which two source files are used by the basic LWC component example?",
  "An HTML template and a JavaScript file",
  [
    "An Apex class and a Visualforce page",
    "A CSS file and package.xml",
    "A Flow definition and an Aura application",
  ],
  "The Salesforce LWC getting-started example creates a matching HTML template and JavaScript file.",
);
add(
  "Aura and UI Integration",
  "vfLightning",
  "What can Visualforce pages be used to do?",
  "Build applications and customize the Salesforce user interface",
  [
    "Replace all Apex classes",
    "Manage user passwords",
    "Run database queries without SOQL",
  ],
  "Salesforce describes Visualforce as a way to build applications and customize its user interface.",
);
add(
  "Aura and UI Integration",
  "vfGlobalVariables",
  "Which global variable provides current-user information in Visualforce?",
  "$User",
  ["$Profile", "$CurrentUser", "$SessionUser"],
  "$User exposes the current user's information to Visualforce expressions.",
);
add(
  "Aura and UI Integration",
  "lwcOverview",
  "Which web standard underlies Lightning Web Components?",
  "Web Components",
  ["Visualforce Components", "SOAP APIs", "Apex Triggers"],
  "LWC uses core Web Components standards.",
);
add(
  "Aura and UI Integration",
  "propertyEditor",
  "What should a Flow custom property editor expose so its JS controller can read automatically stored outputs?",
  "automaticOutputVariables",
  ["standardController", "transient", "Trigger.newMap"],
  "The custom property editor API includes automaticOutputVariables for automatically stored values.",
);
add(
  "Aura and UI Integration",
  "vfLightning",
  "Which desktop Salesforce experiences support Visualforce pages?",
  "Lightning Experience and Salesforce Classic",
  [
    "Salesforce Classic only",
    "Lightning Experience only",
    "Developer Console and Data Loader",
  ],
  "Visualforce is available in desktop browsers in both Lightning Experience and Salesforce Classic.",
);

add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "What must exist between objects to write a SOQL relationship query?",
  "A defined parent-child relationship",
  [
    "A shared field label",
    "A trigger on both objects",
    "A matching record type",
  ],
  "SOQL relationship queries traverse defined relationships, not arbitrary SQL joins.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "How does a child-to-parent SOQL query traverse a relationship?",
  "Use dot notation through the parent relationship name",
  [
    "Use a nested SELECT in the WHERE clause",
    "Use GROUP BY with the parent ID",
    "Use an Apex Map",
  ],
  "Child-to-parent relationship queries use dot notation to select parent fields.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "How does a parent-to-child SOQL query include child records?",
  "Use a nested child relationship subquery in SELECT",
  [
    "Use a child field in GROUP BY",
    "Use an Apex trigger variable",
    "Use DML insert",
  ],
  "Parent-to-child queries use a nested SELECT from the child relationship name.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "What suffix is commonly used for a custom child relationship name in a parent-to-child subquery?",
  "__r",
  ["__c", "__e", "__x"],
  "Custom relationship traversal uses the relationship name ending in __r.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "Can SOQL join unrelated objects arbitrarily like general SQL?",
  "No; SOQL traverses defined relationships",
  [
    "Yes, any two objects can be joined",
    "Only if both objects are custom",
    "Only from Apex",
  ],
  "SOQL relationship queries require an actual relationship path.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "What form does a standard parent-to-child subquery use?",
  "A child relationship name, such as Contacts",
  [
    "A child object ID only",
    "The parent's field label",
    "A COUNT formula field",
  ],
  "Subqueries use the child relationship name, which is plural for common standard relationships.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "What is the common custom relationship traversal suffix when accessing a parent field?",
  "__r",
  ["__c", "__e", "__s"],
  "Custom lookup/master-detail parent relationship names use __r in SOQL.",
);
add(
  "SOQL Relationships and Date Syntax",
  "dates",
  "How should a SOQL DateTime literal be represented in a WHERE clause?",
  "As an ISO-like DateTime value without surrounding quotes",
  [
    "As a quoted locale-formatted date",
    "As an Integer timestamp only",
    "As a formula field name",
  ],
  "SOQL DateTime literals use the documented DateTime format and are not enclosed in quotes.",
);
add(
  "SOQL Relationships and Date Syntax",
  "dates",
  "Which character separates the date and time in the documented SOQL DateTime format?",
  "T",
  ["Space only", "Slash", "Comma"],
  "The DateTime literal format uses a T separator between date and time.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "What is the key difference between SOQL relationship queries and arbitrary SQL joins?",
  "SOQL requires a defined relationship path",
  [
    "SOQL requires a common namespace",
    "SOQL cannot select parent fields",
    "SOQL only supports custom objects",
  ],
  "Relationship queries follow Salesforce's defined parent-child relationships.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soqlSelect",
  "Which clause filters groups after a SOQL aggregate query?",
  "HAVING",
  ["ORDER BY", "LIMIT", "FOR UPDATE"],
  "HAVING filters aggregate groups after GROUP BY.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soqlComparison",
  "Which wildcard matches any number of characters in a LIKE filter?",
  "%",
  ["_", "?", "*"],
  "% is the SOQL multi-character wildcard; underscore matches a single character.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soqlComparison",
  "Which wildcard matches exactly one character in a SOQL LIKE filter?",
  "_",
  ["%", "?", "*"],
  "Underscore matches a single character in a LIKE pattern.",
);
add(
  "SOQL Relationships and Date Syntax",
  "multiSelectPicklists",
  "How do multi-select picklist values appear in SOQL filter matching?",
  "Values are delimited by semicolons",
  [
    "Values are delimited by commas only",
    "Each value is a separate related record",
    "Values are stored as JSON arrays",
  ],
  "Multi-select picklist values are represented as semicolon-separated values.",
);
add(
  "SOQL Relationships and Date Syntax",
  "multiSelectPicklists",
  "Which SOQL filter matches records whose multi-select picklist contains both A and B?",
  "INCLUDES ('A;B')",
  ["INCLUDES ('A', 'B')", "EXCLUDES ('A;B')", "INCLUDES ('A')"],
  "A semicolon between values inside one INCLUDES string requires all specified values to match.",
);
add(
  "SOQL Relationships and Date Syntax",
  "multiSelectPicklists",
  "Which SOQL filter matches records containing either A or B in a multi-select picklist?",
  "INCLUDES ('A', 'B')",
  ["INCLUDES ('A;B')", "EXCLUDES ('A', 'B')", "INCLUDES ('A')"],
  "Comma-separated strings inside INCLUDES match records containing any specified value.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soql",
  "What does a parent-to-child relationship query return inside its nested SELECT?",
  "A collection of child records for each parent result",
  ["A single parent ID", "A Database.SaveResult", "A global describe map"],
  "The nested subquery returns related child records for each parent.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soslSyntax",
  "Which Salesforce language is used to search across multiple objects by text?",
  "SOSL",
  ["SOQL", "DML", "ApexDoc"],
  "SOSL is Salesforce Object Search Language, designed for text search across objects.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soslSyntax",
  "Which SOSL clause contains the text search expression?",
  "FIND",
  ["RETURNING", "WHERE", "GROUP BY"],
  "The FIND clause specifies the text expression SOSL searches for.",
);
add(
  "SOQL Relationships and Date Syntax",
  "soslSyntax",
  "Which clause specifies which objects and fields SOSL returns?",
  "RETURNING",
  ["GROUP BY", "WITH USER_MODE", "ORDER GROUP"],
  "The RETURNING clause specifies the objects and fields for SOSL results.",
);

if (questions.length < 200) {
  throw new Error(
    `Question bank must contain at least 200 questions; found ${questions.length}.`,
  );
}

const STORAGE_KEY = "pd1ProblemAreasQuiz.v1";
const INITIAL_MASTERY = 0;
const MIN_MASTERY = -50;
const MAX_MASTERY = 50;
const CORRECT_DELTA = 5;
const INCORRECT_DELTA = 8;
const COOLDOWN = 6;
const TOAST_DURATION = 1400;

const emptyState = () => ({
  version: 2,
  run: { correct: 0, total: 0 },
  allTime: { correct: 0, total: 0 },
  nextRunNumber: 1,
  currentStreak: 0,
  bestStreak: 0,
  runs: [],
  mastery: {},
});

let state = emptyState();
let persistenceAvailable = true;
let currentQuestion = null;
let currentOptions = [];
let answered = false;
let toastTimeout = null;
const recentConcepts = [];

const $ = (id) => document.getElementById(id);
const notice = $("storage-notice");

function isValidState(value) {
  const version = value && (value.version ?? 1);
  const masteryValues = value && value.mastery && Object.values(value.mastery);
  return (
    value &&
    typeof value === "object" &&
    (version === 1 || version === 2) &&
    value.run &&
    Number.isInteger(value.run.correct) &&
    Number.isInteger(value.run.total) &&
    value.allTime &&
    Number.isInteger(value.allTime.correct) &&
    Number.isInteger(value.allTime.total) &&
    (value.nextRunNumber === undefined ||
      (Number.isInteger(value.nextRunNumber) && value.nextRunNumber > 0)) &&
    (value.currentStreak === undefined ||
      (Number.isInteger(value.currentStreak) && value.currentStreak >= 0)) &&
    (value.bestStreak === undefined ||
      (Number.isInteger(value.bestStreak) && value.bestStreak >= 0)) &&
    Array.isArray(value.runs) &&
    value.mastery &&
    typeof value.mastery === "object" &&
    masteryValues.every(
      (score) =>
        Number.isFinite(score) &&
        (version === 1 ?
          score >= 0 && score <= 100
        : score >= MIN_MASTERY && score <= MAX_MASTERY),
    )
  );
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (!isValidState(parsed)) {
      persistenceAvailable = false;
      notice.textContent =
        "Saved progress has an unexpected format. This session will run without overwriting it; use Reset All Progress only if you want to clear it.";
      return;
    }
    if (!Number.isInteger(parsed.nextRunNumber) || parsed.nextRunNumber < 1) {
      parsed.nextRunNumber = parsed.runs.length + 1;
    }
    if (parsed.version === undefined || parsed.version === 1) {
      for (const [questionId, score] of Object.entries(parsed.mastery)) {
        parsed.mastery[questionId] = score - 50;
      }
    }
    parsed.version = 2;
    parsed.currentStreak = parsed.currentStreak || 0;
    parsed.bestStreak = parsed.bestStreak || 0;
    state = parsed;
    saveState();
  } catch (error) {
    persistenceAvailable = false;
    notice.textContent = `Saved progress could not be read (${error.name}). This session will run without saving.`;
  }
}

function saveState() {
  if (!persistenceAvailable) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    persistenceAvailable = false;
    notice.textContent = `Progress could not be saved (${error.name}). Quiz scores will remain available until this page is closed.`;
  }
}

function masteryFor(question) {
  const score = state.mastery[question.id];
  return Number.isFinite(score) ?
      Math.min(MAX_MASTERY, Math.max(MIN_MASTERY, score))
    : INITIAL_MASTERY;
}

function unmasteredQuestions() {
  return questions.filter((question) => masteryFor(question) < MAX_MASTERY);
}

function fibonacciMilestoneIndex(streak) {
  if (streak === 1) return 0;
  let previous = 1;
  let current = 2;
  let index = 1;
  while (current <= streak) {
    if (current === streak) return index;
    [previous, current] = [current, previous + current];
    index++;
  }
  return null;
}

function selectWeightedQuestion() {
  const pool = unmasteredQuestions();
  let candidates = pool.filter(
    (question) => !recentConcepts.includes(question.id),
  );
  if (candidates.length === 0) candidates = pool;
  if (candidates.length === 0) return null;
  const weightFor = (question) => MAX_MASTERY - masteryFor(question) + 1;
  const totalWeight = candidates.reduce(
    (sum, question) => sum + weightFor(question),
    0,
  );
  let pick = Math.random() * totalWeight;
  for (const question of candidates) {
    pick -= weightFor(question);
    if (pick < 0) return question;
  }
  return candidates[candidates.length - 1];
}

const codeReferencePattern =
  /`[^`]+`|<\/?[A-Za-z][^>]*>|[A-Za-z][A-Za-z0-9-]*="[^"]*"|@[A-Za-z_$][\w$]*|\b(?:WITH\s+(?:USER|SYSTEM)_MODE|(?:[Ww]ith|WITH|[Ww]ithout|WITHOUT|[Ii]nherited|INHERITED)\s+sharing|(?:bubbles|composed)\s*:\s*(?:true|false)|(?:insert|update|delete|upsert)\s+as\s+(?:user|system))\b|(?:[A-Za-z_$][\w$]*(?:\([^()]*\))?\.)+[A-Za-z_$][\w$]*(?:\([^()]*\))?|\b[A-Za-z_$][\w$]*\([^()]*\)|\b[A-Za-z_$][\w$]*__[A-Za-z][\w$]*\b|\b[A-Za-z_$][\w$]*(?:[A-Z][A-Za-z0-9_$]*)+\b|\b[A-Z]{2,}(?:_[A-Z0-9]+)*\b|\b(?:Integer|Decimal|Boolean|String|DateTime|Date|Long|Double|Id|List|Set|Map|sObject|Object)\b/g;

function formattedText(text) {
  const fragment = document.createDocumentFragment();
  let cursor = 0;
  for (const match of text.matchAll(codeReferencePattern)) {
    const token = match[0];
    const start = match.index;
    fragment.append(document.createTextNode(text.slice(cursor, start)));
    const code = document.createElement("code");
    code.textContent = token.startsWith("`") ? token.slice(1, -1) : token;
    fragment.append(code);
    cursor = start + token.length;
  }
  fragment.append(document.createTextNode(text.slice(cursor)));
  return fragment;
}

function renderQuestion() {
  clearToast();
  currentQuestion = selectWeightedQuestion();
  $("next-btn").style.display = "none";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  $("explanation").style.display = "none";
  $("explanation").replaceChildren();
  const options = $("answer-options");
  options.replaceChildren();
  if (!currentQuestion) {
    $("question-id").textContent = "";
    $("topic-label").textContent = "";
    $("mastery-label").textContent = "";
    $("question-text").textContent =
      "All questions are fully mastered. Reset progress to practice again.";
    answered = true;
    return;
  }
  currentOptions = [
    { text: currentQuestion.correct, correct: true },
    ...currentQuestion.distractors.map((text) => ({
      text,
      correct: false,
    })),
  ];
  for (let i = currentOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [currentOptions[i], currentOptions[j]] = [
      currentOptions[j],
      currentOptions[i],
    ];
  }
  answered = false;
  $("question-id").textContent = `Question ID: ${currentQuestion.id}`;
  $("topic-label").textContent = currentQuestion.topic;
  $("mastery-label").textContent =
    `Problem mastery: ${masteryFor(currentQuestion)} (-50 to +50)`;
  $("question-text").replaceChildren(formattedText(currentQuestion.prompt));
  currentOptions.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    button.append(
      document.createTextNode(`${String.fromCharCode(65 + index)}. `),
      formattedText(option.text),
    );
    button.addEventListener("click", () => submitAnswer(index));
    options.appendChild(button);
  });
}

function submitAnswer(index) {
  if (answered) return;
  answered = true;
  const selected = currentOptions[index];
  const answeredQuestionId = currentQuestion.id;
  state.run.total++;
  state.allTime.total++;
  const previousMastery = masteryFor(currentQuestion);
  let fibonacciIndex = null;
  if (selected.correct) {
    state.run.correct++;
    state.allTime.correct++;
    state.mastery[answeredQuestionId] = Math.min(
      MAX_MASTERY,
      previousMastery + CORRECT_DELTA,
    );
    state.currentStreak++;
    state.bestStreak = Math.max(state.bestStreak, state.currentStreak);
    fibonacciIndex = fibonacciMilestoneIndex(state.currentStreak);
  } else {
    state.mastery[answeredQuestionId] = Math.max(
      MIN_MASTERY,
      previousMastery - INCORRECT_DELTA,
    );
    state.currentStreak = 0;
    $("feedback").textContent =
      `Not quite. Mastery ${previousMastery} to ${state.mastery[answeredQuestionId]}.`;
    $("feedback").className = "feedback incorrect";
    showExplanation();
  }
  const masteryAfterAnswer = state.mastery[answeredQuestionId];
  const fullyMastered = masteryAfterAnswer === MAX_MASTERY;
  recentConcepts.push(currentQuestion.id);
  if (recentConcepts.length > COOLDOWN) recentConcepts.shift();
  updateScoreboard();
  saveState();
  if (selected.correct) {
    renderQuestion();
    if (fullyMastered) {
      showConfetti(120);
      showToast(
        `Fully mastered! Mastery ${previousMastery} to ${masteryAfterAnswer}. Removed from your pool.`,
      );
    } else if (fibonacciIndex !== null && fibonacciIndex !== 0) {
      showConfetti(Math.min(110, 20 + fibonacciIndex * 5));
      showToast(
        `Correct! Mastery ${previousMastery} to ${masteryAfterAnswer}.\n${state.currentStreak} in a row!`,
      );
    } else {
      showToast(
        `Correct! Mastery ${previousMastery} to ${masteryAfterAnswer}.`,
      );
    }
    $("answer-options").firstElementChild?.focus();
    return;
  }
  $("mastery-label").textContent =
    `Problem mastery: ${masteryAfterAnswer} (range -50 to +50)`;
  [...$("answer-options").children].forEach((button, optionIndex) => {
    button.disabled = true;
    if (currentOptions[optionIndex].correct) button.classList.add("correct");
    else if (optionIndex === index) button.classList.add("incorrect");
  });
  $("next-btn").style.display = "inline-block";
  $("next-btn").focus();
}

function showToast(message) {
  const toast = $("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  toastTimeout = window.setTimeout(clearToast, TOAST_DURATION);
}

function showConfetti(count) {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const layer = $("confetti-layer");
  const colors = ["#ff5252", "#ffd740", "#69f0ae", "#40c4ff", "#e040fb"];
  for (let i = 0; i < count; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.setProperty("--left", `${Math.random() * 100}%`);
    piece.style.setProperty("--size", `${6 + Math.random() * 7}px`);
    piece.style.setProperty("--color", colors[i % colors.length]);
    piece.style.setProperty("--radius", Math.random() > 0.5 ? "50%" : "1px");
    piece.style.setProperty("--drift", `${(Math.random() - 0.5) * 28}vw`);
    piece.style.setProperty("--rotation", `${360 + Math.random() * 900}deg`);
    piece.style.setProperty("--duration", `${2 + Math.random() * 1.5}s`);
    piece.style.setProperty("--delay", `${Math.random() * 0.7}s`);
    piece.addEventListener("animationend", () => piece.remove(), {
      once: true,
    });
    layer.appendChild(piece);
  }
}

function clearToast() {
  if (toastTimeout !== null) {
    window.clearTimeout(toastTimeout);
    toastTimeout = null;
  }
  $("toast").classList.remove("visible");
  $("toast").textContent = "";
}

function showExplanation() {
  const box = $("explanation");
  const text = document.createElement("p");
  text.append(formattedText(currentQuestion.explanation));
  const link = document.createElement("a");
  const [label, url] = sources[currentQuestion.source];
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = `Official reference: ${label}`;
  box.append(text, link);
  box.style.display = "block";
}

function updateScoreboard() {
  $("run-score").textContent = `${state.run.correct} / ${state.run.total}`;
  const runPct =
    state.run.total ?
      Math.round((state.run.correct / state.run.total) * 100)
    : 0;
  $("run-pct").textContent = `${runPct}%`;
  $("all-time-score").textContent =
    `${state.allTime.correct} / ${state.allTime.total}`;
  $("current-streak").textContent = state.currentStreak;
  $("best-streak").textContent = state.bestStreak;
  $("pool-count").textContent = unmasteredQuestions().length.toLocaleString();
  const averageMastery =
    questions.reduce((sum, question) => sum + masteryFor(question), 0) /
    questions.length;
  const formattedAverage = `${averageMastery >= 0 ? "+" : ""}${averageMastery.toFixed(1)}`;
  $("average-mastery").textContent = `${formattedAverage} / +50`;
  renderRuns();
}

function renderRuns() {
  const list = $("past-runs-list");
  list.replaceChildren();
  if (!state.runs.length) {
    const item = document.createElement("li");
    item.className = "empty-state";
    item.textContent = "No completed runs yet.";
    list.appendChild(item);
    return;
  }
  state.runs.forEach((run) => {
    const item = document.createElement("li");
    const pct = run.total ? Math.round((run.correct / run.total) * 100) : 0;
    item.textContent = `${run.label}: ${run.correct} out of ${run.total} correct (${pct}%)`;
    list.appendChild(item);
  });
}

function startNewRun() {
  if (state.run.total > 0) {
    state.runs.unshift({
      label: `Run ${state.nextRunNumber} - ${new Date().toLocaleDateString()}`,
      correct: state.run.correct,
      total: state.run.total,
    });
    state.nextRunNumber++;
    state.runs = state.runs.slice(0, 100);
  }
  state.run = { correct: 0, total: 0 };
  saveState();
  updateScoreboard();
  renderQuestion();
}

function resetProgress() {
  if (
    !window.confirm(
      "Clear all saved scores, past runs, and problem mastery from this browser?",
    )
  )
    return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    notice.textContent = `Saved progress could not be cleared (${error.name}).`;
    return;
  }
  state = emptyState();
  persistenceAvailable = true;
  notice.textContent = "";
  recentConcepts.length = 0;
  updateScoreboard();
  renderQuestion();
  saveState();
}

$("next-btn").addEventListener("click", renderQuestion);
$("new-run-btn").addEventListener("click", startNewRun);
$("reset-btn").addEventListener("click", resetProgress);
loadState();
updateScoreboard();
renderQuestion();
