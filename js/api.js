const loadData = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json();
    displayData(data.data.tools);
}

const displayData = (datas) =>{
    // console.log(datas)
    const dataContainer = document.getElementById('data-container')
    dataContainer.innerHTML = '';
    // Display 6 data only 
    const seeMore = document.getElementById('see-more');
    if(datas.length > 6){
        datas = datas.slice(0, 6);
        seeMore.classList.remove('d-none')
    }
    else{
        seeMore.classList.add('d-none')
    }
    datas.forEach(data =>{
        // console.log(data)
        const dataDiv = document.createElement('div')
    dataDiv.classList.add('col')
    dataDiv.innerHTML = `
    <div class="card h-100">
      <img src="${data.image}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Features</h5>
        <ol>
         <li>${data.features[0]}</li>
         <li>${data.features[1]}</li>
         <li>${data.features[2]}</li>
        </ol>
      </div>
      <div class="card-footer d-flex justify-content-between">
        <div>
          <h5 class="card-title">${data.name}</h5>
          <h6><i class="fa-solid fa-calendar-days"></i> ${data.published_in}</h6>
        </div>
        <div>
        <button onClick="loadDetails('${data.id}')" class="btn-icon" data-bs-toggle="modal" data-bs-target="#detailsModal"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    `;
    dataContainer.appendChild(dataDiv)
    })
}

//load details
const loadDetails =async id =>{
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    const res = await fetch(url)
    const data = await res.json()
    displayDetails(data.data)
}

const displayDetails = (data) =>{
    console.log(data)
    const dataDescription = document.getElementById('data-description')
    dataDescription.innerHTML = data.description ? data.description: "No Description";
    const pricing1 = document.getElementById('pricing-1')
    pricing1.innerHTML = data.pricing ? data.pricing[0].price : "Free of Cost/Basic";




}

//show more
document.getElementById('btn-see-more').addEventListener('click', function(){
    // loadData();

})

loadData()