/* 
За дадена низа или објект obj, потребно е да вратите компактна вредност.
Компактна вредност на објект е истиот објект само што се исфрлени клучевите (својствата) кои содржат грешни вредности. Операцијата треба да се изврши за објектот и за сите вгнездени објекти. Низите треба да се сметаат како објекти кај кои што индексите преставуваат клучеви. Дадена вредност е грешна кога вредноста на операцијата Boolean(val) е false.

--------------------------------------------------------------
 Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.
For example:

Test	Result
console.log(compactObject([null, 0, false, 1]));
[ 1 ]
console.log(compactObject([null, 0, 5, [0], [false, 16]]));
[ 5, [], [ 16 ] ]
*/

// Write the function compactObject

function compactObject(obj) {
    if(Array.isArray(obj)) {
        return obj.filter(Boolean).map(compactObject);
    }
    else if (typeof obj === 'object' && obj !== null) {
        return Object.keys(obj).reduce((acc, key)=> {
            const value = compactObject(obj[key]);
            if(Boolean(value)) acc[key] = value;
            return acc;
        },{});
    }

    return obj;

}