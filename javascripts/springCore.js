var koushikSpringCoreCourse = {"bindings": [
        {"name": "Understanding Dependency Injection", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-01-understanding.html"},
        {"name": "Setting Up", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-02-setting-up.html"},
        {"name": "Understanding Spring Bean Factory", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-03-understanding-spring.html"}
    ]
};
$(document).ready(function() {
   var loc = window.location;
   var listContent = "<table style='width:100%'>";
   for (i in koushikSpringCoreCourse.bindings) {
     var courseLinkCSS = "courseLink";
     if($.trim(loc) == koushikSpringCoreCourse.bindings[i].url) {
        courseLinkCSS = "currentPageLink";
     }
     var j = parseInt(i) + 1;
     listContent = listContent + "<tr><td class='" + courseLinkCSS + "'>";
     listContent = listContent + "<a style='display:block;' href='" + koushikSpringCoreCourse.bindings[i].url + "'> " + j + ". " + koushikSpringCoreCourse.bindings[i].name + "</a>";
     listContent = listContent + "</td></tr>";
   }
   listContent = listContent + "</table>";
   $('#slidingDrawer').append(listContent);
   $('#viewCourse').click(function() {
     
     if ($('#slidingDrawer').is(":hidden")) {
       $('#slidingDrawer').slideDown('slow');
     } else {
       $('#slidingDrawer').hide();
     }

   });

});
