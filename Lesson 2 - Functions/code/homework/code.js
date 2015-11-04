(function (global) {
	var mapArray;

	if (!global.UAM) {
		global.UAM = {};
	}
    
    global.UAM.aircrafts = [];
    
    //////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////// Sample aircraft with sample service  /////////////// 
    
    global.UAM.aircrafts.push({
        code: 'SP-ABC',
        services: []
    });
       
    global.UAM.aircrafts[0].services.push({
        name: 'smth1',
        timeToExecute: 120
    });
    
    //////////////////////////////////////////////////////////////////////////////////////

    global.UAM.addAircraft = function (newAircraftCode) {
        // function should return new aircraft object
        for (var item in this.aircrafts) {
                if (item.code == newAircraftCode) {
                    alert("This aircraft already exists!");
                    return undefined;
                }
            }
            var newAircraft = {code: newAircraftCode, services: []};
            this.aircrafts.push(newAircraft);
            return newAircraft; // musi wskazywać na obiekt w tablicy a nie na identyczny duplikat 
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        // !!!
        var i = this.aircrafts.indexOf(aircraftObj);
        if (i > -1) {
                this.aircrafts.splice(i,1);
            }
    }
    //indexOf podaje indeks obiektu, jeśli nie ma zwraca -1
    // this.aircrafts.splice(index,1)

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExecute) {
        // !!!
        for (var i=0; i < this.aircrafts.length; i++) {
            if (this.aircrafts[i].code == aircraftObj.code) {
                this.aircrafts[i].services.push({name: name, timeToExecute: timeToExecute});
                return this.aircrafts[i].services;
            }
        }       
    };
        
    global.UAM.reduceTimeToExecute = function(aircraft, time) {
        // !!! wszystkie prace
        var i = this.aircrafts.indexOf(aircraft);
        if (typeof this.aircrafts[i].services !== 'undefined' && i > 0) {
            for (var service in this.aircrafts[i].services) {
                service.timeToExecute = service.timeToExecute - time;
            }
        }
    };
    
    global.UAM.getAircraftsForRepairs = function(maxTimeToExecute) {
        // !!! przynajmniej jeden czas przeglądu jest mniejszy niż ustalony
        var results = [];
        for (var aircraft in this.aircrafts) {
            for (var service in this.aircrafts.services) {
                if (service.timeToExecute < maxTimeToExecute) {
                    results.push(aircraft);
                    break;
                }
            }
        }
        return results;
    };

}(window));

/*

Przykład użycia:

var newAircraft1 = addAircraft('SP-XY1');
var newAircraft2 = addAircraft('SP-XY2');

addWorkToAircraft(newAircraft1, 'serviceXY1a', 110);
addWorkToAircraft(newAircraft1, 'serviceXY1b', 130);
reduceTimeToExecute(newAircraft1, 20);

var sxy2a = addWorkToAircraft(newAircraft2, 'serviceXY2a', 130);
var sxy2b = addWorkToAircraft(newAircraft2, 'serviceXY2b', 160);
reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft1 ]

removeAircraft(newAircraft1);

getAircraftsForRepairs(100); // []

reduceTimeToExecute(newAircraft2, 20);

getAircraftsForRepairs(100); // [ newAircraft2 ]

rozwiązanie jako link do repo andrzej.matlosz@gmail.com do wtorku(20.10) 17:00
testy z nieprawidłowymi danymi, funkcje nie powinny dzialać
ale zawsze z prawidłową liczbą argumentów
*/
