import logo from '../ipul.png';

const Main = () => {
  return (
      <>

      <h1>Next Meetup</h1>
      <div class="container bg-dark">
       <p class="text-white"><b>Awesome meetup and event</b></p>
       <p class="text-muted">03 September 2022</p>
       <p class="text-white">Hello, Javascript $ Node.js Ninjas!<br/>
       Get ready for our montly meetup JakartaJS will be our fifth meetup of 2018!<br/>
       The meetup format will contain some some short stories and technical talks.<br/>
       if you have a short announcement you'd like to share with the audience, tou may do so during open mic announcements.</p>
       <p class="text-white">Remember to bring a photo ID get throungh building security.</p>
       <p class="text-white">-----</p>
       <p class="text-white">See you there!</p>
       <p class="text-white">Best, Hengki,Giovanni,Sofian,Riza,Agung, The Jak Mania Organizers</p>
    </div>

    <h1 class="mt-4">About Meetup</h1>
    <div class="container">
      <p>Come and meet other developers interesent in the javascript and it's library in the greater jakarta area.</p>
      <p>Twitter: @jakartaJS and we use the hastag #jakartajs</p>
    </div>


    <h1 class="mt-4">Members</h1>
    <h5 class="d-flex justify-content-end ms-auto mb-4 container" >See all</h5>   
    <div class="container bg-dark">
    <div class="row py-2">
      <div class="col col-md-2">
      <img src={logo} alt="gambar" width={100} height={100} class="rounded-circle"/>
</div>
      <div class="col- col-md-2">
        <h5 class="text-white"><b>Organizers</b></h5>
        <p class="text-white">Saipul Ahmad</p>
      </div>


      <div class="col- col-md-1">
      <p class="text-white pt-4">4 Other</p>
      </div>
      
    </div>
    </div>

   
    <h1 class="mt-4">Past Meetups</h1>
    <div class="container">
    <h5 class="d-flex justify-content-end ms-auto mb-4" >See all</h5>
    <diV class="row justify-content-center">
    
        <div class="col col-md-3 py-4 bg-dark mx-5"> 
          <p class="text-white">27 November 2017</p>
          <hr class="text-white"></hr>
          <p class="text-white">#39 JakartaJS April Meetup with Kumparan</p>
          <p class="text-white">139 <span class="text-muted">went</span></p>
          <button class="btn btn-primary"> View</button>
        </div>

        <div class="col col-md-3 py-4 bg-dark  mx-5"> 
          <p class="text-white">27 October 2017</p>
          <hr class="text-white"></hr>
          <p class="text-white">#38 JakartaJS April Meetup with Blibli</p>
          <p class="text-white">113 <span class="text-muted">went</span></p>
          <button class="btn btn-primary"> View</button>
        </div>

         <div class="col col-md-3 py-4 bg-dark mx-5"> 
          <p class="text-white">27 September 2017</p>
          <hr class="text-white"></hr>
          <p class="text-white">#37 JakartaJS April Meetup with Hacktive8</p>
          <p class="text-white">110 <span class="text-muted">went</span></p>
          <button class="btn btn-primary"> View</button>
        </div>
    </diV>
    </div>

    </>

  
  )
}

export default Main;