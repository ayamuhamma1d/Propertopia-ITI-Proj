import './services.css';
import photomaintance from './../../../src/assets/img/51679327-buiding-istruments-on-wooden-photo.png'
import photosellrent from './../../../src/assets/img/sellrentservicephoto-removebg-preview.png'
import photo3d from './../../../src/assets/img/3dservivephoto-removebg-preview.png'

const Services = () => {
    return (
        <>
        <section>
            <div class="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto mb-10 text-center">
                <h2 class="font-bold text-3xl font-[Poppins] mb-10 ">Services</h2>
                <div class="flex flex-col gap-5 md:flex-row md:space-x-5 md:space-y-0 space-x-5 ">

                    <div class=" md:w-1/3 flex flex-col items-center p-6 space-y-4 rounded-lg border border-slate-200">
                        <img src={photosellrent} alt="1" class="w-full mb-5" />
                        <h5 class="font-bold text-lg text-slate-900"> Buy a home</h5>
                        <p class=" my-8 leading-5 text-sm text-slate-700">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
                        </p>
                        <div>
                        <a href="#" class="service__button__background__color inline-flex items-center px-3 py-3  text-sm font-medium text-center text-black 
                         ">
                        Read more
                    </a>
                    </div>
                    </div>
                    <div class=" md:w-1/3 flex flex-col items-center p-6 space-y-4 rounded-lg border border-slate-200">
                        <img src={photomaintance} alt="1"  />
                        <h5 class="font-bold text-lg text-slate-900"> Buy a home</h5>
                        <p class=" my-8 leading-5 text-sm text-sm text-slate-700">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
                        </p>
                        <div>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  service__button__background__color  
                         ">
                        Read more
                    </a></div>
                    </div>

                    <div class=" md:w-1/3 flex flex-col items-center p-6 space-y-4 rounded-lg border border-slate-200">
                        <img src={photo3d} alt="1" class="w-full" />
                        <h5 class="font-bold text-lg text-slate-900"> Buy a home</h5>
                        <p class=" my-8 leading-5 text-sm text-sm text-slate-700">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
                        </p>
                        <div>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black  service__button__background__color 
                          ">
                        Read more
                    </a></div>
                    </div>
                </div>
            </div>
            </section>

        </>)
}

export default Services