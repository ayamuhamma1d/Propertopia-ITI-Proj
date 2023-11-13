import { useForm, useFieldArray, Controller } from 'react-hook-form';


const AddForm = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const onFormSubmit = (data) => {
        console.log(data)

    }

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'files',
    });


    return (
        <>
            <section className='w-full sm:max-w-xl md:max-w-full  lg:max-w-screen-xl md:px-5 mx-auto'>
                <div className=" w-full  lg:w-1/2 bg-beige1 shadow-2xl mx-auto p-5">
                    <h2 className=" text-center font-bold text-xl md:text-3xl text-beige font-[Poppins] py-3">Add Units</h2>
                    <p className="w-2/3 text-slate-700 mx-auto text-xl text-center">You can list your unit on our websits for sale or lease just fill this form
                    </p>
                    <form onSubmit={handleSubmit(onFormSubmit)} className="  rounded px-10 pt-6 pb-8 mb-4">
                        <div className="mb-5">
                            <input type="text" {...register('fullname', { required: true })}
                                className=" border-0 border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight 
                        placeholder-gray-400" id="" placeholder="Full Name"
                            />
                            {errors?.fullname?.type === 'required' &&
                                <p className="form-text text-red-600" >This field is required</p>}
                        </div>
                        
                        <div className="mb-5">
                            <input type="email" {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                                className=" border-0 border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight 
                         placeholder-gray-400" id="" placeholder="E-mail"
                            />
                            {errors?.email?.type === 'required' &&
                                <p className="form-text text-red-600">This field is required</p>}
                            {errors?.email?.type === 'pattern' &&
                                <p className="form-text text-red-600">Email is invalid</p>}
                        </div>
                        <div className="mb-5 flex  ">
                            <label className="bg-black p-3 rounded text-white">+20</label>
                            <input type="tel" {...register('phone', { required: true, pattern: /^(10|11|12|14|15|16|17|18|19)[0-9]{8}$/ })}
                                className=" border-0 border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight me-1
                        placeholder-gray-400" id="" placeholder="Phone"
                            />
                            {errors?.phone?.type === 'required' &&
                                <p className="form-text text-red-600">This field is required</p>}
                            {errors?.phone?.type === 'pattern' &&
                                <p className="form-text text-red-600">Phone must be formatted as 1234578910</p>}
                        </div>
                        <div className="mb-5">
                            <input type="text" {...register('unitaddress', { required: true })}
                                className=" border-0 border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight 
                        placeholder-gray-400" id="" placeholder="Unit Address"
                            />
                            {errors?.unitaddress?.type === 'required' &&
                                <p className="form-text text-red-600" >This field is required</p>}
                        </div>
                        <div className="mb-5">
                            <input type="text" {...register('description', { required: true })}
                                className=" border-0 border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight 
                         placeholder-gray-400" id="" placeholder="Unit Description"
                            />
                            {errors?.description?.type === 'required' &&
                                <p className="form-text text-red-600" >This field is required</p>}
                        </div>
                        <div className="mb-5">
                            <input type="text" {...register('price', { required: true ,pattern: /^[0-9]*$/})}
                                className=" border-0 border-b-2 rounded w-full py-3 px-3 text-gray-700 leading-tight 
                         placeholder-gray-400" id="" placeholder="Expected Price"
                            />
                       
                            {errors?.price?.type === 'required' &&
                                <p className="form-text text-red-600" >This field is required</p>}
                                {errors?.price?.type === 'pattern' &&
                                <p className="form-text text-red-600">Please enter numbers only </p>}
                        </div>

                        <div className=' mb-5'>
                            <div className="w-1/3 flex me-5">
                                <label className="me-5 text-slate-700">Unit Type</label>
                                <Controller
                                    name="unitType"
                                    control={control}
                                    defaultValue="For Sell"
                                    render={({ field }) => (
                                        <select
                                            {...field}
                                            className="appearance-none bg-white border-0 border-b-2 hover:border-gray-500 py-3 px-1 rounded shadow leading-tight text-gray-400"
                                        >
                                            <option value="For Sell">For Sell</option>
                                            <option value="For Rent">For Rent</option>
                                        </select>
                                    )}
                                />

                            </div>


                            <div className=" my-3">

                                <label htmlFor="files" className="block text-gray-700">
                                    Upload your units photos
                                </label>
                                {fields.map((file, index) => (
                                    <div key={file.id}>
                                        <Controller
                                            name={`files[${index}]`}
                                            control={control}
                                            defaultValue=""

                                            render={({ field }) => (
                                                <input
                                                    {...field}
                                                    type="file"
                                                    className="border-gray-300 focus:border-indigo-500 my-1 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md"
                                                />
                                            )}
                                        />
                                        <button type="button"  onClick={() => remove(index)}>
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button type="button"  onClick={() => append('')}>
                                    Add File
                                </button>

                            </div>

                        </div>


                        <button type="submit" style={{ background: "#c5bbb5 " }} className=" mt-3 w-full bg-white shadow-2xl  text-white font-bold py-3 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div >

            </section >

        </>
    )
}

export default AddForm

