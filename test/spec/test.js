(function () {
  'use strict';

  

  describe("Testing Progress Bar value", function() {
	
  it("Percentage less than zero - fail case", function() {
        var a = 25;
        var b = -50;
        expect(changeBarValue(a,b)).toEqual(-25);
    }); 
  it("Percentage less than zero - success case", function() {
        var a = 25;
        var b = -50;
        expect(changeBarValue(a,b)).toEqual(0);
    });
	it("Percentage greater than zero  - success case", function() {
        var a = 25;
        var b = 100;
        expect(changeBarValue(a,b)).toEqual(125);
    });
  



});
})();
