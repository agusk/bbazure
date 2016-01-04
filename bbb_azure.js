
var BeagleBone = require("beaglebone-io");
var connectthedots = require('./connectthedots.js');
var devicesettings = require('./settings.json');


// Init connection to Azure IoT
connectthedots.init_connection(devicesettings);

setInterval(function(){
        var lght = Math.floor((Math.random() * 10) + 1);
        var temp = Math.floor((Math.random() * 30) + 5);
        var humidity = Math.floor((Math.random() * 10) + 2);

        connectthedots.send_message("Light", "L", lght);
        connectthedots.send_message("Temp", "C", temp);
        connectthedots.send_message("Humidity", "H", humidity);
    }, 1000);


