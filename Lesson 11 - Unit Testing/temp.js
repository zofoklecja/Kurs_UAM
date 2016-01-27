describe('calculator', function() {
    //trzeba czyścić pamięć przed każdym testowaniem
    beforeEach(function() {
        clearMemory();
    });
    
    it('should add numbers', function() {
        expect(2+2).toEqual(4);
    });
    //przy sprawdzaniu wyjątków musimy wywołać błąd
    it('throws', function() {
        expect(function() {
            divide(2,0);
        }).toThrow();
    });
    
    it('should add', function() {
        spyOn(calc, 'add'); //nie edytujemy funkcji
        calc.add = jasmine.createSpy('add').and.returnValue('4'); //stworzyliśmy funkcję
        calc = jasmine.createSpyObj('mycalc', ['add', 'divide']); //tworzymy obiekt do przekazania funkcji
        
    })
});

/*toBeCloseTo czy wartość jest w przybliżeniu równa (można ustawić dokładność)
toThrow dla funkcji, po której spodziewamy się błędem
beforeEach uruchamiany przed każdym testem lub describe'm

/funkcje
spyOn(obiekt jako kontekst testu, nazwa funkcji do sprawdzenia)
createSpy - tworzy funkcje szpiegującą, nieanonimową
createSpyObject (tablica nazw funkcji do spr)
tohavebeencalledwith spr arg wszystkich wywołań - najlepiej dla jednokrotnie wywoływanego szpiega, dla kilku odwołań trzeba się odnosić do konkretnego
calls.mostRecent().args - argumenty ostatniego wywołania
callFake - np gdy tworzymy uproszczony obiekt większej biblioteki, ale nie interesuje nas szerszy kontekst
callThrough tylko dla spyOn
*/