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
    datas.forEach(data =>{
        console.log(data)
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
        <button class="btn-icon"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </div>
    `;
    dataContainer.appendChild(dataDiv)
    })
    

    //Display all phones
    // phones.forEach(phone =>{
    //     // console.log(phone)
    //     const phoneDiv = document.createElement('div')
    //     phoneDiv.classList.add('col')
    //     phoneDiv.innerHTML = `
    //     <div class="card p-4">
    //       <img src="${phone.image}" class="card-img-top" alt="...">
    //       <div class="card-body">
    //         <h5 class="card-title">${phone.phone_name}</h5>
    //         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //         <button onClick = "loadPhoneDetails('${phone.slug}')" href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#phoneDetailModal">Show Details</button>
    //       </div>
    //     </div>
    //     `;
    //     phonesContainer.appendChild(phoneDiv)
    // })

}

loadData()