import photo from './../../../src/assets/img/2x_Miso_FSBO_Vector.png'

const Services = () => {
    return (
        <>
        <section>
            <div class="w-full sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-5 mx-auto mb-10 text-center">
                <h2 class="font-bold text-3xl font-[Poppins]">Services</h2>
                <div class="mt-10 flex flex-col space-x-0 space-y-5 md:flex-row md:space-x-5 md:space-y-0 space-x-5 ">

                    <div class=" md:w-1/3 flex flex-col items-center p-6 space-y-4 rounded-lg border border-slate-200">
                        <img src={photo} alt="1" class="w-full" />
                        <h5 class="font-bold text-lg text-slate-900"> Buy a home</h5>
                        <p class=" my-8 leading-5 text-sm text-sm text-slate-700">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
                        </p>
                        <div>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
                        hover:bg-blue-800  ">
                        Read more
                    </a>
                    </div>
                    </div>
                    <div class=" md:w-1/3 flex flex-col items-center p-6 space-y-4 rounded-lg border border-slate-200">
                        <img src={photo} alt="1" class="w-full" />
                        <h5 class="font-bold text-lg text-slate-900"> Buy a home</h5>
                        <p class=" my-8 leading-5 text-sm text-sm text-slate-700">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
                        </p>
                        <div>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
                        hover:bg-blue-800  ">
                        Read more
                    </a></div>
                    </div>

                    <div class=" md:w-1/3 flex flex-col items-center p-6 space-y-4 rounded-lg border border-slate-200">
                        <img src={photo} alt="1" class="w-full" />
                        <h5 class="font-bold text-lg text-slate-900"> Buy a home</h5>
                        <p class=" my-8 leading-5 text-sm text-sm text-slate-700">Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else
                        </p>
                        <div>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg 
                        hover:bg-blue-800  ">
                        Read more
                    </a></div>
                    </div>
                </div>
            </div>
            </section>

        </>)
}

export default Services