// This is an active module of the esn89 (13) Add-on
exports.main = function() {
    
    var { Hotkey } = require("hotkeys");
    var tabs = require("tabs");
 


var showHotKey1 = Hotkey({
     combo: "alt-1",
     onPress: function() {
     require("tabs")[0].activate()
  }
});

    var showHotKey2 = Hotkey({
     combo: "alt-2",
     onPress: function() {
     require("tabs")[1].activate()
  }
});

    var showHotKey3 = Hotkey({
     combo: "alt-3",
     onPress: function() {
     require("tabs")[2].activate()
  }
});

    var showHotKey4 = Hotkey({
     combo: "alt-4",
     onPress: function() {
     require("tabs")[3].activate()
  }
});

    var showHotKey5 = Hotkey({
     combo: "alt-5",
     onPress: function() {
     require("tabs")[4].activate()
  }
});

    var showHotKey6 = Hotkey({
     combo: "alt-6",
     onPress: function() {
     require("tabs")[5].activate()
  }
});


    
    


};