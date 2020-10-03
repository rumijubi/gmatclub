var question= document.querySelector("#posts > tbody:nth-child(2) > tr:nth-child(1) > td.right");
var image1=document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td > div.item.text > div.attachcontent > img");
var image2=document.querySelector("#posts > tbody:nth-child(2) > tr:nth-child(1) > td.right > div.item.text > img");
var image3= document.querySelector("#posts > tbody:nth-child(2) > tr:nth-child(1) > td.right > div.item.text > div.attachcontent > img");
var image4= document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td.right > div.item.text > img");
var image= document.getElementsByClassName('reimg')[0]
var poster2= document.querySelector("#posts > tbody:nth-child(2) > tr:nth-child(1) > td.left");
var poster1=document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td.left");
//var imagelist=[image1,image2,image3,image4,image5];
var posterlist=[poster1, poster2];
//for(var i=0; i<imagelist.length; i++){

//if(typeof(imagelist[i]) != 'undefined' && imagelist[i] != null){
//   var image=imagelist[i];
    
for(var k=0; k<posterlist.length; k++){
if(typeof(posterlist[k]) != 'undefined' && posterlist[k] != null){
    var poster=posterlist[k];
poster.insertBefore(image, poster.firstChild);
}
}
//}
//}
document.body.parentNode.prepend(document.querySelector("#posts"));
question.appendChild(document.querySelector("#posts > thead"));
document.getElementById('wrapcentre').appendChild(document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td.right > div:nth-child(2)"))
//question.appendChild(document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td > div.item.firstItem"));
//question.appendChild(document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td > div:nth-child(2)"));
//question.appendChild(document.querySelector("#posts > tbody:nth-child(1) > tr:nth-child(1) > td > div:nth-child(1)"));
document.querySelector("#posts TBODY TR .right .item.text").style.fontSize='25px';
