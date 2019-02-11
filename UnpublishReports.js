var gr = new GlideRecord('sys_report');
gr.addQuery('is_published=true^ORroles=public');
gr.query();
while(gr.next()) {
    //Obtain current roles report is shared with
	var removePublic = gr.roles;
    //Remove public role from string
	removePublic = removePublic.replace(/public/g, '');
    //Set report roles to new string value. Wihtout public role, report will auto unpublish
	gr.roles.setValue(removePublic);
	gr.update();
}
