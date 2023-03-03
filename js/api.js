const loadData = async() =>{
     //spinner
     toggleSpinner(true)
  
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url)
    const data = await res.json();
    displayData(data.data.tools.slice(0,6));
}

const displayData = (datas) =>{
    // console.log(datas)
    
    const dataContainer = document.getElementById('data-container')
    dataContainer.innerHTML = '';
    
    // Display 6 data only 
    const seeMore = document.getElementById('see-more')
    if(datas.length >= 6){
      seeMore.classList.remove('d-none')
      console.log('ron')
    }else{
      seeMore.classList.add('d-none')
      console.log('rimon')

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
     //stop spinner or loader
     toggleSpinner(false)
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
    console.log(data.accuracy.score)
    const dataDescription = document.getElementById('data-description')
    dataDescription.innerHTML = data.description ? data.description: "No Description";
    const pricing1 = document.getElementById('pricing-1')
    pricing1.innerHTML = data.pricing ? data.pricing[0].price : "Free of Cost/Basic";
    const pricing2 = document.getElementById('pricing-2')
    pricing2.innerHTML = data.pricing ? data.pricing[1].price : "Free of Cost/Pro";
    const pricing3 = document.getElementById('pricing-3')
    pricing3.innerHTML = data.pricing ? data.pricing[2].price : "Free of Cost/Enterprise";

    const features1 = document.getElementById('features-1')
    features1.innerHTML = data.features[1].feature_name;
    const features2 = document.getElementById('features-2')
    features2.innerHTML = data.features[2].feature_name;
    const features3 = document.getElementById('features-3')
    features3.innerHTML = data.features[3].feature_name;

    const integrations1 = document.getElementById('integrations-1')
    integrations1.innerHTML = data.integrations ? data.integrations[0] : "No data found";
    const integrations2 = document.getElementById('integrations-2')
    integrations2.innerHTML = data.integrations ? data.integrations[1] : "No data found";
    const integrations3 = document.getElementById('integrations-3')
    integrations3.innerHTML = data.integrations ? data.integrations[2] : "No data found";

    const modalCard2 = document.getElementById('modal-card-2')
    modalCard2.innerHTML = `
    <div class="card h-100">
    <img src="${data.image_link[0]}" class="card-img-top modal-img" alt="...">
    <div class="card-body modal-div">
      <h5 class="card-title">${data.input_output_examples[0] ? data.input_output_examples[0].input : "Can you give any example?"}</h5>
      <p class="card-text">${data.input_output_examples[0] ? data.input_output_examples[0].output : "No! Not Yet! Take a break!!!"}</p>
      <button class="btn btn-danger btn-accuracy">${data.accuracy.score * 100}% accuracy</button>
      
    </div>
    </div>
    `;
}


//spinner / loader
const toggleSpinner = isLoading =>{
  const loaderSection = document.getElementById('loader')
  if(isLoading){
      loaderSection.classList.remove('d-none')
  }
  else{
      loaderSection.classList.add('d-none');
  }
}

//show more
const showAllData = () =>{
  const url = `https://openapi.programming-hero.com/api/ai/tools`
  fetch(url)
  .then(res => res.json())
  .then(data => displayData(data.data.tools))
}

loadData()