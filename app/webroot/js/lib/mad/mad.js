/*
 * @page index mad
 * @tag home
 *
 * ###MadSquirrel Fw
 *  
 * Our Mad Squirrel Framework:
 *  
 * * mad.controller.Controller
 */

steal(
    'jquery',
    'jquery/class',
    'jquery/controller',
    'jquery/model',
    'jquery/view/ejs',
    MAD_ROOT+'/core/class.js'
)
.then(
    MAD_ROOT+'/bootstrap/appBootstrap.js',
    MAD_ROOT+'/error/error.js',
    MAD_ROOT+'/error/errorHandler.js',
    MAD_ROOT+'/controller/appController.js',
    MAD_ROOT+'/controller/controller.js',
    MAD_ROOT+'/controller/componentController.js',
    MAD_ROOT+'/controller/component/buttonController.js',
    MAD_ROOT+'/controller/component/containerController.js',
    MAD_ROOT+'/controller/component/gridController.js',
    MAD_ROOT+'/controller/component/inputController.js',
    MAD_ROOT+'/controller/component/popupController.js',
    MAD_ROOT+'/controller/component/tabController.js',
    MAD_ROOT+'/controller/component/workspaceController.js',
    MAD_ROOT+'/controller/component/treeController.js',
    MAD_ROOT+'/core/singleton.js',
    MAD_ROOT+'/event/eventBus.js',
    MAD_ROOT+'/helper/controllerHelper.js',
    MAD_ROOT+'/helper/routeHelper.js',
	MAD_ROOT+'/helper/componentHelper.js',
    MAD_ROOT+'/helper/component/boxDecorator.js',
    MAD_ROOT+'/lang/i18n.js',
    MAD_ROOT+'/model/componentState.js',
    MAD_ROOT+'/net/ajax.js',
    MAD_ROOT+'/net/request.js',
    MAD_ROOT+'/net/responseHandler.js',
    MAD_ROOT+'/net/response.js',
    MAD_ROOT+'/object/map.js',
    MAD_ROOT+'/string/uuid.js',
    MAD_ROOT+'/route/routeListener.js',
    MAD_ROOT+'/route/dispatcherInterface.js',
    MAD_ROOT+'/route/extensionControllerActionDispatcher.js',
    MAD_ROOT+'/view/view.js'
//    MAD_ROOT+'/route/pageDispatcher.js',
);