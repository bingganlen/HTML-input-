import a from"lunar-calendar";import r from"jquery";import"bootstrap-datetime-picker";function t(t){var n=t.viewDate.getFullYear(),e=t.viewDate.getMonth()+1;r(t.picker).find(".day").map(function(){var t=r(this),o=t.html();if(!(o.indexOf("<br>")>-1)){var l=parseInt(o,10),i=0;t.hasClass("old")?i=-1:t.hasClass("new")&&(i=1);var u=function(r,t,n,e){var o=function(a,r,t,n){var e=a,o=r;return-1===n?(o-=1)<1&&(o=12,e-=1):1===n&&(o+=1)>12&&(o=1,e+=1),{year:e,month:o,day:t}}(r,t,n,e),l=a.solarToLunar(o.year,o.month,o.day);return{year:l.lunarYear,month:l.lunarMonth,monthName:l.lunarMonthName,day:l.lunarDay,dayName:l.lunarDayName}}(n,e,l,i);t.addClass("lunar-day").html(function(a,r){return a+'<br><span class="lunar-text">'+r+"</span>"}(o,1===u.day?u.monthName:u.dayName))}})}var n=r.fn.datetimepicker.prototype.constructor.Constructor.prototype;n.oldFill=n.fill,n.fill=function(a){this.oldFill(a),t(this)};
//# sourceMappingURL=bootstrap-datetimepicker-lunar-plugin.m.js.map