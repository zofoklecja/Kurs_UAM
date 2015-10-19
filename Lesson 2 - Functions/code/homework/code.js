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
        //zabezpieczyć przed duplikatami
        if (typeof(newAircraftCode) != "string") {
            alert("Invalid code!");
            return undefined;
        }
        else {
            for (var item in this.aircrafts) {
                if (item.code == newAircraftCode) {
                    alert("This aircraft already exists!");
                    return undefined;
                }
            }
            this.aircrafts.push({code: newAircraftCode, services: []});
            return {code: newAircraftCode, services: []};
        }
    };

    global.UAM.removeAircraft = function (aircraftObj) {
        // !!!
        for (var item in this.aircrafts) {
            if (itrm.code == aircraftObj.code) {
                this.aircrafts.splice(i,1);
                return this.aircrafts;
            }
        }
        alert("There is no such aircraft!");
        return this.aircrafts;
    };

    global.UAM.addWorkToAircraft = function(aircraftObj, name, timeToExecute) {
        // !!!
        for (var i=0; i < this.aircrafts.length; i++) {
            if (this.aircrafts[i].code == aircraftObj.code) {
                this.aircrafts[i].services.push({name: name, timeToExecute: timeToExecute});
                return this.aircrafts[i].services;
            }
        }
        alert("There is no such aircraft!");
        return this.aircrafts;        
    };
        
    global.UAM.reduceTimeToExecute = function(aircraft, time) {
        // !!! wszystkie prace
        for (var item in this.aircrafts) {
            if (item.code == aircraft.code) {
                for (var service in item.services) {
                    service.timeToExecute -= time;
                }
            return item.services;
            }
        }
        alert("There is no such aircraft!");
        return this.aircrafts;
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
