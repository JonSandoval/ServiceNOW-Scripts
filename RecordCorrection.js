record.addEncodedQuery('Enter your query here');
//Limit number of records to prevent performance issues
record.setLimit(2000);
record.query();

while(record.next())
{
	
	record.category.setDisplayValue(record.u_category);

	record.subcategory.setDisplayValue(record.u_subcategory);
  //Prevent workflow from running, to prevent inactive records from running again
	record.setWorkflow(false);
  //Prevents the update field on record from being modified
	record.autoSysFields(false);  
	record.update();
}
