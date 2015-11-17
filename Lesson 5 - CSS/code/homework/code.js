window.onload = function () {

    aircrafts = [];

    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  ///////////////
//populate arrays with aircrafts
     aircrafts.push({
        code: 'SP-ABC',
        services: []
    });

     aircrafts.push({
        code: 'AB-CDE',
        services: []
    });

     aircrafts.push({
        code: 'EK-ASD',
        services: []
    });


     aircrafts[0].services.push({
       name: 'smth1',
      timeToExecute: 120
      });

    //////////////////////////////////////////////////////////////////////////////////////

   addAircraft = function (newAircraftCode) {
      if (typeof newAircraftCode === 'string') {
         var x = 0;
          aircrafts.forEach(function (item) {
            if (item.code === newAircraftCode) {
               x = 1;
            }
         });
         if (x === 0) {
             aircrafts.push({
               code: newAircraftCode,
               services: []
            });
            return  aircrafts[ aircrafts.length - 1];
         } else {
            console.log('Aircraft with this code already exists.');
         }
      } else {
         console.log('Wrong type!');
      }
   };

   removeAircraft = function (aircraftObj) {
      if (typeof aircraftObj === 'object') {
         var index = this.aircrafts.indexOf(aircraftObj);
         if (index !== -1) {
             aircrafts.splice(index, 1);
         } else {
            console.log('Wrong aircraft!');
         }
      } else {
         console.log('Must be an object!');
      }
   };

   removeAircraftByCode = function (code) {
      for (var i=0; i<aircrafts.length; i++) {
         if (code === aircrafts[i].code) {
            aircrafts.splice(i, 1);
         }
      }
   };

    addWorkToAircraft = function (aircraftObj, name, timeToExecute) {
      if (typeof aircraftObj === 'object' && typeof name === 'string' && typeof timeToExecute === 'number') {
         var index = this.aircrafts.indexOf(aircraftObj);
         if (index !== -1) {
             aircrafts[index].services.push({
               name: name,
               timeToExecute: timeToExecute
            });
         } else {
            console.log('Wrong aircraft!');
         }
		}
		else {
			console.log('Wrong type!');
		}
    };

    reduceTimeToExecute = function(aircraft, time) {
        // redukcja czasu na wszystkich zadaniach
        //iteracja po tablicy
        if (typeof aircraft === 'object' && typeof time === 'number'){
            var index =  aircrafts.indexOf(aircraft);
            if (index !== -1) {
                if (UAM.aircrafts[index].services !== null &&
                UAM.aircrafts[index].services.length > 0){

                     aircrafts[index].services.forEach (function(item) {
                        if (item.timeToExecute - time < 0){
                           item.timeToExecute = 0;
                        }
                        else {
                           item.timeToExecute = item.timeToExecute - time;
                        }});
                }
            }
		      else {
                console.log('Wrong aircraft!');
            }
         }
         else {
			      console.log('Wrong type!');
		    }
   };

     getAircraftsForRepairs = function(maxTimeToExecute) {
        // przejrzec wszystjkie prace wszystk samolotow
        if (typeof maxTimeToExecute === 'number'){
        	 aircraftsForRepair = [];
		     aircrafts.forEach(function(item, index) {

               if (item.services !== null && item.services.length >0){
                    item.services.forEach(function(childItem) {

                        if (UAM.aircraftsForRepair.indexOf(item)===-1 &&
                        childItem.timeToExecute <= maxTimeToExecute){
                            UAM.aircraftsForRepair.push(item);
                        }
                    });
               }
            });
            return  aircraftsForRepair;
		}
		else {
			console.log('Must be a number!');
		}
   };


 addLi = function (code) {
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
      removeAircraftByCode(this.parentNode.firstChild.textContent);
   };

   //tworzenie struktury html elementu
   li.appendChild(span);
   li.appendChild(addRepairB);
   li.appendChild(removeB);
   //dodanie elementu do listy
   ul.appendChild(li);
};

   var listItems = document.getElementsByTagName('li');


   for (var i = 0; i < listItems.length; i++) {
      listItems[i].lastChild.onclick = function () {
         this.parentNode.parentNode.removeChild(this.parentNode);
      };
   }

   for (var i=0; i< aircrafts.length; i++) {
       addLi( aircrafts[i].code);
   }

   var addButton = document.getElementById('add');
};

/*
Przykład użycia:
var newAircraft1 =  addAircraft('SP-XY1');
var newAircraft2 =  addAircraft('SP-XY2');
 addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
 addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
 reduceTimeToExecute(newAircraft1, 20);
var sxy2a =  addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b =  addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
 reduceTimeToExecute(newAircraft2, 20);
 getAircraftsForRepairs(100); // [ newAircraft1 ]
 removeAircraft(newAircraft1);
 getAircraftsForRepairs(100); // []
 reduceTimeToExecute(newAircraft2, 20);
 getAircraftsForRepairs(100); // [ newAircraft2 ]
dodawac usuwac samoloty
dodac prace do samoloty
na danym samolocie zredukowac czas pozostaly naprawy
*/
