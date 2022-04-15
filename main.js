var names_of_people = [];
    
function submit()
{
    //Añadir variable GuestName y función push
	var GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
    var lenght_of_name = names_of_people.length;
    console.log(lenght_of_name);
	document.getElementById("display_name").innerHTML=names_of_people.toString();
	
   }

function sorting()
{
	//Añadir función para ordenar alfabeticamente
	names_of_people.sort()
	var i= names_of_people.join("<br>");
    console.log(names_of_people);		
	document.getElementById("sorted").innerHTML=i.toString();
	}

function show()
{
	var i= names_of_people.join("<br>");
	console.log(names_of_people);
	document.getElementById("p1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}

//Completar función searching
function searching ()
{
	var s = document.getElementById("s1").value;
	var found = 0;
	var j;
	for(j = 0; j < names_of_people.length; j++)
	{
		if (s == names_of_people[j]){
			found = found + 1
		}
	}
	document.getElementById("p2").innerHTML = "Nombre encontrado " + found + " vez/veces";
	console.log("Nombre encontrado " + found + " vez/veces")
}