(function (global) {
   var mapArray;

   if (!global.UAM) {
      global.UAM = {};
   }

   global.UAM.aircrafts = [];

    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  ///////////////

//    global.UAM.aircrafts.push({
//        code: 'SP-ABC',
//        services: []
//    });

//    global.UAM.aircrafts[0].services.push({
//        name: 'smth1',
//        timeToExecute: 120
//    });

    //////////////////////////////////////////////////////////////////////////////////////

   global.UAM.addAircraft = function (newAircraftCode) {
      if (typeof newAircraftCode === 'string') {
         var x = 0;
         global.UAM.aircrafts.forEach(function (item) {
            if (item.code === newAircraftCode) {
               x = 1;
            }
         });
         if (x === 0) {
            global.UAM.aircrafts.push({
               code: newAircraftCode,
               services: []
            });
            return global.UAM.aircrafts[global.UAM.aircrafts.length - 1];
         } else {
            console.log('Aircraft with given code already exists.');
         }
      } else {
         console.log('Wrong type!');
      }
   };

   global.UAM.removeAircraft = function (aircraftObj) {
      if (typeof aircraftObj === 'object') {
         var index = this.aircrafts.indexOf(aircraftObj);
         if (index !== -1) {
            global.UAM.aircrafts.splice(index, 1);
         } else {
            console.log('Given aircraft does not exist');
         }
      } else {
         console.log('Given argument must be an object');
      }
   };

   global.UAM.addWorkToAircraft = function (aircraftObj, name, timeToExxecute) {
      if (typeof aircraftObj === 'object' && typeof name === 'string' && typeof timeToExxecute === 'number') {
         var index = this.aircrafts.indexOf(aircraftObj);
         if (index !== -1) {
            global.UAM.aircrafts[index].services.push({
               name: name,
               timeToExecute: timeToExxecute
            });
         } else {
            console.log('Given aircraft does not exist');
         }
		}
		else {
			console.log('Wrong type(s) of argument(s)');
		}
    };

   global.UAM.reduceTimeToExecute = function(aircraft, time) {
        // redukcja czasu na wszystkich zadaniach
        //iteracja po tablicy
        if (typeof aircraft === 'object' && typeof time === 'number'){
            var index = global.UAM.aircrafts.indexOf(aircraft);
            if (index !== -1) {
                if (UAM.aircrafts[index].services !== null &&
                UAM.aircrafts[index].services.length > 0){

                    global.UAM.aircrafts[index].services.forEach (function(item) {
                        if (item.timeToExecute - time < 0){
                           item.timeToExecute = 0;
                        }
                        else {
                           item.timeToExecute = item.timeToExecute - time;
                        }});
                }
            }
		          else {
                console.log('Given aircraft does not exist');
            }
		    } else {
			      console.log('Wrong types of argument(s)');
		    }
   };

    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // przejrzec wszystjkie prace wszystk samolotow
        if (typeof maxTimeToExecute === 'number'){
        	global.UAM.aircraftsForRepair = [];
		    global.UAM.aircrafts.forEach(function(item, index) {

               if (item.services !== null && item.services.length >0){
                    item.services.forEach(function(childItem) {

                        if (UAM.aircraftsForRepair.indexOf(item)===-1 &&
                        childItem.timeToExecute <= maxTimeToExecute){
                            UAM.aircraftsForRepair.push(item);
                        }
                    });
               }
            });
            return global.UAM.aircraftsForRepair;
		}
		else {
			console.log('Given argument must be a number');
		}
   };

}(window));

function updateData() {};

window.onload = function () {
   var listItems = document.getElementsByTagName('li');

   for (var i = 0; i < listItems.length; i++) {
      listItems[i].lastChild.onclick = function () {
         this.parentNode.parentNode.removeChild(this.parentNode);
         console.log('WOW');
      };
   }

   var addButton = document.getElementById('add');
   addButton.onclick = function () {
      //pokazanie formularza na kod samolotu
      var code = "HEHEHEJ";
      //odpalenie addAircraft z treścią formularza

      //jesli ok edytowanie DOMu:
      var ul = document.getElementById("list");
      var li = document.createElement("li");
      var span = document.createElement("span");
      var removeB = document.createElement("button");
      var addRepairB = document.createElement("button");

      //uzupełnianie tekstem "dzieci" elementu
      span.appendChild(document.createTextNode(code));
      addRepairB.appendChild(document.createTextNode("🔧"))
      removeB.appendChild(document.createTextNode("-"));

      //dodanie eventu do buttona usuwania
      removeB.onclick = function () {
         this.parentNode.parentNode.removeChild(this.parentNode);
      };

      //tworzenie struktury html elementu
      li.appendChild(span);
      li.appendChild(addRepairB);
      li.appendChild(removeB);
      //dodanie elementu do listy
      ul.appendChild(li);
   };
};

/*
Przykład użycia:
var newAircraft1 = global.UAM.addAircraft('SP-XY1');
var newAircraft2 = global.UAM.addAircraft('SP-XY2');
global.UAM.addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
global.UAM.addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
global.UAM.reduceTimeToExecute(newAircraft1, 20);
var sxy2a = global.UAM.addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = global.UAM.addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
global.UAM.reduceTimeToExecute(newAircraft2, 20);
global.UAM.getAircraftsForRepairs(100); // [ newAircraft1 ]
global.UAM.removeAircraft(newAircraft1);
global.UAM.getAircraftsForRepairs(100); // []
global.UAM.reduceTimeToExecute(newAircraft2, 20);
global.UAM.getAircraftsForRepairs(100); // [ newAircraft2 ]
dodawac usuwac samoloty
dodac prace do samoloty
na danym samolocie zredukowac czas pozostaly naprawy
*/
