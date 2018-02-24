/*
* Highmark Inc CMS  - Layout Container Responsive.
* This is to enable the edit option in the Layout
* mode for the new Layout Container
* Reference: http://www.conexiogroup.com/custom-responsive-paragraph-component-using-grid-layouting/
*/
(function ($, ns, channel, window, undefined) {
	ns.responsive.isResponsiveGrid = function (editable) {
		return editable.type === "wcm/foundation/components/responsivegrid"
		|| "highmark/components/content/core/layoutcontainer";
	};
}(jQuery, Granite.author, jQuery(document), this));
