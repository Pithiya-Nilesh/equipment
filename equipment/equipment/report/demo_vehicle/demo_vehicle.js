//// Copyright (c) 2022, Nilesh Pithiya and contributors
//// For license information, please see license.txt
///* eslint-disable */
//
//frappe.query_reports["demo vehicle"] = {
//
//	"filters": [
//		{
//			"fieldname": "filter_based_on",
//			"label": __("Filter Based On"),
//			"fieldtype": "Select",
//			"options": ["Fiscal Year", "Date Range"],
//			"default": ["Fiscal Year"],
//			"reqd": 1
//		},
//		{
//			"fieldname": "fiscal_year",
//			"label": __("Fiscal Year"),
//			"fieldtype": "Link",
//			"options": "Fiscal Year",
//			"default": frappe.defaults.get_user_default("fiscal_year"),
//			"depends_on": "eval: doc.filter_based_on == 'Fiscal Year'",
//			"reqd": 1
//		},
//		{
//			"fieldname": "from_date",
//			"label": __("From Date"),
//			"fieldtype": "Date",
//			"reqd": 1,
//			"depends_on": "eval: doc.filter_based_on == 'Date Range'",
//			"default": frappe.datetime.add_months(frappe.datetime.nowdate(), -12)
//		},
//		{
//			"fieldname": "to_date",
//			"label": __("To Date"),
//			"fieldtype": "Date",
//			"reqd": 1,
//			"depends_on": "eval: doc.filter_based_on == 'Date Range'",
//			"default": frappe.datetime.nowdate()
//		},
//		{
//			"fieldname": "vehicle",
//			"label": __("Vehicle"),
//			"fieldtype": "Link",
//			"options": "Vehicle"
//		},
//		{
//			"fieldname": "employee",
//			"label": __("Employee"),
//			"fieldtype": "Link",
//			"options": "Employee"
//		},
//		{
//			"fieldname": "project",
//			"label": __("Project"),
//			"fieldtype": "Link",
//			"options": "Project"
//		},
//	]
//};
