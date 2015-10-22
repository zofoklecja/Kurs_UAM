(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject () {
        var thisValue = Object.create(arguments[0].prototype);
        
        var a = [];
        var len = arguments.length;
        
        for (var i=1; i <= len; i++) {
            a.push(arguments[i]);
        }
        
        var result = arguments[0].apply(thisValue, a);
        
        if (typeof result === 'object' && result !== null) {
            return result;
        }
        return thisValue;
    }
    
	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
    
    call - przekazanie do konstruktora
    
    krok po kroku ze slajdu o new
    
    testy dla określonej liczby argumentów
    
    m@mdevel.com WTOREK 17:00 (za terminowość dodatkowe punkciki :o)
    
*/


