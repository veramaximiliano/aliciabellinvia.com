document.addEventListener('DOMContentLoaded', function(){
  let filterOptions = document.querySelectorAll('.filter a');
  let projects = document.querySelectorAll('.projects-row .project');
  
  for(let i=0; i < filterOptions.length; i++){
    filterOptions[i].addEventListener('click', function(e){
      e.preventDefault();
  
      // Filter options
      manageClasses(filterOptions, 'active','remove');
      manageClasses(e.target,'active','add');
      
      // Filter projects
      const technique = e.target.getAttribute('href');
  
      if(technique == 'all'){
        manageClasses(projects,'active','add');
      }
      else {
        manageClasses(projects,'active','remove');
        manageClasses(document.querySelectorAll('.project[data-technique=' + technique + ']'),'active','add');
      }  
      return false;
    });
  }
});

// Helpers
function manageClasses(elements, eclass, action) {
  var applyAction = (action == 'add') ? addClass : removeClass;

  if(!elements.length)
    applyAction(elements, eclass);
  else
    for(let i=0; i < elements.length; i++)
      applyAction(elements[i], eclass);
}

function removeClass(element, eclass){
  element.classList.remove(eclass);
}   

function addClass(element, eclass){
  element.classList.add(eclass);
}  