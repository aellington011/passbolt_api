steal('jquery/class')
.then( function ($) {

	/*
	 * @class mad.route.DispatcherInterface
	 * The core Interface Dispatcher is a representation of a dispatcher. The dispatcher
	 * will help developper to customize the way to dispatch the routes. It will be used
	 * by the bootstrap to dispatch route to convenent actions.
	 * @parent index
	 */
	$.Class('mad.route.DispatcherInterface',

	/** @static */
	{
		/**
		 * Implement this function to dispatch the given route to the convenient action
		 * @param {mad.route.Route} The route to dispatch
		 * @param {Array} options
		 * @return {void}
		 */
		'dispatch': function (route, options) {
			throw new mad.error.CallInterfaceFunction();
		}
	},

	/** @prototype */
	{
		'init': function () {
			throw new mad.error.CallInterfaceConstructor();
		}
	});

});