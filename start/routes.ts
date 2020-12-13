import Route from '@ioc:Adonis/Core/Route'

Route.on('/').render('welcome')

Route.group(() => {
    // home
    Route.get('/', 'HomeController.greet').as('panelHome')

    // Dashboard
    Route.group(() => {
        Route.get('/activity', 'DashboardController.activity').as('panelDashboardActivity')
        Route.get('/monitoring', 'DashboardController.monitoring').as('panelDashboardMonitoring')
        Route.get('/manage', 'DashboardController.manage').as('panelDashboardManage')
    }).prefix('dashboard/')
}).prefix('v1/panel/')
