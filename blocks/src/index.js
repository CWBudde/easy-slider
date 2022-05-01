import { registerBlockType,  RangeControl, ToggleControl } from '@wordpress/blocks';
import { InnerBlocks,InspectorControls } from '@wordpress/block-editor';
//import { RangeControl, ToggleControl } from '@wordpress/components';
const ALLOWED_BLOCKS = [ 'core/group', 'core/cover' ];
//const { InspectorControls } = wp.editor;
//const { PanelBody } = wp.components;
import { TextControl, ComboboxControl, PanelBody, PanelRow, FormToggle, Tooltip, Dashicon, Button } from '@wordpress/components';

registerBlockType( 'easy-slider/slider-block', {
	title: 'Slider',
	icon: 'slides',
	category: 'layout',
	attributes: {
		slideCount: { 
			type: 'string',
			default: 1,
			attribute: 'data-slidecount'
		},
		centered: { 
			type: 'boolean',
			default: false,
			attribute: 'data-centered'
		},
		showArrows: { 
			type: 'boolean',
			default: false,
			attribute: 'data-showarrows',
		},
		showDots: {
			type: 'boolean',
			default: false,
			attribute: 'data-showdots'
		},
		rtl: { 
			type: 'boolean',
			default: false,
			attribute: 'data-rtl'
		},
		autoplay: { 
			type: 'boolean',
			default: true,
			attribute: 'data-autoplay'
		},
		autoplaySpeed: { 
			type: 'string',
			default: 3000,
			attribute: 'data-autoplay'
		},
		loop: { 
			type: 'boolean',
			default: true,
			attribute: 'data-loop'
		},
		fade: { 
			type: 'boolean',
			default: true,
			attribute: 'data-fade'
		},
		lazyLoad: { 
			type: 'string',
			default: 'ondemand',
			attribute: 'data-lazy-load'
		},
		pauseOnFocus: { 
			type: 'boolean',
			default: true,
			attribute: 'data-pause-on-focus'
		},
		pauseOnHover: { 
			type: 'boolean',
			default: true,
			attribute: 'data-pause-on-hover'
		},
		variableWidth: { 
			type: 'boolean',
			default: true,
			attribute: 'data-variable-width'
		},
		
	},
	edit: ( props ) => { 
		
		const { attributes, setAttributes, className } = props;
		
		return (
			[ 
				<InspectorControls>
					<PanelBody title = { 'Slider Settings' } >
					{/* Slides to show */}
					<PanelRow>
						<Tooltip text = "Number of visible slides in the slider.">
							<label htmlFor = "slides-to-show-text-control" >
								{ 'Slides to show' }
								<Dashicon icon = "editor-help"></Dashicon>
							</label>
						</Tooltip>
						<TextControl
							id = "slides-to-show-text-control"
							type = { 'number' }
							value = { attributes.slideCount }
							onChange = { (value) => setAttributes( { slideCount: value } ) }
							min = { 1 }
							max = { 20 }
						/>
					</PanelRow>
					{/* Centered */}
					<PanelRow>
						<label htmlFor = "centered-form-toggle" >
							{ 'Keep slides centered' }
						</label>
						<FormToggle
							id = "centered-form-toggle"
							label = { 'Centered' }
							checked = { attributes.centered }
							onChange = { () => setAttributes( { centered: ! attributes.centered } ) }
						/>
					</PanelRow>
					{/* Show Arrows */}
					<PanelRow>
						<label htmlFor = "show-arrows-form-toggle" >
							{ 'Show Arrows' }
						</label>
						<FormToggle
							id = "show-arrows-form-toggle"
							label = { 'Show Arrows' }
							checked = { attributes.showArrows }
							onChange = { () => setAttributes( { showArrow: ! attributes.showArrows } ) }
						/>
					</PanelRow>
					{/* Show Dots */}
					<PanelRow>
						<label htmlFor = "show-dots-form-toggle" >
							{ 'Show Dots' }
						</label>
						<FormToggle
							id = "show-dots-form-toggle"
							label = { 'Show Dots' }
							checked = { attributes.showDots }
							onChange = { () => setAttributes( { showDots: ! attributes.showDots } ) }
						/>
					</PanelRow>
					{/* RTL */}
					<PanelRow>
						<label htmlFor = "rtl-form-toggle" >
							{ 'Right to Left (RTL)' }
						</label>
						<FormToggle
							id = "rtl-form-toggle"
							label = { 'Right to Left (RTL)' }
							checked = { attributes.rtl }
							onChange = { () => setAttributes( { rtl: ! attributes.rtl } ) }
						/>
					</PanelRow>
					{/* Autoplay */}
					<PanelRow>
						<label htmlFor = "autoplay-form-toggle" >
							{ 'Autoplay' }
						</label>
						<FormToggle
							id = "autoplay-form-toggle"
							label = { 'Autoplay' }
							checked = { attributes.autoplay }
							onChange = { () => setAttributes( { autoplay: ! attributes.autoplay } ) }
						/>
					</PanelRow>
					{/* Autoplay speed */}
					<PanelRow>
						<Tooltip text = "Speed of the autoplay.">
							<label htmlFor = "autoplay-speed-text-control" >
								{ 'Autoplay speed' }
								<Dashicon icon = "editor-help"></Dashicon>
							</label>
						</Tooltip>
						<TextControl
							id = "autoplay-speed-text-control"
							type = { 'number' }
							value = { attributes.autoplaySpeed }
							onChange = { (value) => setAttributes( { autoplaySpeed: value } ) }
							min = {100}
							max = {10000}
						/>
					</PanelRow>
					{/* Loop */}
					<PanelRow>
						<label htmlFor = "loop-form-toggle" >
							{ 'Loop Slides' }
						</label>
						<FormToggle
							id = "loop-form-toggle"
							label = { 'Loop Slides' }
							checked = { attributes.loop }
							onChange = { () => setAttributes( { loop: ! attributes.loop } ) }
						/>
					</PanelRow>
					{/* Fade */}
					<PanelRow>
						<label htmlFor = "fade-form-toggle" >
							{ 'Fade Slides' }
						</label>
						<FormToggle
							id = "fade-form-toggle"
							label = { 'Fade Slides' }
							checked = { attributes.fade }
							onChange = { () => setAttributes( { fade: ! attributes.fade } ) }
						/>
					</PanelRow>
					{/* Lazy Load */}
					<PanelRow>
						<Tooltip text = "Type of lazy loading.">
							<label htmlFor = "lazy-load-text-control" >
								{ 'Lazy load type' }
								<Dashicon icon = "editor-help"></Dashicon>
							</label>
						</Tooltip>
						<ComboboxControl
							id = "lazy-load-text-control"
							type = { 'text' }
							options = { [
									{
											value: 'ondemand',
											label: 'ondemand',
									},
									{
											value: 'progressive',
											label: 'progressive',
									},
								]
							}
							value = { attributes.lazyLoad }
							onChange = { (value) => setAttributes( { lazyLoad: value } ) }
						/>
					</PanelRow>
					{/* Pause on focus */}
					<PanelRow>
						<label htmlFor = "pause-on-focus-form-toggle" >
							{ 'Pause on focus' }
						</label>
						<FormToggle
							id = "pause-on-focus-form-toggle"
							label = { 'Pause on focus' }
							checked = { attributes.pauseOnFocus }
							onChange = { () => setAttributes( { pauseOnFocus: ! attributes.pauseOnFocus } ) }
						/>
					</PanelRow>
					{/* Pause on hover */}
					<PanelRow>
						<label htmlFor = "pause-on-hover-form-toggle" >
							{ 'Pause on hover' }
						</label>
						<FormToggle
							id = "pause-on-hover-form-toggle"
							label = { 'Pause on hover' }
							checked = { attributes.pauseOnHover }
							onChange = { () => setAttributes( { pauseOnHover: ! attributes.pauseOnHover } ) }
						/>
					</PanelRow>
					{/* Variable Width */}
					<PanelRow>
						<label htmlFor = "variable-width-form-toggle" >
							{ 'Variable width' }
						</label>
						<FormToggle
							id = "variable-width-form-toggle"
							label = { 'Variable width' }
							checked = { attributes.variableWidth }
							onChange = { () => setAttributes( { variableWidth: ! attributes.variableWidth } ) }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			,
			<div className = { className }>
				<InnerBlocks 
					allowedBlocks = { ['easy-slider/slide-item-block'] }
				/>
			</div>
			]
		);
	},
	save: ( { attributes, className } ) => {
		return (
			<div className = { className } 
			 data-slidecount = { attributes.slideCount }
			 data-centered = { attributes.centered }
			 data-showDots = { attributes.showDots }
			 data-showArrows = { attributes.showArrow }
			 data-rtl = { attributes.rtl }
			 data-autoplay = { attributes.autoplay }
			 data-autoplay-speed = { attributes.autoplaySpeed }
			 data-loop = { attributes.loop }
			 data-fade = { attributes.fade }
			 data-lazy-load = { attributes.lazyLoad }
			 data-pause-on-focus = { attributes.pauseOnFocus }
			 data-pause-on-hover = { attributes.pauseOnHover }
			 data-variable-width = { attributes.variableWidth } >
				<InnerBlocks.Content />
			</div>
		);
	},
} );

registerBlockType( 'easy-slider/slide-item-block', {
	title: 'Slide Item',
	icon: 'analytics',
	parent: ['easy-slider/slider-block'],
	category:'layout',
	edit: ( { className } ) => { 
		return (
			<div className = { className }>
				<InnerBlocks 
					allowedBlocks = { ALLOWED_BLOCKS }
				/>
			</div>
		);
	},
	save: ( { className } ) => {
		return (
			<div className = { className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );