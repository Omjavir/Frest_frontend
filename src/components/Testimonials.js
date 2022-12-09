import React from 'react'

const Testimonials = () => {
    return (
        <div className='bg-fuchsia-200 text-blue-500 flex flex-col sm:flex-row justify-center align-middle py-10 border-b-blue-500 border-2'>
            <div className='p-3 sm:p-14 sm:w-[50vw] sm:mt-44 mt-5'>
                <h2 className='font-mono text-blue-600 font-bold sm:font-semibold text-3xl sm:text-6xl'>THE FREST WAY</h2>
                <p className='p-1 my-2'>How we got our flavour</p>
                <p className='p-1 my-2'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                <button className='font-bold text-xl sm:text-2xl border-blue-600 border-2 px-2 py-1 rounded-3xl my-4'>See How</button>
            </div>
            <div className='sm:w-[50vw] flex flex-wrap justify-center'>
                <img className='sm:w-[35vh] w-[18vh] sm:mx-12 sm:my-2 mx-4 my-2' src="https://static.wixstatic.com/media/84770f_2a24d8135a224505940f09ba03d75f25~mv2.jpg/v1/fill/w_258,h_258,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard-60.jpg" alt="" />
                <img className='sm:w-[35vh] w-[18vh]  sm:mx-12 sm:my-2 mx-4 my-2' src="https://static.wixstatic.com/media/84770f_667764c5a5ed4906b3b690ba0ad9f43c~mv2.jpg/v1/fill/w_211,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard-58.jpg" alt="" />
                <img className='sm:w-[35vh] w-[18vh]  sm:mx-12 sm:my-2 mx-4 my-2' src="https://static.wixstatic.com/media/84770f_b4fbe0cb441c4a37b949138b7e2a570f~mv2.jpg/v1/fill/w_265,h_290,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Artboard-66.jpg" alt="" />
                <img className='sm:w-[35vh] w-[18vh]  sm:mx-12 sm:my-2 mx-4 my-2' src="https://static.wixstatic.com/media/c837a6_3258c0ea92db4c20aa9b1cdb7dba3378~mv2.jpg/v1/fill/w_233,h_290,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_2107631954.jpg" alt="" />
            </div>
        </div>
    )
}

export default Testimonials