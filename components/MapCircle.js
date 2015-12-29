
var React = require('react-native');
var {
  View,
  NativeMethodsMixin,
  requireNativeComponent,
  StyleSheet,
  PropTypes,
} = React;

var MapCircle = React.createClass({
  mixins: [NativeMethodsMixin],

  propTypes: {
    ...View.propTypes,

    /**
     * The coordinate of the center of the circle
     */
    center: PropTypes.shape({
      /**
       * Coordinates for the center of the circle.
       */
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
    }).isRequired,

    /**
     * The radius of the circle to be drawn (in meters)
     */
    radius: PropTypes.number.isRequired,

    /**
     * Callback that is called when the user presses on the circle
     */
    onPress: PropTypes.func,

    /**
     * The stroke width to use for the path.
     */
    strokeWidth: PropTypes.number,

    /**
     * The stroke color to use for the path.
     */
    strokeColor: PropTypes.string,

    /**
     * The fill color to use for the path.
     */
    fillColor: PropTypes.string,

    /**
     * The order in which this tile overlay is drawn with respect to other overlays. An overlay
     * with a larger z-index is drawn over overlays with smaller z-indices. The order of overlays
     * with the same z-index is arbitrary. The default zIndex is 0.
     *
     * @platform android
     */
    zIndex: PropTypes.number,

    /**
     * The line cap style to apply to the open ends of the path.
     * The default style is `round`.
     *
     * @platform ios
     */
    lineCap: PropTypes.oneOf([
      'butt',
      'round',
      'square',
    ]),

    /**
     * The line join style to apply to corners of the path.
     * The default style is `round`.
     *
     * @platform ios
     */
    lineJoin: PropTypes.oneOf([
      'miter',
      'round',
      'bevel',
    ]),

    /**
     * The limiting value that helps avoid spikes at junctions between connected line segments.
     * The miter limit helps you avoid spikes in paths that use the `miter` `lineJoin` style. If
     * the ratio of the miter length—that is, the diagonal length of the miter join—to the line
     * thickness exceeds the miter limit, the joint is converted to a bevel join. The default
     * miter limit is 10, which results in the conversion of miters whose angle at the joint
     * is less than 11 degrees.
     *
     * @platform ios
     */
    miterLimit: PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      strokeColor: '#000',
      strokeWidth: 1,
    };
  },

  _onPress: function(e) {
    this.props.onPress && this.props.onPress(e);
  },

  render: function() {
    return (
      <AIRMapCircle
        {...this.props}
        onPress={this._onPress}
      />
    );
  },
});

var AIRMapCircle = requireNativeComponent('AIRMapCircle', MapCircle);

module.exports = MapCircle;
