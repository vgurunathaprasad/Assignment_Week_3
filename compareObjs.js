var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected, testName){
 
    return (JSON.stringify(expected) == JSON.stringify(actual));
}