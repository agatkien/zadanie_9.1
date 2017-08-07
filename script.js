
function getTriangleArea(a, h) {
    
    
    if ( a <= 0 || h <= 0 ) {
    console.log('Nieprawidlowe dane');
    }
     else {
         var wynik = a*h/2;
         return(wynik);
     }
    

}
  console.log(getTriangleArea(5,10));
 
var triangle1Area = getTriangleArea(3, 15);
var triangle2Area = getTriangleArea(4, 16);
var triangle3Area = getTriangleArea(1, 15);
 alert(triangle1Area);