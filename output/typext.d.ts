declare module TypExt {
    class Object {
        static create(className: string, config: any, extraArgs?: any): any;
    }
}
declare module TypExt {
    class AbstractManager {
        static create(config: TypExt.IAbstractManagerConfig, extraArgs?: any): Ext.IAbstractManager;
    }
}
declare module TypExt {
    class Action {
        static create(config: TypExt.IActionConfig, extraArgs?: any): Ext.IAction;
    }
}
declare module TypExt {
    class Ajax {
        static create(config: TypExt.IAjaxConfig, extraArgs?: any): Ext.IAjax;
    }
}
declare module TypExt {
    class AnimationQueue {
        static create(config: TypExt.IAnimationQueueConfig, extraArgs?: any): Ext.IAnimationQueue;
    }
}
declare module TypExt.app {
    class Application {
        static create(config: TypExt.app.IApplicationConfig, extraArgs?: any): Ext.app.IApplication;
    }
}
declare module TypExt.app {
    class BaseController {
        static create(config: TypExt.app.IBaseControllerConfig, extraArgs?: any): Ext.app.IBaseController;
    }
}
declare module TypExt.app.bind {
    class AbstractStub {
        static create(config: TypExt.app.bind.IAbstractStubConfig, extraArgs?: any): Ext.app.bind.IAbstractStub;
    }
}
declare module TypExt.app.bind {
    class BaseBinding {
        static create(config: TypExt.app.bind.IBaseBindingConfig, extraArgs?: any): Ext.app.bind.IBaseBinding;
    }
}
declare module TypExt.app.bind {
    class Binding {
        static create(config: TypExt.app.bind.IBindingConfig, extraArgs?: any): Ext.app.bind.IBinding;
    }
}
declare module TypExt.app.bind {
    class Formula {
        static create(config: TypExt.app.bind.IFormulaConfig, extraArgs?: any): Ext.app.bind.IFormula;
    }
}
declare module TypExt.app.bind {
    class LinkStub {
        static create(config: TypExt.app.bind.ILinkStubConfig, extraArgs?: any): Ext.app.bind.ILinkStub;
    }
}
declare module TypExt.app.bind {
    class Multi {
        static create(config: TypExt.app.bind.IMultiConfig, extraArgs?: any): Ext.app.bind.IMulti;
    }
}
declare module TypExt.app.bind {
    class RootStub {
        static create(config: TypExt.app.bind.IRootStubConfig, extraArgs?: any): Ext.app.bind.IRootStub;
    }
}
declare module TypExt.app.bind {
    class Stub {
        static create(config: TypExt.app.bind.IStubConfig, extraArgs?: any): Ext.app.bind.IStub;
    }
}
declare module TypExt.app.bind {
    class Template {
        static create(config: TypExt.app.bind.ITemplateConfig, extraArgs?: any): Ext.app.bind.ITemplate;
    }
}
declare module TypExt.app.bind {
    class TemplateBinding {
        static create(config: TypExt.app.bind.ITemplateBindingConfig, extraArgs?: any): Ext.app.bind.ITemplateBinding;
    }
}
declare module TypExt.app.bindinspector {
    class Environment {
        static create(config: TypExt.app.bindinspector.IEnvironmentConfig, extraArgs?: any): Ext.app.bindinspector.IEnvironment;
    }
}
declare module TypExt.app.bindinspector {
    class Util {
        static create(config: TypExt.app.bindinspector.IUtilConfig, extraArgs?: any): Ext.app.bindinspector.IUtil;
    }
}
declare module TypExt.app {
    class Controller {
        static create(config: TypExt.app.IControllerConfig, extraArgs?: any): Ext.app.IController;
    }
}
declare module TypExt.app.domain {
    class Component {
        static create(config: TypExt.app.domain.IComponentConfig, extraArgs?: any): Ext.app.domain.IComponent;
    }
}
declare module TypExt.app.domain {
    class Controller {
        static create(config: TypExt.app.domain.IControllerConfig, extraArgs?: any): Ext.app.domain.IController;
    }
}
declare module TypExt.app.domain {
    class Direct {
        static create(config: TypExt.app.domain.IDirectConfig, extraArgs?: any): Ext.app.domain.IDirect;
    }
}
declare module TypExt.app.domain {
    class Global {
        static create(config: TypExt.app.domain.IGlobalConfig, extraArgs?: any): Ext.app.domain.IGlobal;
    }
}
declare module TypExt.app.domain {
    class Store {
        static create(config: TypExt.app.domain.IStoreConfig, extraArgs?: any): Ext.app.domain.IStore;
    }
}
declare module TypExt.app.domain {
    class View {
        static create(config: TypExt.app.domain.IViewConfig, extraArgs?: any): Ext.app.domain.IView;
    }
}
declare module TypExt.app {
    class EventBus {
        static create(config: TypExt.app.IEventBusConfig, extraArgs?: any): Ext.app.IEventBus;
    }
}
declare module TypExt.app {
    class EventDomain {
        static create(config: TypExt.app.IEventDomainConfig, extraArgs?: any): Ext.app.IEventDomain;
    }
}
declare module TypExt.app {
    class Profile {
        static create(config: TypExt.app.IProfileConfig, extraArgs?: any): Ext.app.IProfile;
    }
}
declare module TypExt.app.route {
    class Queue {
        static create(config: TypExt.app.route.IQueueConfig, extraArgs?: any): Ext.app.route.IQueue;
    }
}
declare module TypExt.app.route {
    class Route {
        static create(config: TypExt.app.route.IRouteConfig, extraArgs?: any): Ext.app.route.IRoute;
    }
}
declare module TypExt.app.route {
    class Router {
        static create(config: TypExt.app.route.IRouterConfig, extraArgs?: any): Ext.app.route.IRouter;
    }
}
declare module TypExt.app {
    class Util {
        static create(config: TypExt.app.IUtilConfig, extraArgs?: any): Ext.app.IUtil;
    }
}
declare module TypExt.app {
    class ViewController {
        static create(config: TypExt.app.IViewControllerConfig, extraArgs?: any): Ext.app.IViewController;
    }
}
declare module TypExt.app {
    class ViewModel {
        static create(config: TypExt.app.IViewModelConfig, extraArgs?: any): Ext.app.IViewModel;
    }
}
declare module TypExt {
    class Array {
        static create(config: TypExt.IArrayConfig, extraArgs?: any): Ext.IArray;
    }
}
declare module TypExt {
    class Assert {
        static create(config: TypExt.IAssertConfig, extraArgs?: any): Ext.IAssert;
    }
}
declare module TypExt {
    class Base {
        static create(config: TypExt.IBaseConfig, extraArgs?: any): Ext.IBase;
    }
}
declare module TypExt {
    class Browser {
        static create(config: TypExt.IBrowserConfig, extraArgs?: any): Ext.IBrowser;
    }
}
declare module TypExt.button {
    class Button {
        static create(config: TypExt.button.IButtonConfig, extraArgs?: any): Ext.button.IButton;
    }
}
declare module TypExt {
    class Button {
        static create(config: TypExt.IButtonConfig, extraArgs?: any): Ext.IButton;
    }
}
declare module TypExt.button {
    class Cycle {
        static create(config: TypExt.button.ICycleConfig, extraArgs?: any): Ext.button.ICycle;
    }
}
declare module TypExt {
    class CycleButton {
        static create(config: TypExt.ICycleButtonConfig, extraArgs?: any): Ext.ICycleButton;
    }
}
declare module TypExt.button {
    class Manager {
        static create(config: TypExt.button.IManagerConfig, extraArgs?: any): Ext.button.IManager;
    }
}
declare module TypExt {
    class ButtonToggleManager {
        static create(config: TypExt.IButtonToggleManagerConfig, extraArgs?: any): Ext.IButtonToggleManager;
    }
}
declare module TypExt.button {
    class Segmented {
        static create(config: TypExt.button.ISegmentedConfig, extraArgs?: any): Ext.button.ISegmented;
    }
}
declare module TypExt.button {
    class Split {
        static create(config: TypExt.button.ISplitConfig, extraArgs?: any): Ext.button.ISplit;
    }
}
declare module TypExt {
    class SplitButton {
        static create(config: TypExt.ISplitButtonConfig, extraArgs?: any): Ext.ISplitButton;
    }
}
declare module TypExt.chart {
    class AbstractChart {
        static create(config: TypExt.chart.IAbstractChartConfig, extraArgs?: any): Ext.chart.IAbstractChart;
    }
}
declare module TypExt.chart.axis {
    class Axis {
        static create(config: TypExt.chart.axis.IAxisConfig, extraArgs?: any): Ext.chart.axis.IAxis;
    }
}
declare module TypExt.chart.axis {
    class Axis3D {
        static create(config: TypExt.chart.axis.IAxis3DConfig, extraArgs?: any): Ext.chart.axis.IAxis3D;
    }
}
declare module TypExt.chart.axis {
    class Category {
        static create(config: TypExt.chart.axis.ICategoryConfig, extraArgs?: any): Ext.chart.axis.ICategory;
    }
}
declare module TypExt.chart.axis {
    class Category3D {
        static create(config: TypExt.chart.axis.ICategory3DConfig, extraArgs?: any): Ext.chart.axis.ICategory3D;
    }
}
declare module TypExt.chart.axis.layout {
    class CombineDuplicate {
        static create(config: TypExt.chart.axis.layout.ICombineDuplicateConfig, extraArgs?: any): Ext.chart.axis.layout.ICombineDuplicate;
    }
}
declare module TypExt.chart.axis.layout {
    class Continuous {
        static create(config: TypExt.chart.axis.layout.IContinuousConfig, extraArgs?: any): Ext.chart.axis.layout.IContinuous;
    }
}
declare module TypExt.chart.axis.layout {
    class Discrete {
        static create(config: TypExt.chart.axis.layout.IDiscreteConfig, extraArgs?: any): Ext.chart.axis.layout.IDiscrete;
    }
}
declare module TypExt.chart.axis.layout {
    class Layout {
        static create(config: TypExt.chart.axis.layout.ILayoutConfig, extraArgs?: any): Ext.chart.axis.layout.ILayout;
    }
}
declare module TypExt.chart.axis {
    class Numeric {
        static create(config: TypExt.chart.axis.INumericConfig, extraArgs?: any): Ext.chart.axis.INumeric;
    }
}
declare module TypExt.chart.axis {
    class Numeric3D {
        static create(config: TypExt.chart.axis.INumeric3DConfig, extraArgs?: any): Ext.chart.axis.INumeric3D;
    }
}
declare module TypExt.chart.axis.segmenter {
    class Names {
        static create(config: TypExt.chart.axis.segmenter.INamesConfig, extraArgs?: any): Ext.chart.axis.segmenter.INames;
    }
}
declare module TypExt.chart.axis.segmenter {
    class Numeric {
        static create(config: TypExt.chart.axis.segmenter.INumericConfig, extraArgs?: any): Ext.chart.axis.segmenter.INumeric;
    }
}
declare module TypExt.chart.axis.segmenter {
    class Segmenter {
        static create(config: TypExt.chart.axis.segmenter.ISegmenterConfig, extraArgs?: any): Ext.chart.axis.segmenter.ISegmenter;
    }
}
declare module TypExt.chart.axis.segmenter {
    class Time {
        static create(config: TypExt.chart.axis.segmenter.ITimeConfig, extraArgs?: any): Ext.chart.axis.segmenter.ITime;
    }
}
declare module TypExt.chart.axis.sprite {
    class Axis {
        static create(config: TypExt.chart.axis.sprite.IAxisConfig, extraArgs?: any): Ext.chart.axis.sprite.IAxis;
    }
}
declare module TypExt.chart.axis.sprite {
    class Axis3D {
        static create(config: TypExt.chart.axis.sprite.IAxis3DConfig, extraArgs?: any): Ext.chart.axis.sprite.IAxis3D;
    }
}
declare module TypExt.chart.axis {
    class Time {
        static create(config: TypExt.chart.axis.ITimeConfig, extraArgs?: any): Ext.chart.axis.ITime;
    }
}
declare module TypExt.chart.axis {
    class Time3D {
        static create(config: TypExt.chart.axis.ITime3DConfig, extraArgs?: any): Ext.chart.axis.ITime3D;
    }
}
declare module TypExt.chart {
    class CartesianChart {
        static create(config: TypExt.chart.ICartesianChartConfig, extraArgs?: any): Ext.chart.ICartesianChart;
    }
}
declare module TypExt.chart {
    class Chart {
        static create(config: TypExt.chart.IChartConfig, extraArgs?: any): Ext.chart.IChart;
    }
}
declare module TypExt.chart.grid {
    class CircularGrid {
        static create(config: TypExt.chart.grid.ICircularGridConfig, extraArgs?: any): Ext.chart.grid.ICircularGrid;
    }
}
declare module TypExt.chart.grid {
    class HorizontalGrid {
        static create(config: TypExt.chart.grid.IHorizontalGridConfig, extraArgs?: any): Ext.chart.grid.IHorizontalGrid;
    }
}
declare module TypExt.chart.grid {
    class HorizontalGrid3D {
        static create(config: TypExt.chart.grid.IHorizontalGrid3DConfig, extraArgs?: any): Ext.chart.grid.IHorizontalGrid3D;
    }
}
declare module TypExt.chart.grid {
    class RadialGrid {
        static create(config: TypExt.chart.grid.IRadialGridConfig, extraArgs?: any): Ext.chart.grid.IRadialGrid;
    }
}
declare module TypExt.chart.grid {
    class VerticalGrid {
        static create(config: TypExt.chart.grid.IVerticalGridConfig, extraArgs?: any): Ext.chart.grid.IVerticalGrid;
    }
}
declare module TypExt.chart.grid {
    class VerticalGrid3D {
        static create(config: TypExt.chart.grid.IVerticalGrid3DConfig, extraArgs?: any): Ext.chart.grid.IVerticalGrid3D;
    }
}
declare module TypExt.chart.interactions {
    class Abstract {
        static create(config: TypExt.chart.interactions.IAbstractConfig, extraArgs?: any): Ext.chart.interactions.IAbstract;
    }
}
declare module TypExt.chart.interactions {
    class Crosshair {
        static create(config: TypExt.chart.interactions.ICrosshairConfig, extraArgs?: any): Ext.chart.interactions.ICrosshair;
    }
}
declare module TypExt.chart.interactions {
    class CrossZoom {
        static create(config: TypExt.chart.interactions.ICrossZoomConfig, extraArgs?: any): Ext.chart.interactions.ICrossZoom;
    }
}
declare module TypExt.chart.interactions {
    class ItemHighlight {
        static create(config: TypExt.chart.interactions.IItemHighlightConfig, extraArgs?: any): Ext.chart.interactions.IItemHighlight;
    }
}
declare module TypExt.chart.interactions {
    class ItemInfo {
        static create(config: TypExt.chart.interactions.IItemInfoConfig, extraArgs?: any): Ext.chart.interactions.IItemInfo;
    }
}
declare module TypExt.chart.interactions {
    class PanZoom {
        static create(config: TypExt.chart.interactions.IPanZoomConfig, extraArgs?: any): Ext.chart.interactions.IPanZoom;
    }
}
declare module TypExt.chart.interactions {
    class Rotate {
        static create(config: TypExt.chart.interactions.IRotateConfig, extraArgs?: any): Ext.chart.interactions.IRotate;
    }
}
declare module TypExt.chart.interactions {
    class RotatePie3D {
        static create(config: TypExt.chart.interactions.IRotatePie3DConfig, extraArgs?: any): Ext.chart.interactions.IRotatePie3D;
    }
}
declare module TypExt.chart.label {
    class Callout {
        static create(config: TypExt.chart.label.ICalloutConfig, extraArgs?: any): Ext.chart.label.ICallout;
    }
}
declare module TypExt.chart.label {
    class Label {
        static create(config: TypExt.chart.label.ILabelConfig, extraArgs?: any): Ext.chart.label.ILabel;
    }
}
declare module TypExt.chart {
    class Legend {
        static create(config: TypExt.chart.ILegendConfig, extraArgs?: any): Ext.chart.ILegend;
    }
}
declare module TypExt.chart {
    class LegendBase {
        static create(config: TypExt.chart.ILegendBaseConfig, extraArgs?: any): Ext.chart.ILegendBase;
    }
}
declare module TypExt.chart {
    class MarkerHolder {
        static create(config: TypExt.chart.IMarkerHolderConfig, extraArgs?: any): Ext.chart.IMarkerHolder;
    }
}
declare module TypExt.chart {
    class Markers {
        static create(config: TypExt.chart.IMarkersConfig, extraArgs?: any): Ext.chart.IMarkers;
    }
}
declare module TypExt.chart.plugin {
    class ItemEvents {
        static create(config: TypExt.chart.plugin.IItemEventsConfig, extraArgs?: any): Ext.chart.plugin.IItemEvents;
    }
}
declare module TypExt.chart {
    class PolarChart {
        static create(config: TypExt.chart.IPolarChartConfig, extraArgs?: any): Ext.chart.IPolarChart;
    }
}
declare module TypExt.chart.series {
    class Area {
        static create(config: TypExt.chart.series.IAreaConfig, extraArgs?: any): Ext.chart.series.IArea;
    }
}
declare module TypExt.chart.series {
    class Bar {
        static create(config: TypExt.chart.series.IBarConfig, extraArgs?: any): Ext.chart.series.IBar;
    }
}
declare module TypExt.chart.series {
    class Bar3D {
        static create(config: TypExt.chart.series.IBar3DConfig, extraArgs?: any): Ext.chart.series.IBar3D;
    }
}
declare module TypExt.chart.series {
    class CandleStick {
        static create(config: TypExt.chart.series.ICandleStickConfig, extraArgs?: any): Ext.chart.series.ICandleStick;
    }
}
declare module TypExt.chart.series {
    class Cartesian {
        static create(config: TypExt.chart.series.ICartesianConfig, extraArgs?: any): Ext.chart.series.ICartesian;
    }
}
declare module TypExt.chart.series {
    class Gauge {
        static create(config: TypExt.chart.series.IGaugeConfig, extraArgs?: any): Ext.chart.series.IGauge;
    }
}
declare module TypExt.chart.series {
    class Line {
        static create(config: TypExt.chart.series.ILineConfig, extraArgs?: any): Ext.chart.series.ILine;
    }
}
declare module TypExt.chart.series {
    class Pie {
        static create(config: TypExt.chart.series.IPieConfig, extraArgs?: any): Ext.chart.series.IPie;
    }
}
declare module TypExt.chart.series {
    class Pie3D {
        static create(config: TypExt.chart.series.IPie3DConfig, extraArgs?: any): Ext.chart.series.IPie3D;
    }
}
declare module TypExt.chart.series {
    class Polar {
        static create(config: TypExt.chart.series.IPolarConfig, extraArgs?: any): Ext.chart.series.IPolar;
    }
}
declare module TypExt.chart.series {
    class Radar {
        static create(config: TypExt.chart.series.IRadarConfig, extraArgs?: any): Ext.chart.series.IRadar;
    }
}
declare module TypExt.chart.series {
    class Scatter {
        static create(config: TypExt.chart.series.IScatterConfig, extraArgs?: any): Ext.chart.series.IScatter;
    }
}
declare module TypExt.chart.series {
    class Series {
        static create(config: TypExt.chart.series.ISeriesConfig, extraArgs?: any): Ext.chart.series.ISeries;
    }
}
declare module TypExt.chart.series.sprite {
    class Aggregative {
        static create(config: TypExt.chart.series.sprite.IAggregativeConfig, extraArgs?: any): Ext.chart.series.sprite.IAggregative;
    }
}
declare module TypExt.chart.series.sprite {
    class Area {
        static create(config: TypExt.chart.series.sprite.IAreaConfig, extraArgs?: any): Ext.chart.series.sprite.IArea;
    }
}
declare module TypExt.chart.series.sprite {
    class Bar {
        static create(config: TypExt.chart.series.sprite.IBarConfig, extraArgs?: any): Ext.chart.series.sprite.IBar;
    }
}
declare module TypExt.chart.series.sprite {
    class Bar3D {
        static create(config: TypExt.chart.series.sprite.IBar3DConfig, extraArgs?: any): Ext.chart.series.sprite.IBar3D;
    }
}
declare module TypExt.chart.series.sprite {
    class Box {
        static create(config: TypExt.chart.series.sprite.IBoxConfig, extraArgs?: any): Ext.chart.series.sprite.IBox;
    }
}
declare module TypExt.chart.series.sprite {
    class CandleStick {
        static create(config: TypExt.chart.series.sprite.ICandleStickConfig, extraArgs?: any): Ext.chart.series.sprite.ICandleStick;
    }
}
declare module TypExt.chart.series.sprite {
    class Cartesian {
        static create(config: TypExt.chart.series.sprite.ICartesianConfig, extraArgs?: any): Ext.chart.series.sprite.ICartesian;
    }
}
declare module TypExt.chart.series.sprite {
    class Line {
        static create(config: TypExt.chart.series.sprite.ILineConfig, extraArgs?: any): Ext.chart.series.sprite.ILine;
    }
}
declare module TypExt.chart.series.sprite {
    class Pie3DPart {
        static create(config: TypExt.chart.series.sprite.IPie3DPartConfig, extraArgs?: any): Ext.chart.series.sprite.IPie3DPart;
    }
}
declare module TypExt.chart.series.sprite {
    class PieSlice {
        static create(config: TypExt.chart.series.sprite.IPieSliceConfig, extraArgs?: any): Ext.chart.series.sprite.IPieSlice;
    }
}
declare module TypExt.chart.series.sprite {
    class Polar {
        static create(config: TypExt.chart.series.sprite.IPolarConfig, extraArgs?: any): Ext.chart.series.sprite.IPolar;
    }
}
declare module TypExt.chart.series.sprite {
    class Radar {
        static create(config: TypExt.chart.series.sprite.IRadarConfig, extraArgs?: any): Ext.chart.series.sprite.IRadar;
    }
}
declare module TypExt.chart.series.sprite {
    class Scatter {
        static create(config: TypExt.chart.series.sprite.IScatterConfig, extraArgs?: any): Ext.chart.series.sprite.IScatter;
    }
}
declare module TypExt.chart.series.sprite {
    class StackedCartesian {
        static create(config: TypExt.chart.series.sprite.IStackedCartesianConfig, extraArgs?: any): Ext.chart.series.sprite.IStackedCartesian;
    }
}
declare module TypExt.chart.series {
    class StackedCartesian {
        static create(config: TypExt.chart.series.IStackedCartesianConfig, extraArgs?: any): Ext.chart.series.IStackedCartesian;
    }
}
declare module TypExt.chart {
    class SpaceFillingChart {
        static create(config: TypExt.chart.ISpaceFillingChartConfig, extraArgs?: any): Ext.chart.ISpaceFillingChart;
    }
}
declare module TypExt.chart.theme {
    class Base {
        static create(config: TypExt.chart.theme.IBaseConfig, extraArgs?: any): Ext.chart.theme.IBase;
    }
}
declare module TypExt.chart.theme {
    class Default {
        static create(config: TypExt.chart.theme.IDefaultConfig, extraArgs?: any): Ext.chart.theme.IDefault;
    }
}
declare module TypExt.chart {
    class TipSurface {
        static create(config: TypExt.chart.ITipSurfaceConfig, extraArgs?: any): Ext.chart.ITipSurface;
    }
}
declare module TypExt {
    class Class {
        static create(config: TypExt.IClassConfig, extraArgs?: any): Ext.IClass;
    }
}
declare module TypExt {
    class ClassManager {
        static create(config: TypExt.IClassManagerConfig, extraArgs?: any): Ext.IClassManager;
    }
}
declare module TypExt {
    class Component {
        static create(config: TypExt.IComponentConfig, extraArgs?: any): Ext.IComponent;
    }
}
declare module TypExt {
    class AbstractComponent {
        static create(config: TypExt.IAbstractComponentConfig, extraArgs?: any): Ext.IAbstractComponent;
    }
}
declare module TypExt {
    class ComponentLoader {
        static create(config: TypExt.IComponentLoaderConfig, extraArgs?: any): Ext.IComponentLoader;
    }
}
declare module TypExt {
    class ComponentManager {
        static create(config: TypExt.IComponentManagerConfig, extraArgs?: any): Ext.IComponentManager;
    }
}
declare module TypExt {
    class ComponentMgr {
        static create(config: TypExt.IComponentMgrConfig, extraArgs?: any): Ext.IComponentMgr;
    }
}
declare module TypExt {
    class ComponentQuery {
        static create(config: TypExt.IComponentQueryConfig, extraArgs?: any): Ext.IComponentQuery;
    }
}
declare module TypExt {
    class Config {
        static create(config: TypExt.IConfigConfig, extraArgs?: any): Ext.IConfig;
    }
}
declare module TypExt {
    class Configurator {
        static create(config: TypExt.IConfiguratorConfig, extraArgs?: any): Ext.IConfigurator;
    }
}
declare module TypExt.container {
    class ButtonGroup {
        static create(config: TypExt.container.IButtonGroupConfig, extraArgs?: any): Ext.container.IButtonGroup;
    }
}
declare module TypExt {
    class ButtonGroup {
        static create(config: TypExt.IButtonGroupConfig, extraArgs?: any): Ext.IButtonGroup;
    }
}
declare module TypExt.container {
    class Container {
        static create(config: TypExt.container.IContainerConfig, extraArgs?: any): Ext.container.IContainer;
    }
}
declare module TypExt {
    class Container {
        static create(config: TypExt.IContainerConfig, extraArgs?: any): Ext.IContainer;
    }
}
declare module TypExt {
    class AbstractContainer {
        static create(config: TypExt.IAbstractContainerConfig, extraArgs?: any): Ext.IAbstractContainer;
    }
}
declare module TypExt.container {
    class DockingContainer {
        static create(config: TypExt.container.IDockingContainerConfig, extraArgs?: any): Ext.container.IDockingContainer;
    }
}
declare module TypExt.container {
    class Monitor {
        static create(config: TypExt.container.IMonitorConfig, extraArgs?: any): Ext.container.IMonitor;
    }
}
declare module TypExt.container {
    class Viewport {
        static create(config: TypExt.container.IViewportConfig, extraArgs?: any): Ext.container.IViewport;
    }
}
declare module TypExt {
    class Viewport {
        static create(config: TypExt.IViewportConfig, extraArgs?: any): Ext.IViewport;
    }
}
declare module TypExt.dashboard {
    class Column {
        static create(config: TypExt.dashboard.IColumnConfig, extraArgs?: any): Ext.dashboard.IColumn;
    }
}
declare module TypExt.dashboard {
    class Dashboard {
        static create(config: TypExt.dashboard.IDashboardConfig, extraArgs?: any): Ext.dashboard.IDashboard;
    }
}
declare module TypExt.dashboard {
    class DropZone {
        static create(config: TypExt.dashboard.IDropZoneConfig, extraArgs?: any): Ext.dashboard.IDropZone;
    }
}
declare module TypExt.dashboard {
    class Panel {
        static create(config: TypExt.dashboard.IPanelConfig, extraArgs?: any): Ext.dashboard.IPanel;
    }
}
declare module TypExt.dashboard {
    class Part {
        static create(config: TypExt.dashboard.IPartConfig, extraArgs?: any): Ext.dashboard.IPart;
    }
}
declare module TypExt.data {
    class AbstractStore {
        static create(config: TypExt.data.IAbstractStoreConfig, extraArgs?: any): Ext.data.IAbstractStore;
    }
}
declare module TypExt.data {
    class ArrayStore {
        static create(config: TypExt.data.IArrayStoreConfig, extraArgs?: any): Ext.data.IArrayStore;
    }
}
declare module TypExt.data {
    class SimpleStore {
        static create(config: TypExt.data.ISimpleStoreConfig, extraArgs?: any): Ext.data.ISimpleStore;
    }
}
declare module TypExt.data {
    class Batch {
        static create(config: TypExt.data.IBatchConfig, extraArgs?: any): Ext.data.IBatch;
    }
}
declare module TypExt.data {
    class BufferedStore {
        static create(config: TypExt.data.IBufferedStoreConfig, extraArgs?: any): Ext.data.IBufferedStore;
    }
}
declare module TypExt.data {
    class ChainedStore {
        static create(config: TypExt.data.IChainedStoreConfig, extraArgs?: any): Ext.data.IChainedStore;
    }
}
declare module TypExt.data {
    class Connection {
        static create(config: TypExt.data.IConnectionConfig, extraArgs?: any): Ext.data.IConnection;
    }
}
declare module TypExt.data {
    class DirectStore {
        static create(config: TypExt.data.IDirectStoreConfig, extraArgs?: any): Ext.data.IDirectStore;
    }
}
declare module TypExt.data {
    class Error {
        static create(config: TypExt.data.IErrorConfig, extraArgs?: any): Ext.data.IError;
    }
}
declare module TypExt.data {
    class ErrorCollection {
        static create(config: TypExt.data.IErrorCollectionConfig, extraArgs?: any): Ext.data.IErrorCollection;
    }
}
declare module TypExt.data {
    class Errors {
        static create(config: TypExt.data.IErrorsConfig, extraArgs?: any): Ext.data.IErrors;
    }
}
declare module TypExt.data.field {
    class Boolean {
        static create(config: TypExt.data.field.IBooleanConfig, extraArgs?: any): Ext.data.field.IBoolean;
    }
}
declare module TypExt.data.field {
    class Date {
        static create(config: TypExt.data.field.IDateConfig, extraArgs?: any): Ext.data.field.IDate;
    }
}
declare module TypExt.data.field {
    class Field {
        static create(config: TypExt.data.field.IFieldConfig, extraArgs?: any): Ext.data.field.IField;
    }
}
declare module TypExt.data {
    class Field {
        static create(config: TypExt.data.IFieldConfig, extraArgs?: any): Ext.data.IField;
    }
}
declare module TypExt.data.field {
    class Integer {
        static create(config: TypExt.data.field.IIntegerConfig, extraArgs?: any): Ext.data.field.IInteger;
    }
}
declare module TypExt.data.field {
    class Number {
        static create(config: TypExt.data.field.INumberConfig, extraArgs?: any): Ext.data.field.INumber;
    }
}
declare module TypExt.data.field {
    class String {
        static create(config: TypExt.data.field.IStringConfig, extraArgs?: any): Ext.data.field.IString;
    }
}
declare module TypExt.data.flash {
    class BinaryXhr {
        static create(config: TypExt.data.flash.IBinaryXhrConfig, extraArgs?: any): Ext.data.flash.IBinaryXhr;
    }
}
declare module TypExt.data.identifier {
    class Generator {
        static create(config: TypExt.data.identifier.IGeneratorConfig, extraArgs?: any): Ext.data.identifier.IGenerator;
    }
}
declare module TypExt.data.identifier {
    class Negative {
        static create(config: TypExt.data.identifier.INegativeConfig, extraArgs?: any): Ext.data.identifier.INegative;
    }
}
declare module TypExt.data.identifier {
    class Sequential {
        static create(config: TypExt.data.identifier.ISequentialConfig, extraArgs?: any): Ext.data.identifier.ISequential;
    }
}
declare module TypExt.data.identifier {
    class Uuid {
        static create(config: TypExt.data.identifier.IUuidConfig, extraArgs?: any): Ext.data.identifier.IUuid;
    }
}
declare module TypExt.data {
    class JsonP {
        static create(config: TypExt.data.IJsonPConfig, extraArgs?: any): Ext.data.IJsonP;
    }
}
declare module TypExt.data {
    class JsonPStore {
        static create(config: TypExt.data.IJsonPStoreConfig, extraArgs?: any): Ext.data.IJsonPStore;
    }
}
declare module TypExt.data {
    class JsonStore {
        static create(config: TypExt.data.IJsonStoreConfig, extraArgs?: any): Ext.data.IJsonStore;
    }
}
declare module TypExt.data {
    class LocalStore {
        static create(config: TypExt.data.ILocalStoreConfig, extraArgs?: any): Ext.data.ILocalStore;
    }
}
declare module TypExt.data.matrix {
    class Matrix {
        static create(config: TypExt.data.matrix.IMatrixConfig, extraArgs?: any): Ext.data.matrix.IMatrix;
    }
}
declare module TypExt.data.matrix {
    class Side {
        static create(config: TypExt.data.matrix.ISideConfig, extraArgs?: any): Ext.data.matrix.ISide;
    }
}
declare module TypExt.data.matrix {
    class Slice {
        static create(config: TypExt.data.matrix.ISliceConfig, extraArgs?: any): Ext.data.matrix.ISlice;
    }
}
declare module TypExt.data {
    class Model {
        static create(config: TypExt.data.IModelConfig, extraArgs?: any): Ext.data.IModel;
    }
}
declare module TypExt.data {
    class Record {
        static create(config: TypExt.data.IRecordConfig, extraArgs?: any): Ext.data.IRecord;
    }
}
declare module TypExt.data {
    class ModelManager {
        static create(config: TypExt.data.IModelManagerConfig, extraArgs?: any): Ext.data.IModelManager;
    }
}
declare module TypExt {
    class ModelMgr {
        static create(config: TypExt.IModelMgrConfig, extraArgs?: any): Ext.IModelMgr;
    }
}
declare module TypExt.data {
    class NodeInterface {
        static create(config: TypExt.data.INodeInterfaceConfig, extraArgs?: any): Ext.data.INodeInterface;
    }
}
declare module TypExt.data {
    class NodeStore {
        static create(config: TypExt.data.INodeStoreConfig, extraArgs?: any): Ext.data.INodeStore;
    }
}
declare module TypExt.data.operation {
    class Create {
        static create(config: TypExt.data.operation.ICreateConfig, extraArgs?: any): Ext.data.operation.ICreate;
    }
}
declare module TypExt.data.operation {
    class Destroy {
        static create(config: TypExt.data.operation.IDestroyConfig, extraArgs?: any): Ext.data.operation.IDestroy;
    }
}
declare module TypExt.data.operation {
    class Operation {
        static create(config: TypExt.data.operation.IOperationConfig, extraArgs?: any): Ext.data.operation.IOperation;
    }
}
declare module TypExt.data {
    class Operation {
        static create(config: TypExt.data.IOperationConfig, extraArgs?: any): Ext.data.IOperation;
    }
}
declare module TypExt.data.operation {
    class Read {
        static create(config: TypExt.data.operation.IReadConfig, extraArgs?: any): Ext.data.operation.IRead;
    }
}
declare module TypExt.data.operation {
    class Update {
        static create(config: TypExt.data.operation.IUpdateConfig, extraArgs?: any): Ext.data.operation.IUpdate;
    }
}
declare module TypExt.data {
    class PageMap {
        static create(config: TypExt.data.IPageMapConfig, extraArgs?: any): Ext.data.IPageMap;
    }
}
declare module TypExt.data.proxy {
    class Ajax {
        static create(config: TypExt.data.proxy.IAjaxConfig, extraArgs?: any): Ext.data.proxy.IAjax;
    }
}
declare module TypExt.data {
    class HttpProxy {
        static create(config: TypExt.data.IHttpProxyConfig, extraArgs?: any): Ext.data.IHttpProxy;
    }
}
declare module TypExt.data {
    class AjaxProxy {
        static create(config: TypExt.data.IAjaxProxyConfig, extraArgs?: any): Ext.data.IAjaxProxy;
    }
}
declare module TypExt.data.proxy {
    class Client {
        static create(config: TypExt.data.proxy.IClientConfig, extraArgs?: any): Ext.data.proxy.IClient;
    }
}
declare module TypExt.data {
    class ClientProxy {
        static create(config: TypExt.data.IClientProxyConfig, extraArgs?: any): Ext.data.IClientProxy;
    }
}
declare module TypExt.data.proxy {
    class Direct {
        static create(config: TypExt.data.proxy.IDirectConfig, extraArgs?: any): Ext.data.proxy.IDirect;
    }
}
declare module TypExt.data {
    class DirectProxy {
        static create(config: TypExt.data.IDirectProxyConfig, extraArgs?: any): Ext.data.IDirectProxy;
    }
}
declare module TypExt.data.proxy {
    class JsonP {
        static create(config: TypExt.data.proxy.IJsonPConfig, extraArgs?: any): Ext.data.proxy.IJsonP;
    }
}
declare module TypExt.data {
    class ScriptTagProxy {
        static create(config: TypExt.data.IScriptTagProxyConfig, extraArgs?: any): Ext.data.IScriptTagProxy;
    }
}
declare module TypExt.data.proxy {
    class LocalStorage {
        static create(config: TypExt.data.proxy.ILocalStorageConfig, extraArgs?: any): Ext.data.proxy.ILocalStorage;
    }
}
declare module TypExt.data {
    class LocalStorageProxy {
        static create(config: TypExt.data.ILocalStorageProxyConfig, extraArgs?: any): Ext.data.ILocalStorageProxy;
    }
}
declare module TypExt.data.proxy {
    class Memory {
        static create(config: TypExt.data.proxy.IMemoryConfig, extraArgs?: any): Ext.data.proxy.IMemory;
    }
}
declare module TypExt.data {
    class MemoryProxy {
        static create(config: TypExt.data.IMemoryProxyConfig, extraArgs?: any): Ext.data.IMemoryProxy;
    }
}
declare module TypExt.data.proxy {
    class Proxy {
        static create(config: TypExt.data.proxy.IProxyConfig, extraArgs?: any): Ext.data.proxy.IProxy;
    }
}
declare module TypExt.data {
    class DataProxy {
        static create(config: TypExt.data.IDataProxyConfig, extraArgs?: any): Ext.data.IDataProxy;
    }
}
declare module TypExt.data {
    class Proxy {
        static create(config: TypExt.data.IProxyConfig, extraArgs?: any): Ext.data.IProxy;
    }
}
declare module TypExt.data.proxy {
    class Rest {
        static create(config: TypExt.data.proxy.IRestConfig, extraArgs?: any): Ext.data.proxy.IRest;
    }
}
declare module TypExt.data {
    class RestProxy {
        static create(config: TypExt.data.IRestProxyConfig, extraArgs?: any): Ext.data.IRestProxy;
    }
}
declare module TypExt.data.proxy {
    class Server {
        static create(config: TypExt.data.proxy.IServerConfig, extraArgs?: any): Ext.data.proxy.IServer;
    }
}
declare module TypExt.data {
    class ServerProxy {
        static create(config: TypExt.data.IServerProxyConfig, extraArgs?: any): Ext.data.IServerProxy;
    }
}
declare module TypExt.data.proxy {
    class SessionStorage {
        static create(config: TypExt.data.proxy.ISessionStorageConfig, extraArgs?: any): Ext.data.proxy.ISessionStorage;
    }
}
declare module TypExt.data {
    class SessionStorageProxy {
        static create(config: TypExt.data.ISessionStorageProxyConfig, extraArgs?: any): Ext.data.ISessionStorageProxy;
    }
}
declare module TypExt.data.proxy {
    class Sql {
        static create(config: TypExt.data.proxy.ISqlConfig, extraArgs?: any): Ext.data.proxy.ISql;
    }
}
declare module TypExt.data.proxy {
    class WebStorage {
        static create(config: TypExt.data.proxy.IWebStorageConfig, extraArgs?: any): Ext.data.proxy.IWebStorage;
    }
}
declare module TypExt.data {
    class WebStorageProxy {
        static create(config: TypExt.data.IWebStorageProxyConfig, extraArgs?: any): Ext.data.IWebStorageProxy;
    }
}
declare module TypExt.data {
    class ProxyStore {
        static create(config: TypExt.data.IProxyStoreConfig, extraArgs?: any): Ext.data.IProxyStore;
    }
}
declare module TypExt.data.reader {
    class Array {
        static create(config: TypExt.data.reader.IArrayConfig, extraArgs?: any): Ext.data.reader.IArray;
    }
}
declare module TypExt.data {
    class ArrayReader {
        static create(config: TypExt.data.IArrayReaderConfig, extraArgs?: any): Ext.data.IArrayReader;
    }
}
declare module TypExt.data.reader {
    class Json {
        static create(config: TypExt.data.reader.IJsonConfig, extraArgs?: any): Ext.data.reader.IJson;
    }
}
declare module TypExt.data {
    class JsonReader {
        static create(config: TypExt.data.IJsonReaderConfig, extraArgs?: any): Ext.data.IJsonReader;
    }
}
declare module TypExt.data.reader {
    class Reader {
        static create(config: TypExt.data.reader.IReaderConfig, extraArgs?: any): Ext.data.reader.IReader;
    }
}
declare module TypExt.data {
    class Reader {
        static create(config: TypExt.data.IReaderConfig, extraArgs?: any): Ext.data.IReader;
    }
}
declare module TypExt.data {
    class DataReader {
        static create(config: TypExt.data.IDataReaderConfig, extraArgs?: any): Ext.data.IDataReader;
    }
}
declare module TypExt.data.reader {
    class Xml {
        static create(config: TypExt.data.reader.IXmlConfig, extraArgs?: any): Ext.data.reader.IXml;
    }
}
declare module TypExt.data {
    class XmlReader {
        static create(config: TypExt.data.IXmlReaderConfig, extraArgs?: any): Ext.data.IXmlReader;
    }
}
declare module TypExt.data {
    class Request {
        static create(config: TypExt.data.IRequestConfig, extraArgs?: any): Ext.data.IRequest;
    }
}
declare module TypExt.data {
    class ResultSet {
        static create(config: TypExt.data.IResultSetConfig, extraArgs?: any): Ext.data.IResultSet;
    }
}
declare module TypExt.data.schema {
    class Association {
        static create(config: TypExt.data.schema.IAssociationConfig, extraArgs?: any): Ext.data.schema.IAssociation;
    }
}
declare module TypExt.data.schema {
    class ManyToMany {
        static create(config: TypExt.data.schema.IManyToManyConfig, extraArgs?: any): Ext.data.schema.IManyToMany;
    }
}
declare module TypExt.data.schema {
    class ManyToOne {
        static create(config: TypExt.data.schema.IManyToOneConfig, extraArgs?: any): Ext.data.schema.IManyToOne;
    }
}
declare module TypExt.data.schema {
    class Namer {
        static create(config: TypExt.data.schema.INamerConfig, extraArgs?: any): Ext.data.schema.INamer;
    }
}
declare module TypExt.data.schema {
    class OneToOne {
        static create(config: TypExt.data.schema.IOneToOneConfig, extraArgs?: any): Ext.data.schema.IOneToOne;
    }
}
declare module TypExt.data.schema {
    class Role {
        static create(config: TypExt.data.schema.IRoleConfig, extraArgs?: any): Ext.data.schema.IRole;
    }
}
declare module TypExt.data.schema {
    class Schema {
        static create(config: TypExt.data.schema.ISchemaConfig, extraArgs?: any): Ext.data.schema.ISchema;
    }
}
declare module TypExt.data.session {
    class BatchVisitor {
        static create(config: TypExt.data.session.IBatchVisitorConfig, extraArgs?: any): Ext.data.session.IBatchVisitor;
    }
}
declare module TypExt.data.session {
    class ChangesVisitor {
        static create(config: TypExt.data.session.IChangesVisitorConfig, extraArgs?: any): Ext.data.session.IChangesVisitor;
    }
}
declare module TypExt.data.session {
    class ChildChangesVisitor {
        static create(config: TypExt.data.session.IChildChangesVisitorConfig, extraArgs?: any): Ext.data.session.IChildChangesVisitor;
    }
}
declare module TypExt.data {
    class Session {
        static create(config: TypExt.data.ISessionConfig, extraArgs?: any): Ext.data.ISession;
    }
}
declare module TypExt.data.soap {
    class Proxy {
        static create(config: TypExt.data.soap.IProxyConfig, extraArgs?: any): Ext.data.soap.IProxy;
    }
}
declare module TypExt.data.soap {
    class Reader {
        static create(config: TypExt.data.soap.IReaderConfig, extraArgs?: any): Ext.data.soap.IReader;
    }
}
declare module TypExt.data {
    class SortTypes {
        static create(config: TypExt.data.ISortTypesConfig, extraArgs?: any): Ext.data.ISortTypes;
    }
}
declare module TypExt.data {
    class Store {
        static create(config: TypExt.data.IStoreConfig, extraArgs?: any): Ext.data.IStore;
    }
}
declare module TypExt.data {
    class StoreManager {
        static create(config: TypExt.data.IStoreManagerConfig, extraArgs?: any): Ext.data.IStoreManager;
    }
}
declare module TypExt {
    class StoreMgr {
        static create(config: TypExt.IStoreMgrConfig, extraArgs?: any): Ext.IStoreMgr;
    }
}
declare module TypExt.data {
    class StoreMgr {
        static create(config: TypExt.data.IStoreMgrConfig, extraArgs?: any): Ext.data.IStoreMgr;
    }
}
declare module TypExt {
    class StoreManager {
        static create(config: TypExt.IStoreManagerConfig, extraArgs?: any): Ext.IStoreManager;
    }
}
declare module TypExt.data {
    class TreeModel {
        static create(config: TypExt.data.ITreeModelConfig, extraArgs?: any): Ext.data.ITreeModel;
    }
}
declare module TypExt.data {
    class TreeStore {
        static create(config: TypExt.data.ITreeStoreConfig, extraArgs?: any): Ext.data.ITreeStore;
    }
}
declare module TypExt.data {
    class Types {
        static create(config: TypExt.data.ITypesConfig, extraArgs?: any): Ext.data.ITypes;
    }
}
declare module TypExt.data {
    class Validation {
        static create(config: TypExt.data.IValidationConfig, extraArgs?: any): Ext.data.IValidation;
    }
}
declare module TypExt.data.validator {
    class Bound {
        static create(config: TypExt.data.validator.IBoundConfig, extraArgs?: any): Ext.data.validator.IBound;
    }
}
declare module TypExt.data.validator {
    class Email {
        static create(config: TypExt.data.validator.IEmailConfig, extraArgs?: any): Ext.data.validator.IEmail;
    }
}
declare module TypExt.data.validator {
    class Exclusion {
        static create(config: TypExt.data.validator.IExclusionConfig, extraArgs?: any): Ext.data.validator.IExclusion;
    }
}
declare module TypExt.data.validator {
    class Format {
        static create(config: TypExt.data.validator.IFormatConfig, extraArgs?: any): Ext.data.validator.IFormat;
    }
}
declare module TypExt.data.validator {
    class Inclusion {
        static create(config: TypExt.data.validator.IInclusionConfig, extraArgs?: any): Ext.data.validator.IInclusion;
    }
}
declare module TypExt.data.validator {
    class Length {
        static create(config: TypExt.data.validator.ILengthConfig, extraArgs?: any): Ext.data.validator.ILength;
    }
}
declare module TypExt.data.validator {
    class List {
        static create(config: TypExt.data.validator.IListConfig, extraArgs?: any): Ext.data.validator.IList;
    }
}
declare module TypExt.data.validator {
    class Presence {
        static create(config: TypExt.data.validator.IPresenceConfig, extraArgs?: any): Ext.data.validator.IPresence;
    }
}
declare module TypExt.data.validator {
    class Range {
        static create(config: TypExt.data.validator.IRangeConfig, extraArgs?: any): Ext.data.validator.IRange;
    }
}
declare module TypExt.data.validator {
    class Validator {
        static create(config: TypExt.data.validator.IValidatorConfig, extraArgs?: any): Ext.data.validator.IValidator;
    }
}
declare module TypExt.data.writer {
    class Json {
        static create(config: TypExt.data.writer.IJsonConfig, extraArgs?: any): Ext.data.writer.IJson;
    }
}
declare module TypExt.data {
    class JsonWriter {
        static create(config: TypExt.data.IJsonWriterConfig, extraArgs?: any): Ext.data.IJsonWriter;
    }
}
declare module TypExt.data.writer {
    class Writer {
        static create(config: TypExt.data.writer.IWriterConfig, extraArgs?: any): Ext.data.writer.IWriter;
    }
}
declare module TypExt.data {
    class DataWriter {
        static create(config: TypExt.data.IDataWriterConfig, extraArgs?: any): Ext.data.IDataWriter;
    }
}
declare module TypExt.data {
    class Writer {
        static create(config: TypExt.data.IWriterConfig, extraArgs?: any): Ext.data.IWriter;
    }
}
declare module TypExt.data.writer {
    class Xml {
        static create(config: TypExt.data.writer.IXmlConfig, extraArgs?: any): Ext.data.writer.IXml;
    }
}
declare module TypExt.data {
    class XmlWriter {
        static create(config: TypExt.data.IXmlWriterConfig, extraArgs?: any): Ext.data.IXmlWriter;
    }
}
declare module TypExt.data {
    class XmlStore {
        static create(config: TypExt.data.IXmlStoreConfig, extraArgs?: any): Ext.data.IXmlStore;
    }
}
declare module TypExt {
    class Date {
        static create(config: TypExt.IDateConfig, extraArgs?: any): Ext.IDate;
    }
}
declare module TypExt.dd {
    class DD {
        static create(config: TypExt.dd.IDDConfig, extraArgs?: any): Ext.dd.IDD;
    }
}
declare module TypExt.dd {
    class DDProxy {
        static create(config: TypExt.dd.IDDProxyConfig, extraArgs?: any): Ext.dd.IDDProxy;
    }
}
declare module TypExt.dd {
    class DDTarget {
        static create(config: TypExt.dd.IDDTargetConfig, extraArgs?: any): Ext.dd.IDDTarget;
    }
}
declare module TypExt.dd {
    class DragDrop {
        static create(config: TypExt.dd.IDragDropConfig, extraArgs?: any): Ext.dd.IDragDrop;
    }
}
declare module TypExt.dd {
    class DragDropElement {
        static create(config: TypExt.dd.IDragDropElementConfig, extraArgs?: any): Ext.dd.IDragDropElement;
    }
}
declare module TypExt.dd.dragdropmanager {
    class ElementWrapper {
        static create(config: TypExt.dd.dragdropmanager.IElementWrapperConfig, extraArgs?: any): Ext.dd.dragdropmanager.IElementWrapper;
    }
}
declare module TypExt.dd {
    class DragDropManager {
        static create(config: TypExt.dd.IDragDropManagerConfig, extraArgs?: any): Ext.dd.IDragDropManager;
    }
}
declare module TypExt.dd {
    class DragDropMgr {
        static create(config: TypExt.dd.IDragDropMgrConfig, extraArgs?: any): Ext.dd.IDragDropMgr;
    }
}
declare module TypExt.dd {
    class DDM {
        static create(config: TypExt.dd.IDDMConfig, extraArgs?: any): Ext.dd.IDDM;
    }
}
declare module TypExt.dd {
    class DragSource {
        static create(config: TypExt.dd.IDragSourceConfig, extraArgs?: any): Ext.dd.IDragSource;
    }
}
declare module TypExt.dd {
    class DragTracker {
        static create(config: TypExt.dd.IDragTrackerConfig, extraArgs?: any): Ext.dd.IDragTracker;
    }
}
declare module TypExt.dd {
    class DragZone {
        static create(config: TypExt.dd.IDragZoneConfig, extraArgs?: any): Ext.dd.IDragZone;
    }
}
declare module TypExt.dd {
    class DropTarget {
        static create(config: TypExt.dd.IDropTargetConfig, extraArgs?: any): Ext.dd.IDropTarget;
    }
}
declare module TypExt.dd {
    class DropZone {
        static create(config: TypExt.dd.IDropZoneConfig, extraArgs?: any): Ext.dd.IDropZone;
    }
}
declare module TypExt.dd {
    class Registry {
        static create(config: TypExt.dd.IRegistryConfig, extraArgs?: any): Ext.dd.IRegistry;
    }
}
declare module TypExt.dd {
    class ScrollManager {
        static create(config: TypExt.dd.IScrollManagerConfig, extraArgs?: any): Ext.dd.IScrollManager;
    }
}
declare module TypExt.dd {
    class StatusProxy {
        static create(config: TypExt.dd.IStatusProxyConfig, extraArgs?: any): Ext.dd.IStatusProxy;
    }
}
declare module TypExt.direct {
    class Event {
        static create(config: TypExt.direct.IEventConfig, extraArgs?: any): Ext.direct.IEvent;
    }
}
declare module TypExt.direct {
    class ExceptionEvent {
        static create(config: TypExt.direct.IExceptionEventConfig, extraArgs?: any): Ext.direct.IExceptionEvent;
    }
}
declare module TypExt.direct {
    class JsonProvider {
        static create(config: TypExt.direct.IJsonProviderConfig, extraArgs?: any): Ext.direct.IJsonProvider;
    }
}
declare module TypExt.direct {
    class Manager {
        static create(config: TypExt.direct.IManagerConfig, extraArgs?: any): Ext.direct.IManager;
    }
}
declare module TypExt {
    class Direct {
        static create(config: TypExt.IDirectConfig, extraArgs?: any): Ext.IDirect;
    }
}
declare module TypExt.direct {
    class PollingProvider {
        static create(config: TypExt.direct.IPollingProviderConfig, extraArgs?: any): Ext.direct.IPollingProvider;
    }
}
declare module TypExt.direct {
    class Provider {
        static create(config: TypExt.direct.IProviderConfig, extraArgs?: any): Ext.direct.IProvider;
    }
}
declare module TypExt.direct {
    class RemotingEvent {
        static create(config: TypExt.direct.IRemotingEventConfig, extraArgs?: any): Ext.direct.IRemotingEvent;
    }
}
declare module TypExt.direct {
    class RemotingMethod {
        static create(config: TypExt.direct.IRemotingMethodConfig, extraArgs?: any): Ext.direct.IRemotingMethod;
    }
}
declare module TypExt.direct {
    class RemotingProvider {
        static create(config: TypExt.direct.IRemotingProviderConfig, extraArgs?: any): Ext.direct.IRemotingProvider;
    }
}
declare module TypExt.direct {
    class Transaction {
        static create(config: TypExt.direct.ITransactionConfig, extraArgs?: any): Ext.direct.ITransaction;
    }
}
declare module TypExt.dom {
    class ButtonElement {
        static create(config: TypExt.dom.IButtonElementConfig, extraArgs?: any): Ext.dom.IButtonElement;
    }
}
declare module TypExt.dom {
    class CompositeElement {
        static create(config: TypExt.dom.ICompositeElementConfig, extraArgs?: any): Ext.dom.ICompositeElement;
    }
}
declare module TypExt {
    class CompositeElement {
        static create(config: TypExt.ICompositeElementConfig, extraArgs?: any): Ext.ICompositeElement;
    }
}
declare module TypExt.dom {
    class CompositeElementLite {
        static create(config: TypExt.dom.ICompositeElementLiteConfig, extraArgs?: any): Ext.dom.ICompositeElementLite;
    }
}
declare module TypExt {
    class CompositeElementLite {
        static create(config: TypExt.ICompositeElementLiteConfig, extraArgs?: any): Ext.ICompositeElementLite;
    }
}
declare module TypExt.dom {
    class Element {
        static create(config: TypExt.dom.IElementConfig, extraArgs?: any): Ext.dom.IElement;
    }
}
declare module TypExt {
    class Element {
        static create(config: TypExt.IElementConfig, extraArgs?: any): Ext.IElement;
    }
}
declare module TypExt.dom {
    class ElementEvent {
        static create(config: TypExt.dom.IElementEventConfig, extraArgs?: any): Ext.dom.IElementEvent;
    }
}
declare module TypExt.dom {
    class Fly {
        static create(config: TypExt.dom.IFlyConfig, extraArgs?: any): Ext.dom.IFly;
    }
}
declare module TypExt.dom.element {
    class Fly {
        static create(config: TypExt.dom.element.IFlyConfig, extraArgs?: any): Ext.dom.element.IFly;
    }
}
declare module TypExt.dom {
    class GarbageCollector {
        static create(config: TypExt.dom.IGarbageCollectorConfig, extraArgs?: any): Ext.dom.IGarbageCollector;
    }
}
declare module TypExt.dom {
    class Helper {
        static create(config: TypExt.dom.IHelperConfig, extraArgs?: any): Ext.dom.IHelper;
    }
}
declare module TypExt {
    class DomHelper {
        static create(config: TypExt.IDomHelperConfig, extraArgs?: any): Ext.IDomHelper;
    }
}
declare module TypExt.dom {
    class Layer {
        static create(config: TypExt.dom.ILayerConfig, extraArgs?: any): Ext.dom.ILayer;
    }
}
declare module TypExt {
    class Layer {
        static create(config: TypExt.ILayerConfig, extraArgs?: any): Ext.ILayer;
    }
}
declare module TypExt.dom {
    class Query {
        static create(config: TypExt.dom.IQueryConfig, extraArgs?: any): Ext.dom.IQuery;
    }
}
declare module TypExt {
    class DomQuery {
        static create(config: TypExt.IDomQueryConfig, extraArgs?: any): Ext.IDomQuery;
    }
}
declare module TypExt.core {
    class DomQuery {
        static create(config: TypExt.core.IDomQueryConfig, extraArgs?: any): Ext.core.IDomQuery;
    }
}
declare module TypExt.dom {
    class Shadow {
        static create(config: TypExt.dom.IShadowConfig, extraArgs?: any): Ext.dom.IShadow;
    }
}
declare module TypExt {
    class Shadow {
        static create(config: TypExt.IShadowConfig, extraArgs?: any): Ext.IShadow;
    }
}
declare module TypExt.dom {
    class Shim {
        static create(config: TypExt.dom.IShimConfig, extraArgs?: any): Ext.dom.IShim;
    }
}
declare module TypExt.dom {
    class Underlay {
        static create(config: TypExt.dom.IUnderlayConfig, extraArgs?: any): Ext.dom.IUnderlay;
    }
}
declare module TypExt.dom {
    class UnderlayPool {
        static create(config: TypExt.dom.IUnderlayPoolConfig, extraArgs?: any): Ext.dom.IUnderlayPool;
    }
}
declare module TypExt.draw {
    class Animator {
        static create(config: TypExt.draw.IAnimatorConfig, extraArgs?: any): Ext.draw.IAnimator;
    }
}
declare module TypExt.draw {
    class Color {
        static create(config: TypExt.draw.IColorConfig, extraArgs?: any): Ext.draw.IColor;
    }
}
declare module TypExt.draw {
    class Container {
        static create(config: TypExt.draw.IContainerConfig, extraArgs?: any): Ext.draw.IContainer;
    }
}
declare module TypExt.draw {
    class Component {
        static create(config: TypExt.draw.IComponentConfig, extraArgs?: any): Ext.draw.IComponent;
    }
}
declare module TypExt.draw {
    class ContainerBase {
        static create(config: TypExt.draw.IContainerBaseConfig, extraArgs?: any): Ext.draw.IContainerBase;
    }
}
declare module TypExt.draw {
    class Draw {
        static create(config: TypExt.draw.IDrawConfig, extraArgs?: any): Ext.draw.IDraw;
    }
}
declare module TypExt.draw.engine {
    class Canvas {
        static create(config: TypExt.draw.engine.ICanvasConfig, extraArgs?: any): Ext.draw.engine.ICanvas;
    }
}
declare module TypExt.draw.engine {
    class Excanvas {
        static create(config: TypExt.draw.engine.IExcanvasConfig, extraArgs?: any): Ext.draw.engine.IExcanvas;
    }
}
declare module TypExt.draw.engine {
    class Svg {
        static create(config: TypExt.draw.engine.ISvgConfig, extraArgs?: any): Ext.draw.engine.ISvg;
    }
}
declare module TypExt.draw.engine.svgcontext {
    class Gradient {
        static create(config: TypExt.draw.engine.svgcontext.IGradientConfig, extraArgs?: any): Ext.draw.engine.svgcontext.IGradient;
    }
}
declare module TypExt.draw.engine {
    class SvgContext {
        static create(config: TypExt.draw.engine.ISvgContextConfig, extraArgs?: any): Ext.draw.engine.ISvgContext;
    }
}
declare module TypExt.draw.gradient {
    class Gradient {
        static create(config: TypExt.draw.gradient.IGradientConfig, extraArgs?: any): Ext.draw.gradient.IGradient;
    }
}
declare module TypExt.draw.gradient {
    class GradientDefinition {
        static create(config: TypExt.draw.gradient.IGradientDefinitionConfig, extraArgs?: any): Ext.draw.gradient.IGradientDefinition;
    }
}
declare module TypExt.draw.gradient {
    class Linear {
        static create(config: TypExt.draw.gradient.ILinearConfig, extraArgs?: any): Ext.draw.gradient.ILinear;
    }
}
declare module TypExt.draw.gradient {
    class Radial {
        static create(config: TypExt.draw.gradient.IRadialConfig, extraArgs?: any): Ext.draw.gradient.IRadial;
    }
}
declare module TypExt.draw {
    class LimitedCache {
        static create(config: TypExt.draw.ILimitedCacheConfig, extraArgs?: any): Ext.draw.ILimitedCache;
    }
}
declare module TypExt.draw {
    class Matrix {
        static create(config: TypExt.draw.IMatrixConfig, extraArgs?: any): Ext.draw.IMatrix;
    }
}
declare module TypExt.draw.modifier {
    class Animation {
        static create(config: TypExt.draw.modifier.IAnimationConfig, extraArgs?: any): Ext.draw.modifier.IAnimation;
    }
}
declare module TypExt.draw.modifier {
    class Highlight {
        static create(config: TypExt.draw.modifier.IHighlightConfig, extraArgs?: any): Ext.draw.modifier.IHighlight;
    }
}
declare module TypExt.draw.modifier {
    class Modifier {
        static create(config: TypExt.draw.modifier.IModifierConfig, extraArgs?: any): Ext.draw.modifier.IModifier;
    }
}
declare module TypExt.draw.modifier {
    class Target {
        static create(config: TypExt.draw.modifier.ITargetConfig, extraArgs?: any): Ext.draw.modifier.ITarget;
    }
}
declare module TypExt.draw {
    class Path {
        static create(config: TypExt.draw.IPathConfig, extraArgs?: any): Ext.draw.IPath;
    }
}
declare module TypExt.draw {
    class PathUtil {
        static create(config: TypExt.draw.IPathUtilConfig, extraArgs?: any): Ext.draw.IPathUtil;
    }
}
declare module TypExt.draw.plugin {
    class SpriteEvents {
        static create(config: TypExt.draw.plugin.ISpriteEventsConfig, extraArgs?: any): Ext.draw.plugin.ISpriteEvents;
    }
}
declare module TypExt.draw {
    class SegmentTree {
        static create(config: TypExt.draw.ISegmentTreeConfig, extraArgs?: any): Ext.draw.ISegmentTree;
    }
}
declare module TypExt.draw.sprite {
    class AnimationParser {
        static create(config: TypExt.draw.sprite.IAnimationParserConfig, extraArgs?: any): Ext.draw.sprite.IAnimationParser;
    }
}
declare module TypExt.draw.sprite {
    class Arc {
        static create(config: TypExt.draw.sprite.IArcConfig, extraArgs?: any): Ext.draw.sprite.IArc;
    }
}
declare module TypExt.draw.sprite {
    class Arrow {
        static create(config: TypExt.draw.sprite.IArrowConfig, extraArgs?: any): Ext.draw.sprite.IArrow;
    }
}
declare module TypExt.draw.sprite {
    class AttributeDefinition {
        static create(config: TypExt.draw.sprite.IAttributeDefinitionConfig, extraArgs?: any): Ext.draw.sprite.IAttributeDefinition;
    }
}
declare module TypExt.draw.sprite {
    class AttributeParser {
        static create(config: TypExt.draw.sprite.IAttributeParserConfig, extraArgs?: any): Ext.draw.sprite.IAttributeParser;
    }
}
declare module TypExt.draw.sprite {
    class Circle {
        static create(config: TypExt.draw.sprite.ICircleConfig, extraArgs?: any): Ext.draw.sprite.ICircle;
    }
}
declare module TypExt.draw.sprite {
    class Composite {
        static create(config: TypExt.draw.sprite.ICompositeConfig, extraArgs?: any): Ext.draw.sprite.IComposite;
    }
}
declare module TypExt.draw.sprite {
    class Cross {
        static create(config: TypExt.draw.sprite.ICrossConfig, extraArgs?: any): Ext.draw.sprite.ICross;
    }
}
declare module TypExt.draw.sprite {
    class Diamond {
        static create(config: TypExt.draw.sprite.IDiamondConfig, extraArgs?: any): Ext.draw.sprite.IDiamond;
    }
}
declare module TypExt.draw.sprite {
    class Ellipse {
        static create(config: TypExt.draw.sprite.IEllipseConfig, extraArgs?: any): Ext.draw.sprite.IEllipse;
    }
}
declare module TypExt.draw.sprite {
    class EllipticalArc {
        static create(config: TypExt.draw.sprite.IEllipticalArcConfig, extraArgs?: any): Ext.draw.sprite.IEllipticalArc;
    }
}
declare module TypExt.draw.sprite {
    class Image {
        static create(config: TypExt.draw.sprite.IImageConfig, extraArgs?: any): Ext.draw.sprite.IImage;
    }
}
declare module TypExt.draw.sprite {
    class Instancing {
        static create(config: TypExt.draw.sprite.IInstancingConfig, extraArgs?: any): Ext.draw.sprite.IInstancing;
    }
}
declare module TypExt.draw.sprite {
    class Line {
        static create(config: TypExt.draw.sprite.ILineConfig, extraArgs?: any): Ext.draw.sprite.ILine;
    }
}
declare module TypExt.draw.sprite {
    class Path {
        static create(config: TypExt.draw.sprite.IPathConfig, extraArgs?: any): Ext.draw.sprite.IPath;
    }
}
declare module TypExt.draw.sprite {
    class Plus {
        static create(config: TypExt.draw.sprite.IPlusConfig, extraArgs?: any): Ext.draw.sprite.IPlus;
    }
}
declare module TypExt.draw.sprite {
    class Rect {
        static create(config: TypExt.draw.sprite.IRectConfig, extraArgs?: any): Ext.draw.sprite.IRect;
    }
}
declare module TypExt.draw.sprite {
    class Sector {
        static create(config: TypExt.draw.sprite.ISectorConfig, extraArgs?: any): Ext.draw.sprite.ISector;
    }
}
declare module TypExt.draw.sprite {
    class Sprite {
        static create(config: TypExt.draw.sprite.ISpriteConfig, extraArgs?: any): Ext.draw.sprite.ISprite;
    }
}
declare module TypExt.draw.sprite {
    class Square {
        static create(config: TypExt.draw.sprite.ISquareConfig, extraArgs?: any): Ext.draw.sprite.ISquare;
    }
}
declare module TypExt.draw.sprite {
    class Text {
        static create(config: TypExt.draw.sprite.ITextConfig, extraArgs?: any): Ext.draw.sprite.IText;
    }
}
declare module TypExt.draw.sprite {
    class Tick {
        static create(config: TypExt.draw.sprite.ITickConfig, extraArgs?: any): Ext.draw.sprite.ITick;
    }
}
declare module TypExt.draw.sprite {
    class Triangle {
        static create(config: TypExt.draw.sprite.ITriangleConfig, extraArgs?: any): Ext.draw.sprite.ITriangle;
    }
}
declare module TypExt.draw {
    class Surface {
        static create(config: TypExt.draw.ISurfaceConfig, extraArgs?: any): Ext.draw.ISurface;
    }
}
declare module TypExt.draw {
    class SurfaceBase {
        static create(config: TypExt.draw.ISurfaceBaseConfig, extraArgs?: any): Ext.draw.ISurfaceBase;
    }
}
declare module TypExt.draw {
    class TextMeasurer {
        static create(config: TypExt.draw.ITextMeasurerConfig, extraArgs?: any): Ext.draw.ITextMeasurer;
    }
}
declare module TypExt.draw {
    class TimingFunctions {
        static create(config: TypExt.draw.ITimingFunctionsConfig, extraArgs?: any): Ext.draw.ITimingFunctions;
    }
}
declare module TypExt {
    class Editor {
        static create(config: TypExt.IEditorConfig, extraArgs?: any): Ext.IEditor;
    }
}
declare module TypExt {
    class ElementLoader {
        static create(config: TypExt.IElementLoaderConfig, extraArgs?: any): Ext.IElementLoader;
    }
}
declare module TypExt.enums {
    class Feature {
        static create(config: TypExt.enums.IFeatureConfig, extraArgs?: any): Ext.enums.IFeature;
    }
}
declare module TypExt.enums {
    class Layout {
        static create(config: TypExt.enums.ILayoutConfig, extraArgs?: any): Ext.enums.ILayout;
    }
}
declare module TypExt.enums {
    class Plugin {
        static create(config: TypExt.enums.IPluginConfig, extraArgs?: any): Ext.enums.IPlugin;
    }
}
declare module TypExt.enums {
    class Widget {
        static create(config: TypExt.enums.IWidgetConfig, extraArgs?: any): Ext.enums.IWidget;
    }
}
declare module TypExt.env {
    class Browser {
        static create(config: TypExt.env.IBrowserConfig, extraArgs?: any): Ext.env.IBrowser;
    }
}
declare module TypExt.env {
    class OS {
        static create(config: TypExt.env.IOSConfig, extraArgs?: any): Ext.env.IOS;
    }
}
declare module TypExt.env {
    class Ready {
        static create(config: TypExt.env.IReadyConfig, extraArgs?: any): Ext.env.IReady;
    }
}
declare module TypExt {
    class Error {
        static create(config: TypExt.IErrorConfig, extraArgs?: any): Ext.IError;
    }
}
declare module TypExt.event {
    class Event {
        static create(config: TypExt.event.IEventConfig, extraArgs?: any): Ext.event.IEvent;
    }
}
declare module TypExt {
    class EventObjectImpl {
        static create(config: TypExt.IEventObjectImplConfig, extraArgs?: any): Ext.IEventObjectImpl;
    }
}
declare module TypExt.event.gesture {
    class DoubleTap {
        static create(config: TypExt.event.gesture.IDoubleTapConfig, extraArgs?: any): Ext.event.gesture.IDoubleTap;
    }
}
declare module TypExt.event.gesture {
    class Drag {
        static create(config: TypExt.event.gesture.IDragConfig, extraArgs?: any): Ext.event.gesture.IDrag;
    }
}
declare module TypExt.event.gesture {
    class EdgeSwipe {
        static create(config: TypExt.event.gesture.IEdgeSwipeConfig, extraArgs?: any): Ext.event.gesture.IEdgeSwipe;
    }
}
declare module TypExt.event.gesture {
    class LongPress {
        static create(config: TypExt.event.gesture.ILongPressConfig, extraArgs?: any): Ext.event.gesture.ILongPress;
    }
}
declare module TypExt.event.gesture {
    class MultiTouch {
        static create(config: TypExt.event.gesture.IMultiTouchConfig, extraArgs?: any): Ext.event.gesture.IMultiTouch;
    }
}
declare module TypExt.event.gesture {
    class Pinch {
        static create(config: TypExt.event.gesture.IPinchConfig, extraArgs?: any): Ext.event.gesture.IPinch;
    }
}
declare module TypExt.event.gesture {
    class Recognizer {
        static create(config: TypExt.event.gesture.IRecognizerConfig, extraArgs?: any): Ext.event.gesture.IRecognizer;
    }
}
declare module TypExt.event.gesture {
    class Rotate {
        static create(config: TypExt.event.gesture.IRotateConfig, extraArgs?: any): Ext.event.gesture.IRotate;
    }
}
declare module TypExt.event.gesture {
    class SingleTouch {
        static create(config: TypExt.event.gesture.ISingleTouchConfig, extraArgs?: any): Ext.event.gesture.ISingleTouch;
    }
}
declare module TypExt.event.gesture {
    class Swipe {
        static create(config: TypExt.event.gesture.ISwipeConfig, extraArgs?: any): Ext.event.gesture.ISwipe;
    }
}
declare module TypExt.event.gesture {
    class Tap {
        static create(config: TypExt.event.gesture.ITapConfig, extraArgs?: any): Ext.event.gesture.ITap;
    }
}
declare module TypExt.event.publisher {
    class Dom {
        static create(config: TypExt.event.publisher.IDomConfig, extraArgs?: any): Ext.event.publisher.IDom;
    }
}
declare module TypExt.event.publisher {
    class ElementPaint {
        static create(config: TypExt.event.publisher.IElementPaintConfig, extraArgs?: any): Ext.event.publisher.IElementPaint;
    }
}
declare module TypExt.event.publisher {
    class ElementSize {
        static create(config: TypExt.event.publisher.IElementSizeConfig, extraArgs?: any): Ext.event.publisher.IElementSize;
    }
}
declare module TypExt.event.publisher {
    class Focus {
        static create(config: TypExt.event.publisher.IFocusConfig, extraArgs?: any): Ext.event.publisher.IFocus;
    }
}
declare module TypExt.event.publisher {
    class Gesture {
        static create(config: TypExt.event.publisher.IGestureConfig, extraArgs?: any): Ext.event.publisher.IGesture;
    }
}
declare module TypExt.event.publisher {
    class MouseEnterLeave {
        static create(config: TypExt.event.publisher.IMouseEnterLeaveConfig, extraArgs?: any): Ext.event.publisher.IMouseEnterLeave;
    }
}
declare module TypExt.event.publisher {
    class Publisher {
        static create(config: TypExt.event.publisher.IPublisherConfig, extraArgs?: any): Ext.event.publisher.IPublisher;
    }
}
declare module TypExt {
    class Evented {
        static create(config: TypExt.IEventedConfig, extraArgs?: any): Ext.IEvented;
    }
}
declare module TypExt {
    class EventedBase {
        static create(config: TypExt.IEventedBaseConfig, extraArgs?: any): Ext.IEventedBase;
    }
}
declare module TypExt {
    class EventManager {
        static create(config: TypExt.IEventManagerConfig, extraArgs?: any): Ext.IEventManager;
    }
}
declare module TypExt {
    class Factory {
        static create(config: TypExt.IFactoryConfig, extraArgs?: any): Ext.IFactory;
    }
}
declare module TypExt {
    class Feature {
        static create(config: TypExt.IFeatureConfig, extraArgs?: any): Ext.IFeature;
    }
}
declare module TypExt.flash {
    class Component {
        static create(config: TypExt.flash.IComponentConfig, extraArgs?: any): Ext.flash.IComponent;
    }
}
declare module TypExt {
    class FlashComponent {
        static create(config: TypExt.IFlashComponentConfig, extraArgs?: any): Ext.IFlashComponent;
    }
}
declare module TypExt {
    class FocusManager {
        static create(config: TypExt.IFocusManagerConfig, extraArgs?: any): Ext.IFocusManager;
    }
}
declare module TypExt {
    class FocusMgr {
        static create(config: TypExt.IFocusMgrConfig, extraArgs?: any): Ext.IFocusMgr;
    }
}
declare module TypExt.form.action {
    class Action {
        static create(config: TypExt.form.action.IActionConfig, extraArgs?: any): Ext.form.action.IAction;
    }
}
declare module TypExt.form {
    class Action {
        static create(config: TypExt.form.IActionConfig, extraArgs?: any): Ext.form.IAction;
    }
}
declare module TypExt.form.action {
    class DirectAction {
        static create(config: TypExt.form.action.IDirectActionConfig, extraArgs?: any): Ext.form.action.IDirectAction;
    }
}
declare module TypExt.form.action {
    class DirectLoad {
        static create(config: TypExt.form.action.IDirectLoadConfig, extraArgs?: any): Ext.form.action.IDirectLoad;
    }
}
declare module TypExt.form.action {
    class DirectSubmit {
        static create(config: TypExt.form.action.IDirectSubmitConfig, extraArgs?: any): Ext.form.action.IDirectSubmit;
    }
}
declare module TypExt.form.action {
    class Load {
        static create(config: TypExt.form.action.ILoadConfig, extraArgs?: any): Ext.form.action.ILoad;
    }
}
declare module TypExt.form.action {
    class StandardSubmit {
        static create(config: TypExt.form.action.IStandardSubmitConfig, extraArgs?: any): Ext.form.action.IStandardSubmit;
    }
}
declare module TypExt.form.action {
    class Submit {
        static create(config: TypExt.form.action.ISubmitConfig, extraArgs?: any): Ext.form.action.ISubmit;
    }
}
declare module TypExt.form {
    class Basic {
        static create(config: TypExt.form.IBasicConfig, extraArgs?: any): Ext.form.IBasic;
    }
}
declare module TypExt.form {
    class BasicForm {
        static create(config: TypExt.form.IBasicFormConfig, extraArgs?: any): Ext.form.IBasicForm;
    }
}
declare module TypExt.form {
    class CheckboxGroup {
        static create(config: TypExt.form.ICheckboxGroupConfig, extraArgs?: any): Ext.form.ICheckboxGroup;
    }
}
declare module TypExt.form {
    class CheckboxManager {
        static create(config: TypExt.form.ICheckboxManagerConfig, extraArgs?: any): Ext.form.ICheckboxManager;
    }
}
declare module TypExt.form.field {
    class Base {
        static create(config: TypExt.form.field.IBaseConfig, extraArgs?: any): Ext.form.field.IBase;
    }
}
declare module TypExt.form {
    class Field {
        static create(config: TypExt.form.IFieldConfig, extraArgs?: any): Ext.form.IField;
    }
}
declare module TypExt.form {
    class BaseField {
        static create(config: TypExt.form.IBaseFieldConfig, extraArgs?: any): Ext.form.IBaseField;
    }
}
declare module TypExt.form.field {
    class Checkbox {
        static create(config: TypExt.form.field.ICheckboxConfig, extraArgs?: any): Ext.form.field.ICheckbox;
    }
}
declare module TypExt.form {
    class Checkbox {
        static create(config: TypExt.form.ICheckboxConfig, extraArgs?: any): Ext.form.ICheckbox;
    }
}
declare module TypExt.form.field {
    class ComboBox {
        static create(config: TypExt.form.field.IComboBoxConfig, extraArgs?: any): Ext.form.field.IComboBox;
    }
}
declare module TypExt.form {
    class ComboBox {
        static create(config: TypExt.form.IComboBoxConfig, extraArgs?: any): Ext.form.IComboBox;
    }
}
declare module TypExt.form.field {
    class Date {
        static create(config: TypExt.form.field.IDateConfig, extraArgs?: any): Ext.form.field.IDate;
    }
}
declare module TypExt.form {
    class DateField {
        static create(config: TypExt.form.IDateFieldConfig, extraArgs?: any): Ext.form.IDateField;
    }
}
declare module TypExt.form {
    class Date {
        static create(config: TypExt.form.IDateConfig, extraArgs?: any): Ext.form.IDate;
    }
}
declare module TypExt.form.field {
    class Display {
        static create(config: TypExt.form.field.IDisplayConfig, extraArgs?: any): Ext.form.field.IDisplay;
    }
}
declare module TypExt.form {
    class DisplayField {
        static create(config: TypExt.form.IDisplayFieldConfig, extraArgs?: any): Ext.form.IDisplayField;
    }
}
declare module TypExt.form {
    class Display {
        static create(config: TypExt.form.IDisplayConfig, extraArgs?: any): Ext.form.IDisplay;
    }
}
declare module TypExt.form.field {
    class Field {
        static create(config: TypExt.form.field.IFieldConfig, extraArgs?: any): Ext.form.field.IField;
    }
}
declare module TypExt.form.field {
    class File {
        static create(config: TypExt.form.field.IFileConfig, extraArgs?: any): Ext.form.field.IFile;
    }
}
declare module TypExt.form {
    class FileUploadField {
        static create(config: TypExt.form.IFileUploadFieldConfig, extraArgs?: any): Ext.form.IFileUploadField;
    }
}
declare module TypExt.ux.form {
    class FileUploadField {
        static create(config: TypExt.ux.form.IFileUploadFieldConfig, extraArgs?: any): Ext.ux.form.IFileUploadField;
    }
}
declare module TypExt.form {
    class File {
        static create(config: TypExt.form.IFileConfig, extraArgs?: any): Ext.form.IFile;
    }
}
declare module TypExt.form.field {
    class FileButton {
        static create(config: TypExt.form.field.IFileButtonConfig, extraArgs?: any): Ext.form.field.IFileButton;
    }
}
declare module TypExt.form.field {
    class Hidden {
        static create(config: TypExt.form.field.IHiddenConfig, extraArgs?: any): Ext.form.field.IHidden;
    }
}
declare module TypExt.form {
    class Hidden {
        static create(config: TypExt.form.IHiddenConfig, extraArgs?: any): Ext.form.IHidden;
    }
}
declare module TypExt.form.field {
    class HtmlEditor {
        static create(config: TypExt.form.field.IHtmlEditorConfig, extraArgs?: any): Ext.form.field.IHtmlEditor;
    }
}
declare module TypExt.form {
    class HtmlEditor {
        static create(config: TypExt.form.IHtmlEditorConfig, extraArgs?: any): Ext.form.IHtmlEditor;
    }
}
declare module TypExt.form.field {
    class Number {
        static create(config: TypExt.form.field.INumberConfig, extraArgs?: any): Ext.form.field.INumber;
    }
}
declare module TypExt.form {
    class NumberField {
        static create(config: TypExt.form.INumberFieldConfig, extraArgs?: any): Ext.form.INumberField;
    }
}
declare module TypExt.form {
    class Number {
        static create(config: TypExt.form.INumberConfig, extraArgs?: any): Ext.form.INumber;
    }
}
declare module TypExt.form.field {
    class Picker {
        static create(config: TypExt.form.field.IPickerConfig, extraArgs?: any): Ext.form.field.IPicker;
    }
}
declare module TypExt.form {
    class Picker {
        static create(config: TypExt.form.IPickerConfig, extraArgs?: any): Ext.form.IPicker;
    }
}
declare module TypExt.form.field {
    class Radio {
        static create(config: TypExt.form.field.IRadioConfig, extraArgs?: any): Ext.form.field.IRadio;
    }
}
declare module TypExt.form {
    class Radio {
        static create(config: TypExt.form.IRadioConfig, extraArgs?: any): Ext.form.IRadio;
    }
}
declare module TypExt.form.field {
    class Spinner {
        static create(config: TypExt.form.field.ISpinnerConfig, extraArgs?: any): Ext.form.field.ISpinner;
    }
}
declare module TypExt.form {
    class Spinner {
        static create(config: TypExt.form.ISpinnerConfig, extraArgs?: any): Ext.form.ISpinner;
    }
}
declare module TypExt.form.field {
    class Tag {
        static create(config: TypExt.form.field.ITagConfig, extraArgs?: any): Ext.form.field.ITag;
    }
}
declare module TypExt.form.field {
    class Text {
        static create(config: TypExt.form.field.ITextConfig, extraArgs?: any): Ext.form.field.IText;
    }
}
declare module TypExt.form {
    class TextField {
        static create(config: TypExt.form.ITextFieldConfig, extraArgs?: any): Ext.form.ITextField;
    }
}
declare module TypExt.form {
    class Text {
        static create(config: TypExt.form.ITextConfig, extraArgs?: any): Ext.form.IText;
    }
}
declare module TypExt.form.field {
    class TextArea {
        static create(config: TypExt.form.field.ITextAreaConfig, extraArgs?: any): Ext.form.field.ITextArea;
    }
}
declare module TypExt.form {
    class TextArea {
        static create(config: TypExt.form.ITextAreaConfig, extraArgs?: any): Ext.form.ITextArea;
    }
}
declare module TypExt.form.field {
    class Time {
        static create(config: TypExt.form.field.ITimeConfig, extraArgs?: any): Ext.form.field.ITime;
    }
}
declare module TypExt.form {
    class TimeField {
        static create(config: TypExt.form.ITimeFieldConfig, extraArgs?: any): Ext.form.ITimeField;
    }
}
declare module TypExt.form {
    class Time {
        static create(config: TypExt.form.ITimeConfig, extraArgs?: any): Ext.form.ITime;
    }
}
declare module TypExt.form.field {
    class Trigger {
        static create(config: TypExt.form.field.ITriggerConfig, extraArgs?: any): Ext.form.field.ITrigger;
    }
}
declare module TypExt.form {
    class TriggerField {
        static create(config: TypExt.form.ITriggerFieldConfig, extraArgs?: any): Ext.form.ITriggerField;
    }
}
declare module TypExt.form {
    class TwinTriggerField {
        static create(config: TypExt.form.ITwinTriggerFieldConfig, extraArgs?: any): Ext.form.ITwinTriggerField;
    }
}
declare module TypExt.form {
    class Trigger {
        static create(config: TypExt.form.ITriggerConfig, extraArgs?: any): Ext.form.ITrigger;
    }
}
declare module TypExt.form.field {
    class VTypes {
        static create(config: TypExt.form.field.IVTypesConfig, extraArgs?: any): Ext.form.field.IVTypes;
    }
}
declare module TypExt.form {
    class VTypes {
        static create(config: TypExt.form.IVTypesConfig, extraArgs?: any): Ext.form.IVTypes;
    }
}
declare module TypExt.form {
    class FieldAncestor {
        static create(config: TypExt.form.IFieldAncestorConfig, extraArgs?: any): Ext.form.IFieldAncestor;
    }
}
declare module TypExt.form {
    class FieldContainer {
        static create(config: TypExt.form.IFieldContainerConfig, extraArgs?: any): Ext.form.IFieldContainer;
    }
}
declare module TypExt.form {
    class FieldSet {
        static create(config: TypExt.form.IFieldSetConfig, extraArgs?: any): Ext.form.IFieldSet;
    }
}
declare module TypExt.form {
    class Label {
        static create(config: TypExt.form.ILabelConfig, extraArgs?: any): Ext.form.ILabel;
    }
}
declare module TypExt.form {
    class Labelable {
        static create(config: TypExt.form.ILabelableConfig, extraArgs?: any): Ext.form.ILabelable;
    }
}
declare module TypExt.form {
    class Panel {
        static create(config: TypExt.form.IPanelConfig, extraArgs?: any): Ext.form.IPanel;
    }
}
declare module TypExt {
    class FormPanel {
        static create(config: TypExt.IFormPanelConfig, extraArgs?: any): Ext.IFormPanel;
    }
}
declare module TypExt.form {
    class FormPanel {
        static create(config: TypExt.form.IFormPanelConfig, extraArgs?: any): Ext.form.IFormPanel;
    }
}
declare module TypExt.form {
    class RadioGroup {
        static create(config: TypExt.form.IRadioGroupConfig, extraArgs?: any): Ext.form.IRadioGroup;
    }
}
declare module TypExt.form {
    class RadioManager {
        static create(config: TypExt.form.IRadioManagerConfig, extraArgs?: any): Ext.form.IRadioManager;
    }
}
declare module TypExt.form.trigger {
    class Component {
        static create(config: TypExt.form.trigger.IComponentConfig, extraArgs?: any): Ext.form.trigger.IComponent;
    }
}
declare module TypExt.form.trigger {
    class Spinner {
        static create(config: TypExt.form.trigger.ISpinnerConfig, extraArgs?: any): Ext.form.trigger.ISpinner;
    }
}
declare module TypExt.form.trigger {
    class Trigger {
        static create(config: TypExt.form.trigger.ITriggerConfig, extraArgs?: any): Ext.form.trigger.ITrigger;
    }
}
declare module TypExt {
    class Function {
        static create(config: TypExt.IFunctionConfig, extraArgs?: any): Ext.IFunction;
    }
}
declare module TypExt.fx {
    class Anim {
        static create(config: TypExt.fx.IAnimConfig, extraArgs?: any): Ext.fx.IAnim;
    }
}
declare module TypExt.fx.animation {
    class Abstract {
        static create(config: TypExt.fx.animation.IAbstractConfig, extraArgs?: any): Ext.fx.animation.IAbstract;
    }
}
declare module TypExt.fx.animation {
    class Cube {
        static create(config: TypExt.fx.animation.ICubeConfig, extraArgs?: any): Ext.fx.animation.ICube;
    }
}
declare module TypExt.fx.animation {
    class Fade {
        static create(config: TypExt.fx.animation.IFadeConfig, extraArgs?: any): Ext.fx.animation.IFade;
    }
}
declare module TypExt.fx.animation {
    class FadeIn {
        static create(config: TypExt.fx.animation.IFadeInConfig, extraArgs?: any): Ext.fx.animation.IFadeIn;
    }
}
declare module TypExt.fx.animation {
    class FadeOut {
        static create(config: TypExt.fx.animation.IFadeOutConfig, extraArgs?: any): Ext.fx.animation.IFadeOut;
    }
}
declare module TypExt.fx.animation {
    class Flip {
        static create(config: TypExt.fx.animation.IFlipConfig, extraArgs?: any): Ext.fx.animation.IFlip;
    }
}
declare module TypExt.fx {
    class Animation {
        static create(config: TypExt.fx.IAnimationConfig, extraArgs?: any): Ext.fx.IAnimation;
    }
}
declare module TypExt.fx.animation {
    class Pop {
        static create(config: TypExt.fx.animation.IPopConfig, extraArgs?: any): Ext.fx.animation.IPop;
    }
}
declare module TypExt.fx.animation {
    class PopIn {
        static create(config: TypExt.fx.animation.IPopInConfig, extraArgs?: any): Ext.fx.animation.IPopIn;
    }
}
declare module TypExt.fx.animation {
    class PopOut {
        static create(config: TypExt.fx.animation.IPopOutConfig, extraArgs?: any): Ext.fx.animation.IPopOut;
    }
}
declare module TypExt.fx.animation {
    class Slide {
        static create(config: TypExt.fx.animation.ISlideConfig, extraArgs?: any): Ext.fx.animation.ISlide;
    }
}
declare module TypExt.fx.animation {
    class SlideIn {
        static create(config: TypExt.fx.animation.ISlideInConfig, extraArgs?: any): Ext.fx.animation.ISlideIn;
    }
}
declare module TypExt.fx.animation {
    class SlideOut {
        static create(config: TypExt.fx.animation.ISlideOutConfig, extraArgs?: any): Ext.fx.animation.ISlideOut;
    }
}
declare module TypExt.fx.animation {
    class Wipe {
        static create(config: TypExt.fx.animation.IWipeConfig, extraArgs?: any): Ext.fx.animation.IWipe;
    }
}
declare module TypExt.fx.animation {
    class WipeIn {
        static create(config: TypExt.fx.animation.IWipeInConfig, extraArgs?: any): Ext.fx.animation.IWipeIn;
    }
}
declare module TypExt.fx.animation {
    class WipeOut {
        static create(config: TypExt.fx.animation.IWipeOutConfig, extraArgs?: any): Ext.fx.animation.IWipeOut;
    }
}
declare module TypExt.fx {
    class Animator {
        static create(config: TypExt.fx.IAnimatorConfig, extraArgs?: any): Ext.fx.IAnimator;
    }
}
declare module TypExt.fx {
    class CubicBezier {
        static create(config: TypExt.fx.ICubicBezierConfig, extraArgs?: any): Ext.fx.ICubicBezier;
    }
}
declare module TypExt.fx {
    class DrawPath {
        static create(config: TypExt.fx.IDrawPathConfig, extraArgs?: any): Ext.fx.IDrawPath;
    }
}
declare module TypExt.fx.easing {
    class Abstract {
        static create(config: TypExt.fx.easing.IAbstractConfig, extraArgs?: any): Ext.fx.easing.IAbstract;
    }
}
declare module TypExt.fx.easing {
    class Bounce {
        static create(config: TypExt.fx.easing.IBounceConfig, extraArgs?: any): Ext.fx.easing.IBounce;
    }
}
declare module TypExt.fx.easing {
    class BoundMomentum {
        static create(config: TypExt.fx.easing.IBoundMomentumConfig, extraArgs?: any): Ext.fx.easing.IBoundMomentum;
    }
}
declare module TypExt.fx.easing {
    class EaseIn {
        static create(config: TypExt.fx.easing.IEaseInConfig, extraArgs?: any): Ext.fx.easing.IEaseIn;
    }
}
declare module TypExt.fx.easing {
    class EaseOut {
        static create(config: TypExt.fx.easing.IEaseOutConfig, extraArgs?: any): Ext.fx.easing.IEaseOut;
    }
}
declare module TypExt.fx.easing {
    class Easing {
        static create(config: TypExt.fx.easing.IEasingConfig, extraArgs?: any): Ext.fx.easing.IEasing;
    }
}
declare module TypExt.fx {
    class Easing {
        static create(config: TypExt.fx.IEasingConfig, extraArgs?: any): Ext.fx.IEasing;
    }
}
declare module TypExt.fx.easing {
    class Linear {
        static create(config: TypExt.fx.easing.ILinearConfig, extraArgs?: any): Ext.fx.easing.ILinear;
    }
}
declare module TypExt.fx.easing {
    class Momentum {
        static create(config: TypExt.fx.easing.IMomentumConfig, extraArgs?: any): Ext.fx.easing.IMomentum;
    }
}
declare module TypExt.fx.layout.card {
    class Abstract {
        static create(config: TypExt.fx.layout.card.IAbstractConfig, extraArgs?: any): Ext.fx.layout.card.IAbstract;
    }
}
declare module TypExt.fx.layout.card {
    class Cover {
        static create(config: TypExt.fx.layout.card.ICoverConfig, extraArgs?: any): Ext.fx.layout.card.ICover;
    }
}
declare module TypExt.fx.layout.card {
    class Cube {
        static create(config: TypExt.fx.layout.card.ICubeConfig, extraArgs?: any): Ext.fx.layout.card.ICube;
    }
}
declare module TypExt.fx.layout.card {
    class Fade {
        static create(config: TypExt.fx.layout.card.IFadeConfig, extraArgs?: any): Ext.fx.layout.card.IFade;
    }
}
declare module TypExt.fx.layout.card {
    class Flip {
        static create(config: TypExt.fx.layout.card.IFlipConfig, extraArgs?: any): Ext.fx.layout.card.IFlip;
    }
}
declare module TypExt.fx.layout {
    class Card {
        static create(config: TypExt.fx.layout.ICardConfig, extraArgs?: any): Ext.fx.layout.ICard;
    }
}
declare module TypExt.fx.layout.card {
    class Pop {
        static create(config: TypExt.fx.layout.card.IPopConfig, extraArgs?: any): Ext.fx.layout.card.IPop;
    }
}
declare module TypExt.fx.layout.card {
    class Reveal {
        static create(config: TypExt.fx.layout.card.IRevealConfig, extraArgs?: any): Ext.fx.layout.card.IReveal;
    }
}
declare module TypExt.fx.layout.card {
    class Scroll {
        static create(config: TypExt.fx.layout.card.IScrollConfig, extraArgs?: any): Ext.fx.layout.card.IScroll;
    }
}
declare module TypExt.fx.layout.card {
    class ScrollCover {
        static create(config: TypExt.fx.layout.card.IScrollCoverConfig, extraArgs?: any): Ext.fx.layout.card.IScrollCover;
    }
}
declare module TypExt.fx.layout.card {
    class ScrollReveal {
        static create(config: TypExt.fx.layout.card.IScrollRevealConfig, extraArgs?: any): Ext.fx.layout.card.IScrollReveal;
    }
}
declare module TypExt.fx.layout.card {
    class Slide {
        static create(config: TypExt.fx.layout.card.ISlideConfig, extraArgs?: any): Ext.fx.layout.card.ISlide;
    }
}
declare module TypExt.fx.layout.card {
    class Style {
        static create(config: TypExt.fx.layout.card.IStyleConfig, extraArgs?: any): Ext.fx.layout.card.IStyle;
    }
}
declare module TypExt.fx {
    class Manager {
        static create(config: TypExt.fx.IManagerConfig, extraArgs?: any): Ext.fx.IManager;
    }
}
declare module TypExt.fx {
    class PropertyHandler {
        static create(config: TypExt.fx.IPropertyHandlerConfig, extraArgs?: any): Ext.fx.IPropertyHandler;
    }
}
declare module TypExt.fx {
    class Queue {
        static create(config: TypExt.fx.IQueueConfig, extraArgs?: any): Ext.fx.IQueue;
    }
}
declare module TypExt.fx.runner {
    class Css {
        static create(config: TypExt.fx.runner.ICssConfig, extraArgs?: any): Ext.fx.runner.ICss;
    }
}
declare module TypExt.fx.runner {
    class CssAnimation {
        static create(config: TypExt.fx.runner.ICssAnimationConfig, extraArgs?: any): Ext.fx.runner.ICssAnimation;
    }
}
declare module TypExt.fx.runner {
    class CssTransition {
        static create(config: TypExt.fx.runner.ICssTransitionConfig, extraArgs?: any): Ext.fx.runner.ICssTransition;
    }
}
declare module TypExt {
    class Animator {
        static create(config: TypExt.IAnimatorConfig, extraArgs?: any): Ext.IAnimator;
    }
}
declare module TypExt.fx {
    class Runner {
        static create(config: TypExt.fx.IRunnerConfig, extraArgs?: any): Ext.fx.IRunner;
    }
}
declare module TypExt.fx {
    class State {
        static create(config: TypExt.fx.IStateConfig, extraArgs?: any): Ext.fx.IState;
    }
}
declare module TypExt.fx.target {
    class Component {
        static create(config: TypExt.fx.target.IComponentConfig, extraArgs?: any): Ext.fx.target.IComponent;
    }
}
declare module TypExt.fx.target {
    class CompositeElement {
        static create(config: TypExt.fx.target.ICompositeElementConfig, extraArgs?: any): Ext.fx.target.ICompositeElement;
    }
}
declare module TypExt.fx.target {
    class CompositeElementCSS {
        static create(config: TypExt.fx.target.ICompositeElementCSSConfig, extraArgs?: any): Ext.fx.target.ICompositeElementCSS;
    }
}
declare module TypExt.fx.target {
    class CompositeSprite {
        static create(config: TypExt.fx.target.ICompositeSpriteConfig, extraArgs?: any): Ext.fx.target.ICompositeSprite;
    }
}
declare module TypExt.fx.target {
    class Element {
        static create(config: TypExt.fx.target.IElementConfig, extraArgs?: any): Ext.fx.target.IElement;
    }
}
declare module TypExt.fx.target {
    class ElementCSS {
        static create(config: TypExt.fx.target.IElementCSSConfig, extraArgs?: any): Ext.fx.target.IElementCSS;
    }
}
declare module TypExt.fx.target {
    class Sprite {
        static create(config: TypExt.fx.target.ISpriteConfig, extraArgs?: any): Ext.fx.target.ISprite;
    }
}
declare module TypExt.fx.target {
    class Target {
        static create(config: TypExt.fx.target.ITargetConfig, extraArgs?: any): Ext.fx.target.ITarget;
    }
}
declare module TypExt {
    class GlobalEvents {
        static create(config: TypExt.IGlobalEventsConfig, extraArgs?: any): Ext.IGlobalEvents;
    }
}
declare module TypExt.grid {
    class CellContext {
        static create(config: TypExt.grid.ICellContextConfig, extraArgs?: any): Ext.grid.ICellContext;
    }
}
declare module TypExt.grid {
    class CellEditor {
        static create(config: TypExt.grid.ICellEditorConfig, extraArgs?: any): Ext.grid.ICellEditor;
    }
}
declare module TypExt.grid.column {
    class Action {
        static create(config: TypExt.grid.column.IActionConfig, extraArgs?: any): Ext.grid.column.IAction;
    }
}
declare module TypExt.grid {
    class ActionColumn {
        static create(config: TypExt.grid.IActionColumnConfig, extraArgs?: any): Ext.grid.IActionColumn;
    }
}
declare module TypExt.grid.column {
    class Boolean {
        static create(config: TypExt.grid.column.IBooleanConfig, extraArgs?: any): Ext.grid.column.IBoolean;
    }
}
declare module TypExt.grid {
    class BooleanColumn {
        static create(config: TypExt.grid.IBooleanColumnConfig, extraArgs?: any): Ext.grid.IBooleanColumn;
    }
}
declare module TypExt.grid.column {
    class Check {
        static create(config: TypExt.grid.column.ICheckConfig, extraArgs?: any): Ext.grid.column.ICheck;
    }
}
declare module TypExt.ux {
    class CheckColumn {
        static create(config: TypExt.ux.ICheckColumnConfig, extraArgs?: any): Ext.ux.ICheckColumn;
    }
}
declare module TypExt.grid.column {
    class CheckColumn {
        static create(config: TypExt.grid.column.ICheckColumnConfig, extraArgs?: any): Ext.grid.column.ICheckColumn;
    }
}
declare module TypExt.grid.column {
    class Column {
        static create(config: TypExt.grid.column.IColumnConfig, extraArgs?: any): Ext.grid.column.IColumn;
    }
}
declare module TypExt.grid {
    class Column {
        static create(config: TypExt.grid.IColumnConfig, extraArgs?: any): Ext.grid.IColumn;
    }
}
declare module TypExt.grid.column {
    class Date {
        static create(config: TypExt.grid.column.IDateConfig, extraArgs?: any): Ext.grid.column.IDate;
    }
}
declare module TypExt.grid {
    class DateColumn {
        static create(config: TypExt.grid.IDateColumnConfig, extraArgs?: any): Ext.grid.IDateColumn;
    }
}
declare module TypExt.grid.column {
    class Number {
        static create(config: TypExt.grid.column.INumberConfig, extraArgs?: any): Ext.grid.column.INumber;
    }
}
declare module TypExt.grid {
    class NumberColumn {
        static create(config: TypExt.grid.INumberColumnConfig, extraArgs?: any): Ext.grid.INumberColumn;
    }
}
declare module TypExt.grid.column {
    class RowNumberer {
        static create(config: TypExt.grid.column.IRowNumbererConfig, extraArgs?: any): Ext.grid.column.IRowNumberer;
    }
}
declare module TypExt.grid {
    class RowNumberer {
        static create(config: TypExt.grid.IRowNumbererConfig, extraArgs?: any): Ext.grid.IRowNumberer;
    }
}
declare module TypExt.grid.column {
    class Template {
        static create(config: TypExt.grid.column.ITemplateConfig, extraArgs?: any): Ext.grid.column.ITemplate;
    }
}
declare module TypExt.grid {
    class TemplateColumn {
        static create(config: TypExt.grid.ITemplateColumnConfig, extraArgs?: any): Ext.grid.ITemplateColumn;
    }
}
declare module TypExt.grid.column {
    class Widget {
        static create(config: TypExt.grid.column.IWidgetConfig, extraArgs?: any): Ext.grid.column.IWidget;
    }
}
declare module TypExt.grid {
    class ColumnComponentLayout {
        static create(config: TypExt.grid.IColumnComponentLayoutConfig, extraArgs?: any): Ext.grid.IColumnComponentLayout;
    }
}
declare module TypExt.grid {
    class ColumnLayout {
        static create(config: TypExt.grid.IColumnLayoutConfig, extraArgs?: any): Ext.grid.IColumnLayout;
    }
}
declare module TypExt.grid {
    class ColumnManager {
        static create(config: TypExt.grid.IColumnManagerConfig, extraArgs?: any): Ext.grid.IColumnManager;
    }
}
declare module TypExt.grid {
    class ColumnModel {
        static create(config: TypExt.grid.IColumnModelConfig, extraArgs?: any): Ext.grid.IColumnModel;
    }
}
declare module TypExt.grid.feature {
    class AbstractSummary {
        static create(config: TypExt.grid.feature.IAbstractSummaryConfig, extraArgs?: any): Ext.grid.feature.IAbstractSummary;
    }
}
declare module TypExt.grid.feature {
    class Feature {
        static create(config: TypExt.grid.feature.IFeatureConfig, extraArgs?: any): Ext.grid.feature.IFeature;
    }
}
declare module TypExt.grid.feature {
    class Grouping {
        static create(config: TypExt.grid.feature.IGroupingConfig, extraArgs?: any): Ext.grid.feature.IGrouping;
    }
}
declare module TypExt.grid.feature {
    class GroupingSummary {
        static create(config: TypExt.grid.feature.IGroupingSummaryConfig, extraArgs?: any): Ext.grid.feature.IGroupingSummary;
    }
}
declare module TypExt.grid.feature {
    class GroupStore {
        static create(config: TypExt.grid.feature.IGroupStoreConfig, extraArgs?: any): Ext.grid.feature.IGroupStore;
    }
}
declare module TypExt.grid.feature {
    class RowBody {
        static create(config: TypExt.grid.feature.IRowBodyConfig, extraArgs?: any): Ext.grid.feature.IRowBody;
    }
}
declare module TypExt.grid.feature {
    class Summary {
        static create(config: TypExt.grid.feature.ISummaryConfig, extraArgs?: any): Ext.grid.feature.ISummary;
    }
}
declare module TypExt.grid.filters.filter {
    class Base {
        static create(config: TypExt.grid.filters.filter.IBaseConfig, extraArgs?: any): Ext.grid.filters.filter.IBase;
    }
}
declare module TypExt.grid.filters.filter {
    class Boolean {
        static create(config: TypExt.grid.filters.filter.IBooleanConfig, extraArgs?: any): Ext.grid.filters.filter.IBoolean;
    }
}
declare module TypExt.grid.filters.filter {
    class Date {
        static create(config: TypExt.grid.filters.filter.IDateConfig, extraArgs?: any): Ext.grid.filters.filter.IDate;
    }
}
declare module TypExt.grid.filters.filter {
    class List {
        static create(config: TypExt.grid.filters.filter.IListConfig, extraArgs?: any): Ext.grid.filters.filter.IList;
    }
}
declare module TypExt.grid.filters.filter {
    class Number {
        static create(config: TypExt.grid.filters.filter.INumberConfig, extraArgs?: any): Ext.grid.filters.filter.INumber;
    }
}
declare module TypExt.grid.filters.filter {
    class SingleFilter {
        static create(config: TypExt.grid.filters.filter.ISingleFilterConfig, extraArgs?: any): Ext.grid.filters.filter.ISingleFilter;
    }
}
declare module TypExt.grid.filters.filter {
    class String {
        static create(config: TypExt.grid.filters.filter.IStringConfig, extraArgs?: any): Ext.grid.filters.filter.IString;
    }
}
declare module TypExt.grid.filters.filter {
    class TriFilter {
        static create(config: TypExt.grid.filters.filter.ITriFilterConfig, extraArgs?: any): Ext.grid.filters.filter.ITriFilter;
    }
}
declare module TypExt.grid.filters {
    class Filters {
        static create(config: TypExt.grid.filters.IFiltersConfig, extraArgs?: any): Ext.grid.filters.IFilters;
    }
}
declare module TypExt.grid.header {
    class Container {
        static create(config: TypExt.grid.header.IContainerConfig, extraArgs?: any): Ext.grid.header.IContainer;
    }
}
declare module TypExt.grid.header {
    class DragZone {
        static create(config: TypExt.grid.header.IDragZoneConfig, extraArgs?: any): Ext.grid.header.IDragZone;
    }
}
declare module TypExt.grid.header {
    class DropZone {
        static create(config: TypExt.grid.header.IDropZoneConfig, extraArgs?: any): Ext.grid.header.IDropZone;
    }
}
declare module TypExt.grid.locking {
    class HeaderContainer {
        static create(config: TypExt.grid.locking.IHeaderContainerConfig, extraArgs?: any): Ext.grid.locking.IHeaderContainer;
    }
}
declare module TypExt.grid.locking {
    class Lockable {
        static create(config: TypExt.grid.locking.ILockableConfig, extraArgs?: any): Ext.grid.locking.ILockable;
    }
}
declare module TypExt.grid {
    class Lockable {
        static create(config: TypExt.grid.ILockableConfig, extraArgs?: any): Ext.grid.ILockable;
    }
}
declare module TypExt.grid.locking {
    class RowSynchronizer {
        static create(config: TypExt.grid.locking.IRowSynchronizerConfig, extraArgs?: any): Ext.grid.locking.IRowSynchronizer;
    }
}
declare module TypExt.grid.locking {
    class View {
        static create(config: TypExt.grid.locking.IViewConfig, extraArgs?: any): Ext.grid.locking.IView;
    }
}
declare module TypExt.grid {
    class LockingView {
        static create(config: TypExt.grid.ILockingViewConfig, extraArgs?: any): Ext.grid.ILockingView;
    }
}
declare module TypExt.grid {
    class NavigationModel {
        static create(config: TypExt.grid.INavigationModelConfig, extraArgs?: any): Ext.grid.INavigationModel;
    }
}
declare module TypExt.grid {
    class Panel {
        static create(config: TypExt.grid.IPanelConfig, extraArgs?: any): Ext.grid.IPanel;
    }
}
declare module TypExt.list {
    class ListView {
        static create(config: TypExt.list.IListViewConfig, extraArgs?: any): Ext.list.IListView;
    }
}
declare module TypExt {
    class ListView {
        static create(config: TypExt.IListViewConfig, extraArgs?: any): Ext.IListView;
    }
}
declare module TypExt.grid {
    class GridPanel {
        static create(config: TypExt.grid.IGridPanelConfig, extraArgs?: any): Ext.grid.IGridPanel;
    }
}
declare module TypExt.grid.plugin {
    class BufferedRenderer {
        static create(config: TypExt.grid.plugin.IBufferedRendererConfig, extraArgs?: any): Ext.grid.plugin.IBufferedRenderer;
    }
}
declare module TypExt.grid.plugin {
    class CellEditing {
        static create(config: TypExt.grid.plugin.ICellEditingConfig, extraArgs?: any): Ext.grid.plugin.ICellEditing;
    }
}
declare module TypExt.grid.plugin {
    class Clipboard {
        static create(config: TypExt.grid.plugin.IClipboardConfig, extraArgs?: any): Ext.grid.plugin.IClipboard;
    }
}
declare module TypExt.grid.plugin {
    class DragDrop {
        static create(config: TypExt.grid.plugin.IDragDropConfig, extraArgs?: any): Ext.grid.plugin.IDragDrop;
    }
}
declare module TypExt.grid.plugin {
    class Editing {
        static create(config: TypExt.grid.plugin.IEditingConfig, extraArgs?: any): Ext.grid.plugin.IEditing;
    }
}
declare module TypExt.grid.plugin {
    class HeaderReorderer {
        static create(config: TypExt.grid.plugin.IHeaderReordererConfig, extraArgs?: any): Ext.grid.plugin.IHeaderReorderer;
    }
}
declare module TypExt.grid.plugin {
    class HeaderResizer {
        static create(config: TypExt.grid.plugin.IHeaderResizerConfig, extraArgs?: any): Ext.grid.plugin.IHeaderResizer;
    }
}
declare module TypExt.grid.plugin {
    class RowEditing {
        static create(config: TypExt.grid.plugin.IRowEditingConfig, extraArgs?: any): Ext.grid.plugin.IRowEditing;
    }
}
declare module TypExt.grid.plugin {
    class RowExpander {
        static create(config: TypExt.grid.plugin.IRowExpanderConfig, extraArgs?: any): Ext.grid.plugin.IRowExpander;
    }
}
declare module TypExt.grid.property {
    class Grid {
        static create(config: TypExt.grid.property.IGridConfig, extraArgs?: any): Ext.grid.property.IGrid;
    }
}
declare module TypExt.grid {
    class PropertyGrid {
        static create(config: TypExt.grid.IPropertyGridConfig, extraArgs?: any): Ext.grid.IPropertyGrid;
    }
}
declare module TypExt.grid.property {
    class HeaderContainer {
        static create(config: TypExt.grid.property.IHeaderContainerConfig, extraArgs?: any): Ext.grid.property.IHeaderContainer;
    }
}
declare module TypExt.grid {
    class PropertyColumnModel {
        static create(config: TypExt.grid.IPropertyColumnModelConfig, extraArgs?: any): Ext.grid.IPropertyColumnModel;
    }
}
declare module TypExt.grid.property {
    class Property {
        static create(config: TypExt.grid.property.IPropertyConfig, extraArgs?: any): Ext.grid.property.IProperty;
    }
}
declare module TypExt {
    class PropGridProperty {
        static create(config: TypExt.IPropGridPropertyConfig, extraArgs?: any): Ext.IPropGridProperty;
    }
}
declare module TypExt.grid.property {
    class Reader {
        static create(config: TypExt.grid.property.IReaderConfig, extraArgs?: any): Ext.grid.property.IReader;
    }
}
declare module TypExt.grid.property {
    class Store {
        static create(config: TypExt.grid.property.IStoreConfig, extraArgs?: any): Ext.grid.property.IStore;
    }
}
declare module TypExt.grid {
    class PropertyStore {
        static create(config: TypExt.grid.IPropertyStoreConfig, extraArgs?: any): Ext.grid.IPropertyStore;
    }
}
declare module TypExt.grid {
    class RowEditor {
        static create(config: TypExt.grid.IRowEditorConfig, extraArgs?: any): Ext.grid.IRowEditor;
    }
}
declare module TypExt.grid {
    class RowEditorButtons {
        static create(config: TypExt.grid.IRowEditorButtonsConfig, extraArgs?: any): Ext.grid.IRowEditorButtons;
    }
}
declare module TypExt.grid.selection {
    class Cells {
        static create(config: TypExt.grid.selection.ICellsConfig, extraArgs?: any): Ext.grid.selection.ICells;
    }
}
declare module TypExt.grid.selection {
    class Columns {
        static create(config: TypExt.grid.selection.IColumnsConfig, extraArgs?: any): Ext.grid.selection.IColumns;
    }
}
declare module TypExt.grid.selection {
    class Rows {
        static create(config: TypExt.grid.selection.IRowsConfig, extraArgs?: any): Ext.grid.selection.IRows;
    }
}
declare module TypExt.grid.selection {
    class Selection {
        static create(config: TypExt.grid.selection.ISelectionConfig, extraArgs?: any): Ext.grid.selection.ISelection;
    }
}
declare module TypExt.grid.selection {
    class SpreadsheetModel {
        static create(config: TypExt.grid.selection.ISpreadsheetModelConfig, extraArgs?: any): Ext.grid.selection.ISpreadsheetModel;
    }
}
declare module TypExt.grid {
    class ViewDropZone {
        static create(config: TypExt.grid.IViewDropZoneConfig, extraArgs?: any): Ext.grid.IViewDropZone;
    }
}
declare module TypExt {
    class Img {
        static create(config: TypExt.IImgConfig, extraArgs?: any): Ext.IImg;
    }
}
declare module TypExt {
    class Inventory {
        static create(config: TypExt.IInventoryConfig, extraArgs?: any): Ext.IInventory;
    }
}
declare module TypExt {
}
declare module TypExt {
    class JSON {
        static create(config: TypExt.IJSONConfig, extraArgs?: any): Ext.IJSON;
    }
}
declare module TypExt.layout.component {
    class Auto {
        static create(config: TypExt.layout.component.IAutoConfig, extraArgs?: any): Ext.layout.component.IAuto;
    }
}
declare module TypExt.layout.component {
    class Body {
        static create(config: TypExt.layout.component.IBodyConfig, extraArgs?: any): Ext.layout.component.IBody;
    }
}
declare module TypExt.layout.component {
    class BoundList {
        static create(config: TypExt.layout.component.IBoundListConfig, extraArgs?: any): Ext.layout.component.IBoundList;
    }
}
declare module TypExt.layout.component {
    class Component {
        static create(config: TypExt.layout.component.IComponentConfig, extraArgs?: any): Ext.layout.component.IComponent;
    }
}
declare module TypExt.layout.component {
    class Dock {
        static create(config: TypExt.layout.component.IDockConfig, extraArgs?: any): Ext.layout.component.IDock;
    }
}
declare module TypExt.layout.component {
    class AbstractDock {
        static create(config: TypExt.layout.component.IAbstractDockConfig, extraArgs?: any): Ext.layout.component.IAbstractDock;
    }
}
declare module TypExt.layout.component.field {
    class FieldContainer {
        static create(config: TypExt.layout.component.field.IFieldContainerConfig, extraArgs?: any): Ext.layout.component.field.IFieldContainer;
    }
}
declare module TypExt.layout.component.field {
    class HtmlEditor {
        static create(config: TypExt.layout.component.field.IHtmlEditorConfig, extraArgs?: any): Ext.layout.component.field.IHtmlEditor;
    }
}
declare module TypExt.layout.component {
    class FieldSet {
        static create(config: TypExt.layout.component.IFieldSetConfig, extraArgs?: any): Ext.layout.component.IFieldSet;
    }
}
declare module TypExt.layout.component {
    class ProgressBar {
        static create(config: TypExt.layout.component.IProgressBarConfig, extraArgs?: any): Ext.layout.component.IProgressBar;
    }
}
declare module TypExt.layout.container {
    class Absolute {
        static create(config: TypExt.layout.container.IAbsoluteConfig, extraArgs?: any): Ext.layout.container.IAbsolute;
    }
}
declare module TypExt.layout {
    class AbsoluteLayout {
        static create(config: TypExt.layout.IAbsoluteLayoutConfig, extraArgs?: any): Ext.layout.IAbsoluteLayout;
    }
}
declare module TypExt.layout.container {
    class Accordion {
        static create(config: TypExt.layout.container.IAccordionConfig, extraArgs?: any): Ext.layout.container.IAccordion;
    }
}
declare module TypExt.layout {
    class AccordionLayout {
        static create(config: TypExt.layout.IAccordionLayoutConfig, extraArgs?: any): Ext.layout.IAccordionLayout;
    }
}
declare module TypExt.layout.container {
    class Anchor {
        static create(config: TypExt.layout.container.IAnchorConfig, extraArgs?: any): Ext.layout.container.IAnchor;
    }
}
declare module TypExt.layout {
    class AnchorLayout {
        static create(config: TypExt.layout.IAnchorLayoutConfig, extraArgs?: any): Ext.layout.IAnchorLayout;
    }
}
declare module TypExt.layout.container {
    class Auto {
        static create(config: TypExt.layout.container.IAutoConfig, extraArgs?: any): Ext.layout.container.IAuto;
    }
}
declare module TypExt.layout.container {
    class Border {
        static create(config: TypExt.layout.container.IBorderConfig, extraArgs?: any): Ext.layout.container.IBorder;
    }
}
declare module TypExt.layout {
    class BorderLayout {
        static create(config: TypExt.layout.IBorderLayoutConfig, extraArgs?: any): Ext.layout.IBorderLayout;
    }
}
declare module TypExt.layout.container {
    class Box {
        static create(config: TypExt.layout.container.IBoxConfig, extraArgs?: any): Ext.layout.container.IBox;
    }
}
declare module TypExt.layout {
    class BoxLayout {
        static create(config: TypExt.layout.IBoxLayoutConfig, extraArgs?: any): Ext.layout.IBoxLayout;
    }
}
declare module TypExt.layout.container.boxoverflow {
    class Menu {
        static create(config: TypExt.layout.container.boxoverflow.IMenuConfig, extraArgs?: any): Ext.layout.container.boxoverflow.IMenu;
    }
}
declare module TypExt.layout.boxoverflow {
    class Menu {
        static create(config: TypExt.layout.boxoverflow.IMenuConfig, extraArgs?: any): Ext.layout.boxoverflow.IMenu;
    }
}
declare module TypExt.layout.container.boxoverflow {
    class None {
        static create(config: TypExt.layout.container.boxoverflow.INoneConfig, extraArgs?: any): Ext.layout.container.boxoverflow.INone;
    }
}
declare module TypExt.layout.boxoverflow {
    class None {
        static create(config: TypExt.layout.boxoverflow.INoneConfig, extraArgs?: any): Ext.layout.boxoverflow.INone;
    }
}
declare module TypExt.layout.container.boxoverflow {
    class Scroller {
        static create(config: TypExt.layout.container.boxoverflow.IScrollerConfig, extraArgs?: any): Ext.layout.container.boxoverflow.IScroller;
    }
}
declare module TypExt.layout.boxoverflow {
    class Scroller {
        static create(config: TypExt.layout.boxoverflow.IScrollerConfig, extraArgs?: any): Ext.layout.boxoverflow.IScroller;
    }
}
declare module TypExt.layout.container {
    class Card {
        static create(config: TypExt.layout.container.ICardConfig, extraArgs?: any): Ext.layout.container.ICard;
    }
}
declare module TypExt.layout {
    class CardLayout {
        static create(config: TypExt.layout.ICardLayoutConfig, extraArgs?: any): Ext.layout.ICardLayout;
    }
}
declare module TypExt.layout.container {
    class Center {
        static create(config: TypExt.layout.container.ICenterConfig, extraArgs?: any): Ext.layout.container.ICenter;
    }
}
declare module TypExt.ux.layout {
    class Center {
        static create(config: TypExt.ux.layout.ICenterConfig, extraArgs?: any): Ext.ux.layout.ICenter;
    }
}
declare module TypExt.layout.container {
    class CheckboxGroup {
        static create(config: TypExt.layout.container.ICheckboxGroupConfig, extraArgs?: any): Ext.layout.container.ICheckboxGroup;
    }
}
declare module TypExt.layout.container {
    class Column {
        static create(config: TypExt.layout.container.IColumnConfig, extraArgs?: any): Ext.layout.container.IColumn;
    }
}
declare module TypExt.layout {
    class ColumnLayout {
        static create(config: TypExt.layout.IColumnLayoutConfig, extraArgs?: any): Ext.layout.IColumnLayout;
    }
}
declare module TypExt.layout.container {
    class ColumnSplitter {
        static create(config: TypExt.layout.container.IColumnSplitterConfig, extraArgs?: any): Ext.layout.container.IColumnSplitter;
    }
}
declare module TypExt.layout.container {
    class ColumnSplitterTracker {
        static create(config: TypExt.layout.container.IColumnSplitterTrackerConfig, extraArgs?: any): Ext.layout.container.IColumnSplitterTracker;
    }
}
declare module TypExt.layout.container {
    class Container {
        static create(config: TypExt.layout.container.IContainerConfig, extraArgs?: any): Ext.layout.container.IContainer;
    }
}
declare module TypExt.layout {
    class ContainerLayout {
        static create(config: TypExt.layout.IContainerLayoutConfig, extraArgs?: any): Ext.layout.IContainerLayout;
    }
}
declare module TypExt.layout.container {
    class Dashboard {
        static create(config: TypExt.layout.container.IDashboardConfig, extraArgs?: any): Ext.layout.container.IDashboard;
    }
}
declare module TypExt.layout.container {
    class Editor {
        static create(config: TypExt.layout.container.IEditorConfig, extraArgs?: any): Ext.layout.container.IEditor;
    }
}
declare module TypExt.layout.container {
    class Fit {
        static create(config: TypExt.layout.container.IFitConfig, extraArgs?: any): Ext.layout.container.IFit;
    }
}
declare module TypExt.layout {
    class FitLayout {
        static create(config: TypExt.layout.IFitLayoutConfig, extraArgs?: any): Ext.layout.IFitLayout;
    }
}
declare module TypExt.layout.container {
    class Form {
        static create(config: TypExt.layout.container.IFormConfig, extraArgs?: any): Ext.layout.container.IForm;
    }
}
declare module TypExt.layout {
    class FormLayout {
        static create(config: TypExt.layout.IFormLayoutConfig, extraArgs?: any): Ext.layout.IFormLayout;
    }
}
declare module TypExt.layout.container {
    class HBox {
        static create(config: TypExt.layout.container.IHBoxConfig, extraArgs?: any): Ext.layout.container.IHBox;
    }
}
declare module TypExt.layout {
    class HBoxLayout {
        static create(config: TypExt.layout.IHBoxLayoutConfig, extraArgs?: any): Ext.layout.IHBoxLayout;
    }
}
declare module TypExt.layout.container {
    class SegmentedButton {
        static create(config: TypExt.layout.container.ISegmentedButtonConfig, extraArgs?: any): Ext.layout.container.ISegmentedButton;
    }
}
declare module TypExt.layout.container {
    class Table {
        static create(config: TypExt.layout.container.ITableConfig, extraArgs?: any): Ext.layout.container.ITable;
    }
}
declare module TypExt.layout {
    class TableLayout {
        static create(config: TypExt.layout.ITableLayoutConfig, extraArgs?: any): Ext.layout.ITableLayout;
    }
}
declare module TypExt.layout.container {
    class VBox {
        static create(config: TypExt.layout.container.IVBoxConfig, extraArgs?: any): Ext.layout.container.IVBox;
    }
}
declare module TypExt.layout {
    class VBoxLayout {
        static create(config: TypExt.layout.IVBoxLayoutConfig, extraArgs?: any): Ext.layout.IVBoxLayout;
    }
}
declare module TypExt.layout {
    class Context {
        static create(config: TypExt.layout.IContextConfig, extraArgs?: any): Ext.layout.IContext;
    }
}
declare module TypExt.layout {
    class ContextItem {
        static create(config: TypExt.layout.IContextItemConfig, extraArgs?: any): Ext.layout.IContextItem;
    }
}
declare module TypExt.layout {
    class Layout {
        static create(config: TypExt.layout.ILayoutConfig, extraArgs?: any): Ext.layout.ILayout;
    }
}
declare module TypExt.layout {
    class SizeModel {
        static create(config: TypExt.layout.ISizeModelConfig, extraArgs?: any): Ext.layout.ISizeModel;
    }
}
declare module TypExt.layout {
    class SizePolicy {
        static create(config: TypExt.layout.ISizePolicyConfig, extraArgs?: any): Ext.layout.ISizePolicy;
    }
}
declare module TypExt {
    class Loader {
        static create(config: TypExt.ILoaderConfig, extraArgs?: any): Ext.ILoader;
    }
}
declare module TypExt {
    class LoadMask {
        static create(config: TypExt.ILoadMaskConfig, extraArgs?: any): Ext.ILoadMask;
    }
}
declare module TypExt.menu {
    class CheckItem {
        static create(config: TypExt.menu.ICheckItemConfig, extraArgs?: any): Ext.menu.ICheckItem;
    }
}
declare module TypExt.menu {
    class ColorPicker {
        static create(config: TypExt.menu.IColorPickerConfig, extraArgs?: any): Ext.menu.IColorPicker;
    }
}
declare module TypExt.menu {
    class DatePicker {
        static create(config: TypExt.menu.IDatePickerConfig, extraArgs?: any): Ext.menu.IDatePicker;
    }
}
declare module TypExt.menu {
    class Item {
        static create(config: TypExt.menu.IItemConfig, extraArgs?: any): Ext.menu.IItem;
    }
}
declare module TypExt.menu {
    class TextItem {
        static create(config: TypExt.menu.ITextItemConfig, extraArgs?: any): Ext.menu.ITextItem;
    }
}
declare module TypExt.menu {
    class Manager {
        static create(config: TypExt.menu.IManagerConfig, extraArgs?: any): Ext.menu.IManager;
    }
}
declare module TypExt.menu {
    class MenuMgr {
        static create(config: TypExt.menu.IMenuMgrConfig, extraArgs?: any): Ext.menu.IMenuMgr;
    }
}
declare module TypExt.menu {
    class Menu {
        static create(config: TypExt.menu.IMenuConfig, extraArgs?: any): Ext.menu.IMenu;
    }
}
declare module TypExt.menu {
    class Separator {
        static create(config: TypExt.menu.ISeparatorConfig, extraArgs?: any): Ext.menu.ISeparator;
    }
}
declare module TypExt {
    class MessageBox {
        static create(config: TypExt.IMessageBoxConfig, extraArgs?: any): Ext.IMessageBox;
    }
}
declare module TypExt {
    class Msg {
        static create(config: TypExt.IMsgConfig, extraArgs?: any): Ext.IMsg;
    }
}
declare module TypExt.mixin {
    class Bindable {
        static create(config: TypExt.mixin.IBindableConfig, extraArgs?: any): Ext.mixin.IBindable;
    }
}
declare module TypExt.mixin {
    class Factoryable {
        static create(config: TypExt.mixin.IFactoryableConfig, extraArgs?: any): Ext.mixin.IFactoryable;
    }
}
declare module TypExt.mixin {
    class Hookable {
        static create(config: TypExt.mixin.IHookableConfig, extraArgs?: any): Ext.mixin.IHookable;
    }
}
declare module TypExt.mixin {
    class Identifiable {
        static create(config: TypExt.mixin.IIdentifiableConfig, extraArgs?: any): Ext.mixin.IIdentifiable;
    }
}
declare module TypExt.mixin {
    class Inheritable {
        static create(config: TypExt.mixin.IInheritableConfig, extraArgs?: any): Ext.mixin.IInheritable;
    }
}
declare module TypExt {
    class Mixin {
        static create(config: TypExt.IMixinConfig, extraArgs?: any): Ext.IMixin;
    }
}
declare module TypExt.mixin {
    class Mashup {
        static create(config: TypExt.mixin.IMashupConfig, extraArgs?: any): Ext.mixin.IMashup;
    }
}
declare module TypExt.mixin {
    class Observable {
        static create(config: TypExt.mixin.IObservableConfig, extraArgs?: any): Ext.mixin.IObservable;
    }
}
declare module TypExt.mixin {
    class Queryable {
        static create(config: TypExt.mixin.IQueryableConfig, extraArgs?: any): Ext.mixin.IQueryable;
    }
}
declare module TypExt.mixin {
    class Responsive {
        static create(config: TypExt.mixin.IResponsiveConfig, extraArgs?: any): Ext.mixin.IResponsive;
    }
}
declare module TypExt.mixin {
    class Selectable {
        static create(config: TypExt.mixin.ISelectableConfig, extraArgs?: any): Ext.mixin.ISelectable;
    }
}
declare module TypExt.mixin {
    class Templatable {
        static create(config: TypExt.mixin.ITemplatableConfig, extraArgs?: any): Ext.mixin.ITemplatable;
    }
}
declare module TypExt.mixin {
    class Traversable {
        static create(config: TypExt.mixin.ITraversableConfig, extraArgs?: any): Ext.mixin.ITraversable;
    }
}
declare module TypExt {
    class Number {
        static create(config: TypExt.INumberConfig, extraArgs?: any): Ext.INumber;
    }
}
declare module TypExt {
}
declare module TypExt {
    class Os {
        static create(config: TypExt.IOsConfig, extraArgs?: any): Ext.IOs;
    }
}
declare module TypExt.panel {
    class Bar {
        static create(config: TypExt.panel.IBarConfig, extraArgs?: any): Ext.panel.IBar;
    }
}
declare module TypExt.panel {
    class DD {
        static create(config: TypExt.panel.IDDConfig, extraArgs?: any): Ext.panel.IDD;
    }
}
declare module TypExt.panel {
    class Header {
        static create(config: TypExt.panel.IHeaderConfig, extraArgs?: any): Ext.panel.IHeader;
    }
}
declare module TypExt.panel {
    class Panel {
        static create(config: TypExt.panel.IPanelConfig, extraArgs?: any): Ext.panel.IPanel;
    }
}
declare module TypExt {
    class Panel {
        static create(config: TypExt.IPanelConfig, extraArgs?: any): Ext.IPanel;
    }
}
declare module TypExt.panel {
    class Pinnable {
        static create(config: TypExt.panel.IPinnableConfig, extraArgs?: any): Ext.panel.IPinnable;
    }
}
declare module TypExt.panel {
    class Proxy {
        static create(config: TypExt.panel.IProxyConfig, extraArgs?: any): Ext.panel.IProxy;
    }
}
declare module TypExt.dd {
    class PanelProxy {
        static create(config: TypExt.dd.IPanelProxyConfig, extraArgs?: any): Ext.dd.IPanelProxy;
    }
}
declare module TypExt.panel {
    class Table {
        static create(config: TypExt.panel.ITableConfig, extraArgs?: any): Ext.panel.ITable;
    }
}
declare module TypExt.panel {
    class Title {
        static create(config: TypExt.panel.ITitleConfig, extraArgs?: any): Ext.panel.ITitle;
    }
}
declare module TypExt.panel {
    class Tool {
        static create(config: TypExt.panel.IToolConfig, extraArgs?: any): Ext.panel.ITool;
    }
}
declare module TypExt.perf {
    class Accumulator {
        static create(config: TypExt.perf.IAccumulatorConfig, extraArgs?: any): Ext.perf.IAccumulator;
    }
}
declare module TypExt.perf {
    class Monitor {
        static create(config: TypExt.perf.IMonitorConfig, extraArgs?: any): Ext.perf.IMonitor;
    }
}
declare module TypExt {
    class Perf {
        static create(config: TypExt.IPerfConfig, extraArgs?: any): Ext.IPerf;
    }
}
declare module TypExt.picker {
    class Color {
        static create(config: TypExt.picker.IColorConfig, extraArgs?: any): Ext.picker.IColor;
    }
}
declare module TypExt {
    class ColorPalette {
        static create(config: TypExt.IColorPaletteConfig, extraArgs?: any): Ext.IColorPalette;
    }
}
declare module TypExt.picker {
    class Date {
        static create(config: TypExt.picker.IDateConfig, extraArgs?: any): Ext.picker.IDate;
    }
}
declare module TypExt {
    class DatePicker {
        static create(config: TypExt.IDatePickerConfig, extraArgs?: any): Ext.IDatePicker;
    }
}
declare module TypExt.picker {
    class Month {
        static create(config: TypExt.picker.IMonthConfig, extraArgs?: any): Ext.picker.IMonth;
    }
}
declare module TypExt {
    class MonthPicker {
        static create(config: TypExt.IMonthPickerConfig, extraArgs?: any): Ext.IMonthPicker;
    }
}
declare module TypExt.picker {
    class Time {
        static create(config: TypExt.picker.ITimeConfig, extraArgs?: any): Ext.picker.ITime;
    }
}
declare module TypExt.plugin {
    class Abstract {
        static create(config: TypExt.plugin.IAbstractConfig, extraArgs?: any): Ext.plugin.IAbstract;
    }
}
declare module TypExt {
    class AbstractPlugin {
        static create(config: TypExt.IAbstractPluginConfig, extraArgs?: any): Ext.IAbstractPlugin;
    }
}
declare module TypExt.plugin {
    class AbstractClipboard {
        static create(config: TypExt.plugin.IAbstractClipboardConfig, extraArgs?: any): Ext.plugin.IAbstractClipboard;
    }
}
declare module TypExt.plugin {
    class LazyItems {
        static create(config: TypExt.plugin.ILazyItemsConfig, extraArgs?: any): Ext.plugin.ILazyItems;
    }
}
declare module TypExt.plugin {
    class Manager {
        static create(config: TypExt.plugin.IManagerConfig, extraArgs?: any): Ext.plugin.IManager;
    }
}
declare module TypExt {
    class PluginManager {
        static create(config: TypExt.IPluginManagerConfig, extraArgs?: any): Ext.IPluginManager;
    }
}
declare module TypExt {
    class PluginMgr {
        static create(config: TypExt.IPluginMgrConfig, extraArgs?: any): Ext.IPluginMgr;
    }
}
declare module TypExt.plugin {
    class Responsive {
        static create(config: TypExt.plugin.IResponsiveConfig, extraArgs?: any): Ext.plugin.IResponsive;
    }
}
declare module TypExt.plugin {
    class Viewport {
        static create(config: TypExt.plugin.IViewportConfig, extraArgs?: any): Ext.plugin.IViewport;
    }
}
declare module TypExt {
    class ProgressBar {
        static create(config: TypExt.IProgressBarConfig, extraArgs?: any): Ext.IProgressBar;
    }
}
declare module TypExt {
    class ProgressBarWidget {
        static create(config: TypExt.IProgressBarWidgetConfig, extraArgs?: any): Ext.IProgressBarWidget;
    }
}
declare module TypExt.resizer {
    class BorderSplitter {
        static create(config: TypExt.resizer.IBorderSplitterConfig, extraArgs?: any): Ext.resizer.IBorderSplitter;
    }
}
declare module TypExt.resizer {
    class BorderSplitterTracker {
        static create(config: TypExt.resizer.IBorderSplitterTrackerConfig, extraArgs?: any): Ext.resizer.IBorderSplitterTracker;
    }
}
declare module TypExt.resizer {
    class Handle {
        static create(config: TypExt.resizer.IHandleConfig, extraArgs?: any): Ext.resizer.IHandle;
    }
}
declare module TypExt.resizer {
    class Resizer {
        static create(config: TypExt.resizer.IResizerConfig, extraArgs?: any): Ext.resizer.IResizer;
    }
}
declare module TypExt {
    class Resizable {
        static create(config: TypExt.IResizableConfig, extraArgs?: any): Ext.IResizable;
    }
}
declare module TypExt.resizer {
    class ResizeTracker {
        static create(config: TypExt.resizer.IResizeTrackerConfig, extraArgs?: any): Ext.resizer.IResizeTracker;
    }
}
declare module TypExt.resizer {
    class Splitter {
        static create(config: TypExt.resizer.ISplitterConfig, extraArgs?: any): Ext.resizer.ISplitter;
    }
}
declare module TypExt.resizer {
    class SplitterTracker {
        static create(config: TypExt.resizer.ISplitterTrackerConfig, extraArgs?: any): Ext.resizer.ISplitterTracker;
    }
}
declare module TypExt.scroll {
    class DomScroller {
        static create(config: TypExt.scroll.IDomScrollerConfig, extraArgs?: any): Ext.scroll.IDomScroller;
    }
}
declare module TypExt.scroll {
    class Indicator {
        static create(config: TypExt.scroll.IIndicatorConfig, extraArgs?: any): Ext.scroll.IIndicator;
    }
}
declare module TypExt.scroll {
    class Scroller {
        static create(config: TypExt.scroll.IScrollerConfig, extraArgs?: any): Ext.scroll.IScroller;
    }
}
declare module TypExt.scroll {
    class TouchScroller {
        static create(config: TypExt.scroll.ITouchScrollerConfig, extraArgs?: any): Ext.scroll.ITouchScroller;
    }
}
declare module TypExt.selection {
    class CellModel {
        static create(config: TypExt.selection.ICellModelConfig, extraArgs?: any): Ext.selection.ICellModel;
    }
}
declare module TypExt.selection {
    class CheckboxModel {
        static create(config: TypExt.selection.ICheckboxModelConfig, extraArgs?: any): Ext.selection.ICheckboxModel;
    }
}
declare module TypExt.selection {
    class DataViewModel {
        static create(config: TypExt.selection.IDataViewModelConfig, extraArgs?: any): Ext.selection.IDataViewModel;
    }
}
declare module TypExt.selection {
    class Model {
        static create(config: TypExt.selection.IModelConfig, extraArgs?: any): Ext.selection.IModel;
    }
}
declare module TypExt {
    class AbstractSelectionModel {
        static create(config: TypExt.IAbstractSelectionModelConfig, extraArgs?: any): Ext.IAbstractSelectionModel;
    }
}
declare module TypExt.selection {
    class RowModel {
        static create(config: TypExt.selection.IRowModelConfig, extraArgs?: any): Ext.selection.IRowModel;
    }
}
declare module TypExt.selection {
    class TreeModel {
        static create(config: TypExt.selection.ITreeModelConfig, extraArgs?: any): Ext.selection.ITreeModel;
    }
}
declare module TypExt.slider {
    class Multi {
        static create(config: TypExt.slider.IMultiConfig, extraArgs?: any): Ext.slider.IMulti;
    }
}
declare module TypExt.slider {
    class MultiSlider {
        static create(config: TypExt.slider.IMultiSliderConfig, extraArgs?: any): Ext.slider.IMultiSlider;
    }
}
declare module TypExt.slider {
    class Single {
        static create(config: TypExt.slider.ISingleConfig, extraArgs?: any): Ext.slider.ISingle;
    }
}
declare module TypExt {
    class Slider {
        static create(config: TypExt.ISliderConfig, extraArgs?: any): Ext.ISlider;
    }
}
declare module TypExt.form {
    class SliderField {
        static create(config: TypExt.form.ISliderFieldConfig, extraArgs?: any): Ext.form.ISliderField;
    }
}
declare module TypExt.slider {
    class SingleSlider {
        static create(config: TypExt.slider.ISingleSliderConfig, extraArgs?: any): Ext.slider.ISingleSlider;
    }
}
declare module TypExt.slider {
    class Slider {
        static create(config: TypExt.slider.ISliderConfig, extraArgs?: any): Ext.slider.ISlider;
    }
}
declare module TypExt.slider {
    class Thumb {
        static create(config: TypExt.slider.IThumbConfig, extraArgs?: any): Ext.slider.IThumb;
    }
}
declare module TypExt.slider {
    class Tip {
        static create(config: TypExt.slider.ITipConfig, extraArgs?: any): Ext.slider.ITip;
    }
}
declare module TypExt.slider {
    class Widget {
        static create(config: TypExt.slider.IWidgetConfig, extraArgs?: any): Ext.slider.IWidget;
    }
}
declare module TypExt.sparkline {
    class Bar {
        static create(config: TypExt.sparkline.IBarConfig, extraArgs?: any): Ext.sparkline.IBar;
    }
}
declare module TypExt.sparkline {
    class BarBase {
        static create(config: TypExt.sparkline.IBarBaseConfig, extraArgs?: any): Ext.sparkline.IBarBase;
    }
}
declare module TypExt.sparkline {
    class Base {
        static create(config: TypExt.sparkline.IBaseConfig, extraArgs?: any): Ext.sparkline.IBase;
    }
}
declare module TypExt.sparkline {
    class Box {
        static create(config: TypExt.sparkline.IBoxConfig, extraArgs?: any): Ext.sparkline.IBox;
    }
}
declare module TypExt.sparkline {
    class Bullet {
        static create(config: TypExt.sparkline.IBulletConfig, extraArgs?: any): Ext.sparkline.IBullet;
    }
}
declare module TypExt.sparkline {
    class CanvasBase {
        static create(config: TypExt.sparkline.ICanvasBaseConfig, extraArgs?: any): Ext.sparkline.ICanvasBase;
    }
}
declare module TypExt.sparkline {
    class CanvasCanvas {
        static create(config: TypExt.sparkline.ICanvasCanvasConfig, extraArgs?: any): Ext.sparkline.ICanvasCanvas;
    }
}
declare module TypExt.sparkline {
    class Discrete {
        static create(config: TypExt.sparkline.IDiscreteConfig, extraArgs?: any): Ext.sparkline.IDiscrete;
    }
}
declare module TypExt.sparkline {
    class Line {
        static create(config: TypExt.sparkline.ILineConfig, extraArgs?: any): Ext.sparkline.ILine;
    }
}
declare module TypExt.sparkline {
    class Pie {
        static create(config: TypExt.sparkline.IPieConfig, extraArgs?: any): Ext.sparkline.IPie;
    }
}
declare module TypExt.sparkline {
    class RangeMap {
        static create(config: TypExt.sparkline.IRangeMapConfig, extraArgs?: any): Ext.sparkline.IRangeMap;
    }
}
declare module TypExt.sparkline {
    class Shape {
        static create(config: TypExt.sparkline.IShapeConfig, extraArgs?: any): Ext.sparkline.IShape;
    }
}
declare module TypExt.sparkline {
    class TriState {
        static create(config: TypExt.sparkline.ITriStateConfig, extraArgs?: any): Ext.sparkline.ITriState;
    }
}
declare module TypExt.sparkline {
    class VmlCanvas {
        static create(config: TypExt.sparkline.IVmlCanvasConfig, extraArgs?: any): Ext.sparkline.IVmlCanvas;
    }
}
declare module TypExt.state {
    class CookieProvider {
        static create(config: TypExt.state.ICookieProviderConfig, extraArgs?: any): Ext.state.ICookieProvider;
    }
}
declare module TypExt.state {
    class LocalStorageProvider {
        static create(config: TypExt.state.ILocalStorageProviderConfig, extraArgs?: any): Ext.state.ILocalStorageProvider;
    }
}
declare module TypExt.state {
    class Manager {
        static create(config: TypExt.state.IManagerConfig, extraArgs?: any): Ext.state.IManager;
    }
}
declare module TypExt.state {
    class Provider {
        static create(config: TypExt.state.IProviderConfig, extraArgs?: any): Ext.state.IProvider;
    }
}
declare module TypExt.state {
    class Stateful {
        static create(config: TypExt.state.IStatefulConfig, extraArgs?: any): Ext.state.IStateful;
    }
}
declare module TypExt {
    class String {
        static create(config: TypExt.IStringConfig, extraArgs?: any): Ext.IString;
    }
}
declare module TypExt {
    class Supports {
        static create(config: TypExt.ISupportsConfig, extraArgs?: any): Ext.ISupports;
    }
}
declare module TypExt.tab {
    class Bar {
        static create(config: TypExt.tab.IBarConfig, extraArgs?: any): Ext.tab.IBar;
    }
}
declare module TypExt.tab {
    class Panel {
        static create(config: TypExt.tab.IPanelConfig, extraArgs?: any): Ext.tab.IPanel;
    }
}
declare module TypExt {
    class TabPanel {
        static create(config: TypExt.ITabPanelConfig, extraArgs?: any): Ext.ITabPanel;
    }
}
declare module TypExt.tab {
    class Tab {
        static create(config: TypExt.tab.ITabConfig, extraArgs?: any): Ext.tab.ITab;
    }
}
declare module TypExt {
    class TaskQueue {
        static create(config: TypExt.ITaskQueueConfig, extraArgs?: any): Ext.ITaskQueue;
    }
}
declare module TypExt {
    class Template {
        static create(config: TypExt.ITemplateConfig, extraArgs?: any): Ext.ITemplate;
    }
}
declare module TypExt.tip {
    class QuickTip {
        static create(config: TypExt.tip.IQuickTipConfig, extraArgs?: any): Ext.tip.IQuickTip;
    }
}
declare module TypExt {
    class QuickTip {
        static create(config: TypExt.IQuickTipConfig, extraArgs?: any): Ext.IQuickTip;
    }
}
declare module TypExt.tip {
    class QuickTipManager {
        static create(config: TypExt.tip.IQuickTipManagerConfig, extraArgs?: any): Ext.tip.IQuickTipManager;
    }
}
declare module TypExt {
    class QuickTips {
        static create(config: TypExt.IQuickTipsConfig, extraArgs?: any): Ext.IQuickTips;
    }
}
declare module TypExt.tip {
    class Tip {
        static create(config: TypExt.tip.ITipConfig, extraArgs?: any): Ext.tip.ITip;
    }
}
declare module TypExt {
    class Tip {
        static create(config: TypExt.ITipConfig, extraArgs?: any): Ext.ITip;
    }
}
declare module TypExt.tip {
    class ToolTip {
        static create(config: TypExt.tip.IToolTipConfig, extraArgs?: any): Ext.tip.IToolTip;
    }
}
declare module TypExt {
    class ToolTip {
        static create(config: TypExt.IToolTipConfig, extraArgs?: any): Ext.IToolTip;
    }
}
declare module TypExt.toolbar {
    class Breadcrumb {
        static create(config: TypExt.toolbar.IBreadcrumbConfig, extraArgs?: any): Ext.toolbar.IBreadcrumb;
    }
}
declare module TypExt.toolbar {
    class Fill {
        static create(config: TypExt.toolbar.IFillConfig, extraArgs?: any): Ext.toolbar.IFill;
    }
}
declare module TypExt.toolbar {
    class Item {
        static create(config: TypExt.toolbar.IItemConfig, extraArgs?: any): Ext.toolbar.IItem;
    }
}
declare module TypExt.toolbar {
    class Paging {
        static create(config: TypExt.toolbar.IPagingConfig, extraArgs?: any): Ext.toolbar.IPaging;
    }
}
declare module TypExt {
    class PagingToolbar {
        static create(config: TypExt.IPagingToolbarConfig, extraArgs?: any): Ext.IPagingToolbar;
    }
}
declare module TypExt.toolbar {
    class Separator {
        static create(config: TypExt.toolbar.ISeparatorConfig, extraArgs?: any): Ext.toolbar.ISeparator;
    }
}
declare module TypExt.toolbar {
    class Spacer {
        static create(config: TypExt.toolbar.ISpacerConfig, extraArgs?: any): Ext.toolbar.ISpacer;
    }
}
declare module TypExt.toolbar {
    class TextItem {
        static create(config: TypExt.toolbar.ITextItemConfig, extraArgs?: any): Ext.toolbar.ITextItem;
    }
}
declare module TypExt.toolbar {
    class Toolbar {
        static create(config: TypExt.toolbar.IToolbarConfig, extraArgs?: any): Ext.toolbar.IToolbar;
    }
}
declare module TypExt {
    class Toolbar {
        static create(config: TypExt.IToolbarConfig, extraArgs?: any): Ext.IToolbar;
    }
}
declare module TypExt.tree {
    class Column {
        static create(config: TypExt.tree.IColumnConfig, extraArgs?: any): Ext.tree.IColumn;
    }
}
declare module TypExt.tree {
    class NavigationModel {
        static create(config: TypExt.tree.INavigationModelConfig, extraArgs?: any): Ext.tree.INavigationModel;
    }
}
declare module TypExt.tree {
    class Panel {
        static create(config: TypExt.tree.IPanelConfig, extraArgs?: any): Ext.tree.IPanel;
    }
}
declare module TypExt.tree {
    class TreePanel {
        static create(config: TypExt.tree.ITreePanelConfig, extraArgs?: any): Ext.tree.ITreePanel;
    }
}
declare module TypExt {
    class TreePanel {
        static create(config: TypExt.ITreePanelConfig, extraArgs?: any): Ext.ITreePanel;
    }
}
declare module TypExt.tree.plugin {
    class TreeViewDragDrop {
        static create(config: TypExt.tree.plugin.ITreeViewDragDropConfig, extraArgs?: any): Ext.tree.plugin.ITreeViewDragDrop;
    }
}
declare module TypExt.tree {
    class View {
        static create(config: TypExt.tree.IViewConfig, extraArgs?: any): Ext.tree.IView;
    }
}
declare module TypExt.tree {
    class ViewDragZone {
        static create(config: TypExt.tree.IViewDragZoneConfig, extraArgs?: any): Ext.tree.IViewDragZone;
    }
}
declare module TypExt.tree {
    class ViewDropZone {
        static create(config: TypExt.tree.IViewDropZoneConfig, extraArgs?: any): Ext.tree.IViewDropZone;
    }
}
declare module TypExt.util {
    class AbstractMixedCollection {
        static create(config: TypExt.util.IAbstractMixedCollectionConfig, extraArgs?: any): Ext.util.IAbstractMixedCollection;
    }
}
declare module TypExt.util {
    class Animate {
        static create(config: TypExt.util.IAnimateConfig, extraArgs?: any): Ext.util.IAnimate;
    }
}
declare module TypExt.util {
    class Bag {
        static create(config: TypExt.util.IBagConfig, extraArgs?: any): Ext.util.IBag;
    }
}
declare module TypExt.util {
    class Base64 {
        static create(config: TypExt.util.IBase64Config, extraArgs?: any): Ext.util.IBase64;
    }
}
declare module TypExt.util {
    class Cache {
        static create(config: TypExt.util.ICacheConfig, extraArgs?: any): Ext.util.ICache;
    }
}
declare module TypExt.util {
    class ClickRepeater {
        static create(config: TypExt.util.IClickRepeaterConfig, extraArgs?: any): Ext.util.IClickRepeater;
    }
}
declare module TypExt.util {
    class Collection {
        static create(config: TypExt.util.ICollectionConfig, extraArgs?: any): Ext.util.ICollection;
    }
}
declare module TypExt.util {
    class CollectionKey {
        static create(config: TypExt.util.ICollectionKeyConfig, extraArgs?: any): Ext.util.ICollectionKey;
    }
}
declare module TypExt.util {
    class ComponentDragger {
        static create(config: TypExt.util.IComponentDraggerConfig, extraArgs?: any): Ext.util.IComponentDragger;
    }
}
declare module TypExt.util {
    class Cookies {
        static create(config: TypExt.util.ICookiesConfig, extraArgs?: any): Ext.util.ICookies;
    }
}
declare module TypExt.util {
    class CSS {
        static create(config: TypExt.util.ICSSConfig, extraArgs?: any): Ext.util.ICSS;
    }
}
declare module TypExt.util {
    class CSV {
        static create(config: TypExt.util.ICSVConfig, extraArgs?: any): Ext.util.ICSV;
    }
}
declare module TypExt.util {
    class DelayedTask {
        static create(config: TypExt.util.IDelayedTaskConfig, extraArgs?: any): Ext.util.IDelayedTask;
    }
}
declare module TypExt.util {
    class DelimitedValue {
        static create(config: TypExt.util.IDelimitedValueConfig, extraArgs?: any): Ext.util.IDelimitedValue;
    }
}
declare module TypExt.util {
    class ElementContainer {
        static create(config: TypExt.util.IElementContainerConfig, extraArgs?: any): Ext.util.IElementContainer;
    }
}
declare module TypExt.util {
    class Event {
        static create(config: TypExt.util.IEventConfig, extraArgs?: any): Ext.util.IEvent;
    }
}
declare module TypExt.util {
    class Filter {
        static create(config: TypExt.util.IFilterConfig, extraArgs?: any): Ext.util.IFilter;
    }
}
declare module TypExt.util {
    class FilterCollection {
        static create(config: TypExt.util.IFilterCollectionConfig, extraArgs?: any): Ext.util.IFilterCollection;
    }
}
declare module TypExt.util {
    class Floating {
        static create(config: TypExt.util.IFloatingConfig, extraArgs?: any): Ext.util.IFloating;
    }
}
declare module TypExt.util {
    class Focusable {
        static create(config: TypExt.util.IFocusableConfig, extraArgs?: any): Ext.util.IFocusable;
    }
}
declare module TypExt.util {
    class FocusableContainer {
        static create(config: TypExt.util.IFocusableContainerConfig, extraArgs?: any): Ext.util.IFocusableContainer;
    }
}
declare module TypExt.util {
    class Format {
        static create(config: TypExt.util.IFormatConfig, extraArgs?: any): Ext.util.IFormat;
    }
}
declare module TypExt.util {
    class Group {
        static create(config: TypExt.util.IGroupConfig, extraArgs?: any): Ext.util.IGroup;
    }
}
declare module TypExt.util {
    class GroupCollection {
        static create(config: TypExt.util.IGroupCollectionConfig, extraArgs?: any): Ext.util.IGroupCollection;
    }
}
declare module TypExt.util {
    class Grouper {
        static create(config: TypExt.util.IGrouperConfig, extraArgs?: any): Ext.util.IGrouper;
    }
}
declare module TypExt.util {
    class HashMap {
        static create(config: TypExt.util.IHashMapConfig, extraArgs?: any): Ext.util.IHashMap;
    }
}
declare module TypExt.util {
    class History {
        static create(config: TypExt.util.IHistoryConfig, extraArgs?: any): Ext.util.IHistory;
    }
}
declare module TypExt {
    class History {
        static create(config: TypExt.IHistoryConfig, extraArgs?: any): Ext.IHistory;
    }
}
declare module TypExt.util {
    class Inflector {
        static create(config: TypExt.util.IInflectorConfig, extraArgs?: any): Ext.util.IInflector;
    }
}
declare module TypExt.util {
    class KeyMap {
        static create(config: TypExt.util.IKeyMapConfig, extraArgs?: any): Ext.util.IKeyMap;
    }
}
declare module TypExt {
    class KeyMap {
        static create(config: TypExt.IKeyMapConfig, extraArgs?: any): Ext.IKeyMap;
    }
}
declare module TypExt.util {
    class KeyNav {
        static create(config: TypExt.util.IKeyNavConfig, extraArgs?: any): Ext.util.IKeyNav;
    }
}
declare module TypExt {
    class KeyNav {
        static create(config: TypExt.IKeyNavConfig, extraArgs?: any): Ext.IKeyNav;
    }
}
declare module TypExt.util {
    class LocalStorage {
        static create(config: TypExt.util.ILocalStorageConfig, extraArgs?: any): Ext.util.ILocalStorage;
    }
}
declare module TypExt.util {
    class LruCache {
        static create(config: TypExt.util.ILruCacheConfig, extraArgs?: any): Ext.util.ILruCache;
    }
}
declare module TypExt.util {
    class Memento {
        static create(config: TypExt.util.IMementoConfig, extraArgs?: any): Ext.util.IMemento;
    }
}
declare module TypExt.util {
    class MixedCollection {
        static create(config: TypExt.util.IMixedCollectionConfig, extraArgs?: any): Ext.util.IMixedCollection;
    }
}
declare module TypExt.util {
    class ObjectTemplate {
        static create(config: TypExt.util.IObjectTemplateConfig, extraArgs?: any): Ext.util.IObjectTemplate;
    }
}
declare module TypExt.util {
    class Observable {
        static create(config: TypExt.util.IObservableConfig, extraArgs?: any): Ext.util.IObservable;
    }
}
declare module TypExt.util {
    class Offset {
        static create(config: TypExt.util.IOffsetConfig, extraArgs?: any): Ext.util.IOffset;
    }
}
declare module TypExt.util {
    class Operators {
        static create(config: TypExt.util.IOperatorsConfig, extraArgs?: any): Ext.util.IOperators;
    }
}
declare module TypExt.util.paintmonitor {
    class Abstract {
        static create(config: TypExt.util.paintmonitor.IAbstractConfig, extraArgs?: any): Ext.util.paintmonitor.IAbstract;
    }
}
declare module TypExt.util.paintmonitor {
    class CssAnimation {
        static create(config: TypExt.util.paintmonitor.ICssAnimationConfig, extraArgs?: any): Ext.util.paintmonitor.ICssAnimation;
    }
}
declare module TypExt.util {
    class PaintMonitor {
        static create(config: TypExt.util.IPaintMonitorConfig, extraArgs?: any): Ext.util.IPaintMonitor;
    }
}
declare module TypExt.util.paintmonitor {
    class OverflowChange {
        static create(config: TypExt.util.paintmonitor.IOverflowChangeConfig, extraArgs?: any): Ext.util.paintmonitor.IOverflowChange;
    }
}
declare module TypExt.util {
    class Point {
        static create(config: TypExt.util.IPointConfig, extraArgs?: any): Ext.util.IPoint;
    }
}
declare module TypExt.util {
    class Positionable {
        static create(config: TypExt.util.IPositionableConfig, extraArgs?: any): Ext.util.IPositionable;
    }
}
declare module TypExt.util {
    class ProtoElement {
        static create(config: TypExt.util.IProtoElementConfig, extraArgs?: any): Ext.util.IProtoElement;
    }
}
declare module TypExt.util {
    class Queue {
        static create(config: TypExt.util.IQueueConfig, extraArgs?: any): Ext.util.IQueue;
    }
}
declare module TypExt.util {
    class Region {
        static create(config: TypExt.util.IRegionConfig, extraArgs?: any): Ext.util.IRegion;
    }
}
declare module TypExt.util {
    class Renderable {
        static create(config: TypExt.util.IRenderableConfig, extraArgs?: any): Ext.util.IRenderable;
    }
}
declare module TypExt.util {
    class Schedulable {
        static create(config: TypExt.util.ISchedulableConfig, extraArgs?: any): Ext.util.ISchedulable;
    }
}
declare module TypExt.util {
    class Scheduler {
        static create(config: TypExt.util.ISchedulerConfig, extraArgs?: any): Ext.util.IScheduler;
    }
}
declare module TypExt.util.sizemonitor {
    class Abstract {
        static create(config: TypExt.util.sizemonitor.IAbstractConfig, extraArgs?: any): Ext.util.sizemonitor.IAbstract;
    }
}
declare module TypExt.util.sizemonitor {
    class Default {
        static create(config: TypExt.util.sizemonitor.IDefaultConfig, extraArgs?: any): Ext.util.sizemonitor.IDefault;
    }
}
declare module TypExt.util {
    class SizeMonitor {
        static create(config: TypExt.util.ISizeMonitorConfig, extraArgs?: any): Ext.util.ISizeMonitor;
    }
}
declare module TypExt.util.sizemonitor {
    class OverflowChange {
        static create(config: TypExt.util.sizemonitor.IOverflowChangeConfig, extraArgs?: any): Ext.util.sizemonitor.IOverflowChange;
    }
}
declare module TypExt.util.sizemonitor {
    class Scroll {
        static create(config: TypExt.util.sizemonitor.IScrollConfig, extraArgs?: any): Ext.util.sizemonitor.IScroll;
    }
}
declare module TypExt.util {
    class Sortable {
        static create(config: TypExt.util.ISortableConfig, extraArgs?: any): Ext.util.ISortable;
    }
}
declare module TypExt.util {
    class Sorter {
        static create(config: TypExt.util.ISorterConfig, extraArgs?: any): Ext.util.ISorter;
    }
}
declare module TypExt.util {
    class SorterCollection {
        static create(config: TypExt.util.ISorterCollectionConfig, extraArgs?: any): Ext.util.ISorterCollection;
    }
}
declare module TypExt.util {
    class StoreHolder {
        static create(config: TypExt.util.IStoreHolderConfig, extraArgs?: any): Ext.util.IStoreHolder;
    }
}
declare module TypExt.util {
    class TaskManager {
        static create(config: TypExt.util.ITaskManagerConfig, extraArgs?: any): Ext.util.ITaskManager;
    }
}
declare module TypExt {
    class TaskManager {
        static create(config: TypExt.ITaskManagerConfig, extraArgs?: any): Ext.ITaskManager;
    }
}
declare module TypExt.util {
    class TaskRunner {
        static create(config: TypExt.util.ITaskRunnerConfig, extraArgs?: any): Ext.util.ITaskRunner;
    }
}
declare module TypExt.util.taskrunner {
    class Task {
        static create(config: TypExt.util.taskrunner.ITaskConfig, extraArgs?: any): Ext.util.taskrunner.ITask;
    }
}
declare module TypExt.util {
    class TextMetrics {
        static create(config: TypExt.util.ITextMetricsConfig, extraArgs?: any): Ext.util.ITextMetrics;
    }
}
declare module TypExt.util.translatable {
    class Abstract {
        static create(config: TypExt.util.translatable.IAbstractConfig, extraArgs?: any): Ext.util.translatable.IAbstract;
    }
}
declare module TypExt.util.translatable {
    class CssPosition {
        static create(config: TypExt.util.translatable.ICssPositionConfig, extraArgs?: any): Ext.util.translatable.ICssPosition;
    }
}
declare module TypExt.util.translatable {
    class CssTransform {
        static create(config: TypExt.util.translatable.ICssTransformConfig, extraArgs?: any): Ext.util.translatable.ICssTransform;
    }
}
declare module TypExt.util.translatable {
    class Dom {
        static create(config: TypExt.util.translatable.IDomConfig, extraArgs?: any): Ext.util.translatable.IDom;
    }
}
declare module TypExt.util {
    class Translatable {
        static create(config: TypExt.util.ITranslatableConfig, extraArgs?: any): Ext.util.ITranslatable;
    }
}
declare module TypExt.util.translatable {
    class ScrollParent {
        static create(config: TypExt.util.translatable.IScrollParentConfig, extraArgs?: any): Ext.util.translatable.IScrollParent;
    }
}
declare module TypExt.util.translatable {
    class ScrollPosition {
        static create(config: TypExt.util.translatable.IScrollPositionConfig, extraArgs?: any): Ext.util.translatable.IScrollPosition;
    }
}
declare module TypExt.util {
    class TSV {
        static create(config: TypExt.util.ITSVConfig, extraArgs?: any): Ext.util.ITSV;
    }
}
declare module TypExt.util {
    class XTemplateCompiler {
        static create(config: TypExt.util.IXTemplateCompilerConfig, extraArgs?: any): Ext.util.IXTemplateCompiler;
    }
}
declare module TypExt.util {
    class XTemplateParser {
        static create(config: TypExt.util.IXTemplateParserConfig, extraArgs?: any): Ext.util.IXTemplateParser;
    }
}
declare module TypExt.ux.colorpick {
    class Button {
        static create(config: TypExt.ux.colorpick.IButtonConfig, extraArgs?: any): Ext.ux.colorpick.IButton;
    }
}
declare module TypExt.ux.colorpick {
    class ColorMap {
        static create(config: TypExt.ux.colorpick.IColorMapConfig, extraArgs?: any): Ext.ux.colorpick.IColorMap;
    }
}
declare module TypExt.ux.colorpick {
    class ColorPreview {
        static create(config: TypExt.ux.colorpick.IColorPreviewConfig, extraArgs?: any): Ext.ux.colorpick.IColorPreview;
    }
}
declare module TypExt.ux.colorpick {
    class Field {
        static create(config: TypExt.ux.colorpick.IFieldConfig, extraArgs?: any): Ext.ux.colorpick.IField;
    }
}
declare module TypExt.ux.colorpick {
    class Selector {
        static create(config: TypExt.ux.colorpick.ISelectorConfig, extraArgs?: any): Ext.ux.colorpick.ISelector;
    }
}
declare module TypExt.ux.colorpick {
    class SelectorModel {
        static create(config: TypExt.ux.colorpick.ISelectorModelConfig, extraArgs?: any): Ext.ux.colorpick.ISelectorModel;
    }
}
declare module TypExt.ux.colorpick {
    class Slider {
        static create(config: TypExt.ux.colorpick.ISliderConfig, extraArgs?: any): Ext.ux.colorpick.ISlider;
    }
}
declare module TypExt.ux.colorpick {
    class SliderAlpha {
        static create(config: TypExt.ux.colorpick.ISliderAlphaConfig, extraArgs?: any): Ext.ux.colorpick.ISliderAlpha;
    }
}
declare module TypExt.ux.colorpick {
    class SliderHue {
        static create(config: TypExt.ux.colorpick.ISliderHueConfig, extraArgs?: any): Ext.ux.colorpick.ISliderHue;
    }
}
declare module TypExt.ux.colorpick {
    class SliderSaturation {
        static create(config: TypExt.ux.colorpick.ISliderSaturationConfig, extraArgs?: any): Ext.ux.colorpick.ISliderSaturation;
    }
}
declare module TypExt.ux.colorpick {
    class SliderValue {
        static create(config: TypExt.ux.colorpick.ISliderValueConfig, extraArgs?: any): Ext.ux.colorpick.ISliderValue;
    }
}
declare module TypExt.ux.rating {
    class Picker {
        static create(config: TypExt.ux.rating.IPickerConfig, extraArgs?: any): Ext.ux.rating.IPicker;
    }
}
declare module TypExt {
    class Version {
        static create(config: TypExt.IVersionConfig, extraArgs?: any): Ext.IVersion;
    }
}
declare module TypExt.view {
    class AbstractView {
        static create(config: TypExt.view.IAbstractViewConfig, extraArgs?: any): Ext.view.IAbstractView;
    }
}
declare module TypExt.view {
    class BoundList {
        static create(config: TypExt.view.IBoundListConfig, extraArgs?: any): Ext.view.IBoundList;
    }
}
declare module TypExt {
    class BoundList {
        static create(config: TypExt.IBoundListConfig, extraArgs?: any): Ext.IBoundList;
    }
}
declare module TypExt.view {
    class BoundListKeyNav {
        static create(config: TypExt.view.IBoundListKeyNavConfig, extraArgs?: any): Ext.view.IBoundListKeyNav;
    }
}
declare module TypExt.view {
    class DragZone {
        static create(config: TypExt.view.IDragZoneConfig, extraArgs?: any): Ext.view.IDragZone;
    }
}
declare module TypExt.view {
    class DropZone {
        static create(config: TypExt.view.IDropZoneConfig, extraArgs?: any): Ext.view.IDropZone;
    }
}
declare module TypExt.view {
    class MultiSelector {
        static create(config: TypExt.view.IMultiSelectorConfig, extraArgs?: any): Ext.view.IMultiSelector;
    }
}
declare module TypExt.view {
    class MultiSelectorSearch {
        static create(config: TypExt.view.IMultiSelectorSearchConfig, extraArgs?: any): Ext.view.IMultiSelectorSearch;
    }
}
declare module TypExt.view {
    class NavigationModel {
        static create(config: TypExt.view.INavigationModelConfig, extraArgs?: any): Ext.view.INavigationModel;
    }
}
declare module TypExt.view {
    class NodeCache {
        static create(config: TypExt.view.INodeCacheConfig, extraArgs?: any): Ext.view.INodeCache;
    }
}
declare module TypExt.view {
    class Table {
        static create(config: TypExt.view.ITableConfig, extraArgs?: any): Ext.view.ITable;
    }
}
declare module TypExt.grid {
    class View {
        static create(config: TypExt.grid.IViewConfig, extraArgs?: any): Ext.grid.IView;
    }
}
declare module TypExt.view {
    class TableLayout {
        static create(config: TypExt.view.ITableLayoutConfig, extraArgs?: any): Ext.view.ITableLayout;
    }
}
declare module TypExt.view {
    class View {
        static create(config: TypExt.view.IViewConfig, extraArgs?: any): Ext.view.IView;
    }
}
declare module TypExt {
    class DataView {
        static create(config: TypExt.IDataViewConfig, extraArgs?: any): Ext.IDataView;
    }
}
declare module TypExt {
    class Widget {
        static create(config: TypExt.IWidgetConfig, extraArgs?: any): Ext.IWidget;
    }
}
declare module TypExt.window {
    class MessageBox {
        static create(config: TypExt.window.IMessageBoxConfig, extraArgs?: any): Ext.window.IMessageBox;
    }
}
declare module TypExt.window {
    class Toast {
        static create(config: TypExt.window.IToastConfig, extraArgs?: any): Ext.window.IToast;
    }
}
declare module TypExt.window {
    class Window {
        static create(config: TypExt.window.IWindowConfig, extraArgs?: any): Ext.window.IWindow;
    }
}
declare module TypExt {
    class Window {
        static create(config: TypExt.IWindowConfig, extraArgs?: any): Ext.IWindow;
    }
}
declare module TypExt {
    class WindowManager {
        static create(config: TypExt.IWindowManagerConfig, extraArgs?: any): Ext.IWindowManager;
    }
}
declare module TypExt {
    class XTemplate {
        static create(config: TypExt.IXTemplateConfig, extraArgs?: any): Ext.IXTemplate;
    }
}
declare module TypExt {
    class ZIndexManager {
        static create(config: TypExt.IZIndexManagerConfig, extraArgs?: any): Ext.IZIndexManager;
    }
}
declare module TypExt {
    class WindowGroup {
        static create(config: TypExt.IWindowGroupConfig, extraArgs?: any): Ext.IWindowGroup;
    }
}
declare module TypExt.data {
    interface IConnectionConfig {
    }
}
declare module TypExt.ux.colorpick {
    interface ISelectionConfig {
    }
}
declare module TypExt.ajax {
    interface IRequestConfig extends TypExt.data.IRequestConfig {
        /** [Config Option] (String/Function) The URL to which to send the request, or a function to call which returns a URL string.
        * The scope of the function is specified by the scope option.
        * Defaults to the configured url.
        */
        url: any;
        /** [Config Option] (Boolean) true if this request should run asynchronously.
        * Setting this to false should generally be avoided, since it will cause the UI to be blocked, the user won't be able to interact with the browser until the request completes.
        * Defaults to true.
        */
        async?: boolean;
        /** [Config Option] (Object/String/Function) An object containing properties which are used as parameters to the request, a url encoded string or a function to call to get either.
        * The scope of the function is specified by the scope option.
        */
        params?: any;
        /** [Config Option] (String) The HTTP method to use for the request.
        * Defaults to the configured method, or if no method was configured, "GET" if no parameters are being sent, and "POST" if parameters are being sent.
        * Note that the method name is case-sensitive and should be all caps.
        */
        method?: string;
        /** [Config Option] (Function) The function to be called upon receipt of the HTTP response.
        * The callback is called regardless of success or failure.
        */
        callback?: (options: TypExt.ajax.IRequestConfig, success: boolean, response: XMLHttpRequest) => void;
        /** [Config Option] (Function) The function to be called upon success of the request. */
        success?: (response: XMLHttpRequest, options: TypExt.ajax.IRequestConfig) => void;
        /** [Config Option] (Function) The function to be called upon failure of the request. */
        failure?: (response: XMLHttpRequest, options: TypExt.ajax.IRequestConfig) => void;
        /** [Config Option] (Object) The scope in which to execute the callbacks: The "this" object for the callback function.
        * If the url, or params options were specified as functions from which to draw values, then this also serves as the scope for those function calls.
        * Defaults to the browser window.
        */
        scope?: any;
        /** [Config Option] (Number) The timeout in milliseconds to be used for this request. Defaults to 30 seconds. */
        timeout?: number;
        /** [Config Option] (Object/String) The <form> Element or the id of the <form> to pull parameters from. */
        form?: any;
        /** [Config Option] (Boolean) Only meaningful when used with the form option.
        * True if the form object is a file upload (will be set automatically if the form was configured with enctype "multipart/form-data").
        * File uploads are not performed using normal "Ajax" techniques, that is they are not performed using XMLHttpRequests.
        * Instead the form is submitted in the standard manner with the DOM <form> element temporarily modified to have its target set to refer to a dynamically generated,
        * hidden <iframe> which is inserted into the document but removed after the return data has been gathered.
        * The server response is parsed by the browser to create the document for the IFRAME.
        * If the server is using JSON to send the return object, then the Content-Type header must be set to "text/html" in order to tell the browser to insert the text unchanged into the document body.
        * The response text is retrieved from the document, and a fake XMLHttpRequest object is created containing a responseText property in order to conform to the requirements of event handlers and callbacks.
        * Be aware that file upload packets are sent with the content type multipart/form and some server technologies (notably JEE)
        * may require some custom processing in order to retrieve parameter names and parameter values from the packet content.
        */
        isUpload?: boolean;
        /** [Config Option] (Object) Request headers to set for the request.
        * The XHR will attempt to set an appropriate Content-Type based on the params/data passed to the request.
        * To prevent this, setting the Content-Type header to null or undefined will not attempt to set any Content-Type and it will be left to the browser.
        */
        headers?: any;
        /** [Config Option] (Object) XML document to use for the post. Note: This will be used instead of params for the post data. Any params will be appended to the URL. */
        xmlData?: any;
        /** [Config Option] (Object/String) JSON data to use as the post. Note: This will be used instead of params for the post data. Any params will be appended to the URL. */
        jsonData?: any;
        /** [Config Option] (String) A raw string to use as the post. Note: This will be used instead of params for the post data. Any params will be appended to the URL. */
        rawData?: string;
        /** [Config Option] (Array) An array of bytes to submit in binary form. Any params will be appended to the URL. If binaryData is present, you must set binary to true and options.method to POST. */
        binaryData?: any[];
        /** [Config Option] (Boolean) True to add a unique cache-buster param to GET requests. */
        disableCaching?: boolean;
        /** [Config Option] (Boolean) True to add the withCredentials property to the XHR object. */
        withCredentials?: boolean;
        /** [Config Option] (String) The username to pass when using withCredentials. */
        username?: string;
        /** [Config Option] (String) The password to pass when using withCredentials. */
        password?: string;
        /** [Config Option] (Boolean) True if the response should be treated as binary data. If true, the binary data will be accessible as a "responseBytes" property on the response object. */
        binary?: boolean;
    }
}
declare module TypExt.addon {
    class Ajax {
        /** [Method] Sends an HTTP request to a remote server.
        * @param options Object The request configuration.
        * @returns Object The request object. This may be used to cancel the request.
        */
        static request(options: TypExt.ajax.IRequestConfig, extraArgs?: any): TypExt.ajax.IRequestConfig;
        static httpGet(options: TypExt.ajax.IRequestConfig, extraArgs?: any): TypExt.ajax.IRequestConfig;
        static httpPost(options: TypExt.ajax.IRequestConfig, extraArgs?: any): TypExt.ajax.IRequestConfig;
    }
}
declare let JsObject: ObjectConstructor;
declare let JsError: ErrorConstructor;
declare module TypExt.addon {
    module data {
        interface IModelField extends Ext.data.IField {
            type: string;
        }
        interface IModelInstance extends Ext.data.IModel {
            data: any;
        }
        interface IHasManyAssociation {
            model: string;
            name: string;
        }
        abstract class AbstractModelFactory {
            abstract getClassName(): string;
            private static definedModels;
            buildModelConfig(extendedClass?: string, extraConfig?: {}): {};
            defineModel(extendedClass?: string, extraConfig?: {}): void;
            requireModel(extendedClass?: string, extraConfig?: {}): void;
            getFields(): [string | IModelField];
            private checkModel();
        }
    }
    module dd {
        class DropTarget {
            static create(el: any, config: Ext.dd.IDropTarget): Ext.dd.IDropTarget;
        }
    }
    module container {
        interface IExtendedContainer {
            /** [Method] Return the items as an array.
            */
            getItems(): TypExt.addon.container.IExtendedContainer[];
            /** [Method] Return the item located at specified index.
            * @param index Number
            */
            getItem(index: number): TypExt.addon.container.IExtendedContainer;
        }
    }
    class Container {
        static extend(extContainer: any): TypExt.addon.container.IExtendedContainer;
    }
    module panel {
        interface IPanel extends Ext.panel.IPanel, TypExt.addon.container.IExtendedContainer {
        }
    }
    class Panel {
        static createAndExtend(config: TypExt.panel.IPanelConfig, extraArgs?: any): TypExt.addon.panel.IPanel;
        static extend(extPanel: Ext.panel.IPanel): TypExt.addon.panel.IPanel;
    }
}
