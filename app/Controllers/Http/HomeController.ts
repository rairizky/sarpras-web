// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import View from "@ioc:Adonis/Core/View";

export default class HomeController {

    public async greet() {

        return View.render('dashboard/greet')
    }

}
