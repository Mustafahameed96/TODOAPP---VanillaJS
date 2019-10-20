var formID =  document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
// Submit form event


formID.addEventListener('submit',addItem);


// item list event listender , delete event

itemList.addEventListener('click',removeItem);

//filter items 

filter.addEventListener('keyup',flterItems);





function addItem(e){


    e.preventDefault();
    

    // Get input value

    var newItem = document.getElementById('item').value;
    var newItemNode = document.getElementById('item');

    newItemNode.value = '';

    // create new li elemetns
    

    var li = document.createElement('li');

    li.className = 'list-group-item';

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create del button with li

    var button = document.createElement('button');

    //add classes to delete button
    button.className = 'btn btn-danger btn-sm float-right delete'

    //appened text node 

    button.appendChild(document.createTextNode('X'));
    li.appendChild(button);



    itemList.appendChild(li);
}

function removeItem(e){

if(e.target.classList.contains('delete')){

    if(confirm('Are You Sure ?')){


        var li  = e.target.parentElement;
        itemList.removeChild(li);
    }

}
}


function flterItems(e){


    //convert text to lowercase

    var text =  e.target.value.toLowerCase();

    // console.log(text);

    // get list 
    var itemsall = itemList.getElementsByTagName('li');

    // cinvert into array

    Array.from(itemsall).forEach(function (item){


        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){

            item.style.display = 'block';
        }

        else {

            item.style.display = 'none';
        }
    })

}