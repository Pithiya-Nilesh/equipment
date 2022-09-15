//// Copyright (c) 2022, Nilesh Pithiya and contributors
//// For license information, please see license.txt
///* eslint-disable */
//
//frappe.query_reports["Custom Profit and Loss Statement"] = {
//	"filters": [
//
//	]
//};

// Copyright (c) 2015, Frappe Technologies Pvt. Ltd. and Contributors
// License: GNU General Public License v3. See license.txt


frappe.require("assets/erpnext/js/financial_statements.js", function() {
	frappe.query_reports["Custom Profit and Loss Statement"] = $.extend({},
		erpnext.financial_statements);

	erpnext.utils.add_dimensions('Custom Profit and Loss Statement', 10);

	frappe.query_reports["Custom Profit and Loss Statement"]["filters"].push(
		{
			"fieldname": "project",
			"label": __("Project"),
			"fieldtype": "MultiSelectList",
			get_data: function(txt) {
				return frappe.db.get_link_options('Project', txt);
			}
		},
		{
			"fieldname": "include_default_book_entries",
			"label": __("Include Default Book Entries"),
			"fieldtype": "Check",
			"default": 1
		}
	);
});
