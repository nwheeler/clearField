var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
tabs.on("ready", function(tab) {
  worker = tab.attach({
    //contentScript: somethingContentScript
    contentScriptFile: data.url("clearField.js")
  });
  var { Hotkey } = require("sdk/hotkeys");
  var clearLineHotKey = Hotkey({
    combo: "accel-u",
    onPress: function() {
      worker.port.emit("clearField");
    }
  });
});
