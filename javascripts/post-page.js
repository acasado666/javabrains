$(document).ready(function() {
   var loc = window.location;
   var vcount = courseContent.bindings.length;
   var map = courseContent.bindings;
   var vno;
   var vno_title;
   
   for (i in courseContent.bindings) {
     if($.trim(loc).toLowerCase().indexOf(courseContent.bindings[i].url) >= 0) {
        vno = i;
     }
   }
   vno = parseInt(vno) + 1;
   if (parseInt(vno, 10) < 9) {
      vno_title = '0' + parseInt(vno, 10) + '. ';
   }
   else {
      vno_title = parseInt(vno, 10) + '. ';
   }
   $('#vno-title').append(vno_title);
   
   $('#section').append(courseContent.section);
   $('.courseName').append(courseContent.course);
   $('#vcount').append(vcount);
   if (vno >= vcount) {
      $('.watch-next-text').replaceWith("<h3 class='text-left'>&nbsp; You have reached the last video of this course.</h3>")
   }
   else {
      $('#nextVname').prepend(map[vno].name); 
      $('#watchnext-link').attr("href", map[vno].url);
      $('#watchnext-desc').append(map[vno].desc);
   }
   
   
   
   
   if (vno == 1) {
      $('#prev a .col-md-12').replaceWith("");
   }
   else {
      $('#prevCourseNav').append("<strong>" + map[vno-2].name + "</strong>");
      $('#prevCourseNav').append("<br/> Tutorial: " + (vno-1));
   }
   
   if (vno == vcount) {
      $('#next a .col-md-12').replaceWith("");
   }
   else {
      $('#nextCourseNav').append("<strong>" + map[vno].name + "</strong>");
      $('#nextCourseNav').append("<br/> Tutorial: " + (vno+1));
      
   }
   
   var pageStart = parseInt(vno, 10) - 4;
   var pageEnd = parseInt(vno, 10) + 4;
   var frontOffset = 0, backOffset = 0;
   
   
   if (parseInt(pageStart, 10) < 1) {
      pageStart = 1;
      frontOffset = 4 - vno;
   }
   
   if (parseInt(pageEnd, 10) > parseInt(vcount)) {
      pageEnd = vcount;
      backOffset = vno + 4 - vcount;
   }
   
   pageStart -= backOffset;
   if (pageStart < 1) {
      pageStart = 1;
   }
   
   pageEnd += frontOffset + 1;
   if (pageEnd > vcount) {
      pageEnd = vcount;
   }
   
   var link = 1;
   for (k=pageStart; k <= pageEnd; k++) {
      var id = '#' + link;
      $(id).append(k)
      .attr("href", map[k-1].url)
      .attr("data-original-title", k + '. ' + map[k-1].name)
      .attr("data-content", map[k-1].desc)
      .popover({trigger: 'hover', placement: 'top'});
      if (k == vno) {
         $(id).parent().attr("class", "active"); 
      }
      link++;
   }
   

   
});
