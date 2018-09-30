function square_equation() {
    var a = document.square.square_a.value;
    var b = document.square.square_b.value;
    var c = document.square.square_c.value;
  
    var d = b * b - 4 * a * c;  
   var x1, x2;
    if ( d < 0 ) {
      
      x1 = - b / ( 2 * a );
      x1 = Math.sqrt( -d ) / ( 2 * a );
      x2 = - b / ( 2 * a);
      x2 = - Math.sqrt( -d ) / ( 2 * a );
    } else {
        if ( d == 0 ) {
          x1, x2 = -b / ( 2 * a );
        } else {
          x1 = -b / ( 2 * a ) - Math.sqrt( d ) / ( 2 * a );
          x2 = -b / ( 2 * a ) + Math.sqrt( d ) / ( 2 * a );
          
        }
    }
    document.getElementById("square_sol_x1").innerHTML = x1;
    document.getElementById("square_sol_x2").innerHTML = x2;
}