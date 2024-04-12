// launchcode.test.js code:
const launchcode = require('../index.js');

// Write your unit tests here!
describe("Testing launchcode", function(){
  test('should have key called organization with the value of nonprofit', function(){
    expect(launchcode.organization).toBe('nonprofit')
  });
  test('should have key called executiveDirector with value of Jeff', function(){
    expect(launchcode.executiveDirector).toBe('Jeff')
  });
  test('should have key called percentageCoolEmployees with a value of 100', function(){
    expect(launchcode.percentageCoolEmployees === 100).toBe(true)
  });
  test('should have key called programsOffered that stores an array of["Web Development", "Data Analysis", "Liftoff"]',function(){
    expect(launchcode.programsOffered.length).toBe(3);
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
  });
});

describe('Testing launchOutput', function() {
  test('Test to make sure launchOutput is a method/function', function(){
    expect(typeof(launchcode.launchOutput)).toBe('function')
  });
  test('should return "Launch!" when number entered is only divisible by 2', function(){
    let result = launchcode.launchOutput(2);
    expect(result).toBe('Launch!')
  });
  test('should return "Code!" when number entered is only divisible by 3', function(){
    let result = launchcode.launchOutput(3);
    expect(result).toBe('Code!')
  });
  test('should return "Rocks!" when number entered is only divisible by 5', function(){
    let result = launchcode.launchOutput(5);
    expect(result).toBe('Rocks!')
  });
  test('should return "LaunchCode!" when number entered is divisible by 2 and 3', function(){
    let result = launchcode.launchOutput(12);
    expect(result).toBe('LaunchCode!')
  });
  test('should return "Code Rocks!" when number entered is divisible by 3 and 5', function(){
    let result = launchcode.launchOutput(15);
    expect(result).toBe('Code Rocks!')
  });
  test('should return "Launch Rocks!" when number entered is divisible by 2 and 5', function(){
    let result = launchcode.launchOutput(10);
    expect(result).toBe('Launch Rocks! (CRASH!!!!)')
  });
  test('should return "Rutabagas! That doesnt work" when number entered is not divisible by 2,3 or 5', function(){
    let result = launchcode.launchOutput(1.5);
    expect(result).toBe("Rutabagas! That doesn't work.")
  });
  

})