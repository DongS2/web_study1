var today = new Date();
var date = new Date();

function prevCal(){
  today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
  buildCal();
}

function nextCal(){
  today = new Date(today.getFullYear(), today.getMonth()+1, today.getDate());
  buildCal();
}

function buildCal(){
  var doMonth = new Date(today.getFullYear(),today.getMonth(),1);
  var lastDate = new Date(today.getFullYear(), today.getMonth()+1,0);
  var tbCalendar = document.getElementById("cal");
  var tbCalendarYM = document.getElementById("YM");
  tbCalendarYM.innerHTML = today.getFullYear() + "년 " + (today.getMonth()+1) + "월";

  while(tbCalendar.rows.length>2){
    tbCalendar.deleteRow(tbCalendar.rows.length-1);
  }
  var row=null;
  row=tbCalendar.insertRow();
  var cnt=0;
  for(i=0;i<doMonth.getDay();i++){
    cell=row.insertCell();
    cnt=cnt+1;
  }
  for(i=1;i<lastDate.getDate();i++){
    cell=row.insertCell();
    cell.innerHTML="<a id=" + "'"+i+"'" +"< href='javascript:void(0);' onclick='activeDate(today, id);'>"+i+"</a>";
    cnt=cnt+1;
    if(cnt%7==1){
      cell.innerHTML="<a id=" + "'"+i+"'" +"< href='javascript:void(0);' onclick='activeDate(today, id);'>"+"<font color=red>"+i+"</a>"
    }
    if(cnt%7==0){
      cell.innerHTML="<a id=" + "'"+i+"'" +"< href='javascript:void(0);' onclick='activeDate(today, id);'>" +"<font color=blue>"+i+"</a>"
      row=cal.insertRow();
    }
    if(today.getFullYear() == date.getFullYear() && today.getMonth() == date.getMonth() && i==date.getDate()){
      cell.bgColor="#FAF58C";
    }
  }
}

function activeDate(today, id){
  var place = document.getElementById("sc_todo");
  var child = place.lastElementChild;
  var date = today.getFullYear() +"."+(today.getMonth()+1) +"."+id;
  var plus=document.createElement("ul");
  plus.innerHTML="<li>"+ date +"</li>";
  if(child) place.removeChild(child);
  place.appendChild(plus);
}
