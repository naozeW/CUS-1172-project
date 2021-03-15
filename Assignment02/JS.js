document.addEventListener('DOMContentLoaded', function(){
      document.querySelector("#new-task").onsubmit = function(){

        const li = document.createElement('li');
        let task_text = document.querySelector('#task').value;
        let priority_selector = document.querySelector('#priority').value
        let new_task_html = `
                             <span>
                             ${task_text}<br />
                             ${priority_selector}
                             
                             <select id = "completion-status">
                               <option value="unifinisher">Unifinisher</option>
                               <option value="completed">Completed</option>
                             </select>
                             
                             </span>
                             <button class="remove">Remove</button>
                             `;
        li.innerHTML = new_task_html
        document.querySelector("#tasks_list").append(li);
        document.querySelector("#task").value = '';
        return false;
        document.querySelector("#completion-status").onchange = function()
        {
          document.querySelector("#task_text").class.throughLine = document.querySelector("#completion-status")
          return false;
        }
      }
       document.addEventListener('click', function(event){
        element = event.target;
        if (element.className === 'remove'){
          element.parentElement.remove();}
       }) 
       });


