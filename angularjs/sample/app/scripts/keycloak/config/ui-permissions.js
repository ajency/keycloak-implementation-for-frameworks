zopkyFrontendApp.constant("KCuiPermissions",{
    "/goomourl": {
                    "ui_create":  [
                        {
                            "resource_set_name" : "res:goomourl",
                            "scopes":["scopes:create"]
                        }
                    ]
                },
    "/leads": {
        "ui_input_search_leads": [{ // example disabled permissions. If scopes are returned from entitlements check pass in at least 1 valid scope!
            "resource_set_name" : "res:leads",
            // "scopes":["scopes:leads-filter-branch"]
        }],
        "ui_button_create_new_lead": [{ // example working permissions
            "resource_set_name" : "res:leads",
            "scopes":["scopes:leads-filter-branch"]
        }],
        "ui_button_download_report": [{ // example working permissions
            "resource_set_name" : "res:leads",
            "scopes":["scopes:leads-filter-branch"]
        }],
        "ui_filter_status": [{ // example working permissions
                    "resource_set_name" : "res:leads",
                    "scopes":["scopes:leads-filter-branch","scopes:leads-filter-channel"]
                }],
        "ui_filter_lead_date": [
            { // example working permissions
                "resource_set_name" : "res:leads",
                "scopes":["scopes:leads-filter-branch","scopes:leads-filter-channel"]
            }
        ],
        "ui_filter_departure_date": [
            { // example working permissions
                "resource_set_name" : "res:leads",
                "scopes":["scopes:leads-filter-branch","scopes:leads-filter-channel"]
            }
        ],
        "ui_filter_departure_city": [],
        "ui_filter_sales_channel": [],
        "ui_filter_sales_sub_channel": [],
        "ui_filter_product": [],
        "ui_filter_branch": [],
        "ui_filter_employee": [],
        "ui_filter_business_unit": [            { // example working permissions
            "resource_set_name" : "res:leads",
            "scopes":["scopes:leads-filter-branch","scopes:leads-filter-channel"]
        }],
        "ui_filter_sub_category": [            { // example working permissions
            "resource_set_name" : "res:leads",
            "scopes":["scopes:leads-filter-branch","scopes:leads-filter-channel"]
        }],
        "ui_filter_region": [],
        "ui_filter_group": [],
        "ui_filter_package_name": [],
        "ui_filter_destination": [],
        "ui_filter_total": [],
        "ui_filter_open": [],
        "ui_filter_assigned": [],
        "ui_filter_pending": [],
        "ui_filter_loss": [],
        "ui_filter_followup": [],
        "ui_filter_email_received": [],
        "ui_filter_expired": []
    },
});