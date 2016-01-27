describe('Calc', function() {
     var calc;
     beforeEach(function() {
         calc = new Calc();
     });
//    calc = new Calc();
    
    describe('adding', function() {
        it('2 and 2 should return 4', function() {
            var a=2, b=2, result;
            
            result = calc.add(a,b);
            expect(result).toEqual(4);
        });
    });
    
    describe('subtracting', function() {
        it('2 from 5 should return 3', function() {
            var a = 5, b = 2, result;
            
            result = calc.subtract(5, 2);
            expect(result).toEqual(3);
        });
    });
    
    describe('multiplying', function() {
        it('2 by 3 should return 6', function() {
            var a = 2, b = 3, result;
            
            result = calc.multiply(2, 3);
            expect(result).toEqual(6);
        });
    });
    
    describe('dividing', function() {
        it('6 by 3 should return 2', function() {
            var a = 6, b = 3, result;
            
            result = calc.divide(6, 3);
            expect(result).toEqual(2);
        });
    
        it('by 0 should throw an error', function() {
            var a = 2, b = 0, result;
            
            expect(function() {
                divide(2,0);
            }).toThrow();
        });
    });
    
    describe('history', function() {
        it('should contain 2 actions after having done 2 things', function() {
            calc.add(2,2);
            calc.divide(2,2);
            
            var history = calc.getHistory();
            
            expect(history.length).toEqual(2);
        })
    })
    
    it('should test with delay', function(done) {
        setTimeout(function() {
            expect(2+2).toBe(5);
            done();
        }, 100)
    });
});