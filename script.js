let form = document.getElementsByTagName("form")
let fish = document.querySelector(".text1")
let login = document.querySelector(".text2")
let paroll = document.querySelector(".text3")
let tbody = document.querySelector(".tbody")
let search = document.querySelector(".search")
let dbArr = []
let j;
let id = 0
let adds



function add(){
    let alyort = "";
    if(fish.value==""){
        alyort += "Ism familya va otasinig ismi kiritilmagan \n";
    }
    if(login.value == ""){
        alyort += "Login kiritilmagan \n";
    }
    if(paroll == ""){
        alyort += "Parol kiritilmagan"
    }
    if (adds != 1){
        if(alyort == ""){
            id++;
            dbArr.push({
                id:id,
                fish:fish.value,
                login:login.value,
                paroll:paroll.value
            })
            display();
            fish.value = "";
            login.value = "";
            paroll.value = "";
        }else{
            alert(alyort);
        }
    }else{
        console.log(adds);
        dbArr[j].fish = fish.value;
        dbArr[j].login = login.value;
        dbArr[j].paroll = paroll.value;
        display()
        fish.value = "";
        login.value = "";
        paroll.value = "";
        adds = 0
    }
}



function delet(e){
    let q = document.querySelector(".id");
    let index;
    dbArr.find(function(i,index1){
        index = index1;
        return i.id == e.parentElement.dataset.id;
    })
    dbArr.splice(index,1);
    display()
}




function edite(e){
    adds = 1
    let edit = dbArr.find(function(i,index){
        j = index;
        return i.id == e.parentElement.dataset.id;
    })
    fish.value = edit.fish;
    login.value = edit.login;
    paroll.value = edit.paroll;
}





function searchs(val){
    string = ""
    dbArr.filter(k => {
            if (k.fish.startsWith(val)){
                string += `
                <tr>
                <th  scope="row" class="px-3 id">${k.id}</th>
                <td>${k.fish}</td>
                <td>${k.login}</td>
                <td>${k.paroll}</td>
                <td data-id=${k.id} class="px-0"><a href="#" onclick="edite(this)" class="link-warning"><i class="fas fa-pen"></i></a></td>
                <td data-id=${k.id} class="px-0"><a href="#" onclick="delet(this)" class="link-warning"><i class="fas fa-trash-alt"></i></a></td>
                </tr>`
            }
        
        })
        tbody.innerHTML = string
}


function clears(){
    search.value = "";
    display()
}




function display(){
    let string = "";
    dbArr.forEach(function(i){
        string += `
        <tr>
        <th  scope="row" class="px-3">${i.id}</th>
        <td>${i.fish}</td>
        <td>${i.login}</td>
        <td>${i.paroll}</td>
        <td data-id=${i.id} class="px-0"><a href="#" onclick="edite(this)" class="link-warning"><i class="fas fa-pen"></i></a></td>
        <td data-id=${i.id} class="px-0"><a href="#" onclick="delet(this)" class="link-warning"><i class="fas fa-trash-alt"></i></a></td>
        </tr>`
    })
    tbody.innerHTML = string
}
display()
