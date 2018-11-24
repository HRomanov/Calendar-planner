function Calendar(id, year, month) {
var Dlast = new Date(year,month+1,0).getDate(), //количество дней в месяце
    DPrlast = new Date(year,month+0,0).getDate(), //количество дней в предыдущем месяце
    D = new Date(year,month,Dlast),
    DNlast = new Date(D.getFullYear(),D.getMonth(),Dlast).getDay(),
    DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(),
    calendar = '<tr id="week_1">',
    month=["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],
    days=["Понедельник","Вторник","Среда","Четверг","Пятница","Субота","Воскресенье"];




var tmp = DNfirst-2;
if (DNfirst != 0) {
  
  for(var  i = 1; i < DNfirst; i++){
    calendar += '<td>' + (DPrlast-tmp) ; // создание и заполнение пустых ячеек верхней строки 
    // calendar += '<td>' + days[i-1] + (DPrlast-tmp) ; // создание и заполнение пустых ячеек верхней строки 
     tmp--;
  }
}
else{
  for(var  i = 6, j=0;  i > 0 ,j<6; i--,j++) 
    // calendar += '<td>'+ days[j] +  (DPrlast-i+1) ;  // создание и заполнение пустых ячеек верхней строки где пустых ячеек >6
    calendar += '<td>'+  (DPrlast-i+1) ;  // создание и заполнение пустых ячеек верхней строки где пустых ячеек >6
     
}


for(var  i = 1, j=2; i <= Dlast; i++) {
  
  if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
    calendar += '<td class="today">' + i; // добавляет ячейку и число текущей даты
  }else{
      calendar += '<td>' + i; // добавляет ячейку и числа всех дат, не пишет в пустые ячейки   
  }
  if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
      calendar += '<tr id=week_' + j +'>';  // переход на другую строку
      j++;
  }
}

//заполнение нижних ячеек (след. месяц)
var j=1;
if((DNlast!=''))
  for(var i = DNlast; i < 7; i++) {
    calendar += '<td>' + j;
    j++
}


document.querySelector('#'+id+' tbody').innerHTML = calendar;
document.getElementById('month_name').innerHTML = month[D.getMonth()] +' '+ D.getFullYear();
document.getElementById('month_name').dataset.month = D.getMonth();
document.getElementById('month_name').dataset.year = D.getFullYear();

for (var i = 1; i < 8; i++) {
  document.getElementById('week_1').querySelectorAll('td:nth-child(' + i + ')').forEach(function(e) {
    e.innerHTML =  days[i-1] + ', ' +e.innerHTML ;
  });
 
  }
}

// первичный вызов
Calendar("calendar", new Date().getFullYear(), new Date().getMonth()); 

// переключатель минус месяц
document.getElementById('previous_m').onclick = function() {
  Calendar("calendar", 
            document.getElementById('month_name').dataset.year, 
            parseFloat(document.getElementById('month_name').dataset.month)-1);
}
// переключатель плюс месяц
document.getElementById('next_m').onclick = function() {
  Calendar("calendar", 
            document.getElementById('month_name').dataset.year, 
            parseFloat(document.getElementById('month_name').dataset.month)+1);
}

document.getElementById('today').onclick = function() {
  Calendar("calendar", new Date().getFullYear(), new Date().getMonth()); 
}
