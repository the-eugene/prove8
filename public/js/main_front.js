async function init(){
    try{
    var data= await (await fetch('/api')).json();
    } catch(e) {return console.log(e);}
    let atable=document.getElementById("avengers");
    while(atable.lastChild) atable.removeChild(atable.lastChild);
   
    data.avengers.forEach((a)=>{
        let row=document.createElement('tr');
        row.innerHTML=`<td>${a.name}</td><td>${a.power}</td><td>${a.age}</td>`;
        atable.appendChild(row);
    });
}

async function submit(){
    const fields=['name','age', 'power'];
    let json=fields.reduce((data,field)=>{
        const input=document.getElementById(field);
        data[field]=input.value;
        input.value='';
        return data;
    },{});

    try{
    await fetch('/api',{
        method: 'POST',
        body: JSON.stringify(json),
        headers: {'Content-Type':'application/json'},
    });
    } catch(e){return console.log(e);}

    init();
}