// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View";

export default class DashboardController {

    public async activity() {

        return View.render('dashboard/activity')
    }

    public async monitoring() {

        return View.render('dashboard/monitoring')
    }

    public async manage() {

        return View.render('dashboard/manage')
    }
}
