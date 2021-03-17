
// LECTURE 1- MOUSE OVER  

const img = document.getElementById('myImage')

img.addEventListener('mouseOver', mouseOver, false)
img.addEventListener('mouseOut', mouseOut, false)

    function mouseOver() {
        document.getElementById('caption').style.display = 'block';
    }

    function mouseOut() {
        document.getElementById('caption').style.display = 'none';
        
    }

// LECTURE 1- CREATING TABLE 

const x_slider = document.getElementById( 'x' )
const y_slider = document.getElementById( 'y' )

function makeRows(){
    let table = document.getElementById( 'table' )
    if ( table ) {
        table.remove()
    }

    table = document.createElement( 'table' )
    table.id = 'table'
    document.body.appendChild (table)

    const columns =  x_slider.valueAsNumber
    const rows = y_slider.valueAsNumber

    
    document.getElementById( 'x_label' ).innerHTML = 'X: ' + columns
    document.getAnimations( 'y_label' ).innerHTML= 'Y: ' + rows


    for ( i = 0; i < columns; i ++) {
        const row = document.createElement( 'tr' )
        table.appendChild( row )

        for ( j = 0; j < columns; j ++ ) {
            const cell = document.createElement( 'td' )
             cell.innerText = i + '|' + j

      // uncomment to generate a random background color for cell on mouseover
            const color = Math.floor( Math.random() * 16777215 ).toString( 16 )

            cell.addEventListener( 'mouseover', function () {
            cell.style.background = '#' + color
            }, false )

            cell.addEventListener( 'mouseout', function () {
            cell.style.background = 'pink'
            }, false )

            row.appendChild( cell )
        }
    }
}

makeRows() //initialise table on page load



