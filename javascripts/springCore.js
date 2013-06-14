var koushikSpringCoreCourse = {"bindings": [
        {"name": "Understanding Dependency Injection", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-01-understanding.html"},
        {"name": "Setting Up", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-02-setting-up.html"},
        {"name": "Understanding Spring Bean Factory", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-03-understanding-spring.html"},
        {"name": "Writing Code Using the Bean Factory", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-04-writing-code-using.html"},
        {"name": "ApplicationContext and Property Initialization", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-05-applicationcontext.html"},
        {"name": "Using Constructor Injection", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-06-using-constructor.html"},
        {"name": "Injecting Objects", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-07-injecting-objects.html"},
        {"name": "Inner Beans, Aliases and idref", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-08-inner-beans-aliases.html"},
        {"name": "Initializing Collections", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-09-initializing.html"},
        {"name": "Bean Autowiring", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-10-bean-autowiring.html"},
        {"name": "Understanding Bean Scopes", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-11-understanding-bean.html"},
        {"name": "Using ApplicationContextAware", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-12-using.html"},
        {"name": "Bean Definition Inheritance", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-13-bean-definition.html"},
        {"name": "Lifecycle Callbacks", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-14-lifecycle-callbacks.html"},
        {"name": "Writing a BeanPostProcessor", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-15-writing.html"},
        {"name": "Writing a BeanFactoryPostProcessor", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-16-writing.html"},
        {"name": "Coding To Interfaces", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-17-coding-to-interfaces.html"},
        {"name": "Introduction to Annotations and the Required Annotation", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-18-introduction-to.html"},
        {"name": "The Autowired Annotation", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-19-autowired-annotation.html"},
        {"name": "Some JSR-250 Annotations", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-20-some-jsr-250.html"},
        {"name": "Component and Stereotype Annotations", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-21-component-and.html"},
        {"name": "Using MessageSource To Get Text From Property Files", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-22-using-messagesource.html"},
        {"name": "Event Handling in Spring", "url": "http://javabrains.koushik.org/2011/08/spring-tutorial-23-event-handling-in.html"}
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
