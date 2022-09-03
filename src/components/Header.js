import logo from '../ipul.png';

const Header = () => {
  return ( 
    <>
      <div class="container-fluid py-4 my-4 bg-dark">
        <div class="row">
          <div class="col col-md-4">
            <img src={logo} alt="gambar" height={450}></img>
          </div>
          <div class="col col-md-4 my-4">
            <h1 class="text-white">Hactive 8 Meetup</h1>
            <p class="text-white">Location   jakarta,indonesia</p>
            <p class="text-white">Members    1,078</p>
            <p class="text-white">Organizer  Ahmad Saifullah</p>
            <button class="btn btn-primary my-4">Jois Us</button>
          </div>
        </div>
      </div>
      </> 
  )
}

export default Header;