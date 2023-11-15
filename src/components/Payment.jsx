
import './payment.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { useForm, Controller, useController } from 'react-hook-form';

const Payment = () => {

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onFormSubmit = (data) => {
        console.log(data)
    }

    const ExpiryMonthController = useController({
        control,
        name: 'expiryMonth',
        defaultValue: 'Month',
        rules: { required: 'Expiry Month is required' },

    });

    const ExpiryYearController = useController({
        control,
        name: 'expiryYear',
        defaultValue: 'Year',
        rules: { required: 'Expiry Year is required' },

    });

    const years = Array.from({ length: 12 }, (_, index) => new Date().getFullYear() + index);
    const months = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
        <>

            <section className='w-full sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-5 mx-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-2 me-5 gap-8 " >

                    <div className=" py-5">

                        <h2 className=" text-center font-bold text-xl md:text-2xl text-slate-950 font-[Poppins] py-3">Enter Your Payment Details</h2>

                        <form onSubmit={handleSubmit(onFormSubmit)} className="bg-white shadow-2xl rounded px-10 pt-6 pb-8 mb-4">
                            <div className="mb-5">
                                <input type="text" {...register('cardnumber', { required: true, pattern: /^\d{16}$/ })}

                                    className="shadow appearance-none border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight 
                                        focus:outline-none focus:shadow-outline placeholder-gray-400 focus:ring-beige dark:focus:ring-beige ring-beige" id=""
                                        placeholder="Card Number" 

                                />
                                {errors?.cardnumber?.type === 'required' &&
                                    <p className="form-text text-beige" >This field is required</p>}
                                {errors?.cardnumber?.type === 'pattern' &&
                                    <p className="form-text text-beige"> must be a number and must be 16 digits</p>}
                            </div>

                            <div className="mb-5">
                                <input type="text" placeholder="Card Holder"  {...register('cardholder', { required: true, pattern: /^[a-zA-Z]+(\s[a-zA-Z]+)*$/ })}
                                    className="shadow appearance-none border-gray-400 rounded w-full py-3 px-3 text-gray-700 leading-tight
                                          focus:outline-none  focus:shadow-outline placeholder-gray-400 focus:ring-beige dark:focus:ring-beige ring-beige" id="" />
                                {errors?.cardholder?.type === 'required' &&
                                    <p className="form-text text-beige" >This field is required</p>}
                                {errors?.cardholder?.type === 'pattern' &&
                                    <p className="form-text text-beige"> Please do not enter any numbers or special characters and do not begin or end with space</p>}

                            </div>

                            <div className="mb-5">

                                <Controller
                                    name="unitType"
                                    control={control}
                                    defaultValue="For Sell"
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className=" appearance-none w-full bg-white border-gray-400 hover:border-gray-500 py-3 px-3 rounded shadow leading-tight
                                         focus:outline-none focus:shadow-outline focus:ring-beige dark:focus:ring-beige ring-beige"
                                        >
                                            <option >Unites State</option>
                                            <option >Egypt</option>
                                        </select>
                                    )}
                                />

                            </div>

                            <div className='flex mb-5'>
                                <div className="me-2">
                                    <input type="text" placeholder="CVV" {...register('cvv', { required: true, pattern: /^\d{3}$/ })}
                                        className="shadow appearance-none border-gray-400 rounded w-full py-3   text-gray-700 leading-tight 
                                        focus:outline-none focus:ring-beige dark:focus:ring-beige ring-beige
                                            focus:shadow-outline placeholder-gray-400" id="" />
                                    {errors?.cvv?.type === 'required' &&
                                        <p className="form-text text-beige" >This field is required</p>}
                                    {errors?.cvv?.type === 'pattern' &&
                                        <p className="form-text text-beige"> must be a number and must be 3 digits</p>}

                                </div>
                                <div className="me-2">
                                    <select {...ExpiryMonthController.field}
                                        className={`appearance-none w-full bg-white border-gray-400 hover:border-gray-500 py-3 px-1 rounded shadow leading-tight
                                        focus:outline-none focus:shadow-outline text-gray-400 ${errors.expiryMonth ? 'border-beige' : ''}`}>
                                        <option value="Month">Expiry Month</option>
                                        {months.map((data) => (
                                            <option key={data} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="">
                                    <select {...ExpiryYearController.field}
                                        className={`appearance-none w-full bg-white border-gray-400 hover:border-gray-500 py-3 px-1 rounded shadow leading-tight
                                      focus:outline-none focus:shadow-outline text-gray-400 ${errors.expiryYear ? 'border-beige' : ''}`}>
                                        <option value="Year">Expiry Year</option>
                                        {years.map((year) => (
                                            <option key={year} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                            <button type="submit" className=" mt-3 w-full bg-beige hover:bg-beige1 hover:text-black text-white font-bold py-3 px-4 rounded">
                                Submit
                            </button>
                        </form>


                    </div >


                    <div className=" w-full lg:w-3/4 p-5 m-5 border border-gray-200">
                        <h2 className=" font-bold text-xl md:text-2xl text-slate-950 font-[Poppins] py-4">Professional Plan</h2>
                        <div className='py-3 border-b border-gray-200'>
                            <h3 className="font-bold text-md md:text-xl text-slate-950 font-[Poppins]">Biling Cycle</h3>
                            <div className=" flex ">
                                <div className="flex items-center pl-4  rounded dark:border-gray-700 me-5">
                                    <input id="bordered-radio-1" type="radio" value="" name="bordered-radio"
                                        className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-beige dark:focus:ring-beige dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="bordered-radio-1" className="  w-full py-4 ml-2 text-lg font-medium text-gray-900 dark:text-gray-300">Annual</label>
                                </div>
                                <div className=" ml-5 flex items-center pl-4  rounded dark:border-gray-700">
                                    <input checked id="bordered-radio-2" type="radio" value="" name="bordered-radio"
                                        className="w-4 h-4 text-black bg-gray-100 border-gray-300 focus:ring-beige dark:focus:ring-beige dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="bordered-radio-2" className=" text-lg w-full py-4 ml-2  font-medium text-gray-900 dark:text-gray-300">Monthly</label>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-200 py-3">
                            <div className="flex justify-between py-2">
                                <div>
                                    <p className=" text-lg font-medium">1Figma design editor</p>
                                    <p className="text-md text-slate-400">$12 * 1 editor * 12 months </p>
                                </div>
                                <p className=" text-lg font-medium"> $144</p>
                            </div>
                            <div className="flex justify-between py-2">
                                <div>
                                    <p className=" text-lg font-medium"> 0 Figjam editors</p>
                                    <p className="text-md text-slate-400">FigJam free for 2021</p>
                                </div>
                                <p className="text-lg font-medium">$0</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-5">
                            <p className=" text-lg font-medium">Subtotal</p>
                            <p className="text-lg font-medium">$144</p>
                        </div>
                        <button className=" w-full bg-beige hover:bg-beige1 hover:text-black text-white font-bold py-3 px-4 rounded">
                            Next:Review
                        </button>

                    </div>
                </div>

            </section >
        </>
    )
}

export default Payment