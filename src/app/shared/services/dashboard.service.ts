import { EventEmitter } from '@angular/core';

import { Dashboard } from '../models/dashboard.model';
import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

    dashboardsChanged = new EventEmitter<Dashboard[]>();
    private weekly_dashboards: Dashboard[] = [
        new Dashboard('11/04/2017',
            '40',
            'Submitted',
            'United Bank of Africa'),
        
        new Dashboard('10/28/2017',
            '34',
            'Rejected',
            'Zenith'),

        new Dashboard('10/21/2017',
            '37',
            'Approved',
            'Illupeju Plastic Factory'),
        
        new Dashboard('10/14/2017',
            '40',
            'Approved',
            'Alaba Technology Temps'),
        
        new Dashboard('10/07/2017',
            '28',
            'Approved',
            'Kunata Logic')
    ];

    private monthly_dashboards: Dashboard[] = [
        new Dashboard('November 2017',
            '140',
            'Submitted',
            'United Bank of Africa'),
        
        new Dashboard('October 2017',
            '134',
            'Rejected',
            'Zenith'),

        new Dashboard('September 2017',
            '137',
            'Approved',
            'Illupeju Plastic Factory'),
        
        new Dashboard('August 2017',
            '140',
            'Approved',
            'Alaba Technology Temps'),
        
        new Dashboard('July 2017',
            '128',
            'Approved',
            'Kunata Logic')
    ];

    constructor() {

    }

    getWeeklyDashboards() {
        return this.weekly_dashboards.slice();
    }

    getMonthlyDashboards() {
        return this.monthly_dashboards.slice();
    }
}