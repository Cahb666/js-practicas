var max=5;
function create(){
	var vec=[];
	vec.length=0;
	return vec;
}
var list=create();

function isEmpty(list){	
	var empt=true;
	if(size(list)>0){	
		empt=false;  
	}
	return empt; 
}

function isFull(list){	
	var ful=false;
	if(size(list)==max){	
		ful=true;  
	}
	return ful; 
}

function size(list){
	var siz=list.length;
	return siz; 
}

function add(list,element){
	if(!isNaN(element)){
		if(size(list) < max){
			list[size(list)]=element;
			//console.log("add: "+element+" in ["+(size(list)-1)+"]");
		}else{
			throw "ERROR in add: IS FULL";
		}
	}else{
		throw "ERROR in add: isNaN";
	}
	return size(list);
}

function addAt(list,element,index){
	var vectorA=[];
	if(size(list) < max){
		var aux=element;
		var auxP=parseInt(index);
		if(!isNaN(aux)){
			if(auxP<=size(list)){
				for (var i=0;i<=auxP;i++){
					vectorA[i]=list[i];
					if(i==auxP){
						vectorA[i]=aux;
					}			
				}
				for (var i=auxP;i<size(list);i++){
					vectorA[i+1]=list[i];	
				}
				this.list=vectorA;
				//console.log("addAt: "+aux+" in ["+auxP+"]");
				return size(this.list);
			}else{
				throw "ERROR in addAt: Indice fuera del limite";
			}
		}else{
			throw "ERROR in addAt: isNaN";
		}
	}else{
		throw "ERROR in addAt: IS FULL";
	}
}

function get(list,index){
	var ind=parseInt(index);
	var elemento=list[ind];
	
	if(ind>=size(list)){
		throw "ERROR in get: Indice fuera del limite";
	}else{
		//console.log("get: "+elemento+" in ["+ind+"]");
	}
	return elemento; 
}


function toString(list){
	var vector="";
	for(var i=0;i<size(list);i++){
		vector+=list[i];
		if(i<size(list)-1){
			vector=vector+"-";
		}
	}
	return vector;
}

function indexOf(list,element){
	if(!isNaN(element)){
		var posicion=-1;
		for(var i=0;i<size(list);i++){
			if(list[i]==element){
				posicion=i;
				i=size(list);
			}
		}
		
	}else{
		throw "ERROR in indexOf: isNaN";
	}
	return posicion;
}

function lastIndexOf(list,element){
	if(!isNaN(element)){
		var posicion=-1;
		for(var i=0;i<size(list);i++){
			if(list[i]==element){
				posicion=i;	
			}
		}
		
	}else{
		throw "ERROR in lastIndexOf: isNaN";
	}
	return posicion;
}

function capacity(list){
	var capacidad=max;
	//console.log("capacity: "+capacidad);
	return capacidad;
}

function clearr(list){
	list.length=0;
}

function firstElement(list){
	var primero=list[0];
	if(size(list)>0){
		//console.log("firstElement: "+primero);
	}else{
		throw "ERROR in firstElement: IS EMPTY";
	}
	return primero;
}

function lastElement(list){
	var ulti=list[size(list)-1];	
	if(size(list)>0){
		//console.log("lastElement: "+ulti);
	}else{
		throw "ERROR in lastElement: IS EMPTY";
	}
	return ulti;
}

function remove(list,index){
	var vectorA=[];
	var ind=parseInt(index);
	if(ind<size(list)){
		var borrado=list[ind];
		for (var i=0;i<ind;i++){
			vectorA[i]=list[i];		
		}
		for (var i=ind;i<size(list)-1;i++){
			vectorA[i]=list[i+1];	
		}
		this.list=vectorA;
		//console.log("remove: "+borrado+" in ["+ind+"]");
	}else{
		throw "ERROR in remove: Indice fuera del limite";
	}	
	return borrado;
}

function removeElement(list,element){		
	if(!isNaN(element)){
		var vectorA=[];
		var esta=false;
		for(var i=0;i<size(list);i++){
			if(element==list[i]){
				esta=true;
			}
		}
		
		if(esta){
			var ind=0;
			for(var i=0;i<size(list);i++){
				ind++;
				if(element==list[i]){
					i=size(list);
				}
			}
			ind=ind-1;
			var borrado=list[ind];
			for (var i=0;i<ind;i++){
				vectorA[i]=list[i];		
			}
			for (var i=ind;i<size(list)-1;i++){
				vectorA[i]=list[i+1];	
			}
			this.list=vectorA;
			//console.log("removeElement: "+borrado+" in ["+ind+"]");
		}else{
			throw "ERROR in removeElement: El elemento "+element+" no existe";
		}
	}else{
		throw "ERROR in removeElement: isNaN";
	}
	return esta; 
}

function sett(list,element,index){
	var vectorA=[];
	
	var ind=parseInt(index);
	if(!isNaN(element)){
		if(ind<size(list) ){
		var borrado=list[ind];
			for (var i=0;i<size(list);i++){
				vectorA[i]=list[i];
				if(i==ind){
					vectorA[i]=element;
				}			
			}
			this.list=vectorA;
			//console.log("set: "+element+" in ["+ind+"]");
		}else{
			throw "ERROR in set: Indice fuera del limite";
		}
		
	}else{
		throw "ERROR in set: isNaN";
	}
	return borrado;
}


function test(){
	try {
	console.log("vacia= " + isEmpty(list));
	console.log("llena= " + isFull(list));
	console.log(list);
	console.log("añado 3; elementos=  " + add(list,3));
	console.log("array: " + toString(list));
	console.log(list);
	console.log("añado 5; elementos=  " + add(list,5));
	console.log("array: " + toString(list));
	console.log(list);
	console.log("añado 4 en posicion 1; elementos= " + addAt(list,4,1));
	console.log("array: " + toString(list));
	console.log(list);
	console.log("añado 6 en posicion 0; elementos= " + addAt(list,6,0));
	console.log("array: " + toString(list));
	console.log(list);
	console.log("añado 7 en posicion 0; elementos= " + addAt(list,7,0));
	console.log("array: " + toString(list));
	console.log(list);
	console.log("vacia= " + isEmpty(list));
	console.log("llena= " + isFull(list));
	console.log("borro de la posicion 0; "+remove(list,0));
	console.log(list);
	console.log("borro elemento 4; "+removeElement(list,4));
	console.log(list);
	console.log(lastIndexOf(list,4));
	console.log("ultimo 3; "+lastIndexOf(list,3));
	console.log("capacidad=  "+capacity(list));
	console.log("borrar lista; "+ clearr(list));
	console.log(list);
	console.log("vacia= " + isEmpty(list));
	console.log("llena= " + isFull(list));
	} catch (err) {
		console.log(err);
	}
}
test();