// jshint esversion: 6

/*
 * control - Doesn't load the test plugin at all
 * normal - Loads the test plugin placed normally
 * subfolder - Loads the test plugin placed inside a deeply nested subfolder
 */
const testCase = "normal", loadTimes = 1490;

const testPluginName = "Test Plugin", testPluginLoadingTimes = test => {
    if (test === "control" || test !== "normal" && test !== "subfolder") return;
    const onerror = e => {}, makeUrl = test === "normal" ? filename => {
        return `js/plugins/${encodeURI(filename)}.js`;
    } : filename => {
        return `js/plugins/${"subfolder/".repeat(16)}${encodeURI(filename)}.js`;
    }, encodeURI = str => encodeURIComponent(str).replace(/%2F/g, "/");
    const scriptElem = "script", scriptType = "text/javascript";
    const body = document.body, loadScript = filename => {
        const script = document.createElement(scriptElem);
        const url = makeUrl(filename);
        script.type = scriptType, script.src = script._url = url;
        [script.async, script.defer] = [false, true];
        script.onerror = onerror;
        body.appendChild(script);
    }; // loadScript
    for (let times = 1; times <= loadTimes; times++) loadScript(testPluginName);
}; // testPluginLoadingTimes
const $ = Scene_Boot.prototype, sceneBootCreate = $.create;
$.create = function() {
    const now = performance.now();
    testPluginLoadingTimes(testCase);
    sceneBootCreate.apply(this, arguments);
    console.log(`Plugin loading times in ${testCase}`, performance.now() - now);
}; // $.create
